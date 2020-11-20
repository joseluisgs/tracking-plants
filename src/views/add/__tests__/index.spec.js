// Para hacer una copia del componente montado
import { shallowMount } from '@vue/test-utils';
import AddView from '../index.vue';

describe('Test Add View', () => {
  // Nos devuelve un shallowmont del componente
  // es decir una copia de lo que se renderizaría en la web
  const build = () => {
    const wrapper = shallowMount(AddView);
    return {
      wrapper,
    };
  };

  //
  test('Debería ser igual a su Snapshot', () => {
    const { wrapper } = build();
    // El elemento debe coicidir con la copia montada
    expect(wrapper.element).toMatchSnapshot();
  });
  // Probamos método selectedPlant
  test('should selectedPlant', () => {
    const { wrapper } = build();
    wrapper.vm.selectedPlant();
  });
  // Probamos método clearItems
  test('should selectedPlant', () => {
    const { wrapper } = build();
    wrapper.vm.clearItems();
  });

  // Probamos método findPlant
  test('should selectedPlant', () => {
    const { wrapper } = build();
    wrapper.vm.findPlant('coco');
  });
  // Probamos método onSubmit
  test('should selectedPlant', () => {
    const { wrapper } = build();
    wrapper.vm.onSubmit('coco');
  });
});
