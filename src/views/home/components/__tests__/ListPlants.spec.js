import { shallowMount } from '@vue/test-utils';
import ListPlants from '../ListPlants.vue';

// Vamos a hacer un mock del router para jugar con los parámetros
// y no usar una copia directa
// https://vue-test-utils.vuejs.org/guides/#using-with-vue-router
// Teteamos su componente
describe('Vista: HomeView -> Componente: ListPlants', () => {
  // Indicamos que es una función ficticia.
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
