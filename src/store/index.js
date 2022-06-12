import { createStore } from 'vuex';
import objectPath from 'object-path';
import browser from 'webextension-polyfill';
import vuexORM from '@/lib/vuexOrm';
import defu from 'defu';
import * as models from '@/models';
import { firstWorkflows } from '@/utils/shared';
import { fetchApi } from '@/utils/api';
import { findTriggerBlock, parseJSON } from '@/utils/helper';
import { registerWorkflowTrigger } from '@/utils/workflowTrigger';

const store = createStore({
  plugins: [vuexORM(models)],
  state: () => ({
    user: null,
    workflowState: [
      {
        id: '7F9HCTQXKMSDGlm_q_dVW',
        state: {
          activeTabUrl: '',
          childWorkflowId: null,
          tabIds: [null],
          currentBlock: [
            {
              id: '1fb2464c-b94d-48f0-b40a-2903f2592428',
              name: 'delay',
              startedAt: 1655001148198,
            },
          ],
          name: 'Child',
          logs: [
            {
              type: 'success',
              name: 'trigger',
              blockId: '1991a5a0-a499-4c70-9040-03b37123b5df',
              workerId: 'worker-1',
              description: '',
              duration: 1,
              id: 1,
            },
          ],
          startedTimestamp: 1655001148195,
        },
        workflowId: 'lPKjzF5cUfzckN3KgCdmX',
      },
    ],
    backupIds: [],
    contributors: null,
    hostWorkflows: {},
    sharedWorkflows: {},
    workflowHosts: {},
    copiedNodes: [],
    settings: {
      locale: 'en',
      deleteLogAfter: 30,
      editor: {
        arrow: false,
        disableCurvature: false,
        curvature: 0.5,
        reroute_curvature: 0.5,
        reroute_curvature_start_end: 0.5,
      },
    },
    userDataRetrieved: false,
  }),
  mutations: {
    updateState(state, { key, value }) {
      state[key] = value;
    },
    updateStateNested(state, { path, value }) {
      objectPath.set(state, path, value);
    },
    deleteStateNested(state, path) {
      objectPath.del(state, path);
    },
  },
  getters: {
    getWorkflowState: (state) => (id) =>
      (state.workflowState || []).filter(
        ({ workflowId, isInCollection }) => workflowId === id && !isInCollection
      ),
  },
  actions: {
    async retrieve({ dispatch, getters, commit, state }, keys = 'workflows') {
      try {
        const data = await browser.storage.local.get(keys);
        const promises = Object.keys(data).map((entity) => {
          const entityData = getters[`entities/${entity}/all`]();

          if (entityData.length > 0) return entityData;

          return dispatch('entities/create', {
            entity,
            data: data[entity],
          });
        });

        const { isFirstTime, settings, workflowHosts } =
          await browser.storage.local.get([
            'isFirstTime',
            'settings',
            'workflowHosts',
          ]);

        commit('updateState', {
          key: 'settings',
          value: defu(settings || {}, state.settings),
        });
        commit('updateState', {
          key: 'workflowHosts',
          value: workflowHosts || {},
        });

        if (isFirstTime) {
          await dispatch('entities/insert', {
            entity: 'workflows',
            data: firstWorkflows,
          });
          await browser.storage.local.set({
            isFirstTime: false,
          });
          await dispatch('saveToStorage', 'workflows');
        }

        return await Promise.allSettled(promises);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    retrieveWorkflowState({ commit }) {
      const storedStates = localStorage.getItem('workflowState') || '{}';
      const states = parseJSON(storedStates, {});

      commit('updateState', {
        key: 'workflowState',
        value: Object.values(states).filter(
          ({ isDestroyed, parentState }) =>
            !isDestroyed && !parentState?.isCollection
        ),
      });
    },
    saveToStorage({ getters }, key) {
      return new Promise((resolve, reject) => {
        if (!key) {
          reject(new Error('You need to pass the entity name'));
          return;
        }
        const data = getters[`entities/${key}/all`]();

        browser.storage.local
          .set({ [key]: JSON.parse(JSON.stringify(data)) })
          .then(() => {
            resolve();
          });
      });
    },
    async fetchWorkflowHosts({ commit, state }, hosts) {
      if (!hosts || hosts.length === 0) return null;

      const response = await fetchApi('/workflows/hosted', {
        method: 'POST',
        body: JSON.stringify({ hosts }),
      });

      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      const newValue = JSON.parse(JSON.stringify(state.workflowHosts));

      result.forEach(({ hostId, status, data }) => {
        if (status === 'deleted') {
          delete newValue[hostId];
          return;
        }
        if (status === 'updated') {
          const triggerBlock = findTriggerBlock(data.drawflow);
          registerWorkflowTrigger(hostId, triggerBlock);

          data.drawflow = JSON.stringify(data.drawflow);
        }

        data.hostId = hostId;
        newValue[hostId] = data;
      });

      commit('updateState', {
        key: 'workflowHosts',
        value: newValue,
      });
      await browser.storage.local.set({
        workflowHosts: newValue,
      });

      return newValue;
    },
  },
});

export default store;
