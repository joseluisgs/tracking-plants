<template>
  <div class="home">
    <ListPlants
      :plants="plants"
       @item-clicked="goToDetail"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ListPlants from '@/views/home/components/ListPlants.vue';
import { mapActions } from 'vuex';

export default {
  name: 'HomeView',
  // Mis componentes
  components: {
    ListPlants,
  },
  // Mis datos
  data: () => ({
    plants: [],
  }),
  // Mi ciclo de vida
  mounted() {
    this.loadData();
  },
  methods: {
    ...mapActions({
      listPlants: 'plants/listPlants',
    }),
    async loadData() {
      this.plants = await this.listPlants();
    },
    goToDetail(plantId) {
      console.log(`Detalles de: ${plantId}`);
    },
  },
};
</script>
