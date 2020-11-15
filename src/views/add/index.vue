<template>
  <section>
    <h1 class="font-bold text-2xl">Nueva Planta</h1>
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
import PlantsService from '@/services/PlantsService';
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
      console.log(`Elemento: ${this.currentPlant.name}`);
      this.savePlant(this.currentPlant);
    },
  },
};
</script>

<style>
</style>
