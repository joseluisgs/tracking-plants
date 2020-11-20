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
          class="flex justify-center border border-red-main-400 text-3xl w-12 h-12"
          @click="goToAddPlant"
        >
          +
        </button>
      </li>
      <!-- Listado de plantas -->
      <li
        v-for="plant in plants"
        :key="plant.id"
        class="plant-item shadow-lg w-32 h-32 rounded-lg mr-5 flex items-center justify-center flex-col cursor-pointer hover:bg-gray-100"
        @click="clickItem(plant.id)"
      >
      <!-- src="@/assets/images/botanical.svg" -->
        <img
          class="w-24 h-24 rounded-lg"
          :src="plant.image"
          :alt="plant.name"
        />
        <p class="text-sm capitalize font-semibold">{{ plant.name }}</p>
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
  .list {
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .plant-item {
    min-width: 128px;
    max-width: 128px;
    min-height: 128px;
    max-height: 128px;
  }
</style>
