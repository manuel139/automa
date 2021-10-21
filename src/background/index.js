import browser from 'webextension-polyfill';
import { MessageListener } from '@/utils/message';
import workflowState from './workflow-state';
import WorkflowEngine from './workflow-engine';

function getWorkflow(workflowId) {
  return new Promise((resolve) => {
    browser.storage.local.get('workflows').then(({ workflows }) => {
      const workflow = workflows.find(({ id }) => id === workflowId);

      resolve(workflow);
    });
  });
}
async function executeWorkflow(workflow) {
  try {
    const state = await workflowState.get(({ id }) => id === workflow.id);

    if (state.length !== 0) return false;

    const engine = new WorkflowEngine(workflow);

    engine.init();
    engine.on('destroyed', () => {
      console.log('destroyed...');
    });

    return true;
  } catch (error) {
    console.error(error);
    return error;
  }
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
    const runningWorkflow = await workflowState.get(
      (item) => item.state.tabId === tabId
    );

    if (trigger && runningWorkflow.length === 0) {
      const workflow = await getWorkflow(trigger.id);

      executeWorkflow(workflow);
    }
  }
});
browser.alarms.onAlarm.addListener(({ name }) => {
  getWorkflow(name).then((workflow) => {
    if (!workflow) return;
    console.log(workflow, 'alarm');
    executeWorkflow(workflow);
  });
});

browser.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    browser.storage.local.set({
      logs: [],
      workflows: [],
      workflowState: [],
      visitWebTriggers: [],
    });
  }
});

const message = new MessageListener('background');

message.on('workflow:execute', executeWorkflow);

browser.runtime.onMessage.addListener(message.listener());
