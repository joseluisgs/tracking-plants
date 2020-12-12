<template>
  <section class="relative">
    <div class="h-screen bg-green-400 flex justify-between p-4" v-if="plant">
      <h1 class="text-3xl capitalize font-bold mt-3">{{ plant.name }}</h1>
      <img
        v-if="plant.image && plant.image.length"
        class="w-42 rounded-lg h-40 mt-4 ml-2"
        :src="plant.image"
      />
    </div>
    <div class="detail-body bg-white absolute w-full h-full p-8">
      <!-- <div>
        <pre v-if="plant"> {{ plant.name }} </pre>
      </div> -->
      <div>
        <p class="font-bold">¿Has regado tu planta hoy?</p>
        <ToggleButton
          v-model="isWaterPlant"
          :sync="true"
          :labels="{ checked: 'SI', unchecked: 'NO' }"
          @change="onChangeToggleButton"
        />
      </div>
      <div class="mt-6">
        <span
          @click="toggleCalendar"
          class="text-calendar block text-lg cursor-pointer font-bold hover:underline mb-3 text-blue-600"
          >Ver calendario de riego</span
        >
        <transition name="fade">
          <Calendar
            v-if="shouldShowCalendar"
            color="green"
            title-position="left"
            :attributes="attrs"
          />
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import { ToggleButton } from 'vue-js-toggle-button';
import PlantsService from '@/services/PlantsService/PlantsRest';
// import Calendar from 'v-calendar/lib/components/calendar.umd';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Detail',
  components: {
    ToggleButton,
    Calendar: () => import('v-calendar/lib/components/calendar.umd'),
  },

  // Mis propiedades que recibo (en este caso del router al ponerle true)
  props: {
    id: {
      type: [Number, String],
    },
  },
  // Mi modelo de datos
  data: () => ({
    plant: [],
    isWaterPlant: false,
    attrs: [],
    shouldShowCalendar: false,
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
    ...mapActions('plants', ['getPlant', 'updatePlant']),
    async loadData() {
      let currentPlant = this.getCurrentPlant(+this.id); // Nos viene un number
      // Si no tenemos nada, lo recuperamos
      if (!(currentPlant && currentPlant.length)) {
        currentPlant = await this.getPlant(this.id);
      }
      // Si venimos de la Home ya tenemos los datos
      // Recuperamos toda la información
      const plant = await PlantsService.fetchPlantWithURL(currentPlant.id);
      this.plant = {
        ...currentPlant,
        ...plant,
      };
      console.log(this.plant.id);
      // Comprobamos si se ha regado
      this.checkWaterPlantToday();
      // Muestra lso riegos en el calendario
      this.loadWaterPlantsDates();
    },
    // Cuando pulsamos el Toggle
    onChangeToggleButton(value) {
      if (value.value) {
        console.log(value.value);
        this.savePlant();
      } else {
        console.log(value.value);
        this.removeLastPlant();
      }
    },
    // Miramos si hemos regado hoy
    checkWaterPlantToday() {
      if (this.plant.waterPlant && this.plant.waterPlant.length) {
        this.isWaterPlant = this.plant.waterPlant.some((date) => this.isToday(new Date(date)));
      }
    },
    // Es hoy
    isToday(date) {
      const today = new Date();
      return (
        date.getDate() === today.getDate()
        && date.getMonth() === today.getMonth()
        && date.getFullYear() === today.getFullYear()
      );
    },
    // Carga la lista de fechas en el calendario
    loadWaterPlantsDates() {
      // es un array de singles dates
      // https://vcalendar.io/dates.html#single-dates
      // this.plant.waterPlant.forEach((element) => {
      //   console.log(element);
      // });
      this.attrs = this.plant.waterPlant.map((date) => ({
        highlight: true,
        dates: new Date(date),
      }));
    },
    // Actualizamos el riego de la planta
    async savePlant() {
      const today = new Date();
      const hasWaterPlant = this.plant.waterPlant && this.plant.waterPlant.length;
      const waterPlant = hasWaterPlant
        ? [...this.plant.waterPlant, today.toISOString()]
        : [today.toISOString()];
      const data = {
        id: this.plant.id,
        data: waterPlant,
      };
      await this.updatePlant(data);
      this.loadData();
    },
    // La quitamos de riego
    async removeLastPlant() {
      this.plant.waterPlant.pop();
      const data = {
        id: this.plant.id,
        data: this.plant.waterPlant,
      };
      await this.updatePlant(data);
      this.loadData();
    },
    // Muestra el calendario
    toggleCalendar() {
      this.shouldShowCalendar = !this.shouldShowCalendar;
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
