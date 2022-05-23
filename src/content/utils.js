export function getElementRect(target, withAttributes) {
  if (!target) return {};

  const { x, y, height, width } = target.getBoundingClientRect();
  const result = {
    width: width + 4,
    height: height + 4,
    x: x - 2,
    y: y - 2,
  };

  if (withAttributes) {
    const attributes = {};

    Array.from(target.attributes).forEach(({ name, value }) => {
      if (name === 'automa-el-list') return;

      attributes[name] = value;
    });

    result.attributes = attributes;
    result.tagName = target.tagName;
  }

  return result;
}

export function getElementPath(el, root = document.documentElement) {
  const path = [el];

  /* eslint-disable-next-line */
  while ((el = el.parentNode) && !el.isEqualNode(root)) {
    path.push(el);
  }

  return path;
}

export function generateXPath(element, root = document.body) {
  if (!element) return null;
  if (element.id !== '') return `id("${element.id}")`;
  if (element === root) return `//${element.tagName}`;

  let ix = 0;
  const siblings = element.parentNode.childNodes;

  for (let index = 0; index < siblings.length; index += 1) {
    const sibling = siblings[index];

    if (sibling === element) {
      return `${generateXPath(element.parentNode)}/${element.tagName}[${
        ix + 1
      }]`;
    }

    if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
      ix += 1;
    }
  }

  return null;
}

export function automaRefDataStr(varName) {
  return `
function findData(obj, path) {
  const paths = path.split('.');
  const isWhitespace = paths.length === 1 && !/\\S/.test(paths[0]);

  if (path.startsWith('$last') && Array.isArray(obj)) {
    paths[0] = obj.length - 1;
  }

  if (paths.length === 0 || isWhitespace) return obj;
  else if (paths.length === 1) return obj[paths[0]];

  let result = obj;

  for (let i = 0; i < paths.length; i++) {
    if (result[paths[i]] == undefined) {
      return undefined;
    } else {
      result = result[paths[i]];
    }
  }

  return result;
}
function automaRefData(keyword, path = '') {
  const data = ${varName}[keyword];

  if (!data) return;

  return findData(data, path);
}
  `;
}

function messageTopFrame(windowCtx) {
  return new Promise((resolve) => {
    let timeout = null;
    let isResolved = false;

    const messageListener = ({ data }) => {
      if (data.type !== 'automa:the-frame-rect' || isResolved) return;

      clearTimeout(timeout);
      isResolved = true;
      windowCtx.removeEventListener('message', messageListener);
      resolve(data.frameRect);
    };

    timeout = setTimeout(() => {
      if (isResolved) return;

      isResolved = true;
      windowCtx.removeEventListener('message', messageListener);
      resolve(null);
    }, 5000);

    windowCtx.addEventListener('message', messageListener);
    windowCtx.top.postMessage('automa:get-frame', '*');
  });
}
export async function getElementPosition(element) {
  const elWindow = element.ownerDocument.defaultView;
  const isInFrame = elWindow !== window.top;
  const { width, height, x, y } = element.getBoundingClientRect();
  const position = {
    x: x + width / 2,
    y: y + height / 2,
  };

  if (!isInFrame) return position;

  try {
    const frameEl = elWindow.frameElement;
    let frameRect = null;

    if (frameEl) {
      frameRect = frameEl.getBoundingClientRect();
    } else {
      frameRect = await messageTopFrame(elWindow);

      if (!frameRect) throw new Error('Iframe not found');
    }

    position.x += frameRect.x;
    position.y += frameRect.y;

    return position;
  } catch (error) {
    console.error(error);
    return position;
  }
}
