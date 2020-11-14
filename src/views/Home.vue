<template>
  <div class="home">
    <ListPlants />
  </div>
</template>

<script>
// @ is an alias to /src
import ListPlants from '@/components/ui/ListPlants.vue';

export default {
  name: 'Home',
  components: {
    ListPlants,
  },
};
</script>
