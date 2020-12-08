<template>
  <section class="relative">
    <div class="h-screen bg-green-400 flex justify-between p-8" v-if="plant">
      <h1 class="text-3xl capitalize font-bold">{{ plant.name }}</h1>
      <img
        v-if="plant.image && plant.image.length"
        class="w-56 rounded-lg h-40 mt-4"
        :src="plant.image"
      />
    </div>
    <div class="detail-body bg-white absolute w-full h-full p-8">
      <div>
        <pre> {{ plant.name }}</pre>
      </div>
    </div>
  </section>
</template>

<script>
import PlantsService from '@/services/PlantsService/PlantsRest';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Detail',

  // Mis propiedades que recibo (en este caso del router al ponerle true)
  props: {
    id: {
      type: [Number, String],
    },
  },
  // Mi modelo de datos
  data: () => ({
    plant: [],
  }),
  // Ciclo de vida
  mounted() {
    this.loadData();
  },
  // Mis métodos computados
  computed: {
    ...mapGetters('plants', ['getCurrentPlant']),
  },
  methods: {
  // Mis métodos
  // De vuex
    ...mapActions('plants', ['getPlant']),
    async loadData() {
      this.plant = this.getCurrentPlant(+this.id); // Nos viene un number
      // Si no tenemos nada, lo recuperamos
      if (!(this.plant && this.plant.length)) {
        this.plant = await this.getPlant(this.id);
      }
      // Si venimos de la Home ya tenemos los datos
      // Recuperamos toda la información
      const myplant = await PlantsService.fetchPlantWithURL(this.plant.id);
      console.log(myplant);
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-body {
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
  top: 200px;
  .text-calendar {
    width: fit-content;
  }
}
</style>
