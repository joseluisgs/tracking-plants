<template>
  <div class="home custom-container">
     <p v-if="user" class="pb-10">
      Bienvenido,<br />
      <span class="text-2xl font-bold text-red-main-400">
        {{ user.displayName }}
      </span>
    </p>
    <RecentPlants
      :plants="recentPlants"
    />
    <ListPlants
      :plants="plants"
       @item-clicked="goToDetail"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ListPlants from '@/views/home/components/ListPlants.vue';
import RecentPlants from '@/views/home/components/RecentPlants.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'HomeView',
  // Mis componentes
  components: {
    ListPlants,
    RecentPlants,
  },
  // Mis datos
  data: () => ({
    plants: [],
    recentPlants: [],
  }),
  // Mi ciclo de vida
  mounted() {
    this.loadData();
  },
  computed: {
    ...mapState('auth', ['user']),
  },
  methods: {
    ...mapActions({
      listPlants: 'plants/listPlants',
      listRecentPlants: 'plants/listRecentPlants',
    }),
    async loadData() {
      this.plants = await this.listPlants();
      this.recentPlants = await this.listRecentPlants();
    },
    goToDetail(plantId) {
      // Vamos a llamar a detalle
      this.$router.push({ name: 'PlantDetail', params: { id: plantId } });
    },
  },
};
</script>
