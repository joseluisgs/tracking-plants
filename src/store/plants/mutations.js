// Las mutaciones siempre modifican el estado el estado
export default {
  // Almancena en vuex el estado
  setPlants(state, payload) {
    state.plants = payload;
  },
};
