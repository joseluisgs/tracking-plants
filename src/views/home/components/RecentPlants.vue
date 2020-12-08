<template>
  <section class="flex justify-around mb-8">
    <div
      v-for="(plant, index) in plants"
      :key="plant.id"
      :class="`plant-${index}`"
      class="plant"
      @click="goToDetail(plant.id)"
    >
      <div class="image-wrapper">
        <!-- <img :src="getImageUrl(images[index])" alt="Imagen de la planta" /> -->
         <img
          :src="plant.image"
          :alt="plant.name"
        />
      </div>
      <span class="mt-4 block capitalize font-semibold">{{ plant.name }}</span>
      <span class="duration">{{ plant.duration }}</span>
    </div>
  </section>
</template>

<script>

export default {
  name: 'RecentPlants',
  props: {
    plants: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    images: ['aloevera.png', 'cactus.png'],
  }),
  methods: {
    // Vamos al detalle de la planta
    goToDetail(plantId) {
      // Vamos a llamar a detalle
      this.$router.push({ name: 'PlantDetail', params: { id: plantId } });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
