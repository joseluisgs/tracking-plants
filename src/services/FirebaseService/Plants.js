import Service from '.';

// Operaciones siguiendo la numenclartira REST: post, update, delete, etc.
export default {
  // Crea uno nuevo
  // https://firebase.google.com/docs/firestore/manage-data/add-data?hl=es-419#web
  async post(payload) {
    const res = await Service.plantsCollection.doc(payload.id.toString()).set({
      id: payload.id,
      name: payload.name,
      slug: payload.slug,
      links: payload.links,
      image: payload.image,
      date: Date.now(),
    });
    return res;
  },
};
