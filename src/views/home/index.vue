<template>
  <div class="home">
    <ListPlants />
    <h1>Hola</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import ListPlants from '@/views/home/components/ListPlants.vue';

export default {
  name: 'HomeView',
  components: {
    ListPlants,
  },
};
</script>
