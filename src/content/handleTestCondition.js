import { nanoid } from 'nanoid';
import FindElement from '@/utils/FindElement';
import { automaRefDataStr } from './utils';

function handleConditionElement({ data, type }) {
  const selectorType = data.selector.startsWith('/') ? 'xpath' : 'cssSelector';

  const element = FindElement[selectorType](data);
  const { 1: actionType } = type.split('#');

  if (!element) {
    if (actionType === 'visible' || actionType === 'invisible') return false;

    return null;
  }

  const elementActions = {
    text: () => element.innerText,
    visible: () => {
      const { visibility, display } = getComputedStyle(element);

      return visibility !== 'hidden' && display !== 'none';
    },
    invisible: () => {
      const { visibility, display } = getComputedStyle(element);

      return visibility === 'hidden' || display === 'none';
    },
    attribute: ({ attrName }) => {
      if (!element.hasAttribute(attrName)) return null;

      return element.getAttribute(attrName);
    },
  };

  return elementActions[actionType](data);
}
function injectJsCode({ data, refData }) {
  return new Promise((resolve, reject) => {
    const stateId = nanoid();

    sessionStorage.setItem(`automa--${stateId}`, JSON.stringify(refData));

    const scriptEl = document.createElement('script');
    scriptEl.textContent = `
      (async () => {
        ${automaRefDataStr(stateId)}
        try {
          ${data.code}
        } catch (error) {
          return {
            $isError: true,
            message: error.message,
          }
        }
      })()
        .then((detail) => {
          window.dispatchEvent(new CustomEvent('__automa-condition-code__', { detail }));
        });
    `;

    document.body.appendChild(scriptEl);

    const handleAutomaEvent = ({ detail }) => {
      scriptEl.remove();
      window.removeEventListener(
        '__automa-condition-code__',
        handleAutomaEvent
      );

      if (detail.$isError) {
        reject(new Error(detail.message));
        return;
      }

      resolve(detail);
    };

    window.addEventListener('__automa-condition-code__', handleAutomaEvent);
  });
}

export default async function (data) {
  let result = null;

  if (data.type.startsWith('element')) {
    result = await handleConditionElement(data);
  }
  if (data.type === 'code') {
    result = await injectJsCode(data);
  }

  return result;
}
