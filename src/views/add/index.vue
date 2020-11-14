<template>
  <section>
    <h1 class="font-bold text-2xl">Nueva Planta</h1>
    <form class="mt-8">
      <Autocomplete />
      <div class="flex justify-center mt-8">
        <button class="border rounded py-2 px-6 bg-green-600 text-white font-bold">Guardar</button>
      </div>
    </form>
  </section>
</template>

<script>
import Autocomplete from '@/components/ui/Autocomplete.vue';

export default {
  name: 'AddView',
  components: {
    Autocomplete,
  },
};
</script>

<style>

</style>
