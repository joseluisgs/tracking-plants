import Vue from 'vue';
import Vuex from 'vuex';
import plants from './plants/index';
import auth from './auth/index';

Vue.use(Vuex);

// Voy a Dividir Vuex en módulos para modularizar más si quisiera reutilizar una parte
export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    plants,
    auth,
  },
});
