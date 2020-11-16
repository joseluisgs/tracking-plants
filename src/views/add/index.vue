<template>
  <section class="mt-24">
    <div class="flex justify-center">
      <img
        src="@/assets/images/botanical.svg"
        alt="Cactus"
        class="w-48"
      />
    </div>
    <h1 class="font-bold text-2xl text-center mt-2">Nueva Planta</h1>
    <form class="mt-8" @submit.prevent="onSubmit">
      <!-- Recibe el evento llamado input de autocomplete -->
      <Autocomplete
        @input="onChangeAutocomplete"
        :items="plants"
        @select-item="onSelectItem"
      />
      <div class="flex justify-center mt-8">
        <button
          class="border rounded py-2 px-6 bg-green-600 text-white font-bold"
          type="submit"
        >
          Guardar
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import Autocomplete from '@/components/ui/Autocomplete.vue';
import PlantsService from '@/services/PlantsService/Plants';
import { mapActions } from 'vuex';

export default {
  name: 'AddView',
  components: {
    Autocomplete,
  },
  // Mi modelo
  data: () => ({
    plants: null,
    currentPlant: null,
    // autocompleteValue: null,
  }),
  // Mis métodos
  methods: {
    // Acciones de Vuex
    ...mapActions({
      savePlant: 'plants/savePlant',
    }),
    async onChangeAutocomplete(value) {
      // Llamamos a la api
      if (value.length >= 3) {
        this.plants = await PlantsService.findPlant(value);
        // console.log(this.plants);
        return;
      }
      this.clearItems();
    },
    onSelectItem(item) {
      // console.log(item);
      // this.autocompleteValue = item.name;
      this.currentPlant = item;
      this.clearItems();
    },
    clearItems() {
      this.plants = [];
    },
    onSubmit() {
      this.savePlant(this.currentPlant);
      console.log(`Planta ${this.currentPlant.name} salvado :)`);
    },
  },
};
</script>

<style>
</style>
