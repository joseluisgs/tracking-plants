import BaseTransformer from './Base';
// Transformamos los datos quedándonos con los datos que queramos
class PlantsTransformer extends BaseTransformer {
  static fetch(plant) {
    return {
      id: plant.id,
      name: plant.common_name,
      slug: plant.slug,
      scientificName: plant.scientific_name,
      links: plant.links,
      image: plant.image_url,
    };
  }
}

export default PlantsTransformer;
