import Vue from 'vue';
import Vuex from 'vuex';
import plants from './plants';

Vue.use(Vuex);

// Voy a Dividir Vuex en módulos para modeularizar más si quisiera reutilizar una parte
export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    plants,
  },
});
