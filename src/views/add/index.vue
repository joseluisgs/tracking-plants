<template>
  <section class="mt-20">
    <div class="flex justify-center">
      <!-- Por si quiero cambiar la imagen -->
      <img v-if="plantImage"
        :src= "plantImage"
        alt="Cactus"
        class="w-48 h-64"
      />
      <img v-else
        src= "@/assets/images/botanical.svg"
        alt="Cactus"
        class="w-48 h-64"
      />
    </div>
    <h1 class="font-bold text-2xl text-center mt-2">Nueva Planta</h1>
    <form class="mt-8" @submit.prevent="onSubmit">
      <!-- Recibe el evento llamado input de autocomplete
      Componente personalizado -->
      <Autocomplete
        @input="onChangeAutocomplete"
        :items="plants"
        @select-item="onSelectItem"
      />
      <div class="flex justify-center mt-8">
        <!-- Cambio a componentes personalizado -->
        <TheButton>Guardar</TheButton>
      </div>
    </form>
  </section>
</template>

<script>
import Autocomplete from '@/components/ui/Autocomplete.vue';
import TheButton from '@/components/ui/TheButton.vue';
import PlantsService from '@/services/PlantsService/Plants';
import { mapActions } from 'vuex';

export default {
  name: 'AddView',
  components: {
    Autocomplete,
    TheButton,
  },
  // Mi modelo
  data: () => ({
    plants: null,
    currentPlant: null,
    plantImage: null,
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
      // this.plantImage = this.currentPlant.image;
      this.clearItems();
    },
    clearItems() {
      this.plants = [];
    },
    onSubmit() {
      this.savePlant(this.currentPlant);
      console.log(`Planta ${this.currentPlant.name} salvado :)`);
      this.currentPlant = null;
      // this.plantImage = null;
      this.plants = [];
    },
  },
};
</script>

<style>
</style>
