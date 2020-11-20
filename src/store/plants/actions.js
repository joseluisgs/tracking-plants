/* eslint-disable no-unused-vars */
// Como no me gusta llamar a Firebase integrado en el código lo meto asím de hecho, si se cambiase de firebase a otra
// API REST u otro lugar solo cambiaríamos la función
import PlantService from '@/services/FirebaseService/PlantsFirebase';

export default {
  async savePlant({ commit }, payload) {
    const res = await PlantService.post(payload);
  },
};
