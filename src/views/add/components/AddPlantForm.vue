<template>
  <form class="mt-8" @submit.prevent="onSubmit">
      <!-- Recibe el evento llamado input de autocomplete
      Componente personalizado -->
      <Autocomplete
        v-model="autocompleteValue"
        :items="plants"
        placeholder="Nombre de la planta"
        @is-typing="onChangeAutocomplete"
        @select-item="onSelectItem"
        @clear-items="clearItems"
      />
      <div class="flex justify-center mt-8">
        <!-- Cambio a componentes personalizado -->
        <TheButton>Guardar</TheButton>
      </div>
    </form>
</template>

<script>
import Autocomplete from '@/components/ui/Autocomplete.vue';
import TheButton from '@/components/ui/TheButton.vue';

export default {
  name: 'AddPlantForm',
  // Mis componentes
  components: {
    Autocomplete,
    TheButton,
  },
  // Mi modelo de datos
  data: () => ({
    currentPlant: null,
    autocompleteValue: null,
  }),
  // Mis propiedades, me llegan desde el esterior
  props: {
    plants: {
      type: Array,
      default: () => [],
    },
  },
  // Mis métodos
  methods: {
    async onChangeAutocomplete(value) {
      if (value.length >= 3) {
        this.$emit('find-plant', value);
        return;
      }
      this.clearItems();
    },
    onSelectItem(item) {
      this.autocompleteValue = item.name;
      this.currentPlant = item;
      this.clearItems();
    },
    clearItems() {
      this.$emit('clear-items');
    },
    onSubmit() {
      this.$emit('submit-form', this.currentPlant);
    },
  },
};
</script>

<style>

</style>
