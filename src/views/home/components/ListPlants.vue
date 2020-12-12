<template>
  <div>
     <h1 class="title font-bold text-xl mb-4">
      Mis plantas:
    </h1>
    <ul class="list flex items-center overflow-x-scroll py-4">
      <li class="mr-5">
         <!-- data-test-id Esta clase solo nos sirve para detectar el botón en el test -->
        <button
          data-test-id="add-button"
          class="add-button"
          @click="goToAddPlant"
        >
          +
        </button>
      </li>
      <!-- Listado de plantas -->
      <li
        v-for="plant in plants"
        :key="plant.id"
        class="plant-item hover:bg-gray-100;"
        @click="clickItem(plant.id)"
        data-test="list-plants-item"
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
  name: 'ListPlants',
  // Mis propiedades
  props: {
    plants: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    goToAddPlant() {
      // navegamos a...
      this.$router.push({ name: 'AddPlant' });
    },
    clickItem(plantId) {
      this.$emit('item-clicked', plantId);
    },
  },
};
</script>

<style lang="scss" scoped>
  // Para evitar que salga el scroll
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
    @apply shadow-lg;
    @apply w-32;
    @apply h-32;
    @apply rounded-lg;
    @apply mr-5;
    @apply flex;
    @apply items-center;
    @apply justify-center;
    @apply flex-col;
    @apply cursor-pointer;
    @apply bg-green-200;
  }
  .duration {
    width: fit-content;
    @apply px-4;
    @apply py-1;
    @apply font-medium;
    @apply text-xs;
    @apply text-center;
  }
  .add-button {
    border-radius: 16px;
    line-height: unset;
    @apply flex;
    @apply justify-center;
    @apply border;
    @apply text-3xl;
    @apply w-12;
    @apply h-12;
    @apply bg-green-500
}
</style>
