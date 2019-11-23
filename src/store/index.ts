import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import getters from './getters';
import profile from './modules/profile';
import work from './modules/work';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    profile,
    work,
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters,
});
