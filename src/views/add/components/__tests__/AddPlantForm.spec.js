import { shallowMount } from '@vue/test-utils';
import AddPlantForm from '../AddPlantForm.vue';

describe('Add View -> Component -> AddPlantForm', () => {
  // Nos devuelve un shallowmont del componente
  // es decir una copia de lo que se renderizaría en la web
  // Hacemos el build metiendole las propos, para ahorrarnos en cada uno hacer wrapper.setProps({ theme: 'primary' });
  const build = (propsData) => {
    const options = propsData ? { propsData } : null;
    const wrapper = shallowMount(AddPlantForm, options);

    return {
      wrapper,
    };
  };

  // Coicide su snapshot
  test('should match snapshot', () => {
    const { wrapper } = build();
    expect(wrapper.element).toMatchSnapshot();
  });

  // Probamos evento onChangeAutocomplete
  test('should emit onChangeAutocomplete size >= 3', () => {
    const { wrapper } = build();
    const value = [1, 2, 3];
    wrapper.vm.onChangeAutocomplete(value);
    expect(wrapper.emitted()['find-plant']).toBeDefined();
    expect(wrapper.emitted()['find-plant']).toEqual([[value]]);
  });

  test('should emit onChangeAutocomplete size <= 2', () => {
    const { wrapper } = build();
    const value = [1, 2];
    wrapper.vm.onChangeAutocomplete(value);
    expect(wrapper.emitted()['find-plant']).not.toBeDefined();
  });

  // Probamos evento clearItems
  test('should emit clearItems', () => {
    const { wrapper } = build();
    wrapper.vm.clearItems();
    expect(wrapper.emitted()['clear-items']).toBeDefined();
    expect(wrapper.emitted()['clear-items']).toEqual([[]]);
  });
  // Probamos evento clearItems
  test('should do clearAll', () => {
    const { wrapper } = build();
    wrapper.vm.clearAll();
  });
  // Probamos evento clearItems
  test('should emit onSubmit', () => {
    const { wrapper } = build();
    wrapper.vm.onSubmit();
    expect(wrapper.emitted()['submit-form']).toBeDefined();
    expect(wrapper.emitted()['submit-form']).toEqual([[null]]);
  });
});
