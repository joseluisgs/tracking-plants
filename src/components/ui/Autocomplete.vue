<template>
  <div class="autocomplete-wraper">
    <div>
      <input
        type="text"
        class="border py-1 px-1 rounded w-full focus:outline-none"
        v-model="itemSelected"
        @input="changeInputValue"
      />
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'Autocomplete',
  // Mis datos del modelo
  data: () => ({
    itemSelected: '',
  }),
  // Mis métodos
  methods: {
    changeInputValue() {
      // Para evitar muchas búsquedas lo hacemos con el valor mayor a 3
      if (this.itemSelected.length >= 3) {
      // Emitimos el evento de buscar que se llamará inpu y devolverá el valor event
        this.$emit('input', this.itemSelected);
        // console.log(`Autocomplete Value: ${this.itemSelected}`);
      }
    },
  },
};
</script>

<style>
</style>
