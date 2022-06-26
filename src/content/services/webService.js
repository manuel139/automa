import { openDB } from 'idb';
import { nanoid } from 'nanoid';
import browser from 'webextension-polyfill';
import cloneDeep from 'lodash.clonedeep';
import { objectHasKey } from '@/utils/helper';
import { sendMessage } from '@/utils/message';

function initWebListener() {
  const listeners = {};

  function on(name, callback) {
    (listeners[name] = listeners[name] || []).push(callback);
  }

  window.addEventListener('__automa-ext__', ({ detail }) => {
    if (!detail || !objectHasKey(listeners, detail.type)) return;

    listeners[detail.type].forEach((listener) => {
      listener(detail.data);
    });
  });

  return { on };
}

(async () => {
  try {
    document.body.setAttribute(
      'data-atm-ext-installed',
      browser.runtime.getManifest().version
    );

    const { workflows } = await browser.storage.local.get('workflows');
    const db = await openDB('automa', 1, {
      upgrade(event) {
        event.createObjectStore('store');
      },
    });

    await db.put('store', workflows, 'workflows');

    const webListener = initWebListener();
    webListener.on('open-workflow', ({ workflowId }) => {
      if (!workflowId) return;

      sendMessage('open:dashboard', `/workflows/${workflowId}`, 'background');
    });
    webListener.on('add-workflow', async ({ workflow }) => {
      try {
        const { workflows: workflowsStorage } = await browser.storage.local.get(
          'workflows'
        );
        const copyWorkflow = cloneDeep(workflow);

        copyWorkflow.table = copyWorkflow.table || copyWorkflow.dataColumns;
        copyWorkflow.dataColumns = [];

        const workflowId = nanoid();

        if (Array.isArray(workflowsStorage)) {
          workflowsStorage.push({
            ...copyWorkflow,
            id: workflowId,
            createdAt: Date.now(),
          });
        } else {
          workflowsStorage[workflowId] = {
            ...copyWorkflow,
            id: workflowId,
            createdAt: Date.now(),
          };
        }

        await browser.storage.local.set({ workflows: workflowsStorage });
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
})();
