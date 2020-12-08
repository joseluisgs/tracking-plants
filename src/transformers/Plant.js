import BaseTransformer from './Base';
import FamilyTransformer from './Family';

// Paara trasformar todos los datos que queremos
export default class PlantTransformer extends BaseTransformer {
  static fetch(plant) {
    return {
      // id: plant.id, // Cuidado que el id no coindice debe ser el de la especie
      id: plant.main_species_id,
      name: plant.common_name,
      slug: plant.slug,
      scientificName: plant.scientific_name,
      image: plant.image_url,
      mainSpecies: plant.main_species,
      familyCommonName: plant.family_common_name,
      links: plant.links,
      genus: plant.genus,
      family: plant.family ? FamilyTransformer.fetch(plant.family) : null,
      species: plant.species,
      subSpecies: plant.subspecies,
      varieties: plant.varieties,
      hybrids: plant.hybrids,
      forms: plant.form,
      subVarieties: plant.subvarieties,
      cultivars: plant.cultivars,
      division: plant.division,
      duration: plant.duration,
      nativeStatus: plant.native_status,
      order: plant.order,
      completeData: plant.complete_data,
    };
  }
}
