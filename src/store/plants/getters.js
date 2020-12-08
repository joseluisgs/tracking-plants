// Getters nos sirven para obetner datos del nuestro Vuex de una manera distinta a la que están
// Es decir, es como una propiedad computada que actua sobre elementos del estado de Vuex
// En este caso devolvemos el id de la planta pasada por el id
export default {
  getCurrentPlant(state) {
    return (plantId) => state.plants.find((plant) => plant.id === plantId);
  },
};
