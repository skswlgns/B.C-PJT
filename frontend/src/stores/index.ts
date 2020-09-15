import Vue from 'vue';
import Vuex from 'vuex';
import CountStore from './CountStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    CountStore,
  },
});