import PlantsTransformer from '@/transformers/Plants';
import PlantTransformer from '@/transformers/Plant';
import http from './index';

const { Service } = http;

export default {
  // Buscamos una planta
  async findPlant(name) {
    const params = {
      // token: Config.API_TOKEN,
      q: name,
      complete_data: true,
      page_size: 10,
      'filter_not[common_name]': 'null',
    };
    try {
      const res = await Service.get('search', { params });
      // data es donde viene el JSON y los datos de la API vienen en data, por eso data.data. Tranformamos.
      // Nos quedamos con los 10 primeros
      return PlantsTransformer.fetchCollection(res.data.data.slice(0, 9));
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  async fetchPlantWithURL(id) {
    try {
      const res = await Service.get(`${id}`);
      // Los trasformamos
      return PlantTransformer.fetch(res.data.data);
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};
