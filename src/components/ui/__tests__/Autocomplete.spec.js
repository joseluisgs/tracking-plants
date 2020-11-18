// Test de Autocomplete
import { shallowMount } from '@vue/test-utils';
import Autocomplete from '../Autocomplete.vue';

// Creamos nuestra función Build con las propiedades
describe('Global Components -> Ui -> Autocomplete', () => {
  const build = (propsData) => {
    const options = propsData ? { propsData } : null;
    const wrapper = shallowMount(Autocomplete, options);

    return {
      wrapper,
    };
  };

  // Coicide su snapshot
  test('should match snapshot', () => {
    const { wrapper } = build();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should emit input event when autocomplete input has value', () => {
    const { wrapper } = build();
    // Buscamos el objeto con esta etiqueta
    const input = wrapper.find('[data-test="autocomplete-input"]');
    // Le insertamos con el evento input con esta cadena
    input.setValue('hello');
    // input.trigger('is-typing');
    // console.log(wrapper.emitted()['is-typing']);
    // Se debe emitir el evento is-typing (de tautomcplete) al meterle el texto y ese texto devuelto por el evento debe ser el indicado
    expect(wrapper.emitted()['is-typing']).toBeTruthy();
    expect(wrapper.emitted()['is-typing'][0][0]).toEqual('hello');
  });

  // Renderiza con la propiedad vacía el numero de listas, por lo tanto el div no existe
  test('should not render items when prop items is empty', () => {
    const { wrapper } = build();
    // Encontramos el elemento con esta clase
    const autocompleteWrapper = wrapper.find(
      '[data-test="wrapper-items-autocomplete"]',
    );
    // No debe existir
    expect(autocompleteWrapper.element).not.toBeDefined();
  });

  // Renderiza dos elementos
  test('should render two items', () => {
    const items = [
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' },
    ];
    // Costruimos con estos items
    const { wrapper } = build({ items });
    // Encotramos los elemento con esta clase
    const autocompleteItems = wrapper.findAll('[data-test="autocomplete-item"]');
    // Debe tener una longitud de dos
    expect(autocompleteItems.length).toBe(2);
  });

  // Selecciona el Item
  test('should emit select-item event with clicked value', () => {
    const items = [
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' },
    ];
    // Construimos con estos items
    const { wrapper } = build({ items });
    // Seleccionamos los items con esta etiqueta
    const autocompleteItems = wrapper.findAll('[data-test="autocomplete-item"]');
    // Ejecutamos en el clic en el primero
    autocompleteItems.at(0).trigger('click');
    // Vemos si hemos emitido el evento
    expect(wrapper.emitted()['select-item']).toBeTruthy();
    // Comprobamos que coincide
    expect(wrapper.emitted()['select-item'][0][0]).toEqual({
      id: 1,
      name: 'foo',
    });
  });

  // Probamos el evento cd pulsar en el exterior
  test('should emit outside event click', () => {
    const { wrapper } = build();
    wrapper.vm.onClickOutsideInput();
    expect(wrapper.emitted()['clear-items']).toBeDefined();
    expect(wrapper.emitted()['clear-items']).toEqual([[]]);
  });
});
