<template>
  <section>
    <h1 class="font-bold text-2xl">Nueva Planta</h1>
    <form class="mt-8">
      <!-- Recibe el evento llamado input de autocomplete -->
      <Autocomplete
        @input="onChangeAutocomplete"
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
  // Mis métodos
  methods: {
    async onChangeAutocomplete(value) {
      // Llamamos a la api
      console.log(value);
      const data = await PlantsService.findPlant(value);
      console.log(data.data);
    },
  },
};
</script>

<style>

</style>
