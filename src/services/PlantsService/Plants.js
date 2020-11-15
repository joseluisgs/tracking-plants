import PlantsTransformer from '@/transformers/Plants';
import Axios from './index';

const { Service } = Axios;

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
      const response = await Service.get('search', { params });
      // data es donde viene el JSON y los datos de la API vienen en data, por eso data.data. Tranformamos.
      return PlantsTransformer.fetchCollection(response.data.data);
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};
