import { shallowMount } from '@vue/test-utils';
import ListPlants from '../ListPlants.vue';

// Teteamos su componente
describe('Vista: HomeView -> Componente: ListPlants', () => {
  const $router = {
    push: jest.fn(),
  };

  // Crea el shallowMount
  const build = () => {
    const wrapper = shallowMount(ListPlants, {
      mocks: {
        $router,
      },
    });

    return {
      wrapper,
    };
  };

  test('Debería ser igual a su Snapshot', () => {
    const { wrapper } = build();
    expect(wrapper.element).toMatchSnapshot();
  });

  it('Debería ir a la ruta indicada al hacer click', () => {
    const { wrapper } = build();
    // Buscamos el botón etiquetado de esta manera
    const button = wrapper.find('[data-test-id="add-button"]');
    // Lo disparamos
    button.trigger('click');
    // Se ha llamado una sola vez
    expect(wrapper.vm.$router.push).toHaveBeenCalledTimes(1);
    // Y va a esa ruta
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith({ name: 'AddPlant' });
  });
});
