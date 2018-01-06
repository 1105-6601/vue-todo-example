import Vue from 'vue';
import Vuex from 'vuex';
// mutation types
import * as MT from '@/mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    [MT.SET_TASKS](state, tasks) {
      state.tasks = tasks;
    },
    [MT.ADD_TASK](state, task) {
      state.tasks.push(task);
    },
    [MT.DELETE_TASK](state, task) {
      const idx = state.tasks.indexOf(task);
      state.tasks.splice(idx, 1);
    },
    [MT.DONE_TASK](state, task) {
      /* eslint-disable no-param-reassign */
      const idx = state.tasks.indexOf(task);
      task.done = !task.done;
      state.tasks.splice(idx, 1, Object.assign({}, task));
    },
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
    doneTasks(state, getters) {
      return getters.allTasks.filter(task => !!task.done);
    },
    incompleteTasks(state, getters) {
      return getters.allTasks.filter(task => !task.done);
    },
  },
});
