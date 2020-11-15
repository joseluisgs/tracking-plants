<template>
  <section>
    <h1 class="font-bold text-2xl">Nueva Planta</h1>
    <form class="mt-8">
      <!-- Recibe el evento llamado input de autocomplete -->
      <Autocomplete
        @input="onChangeAutocomplete"
        :items = "plants"
        @select-item="onSelectItem"
      />
      <div class="flex justify-center mt-8">
        <button class="border rounded py-2 px-6 bg-green-600 text-white font-bold">Guardar</button>
      </div>
    </form>
  </section>
</template>

<script>
import Autocomplete from '@/components/ui/Autocomplete.vue';
import PlantsService from '@/services/PlantsService';

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
      console.log(item);
      // this.autocompleteValue = item.name;
      this.currentPlant = item;
      this.clearItems();
    },
    clearItems() {
      this.plants = [];
    },
  },
};
</script>

<style>

</style>
