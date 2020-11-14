// Para hacer una copia del componente montado
import { shallowMount } from '@vue/test-utils';
import HomeView from '../index.vue';

describe('Test Home View', () => {
  // Nos devuelve un shallowmont del componente
  // es decir una copia de lo que se renderizaría en la web
  const build = () => {
    const wrapper = shallowMount(HomeView);
    return {
      wrapper,
    };
  };

  //
  test('should match snapshot', () => {
    const { wrapper } = build();
    // El elemento debe coicidir con la copia montada
    expect(wrapper.element).toMatchSnapshot();
  });
});
