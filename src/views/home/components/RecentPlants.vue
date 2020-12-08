<template>
  <div>
     <h2 class="title font-bold text-xl mb-4">
      Plantas recientes:
    </h2>
    <ul class="list flex items-center overflow-x-scroll py-4">
      <!-- Listado de plantas -->
      <li
        v-for="plant in plants"
        :key="plant.id"
        class="plant-item shadow-lg w-32 h-32 rounded-lg mr-5 flex items-center justify-center flex-col cursor-pointer hover:bg-gray-100 "
        @click="goToDetail(plant.id)"
      >
      <!-- src="@/assets/images/botanical.svg" -->
        <img
          class="w-24 h-24 rounded-lg"
          :src="plant.image"
          :alt="plant.name"
        />
        <p class="text-sm capitalize font-semibold">{{ plant.name }}</p>
        <p class="duration"> {{plant.dueDate | moment("D MMMM YYYY")}}</p>
      </li>
    </ul>
  </div>
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
.list {
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .plant-item {
    min-width: 140px;
    max-width: 140px;
    min-height: 140px;
    max-height: 140px;
    @apply bg-orange-200;
  }

  .duration {
    width: fit-content;
    @apply px-4;
    @apply py-1;
    @apply font-medium;
    @apply text-xs;
    @apply text-center;
  }

</style>
