<template>
  <div>
    <h1 class="title font-bold text-xl mb-4">Mis Plantas</h1>
    <ul>
      <li>
         <!-- data-test-id Esta clase solo nos sirve para detectar el botón en el test -->
        <button
          data-test-id="add-button"
          class="border border-black rounded-full py-1 px-3 text-3xl"
          @click="goToAddPlant"
        >
          +
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListPlants',
  methods: {
    goToAddPlant() {
      // navegamos a...
      this.$router.push({ name: 'AddPlant' });
    },
  },
};
</script>
<style>
</style>
