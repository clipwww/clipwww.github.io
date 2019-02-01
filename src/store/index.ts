import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import getters from './getters';
import profile from './modules/profile';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    profile,
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters,
});
