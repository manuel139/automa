import browser from 'webextension-polyfill';
import { MessageListener } from '@/utils/message';
import workflowState from './workflow-state';
import WorkflowEngine from './workflow-engine';
import CollectionEngine from './collection-engine';

function getWorkflow(workflowId) {
  return new Promise((resolve) => {
    browser.storage.local.get('workflows').then(({ workflows }) => {
      const workflow = workflows.find(({ id }) => id === workflowId);

      resolve(workflow);
    });
  });
}

const runningWorkflows = {};
const runningCollections = {};

async function executeWorkflow(workflow, tabId) {
  try {
    const engine = new WorkflowEngine(workflow, { tabId });

    runningWorkflows[engine.id] = engine;

    engine.init();
    engine.on('destroyed', ({ id }) => {
      delete runningWorkflows[id];
    });

    return true;
  } catch (error) {
    console.error(error);
    return error;
  }
}
function executeCollection(collection) {
  const engine = new CollectionEngine(collection);

  runningCollections[engine.id] = engine;

  engine.init();
  engine.on('destroyed', (id) => {
    delete runningWorkflows[id];
  });

  return true;
}

browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    const { visitWebTriggers } = await browser.storage.local.get(
      'visitWebTriggers'
    );
    const trigger = visitWebTriggers.find(({ url, isRegex }) => {
      if (url.trim() === '') return false;

      return tab.url.match(isRegex ? new RegExp(url, 'g') : url);
    });
    const state = await workflowState.get((item) => item.state.tabId === tabId);

    if (trigger && state.length === 0) {
      const workflow = await getWorkflow(trigger.id);

      if (workflow) executeWorkflow(workflow, tabId);
    }
  }
});
browser.alarms.onAlarm.addListener(({ name }) => {
  getWorkflow(name).then((workflow) => {
    if (!workflow) return;

    executeWorkflow(workflow);
  });
});

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    browser.storage.local
      .set({
        logs: [],
        shortcuts: {},
        workflows: [],
        collections: [],
        workflowState: [],
        isFirstTime: true,
        visitWebTriggers: [],
      })
      .then(() => {
        browser.tabs
          .create({
            active: true,
            url: browser.runtime.getURL('newtab.html#/workflows'),
          })
          .catch((error) => {
            console.error(error);
          });
      });
  }
});
console.log(browser.tabs);
const message = new MessageListener('background');

message.on('get:sender', (_, sender) => {
  return sender;
});

message.on('collection:execute', executeCollection);
message.on('collection:stop', (id) => {
  const collection = runningCollections[id];
  if (!collection) {
    workflowState.delete(id);
    return;
  }

  collection.stop();
});

message.on('workflow:execute', (workflow) => executeWorkflow(workflow));
message.on('workflow:stop', (id) => {
  const workflow = runningWorkflows[id];

  if (!workflow) {
    workflowState.delete(id);
    return;
  }

  workflow.stop();
});

browser.runtime.onMessage.addListener(message.listener());
