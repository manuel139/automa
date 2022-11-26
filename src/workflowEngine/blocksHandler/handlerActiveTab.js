import browser from 'webextension-polyfill';
import { sleep } from '@/utils/helper';
import { attachDebugger, injectPreloadScript } from '../helper';

async function activeTab(block) {
  try {
    const data = {
      data: '',
      nextBlockId: this.getBlockConnections(block.id),
    };

    if (this.activeTab.id) {
      await browser.tabs.update(this.activeTab.id, { active: true });

      return data;
    }

    const tabsQuery = {
      active: true,
      url: '*://*/*',
    };

    if (BROWSER_TYPE === 'firefox') {
      tabsQuery.currentWindow = true;
    } else if (this.engine.isPopup) {
      let windowId = null;
      const extURL = browser.runtime.getURL('');
      const windows = await browser.windows.getAll({ populate: true });
      for (const browserWindow of windows) {
        const [tab] = browserWindow.tabs;
        const isDashboard =
          browserWindow.tabs.length === 1 && tab.url?.includes(extURL);

        if (isDashboard) {
          await browser.windows.update(browserWindow.id, {
            focused: false,
            state: 'minimized',
          });
        } else if (browserWindow.focused) {
          windowId = browserWindow.id;
        }
      }

      if (windowId) tabsQuery.windowId = windowId;
      else if (windows.length > 2) tabsQuery.lastFocusedWindow = true;
    } else {
      tabsQuery.currentWindow = true;
    }

    const [tab] = await browser.tabs.query(tabsQuery);
    if (!tab) {
      throw new Error("Can't find active tab");
    }
    if (!tab || !tab?.url.startsWith('http')) {
      const error = new Error('invalid-active-tab');
      error.data = { url: tab?.url };

      throw error;
    }

    this.activeTab = {
      ...this.activeTab,
      frameId: 0,
      id: tab.id,
      url: tab.url,
    };
    this.windowId = tab.windowId;

    if (this.settings.debugMode) {
      await attachDebugger(tab.id, this.activeTab.id);
      this.debugAttached = true;
    }

    if (this.preloadScripts.length > 0) {
      if (this.engine.isMV2) {
        await this._sendMessageToTab({
          isPreloadScripts: true,
          label: 'javascript-code',
          data: { scripts: this.preloadScripts },
        });
      } else {
        await injectPreloadScript({
          scripts: this.preloadScripts,
          frameSelector: this.frameSelector,
          target: {
            tabId: this.activeTab.id,
            frameIds: [this.activeTab.frameId || 0],
          },
        });
      }
    }

    await browser.tabs.update(tab.id, { active: true });
    await browser.windows.update(tab.windowId, { focused: true });

    await sleep(200);

    return data;
  } catch (error) {
    console.error(error);
    error.data = error.data || {};

    throw error;
  }
}

export default activeTab;
