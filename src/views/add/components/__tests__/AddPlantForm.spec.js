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
  test('should emit onChangeAutocomplete', () => {
    const { wrapper } = build();
    const value = [1, 2, 3];
    wrapper.vm.onChangeAutocomplete(value);
    expect(wrapper.emitted()['find-plant']).toBeDefined();
    expect(wrapper.emitted()['find-plant']).toEqual([[value]]);
  });
});
