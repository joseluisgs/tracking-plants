<template>
  <ValidationObserver v-slot="{ invalid }">
    <form class="mt-8" @submit.prevent="onSubmit">
      <!-- Recibe el evento llamado input de autocomplete
      Validacion con Validate
      Componente personalizado -->
      <ValidationProvider
        name="autocomplete"
        rules="required"
        v-slot="{ errors }"
      >
        <label class="font-bold" for="autocomplete">Busca una planta</label>
        <Autocomplete
          v-model="autocompleteValue"
          :items="plants"
          placeholder="Nombre de la Planta"
          @is-typing="onChangeAutocomplete"
          @select-item="onSelectItem"
          @clear-items="clearItems"
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <div class="flex justify-center mt-8">
        <!-- Cambio a componentes personalizado -->
        <TheButton size="large" :is-disabled="invalid"> Guardar </TheButton>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import Autocomplete from '@/components/ui/Autocomplete.vue';
import TheButton from '@/components/ui/TheButton.vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
  name: 'AddPlantForm',
  // Mis componentes
  components: {
    Autocomplete,
    TheButton,
    ValidationProvider,
    ValidationObserver,
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
      this.$emit('selected-plant', item);
    },
    clearItems() {
      this.$emit('clear-items');
    },
    onSubmit() {
      this.$emit('submit-form', this.currentPlant);
      this.clearAll();
    },
    clearAll() {
      this.clearItems();
      this.currentPlant = null;
      this.autocompleteValue = null;
    },
  },
};
</script>

<style>
</style>
