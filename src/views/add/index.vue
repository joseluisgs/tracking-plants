<template>
  <section class="mt-20 custom-container">
    <div class="flex justify-center">
      <img
        src= "@/assets/images/botanical.svg"
        alt="Cactus"
        class="w-48 h-64"
      />
    </div>
    <h1 class="font-bold text-2xl text-center mt-2">Nueva Planta</h1>
    <AddPlantForm
      :plants="plants"
      @submit-form="onSubmit"
      @find-plant="findPlant"
      @clear-items="clearItems"
    />
  </section>
</template>

<script>
import PlantsService from '@/services/PlantsService/Plants';
import { mapActions } from 'vuex';
import AddPlantForm from './components/AddPlantForm.vue';

export default {
  name: 'AddView',
  // Mis componentes
  components: {
    AddPlantForm,
  },
  // Mi modelo
  data: () => ({
    plants: null,
  }),
  // Mis métodos
  methods: {
    // Acciones de Vuex
    ...mapActions({
      savePlant: 'plants/savePlant',
    }),
    async findPlant(value) {
      // Llamamos a la api
      this.plants = await PlantsService.findPlant(value);
    },
    clearItems() {
      this.plants = [];
    },
    async onSubmit(currentPlant) {
      await this.savePlant(currentPlant);
      console.log(`Planta ${currentPlant.name} salvado :)`);
      this.clearItems();
    },
  },
};
</script>

<style>
</style>
