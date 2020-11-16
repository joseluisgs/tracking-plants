<template>
  <div class="relative">
    <div>
      <input
        type="text"
        class="name-autocomplete border py-1 px-1 rounded w-full capitalize focus:outline-none"
        v-model="itemSelected"
        @input="changeInputValue"
      />
    </div>
    <div
      class="border py-1 px-1 h-32 overflow-y-scroll absolute w-full bg-white z-10"
      v-if="items.length"
    >
      <span
        v-for="item in items"
        :key="item.id"
        class="block cursor-pointer capitalize py-1 px-1 hover:font-bold hover:bg-gray-200"
        @click="selectItem(item)"
      >
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Autocomplete',
  // Mis datos del modelo
  data: () => ({
    itemSelected: '',
  }),
  // Mis propiedadees para iniciarme
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  // Mis métodos
  methods: {
    changeInputValue() {
      // Emitimos el evento de buscar que se llamará inpu y devolverá el valor event
      this.$emit('input', this.itemSelected);
      // this.$emit('input', event.target.value);
    },
    selectItem(item) {
      this.itemSelected = item.name;
      this.$emit('select-item', item);
    },
  },
};
</script>

<style lang="scss" scoped>
.name-autocomplete {
  &::placeholder {
    text-transform: initial;
  }
}
</style>
