/* eslint-disable no-unused-vars */
// &filter[common_name]=beach%20strawberry

import Axios from 'axios';
import PlantsTransformer from '@/transformers/Plants';
import Config from './PlantsServiceConfig';

// const URL_BASE = `https://trefle.io/api/v1/plants?token=${TOKEN}`;
const API_BASE_URL = 'https://trefle.io/api/v1/plants/';

// Creamos la instancia
const Service = Axios.create({
  baseURL: API_BASE_URL,
});

// configuramos el servicio
Service.defaults.headers.common.Accept = 'application/json';
Service.defaults.headers.common['Content-Type'] = 'application/json';
Service.defaults.headers.common.Authorization = `Bearer ${Config.API_TOKEN}`;

export default {
  // Buscamos una planta
  async findPlant(name) {
    const params = {
      // token: Config.API_TOKEN,
      q: name,
      complete_data: true,
      page_size: 10,
    };
    try {
      const response = await Service.get(`${API_BASE_URL}search`, { params });
      // data es donde viene el JSON y los datos de la API vienen en data, por eso data.data. Tranformamos.
      return PlantsTransformer.fetchCollection(response.data.data);
    } catch (error) {
      console.error(error);
      return null;
    }
  },

};
