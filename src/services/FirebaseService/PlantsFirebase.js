import Service from '.';

// Operaciones siguiendo la numenclartira REST: post, update, delete, etc.
export default {
  // Crea uno nuevo con los datos que queramos
  // https://firebase.google.com/docs/firestore/manage-data/add-data?hl=es-419#web
  async post(payload) {
    const res = await Service.plantsCollection.doc(payload.id.toString()).set({
      id: payload.id,
      name: payload.name,
      slug: payload.slug,
      links: payload.links,
      image: payload.image,
      dueDate: payload.dueDate,
    });
    return res;
  },
  // Get all
  async get() {
    // Obtenemos todos
    const res = await Service.plantsCollection.get();
    // Y de todos los datos nos quedamos con el data almacenado en el documento
    return res.docs.map((item) => item.data());
  },
  // Get by ID
  async getById(plantId) {
    const res = await Service.plantsCollection.doc(plantId.toString()).get();
    // Devolvemos los datos
    return res.data();
  },

  // Update
  async update(plantId, plantData) {
    const res = await Service.plantsCollection.doc(plantId.toString()).update(plantData);
    return res;
  },
  // Obtiene las plantas recientes
  async getRecentPlants() {
    // Filtramos por día y obtenemos las dos mas recientes
    const res = await Service.plantsCollection
      .where('dueDate', '<=', new Date().toISOString())
      .orderBy('dueDate', 'desc')
      .limit(2)
      .get();
    // Y de todos los datos nos quedamos con el data almacenado en el documento
    return res.docs.map((item) => item.data());
  },
};
