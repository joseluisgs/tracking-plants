/* eslint-disable no-unused-vars */
// Como no me gusta llamar a Firebase integrado en el código lo meto asím de hecho, si se cambiase de firebase a otra
// API REST u otro lugar solo cambiaríamos la función
import PlantService from '@/services/FirebaseService/PlantsFirebase';

// Las acciones son asincronas y llaman a mutaciones siv van a tocar el estado
export default {
  // Salvamos una planta
  async savePlant(_, payload) {
    return PlantService.post(payload);
  },

  // Listamos las plantas, commit porque llamamos a una mutación para actualizat el estado
  async listPlants({ commit }) {
    const res = await PlantService.get();
    // Llamamos a la mutación, que salva las plantas
    commit('setPlants', res);
    return res;
  },

  // Obtenemos una planta
  async getPlant(_, plantId) {
    return PlantService.getById(plantId);
  },

  // Actualizamos la planta
  async updatePlant({ dispatch }, plantData) {
    const { id, data } = plantData;
    const waterPlant = [...data];
    const res = await PlantService.update(id, { waterPlant });
    // Disparamos listarPlantas
    dispatch('listPlants');
  },
  // Get Recent Plants
  async listRecentPlants() {
    return PlantService.getRecentPlants();
  },
};
