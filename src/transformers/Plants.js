import BaseTransformer from './Base';

class PlantsTransformer extends BaseTransformer {
  static fetch(plant) {
    return {
      name: plant.common_name,
      completeData: plant.complete_data,
      id: plant.id,
      link: plant.link,
      scientificName: plant.scientific_name,
      slug: plant.slug,
    };
  }
}

export default PlantsTransformer;
