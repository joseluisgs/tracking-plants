import PlantsTransformer from '@/transformers/Plants';

const data = [
  {
    id: 122263,
    common_name: 'Coconut palm',
    slug: 'cocos-nucifera',
    scientific_name: 'Cocos nucifera',
    year: 1753,
    bibliography: 'Sp. Pl.: 1188 (1753)',
    author: 'L.',
    status: 'accepted',
    rank: 'species',
    family_common_name: 'Palm family',
    genus_id: 1916,
    image_url: 'https://bs.floristic.org/image/o/3d907876dd89dcf4880c50fb0786191a1cb95589',
    synonyms: [
      'Calappa nucifera',
      'Cocos nana',
      'Cocos indica',
      'Palma cocos',
      'Cocos mamillaris',
      'Cocos nucifera var. synphyllica',
      'Diplothemium henryanum',
      'Cocos nucifera var. spicata',
    ],
    genus: 'Cocos',
    family: 'Arecaceae',
    links: {
      self: '/api/v1/species/cocos-nucifera',
      plant: '/api/v1/plants/cocos-nucifera',
      genus: '/api/v1/genus/cocos',
    },
  },
  {
    id: 1236651,
    common_name: 'Coco-plum',
    slug: 'chrysobalanus-icaco',
    scientific_name: 'Chrysobalanus icaco',
    year: 1753,
    bibliography: 'Sp. Pl.: 513 (1753)',
    author: 'L.',
    status: 'accepted',
    rank: 'species',
    family_common_name: null,
    genus_id: 1751,
    image_url: 'https://bs.floristic.org/image/o/4f4ae9459c75e87a4fbf7ef82af2c36f46ed0df8',
    synonyms: [
      'Chrysobalanus pellocarpus',
      'Chrysobalanus icaco var. pellocarpus',
      'Chrysobalanus guianensis',
      'Chrysobalanus icaco subsp. pellocarpus',
      'Chrysobalanus luteus',
      'Chrysobalanus purpureus',
      'Chrysobalanus icaco f. albus',
      'Chrysobalanus icaco subsp. ellipticus',
      'Chrysobalanus icaco subsp. orbicularis',
      'Chrysobalanus icaco var. ellipticus',
      'Chrysobalanus icaco var. macrocarpus',
      'Chrysobalanus icaco var. roseus',
      'Chrysobalanus orbicularis',
      'Chrysobalanus ellipticus',
      'Chrysobalanus interior',
      'Chrysobalanus icaco var. luteus',
      'Chrysobalanus savannarum',
      'Chrysobalanus stuhlmannii',
    ],
    genus: 'Chrysobalanus',
    family: 'Chrysobalanaceae',
    links: {
      self: '/api/v1/species/chrysobalanus-icaco',
      plant: '/api/v1/plants/chrysobalanus-icaco',
      genus: '/api/v1/genus/chrysobalanus',
    },
  },
];

export default {
  // Buscamos una planta
  // eslint-disable-next-line no-unused-vars
  async findPlant(name) {
    try {
      // data es donde viene el JSON y los datos de la API vienen en data, por eso data.data. Tranformamos.
      // Nos quedamos con los 10 primeros
      return PlantsTransformer.fetchCollection(data.slice(0, 9));
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};
