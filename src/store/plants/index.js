import actions from './actions';
import mutations from './mutations';
import state from './state';
import getters from './getters';

export default {
  namespaced: true,
  actions, // Métodos asícronos
  mutations, // Métodos que tocan el estado
  state, // Datos centralizados o globales
  getters, // Getters computados sobre el store
};
