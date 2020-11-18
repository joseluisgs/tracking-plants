import { shallowMount } from '@vue/test-utils';
import TheButton from '../TheButton.vue';

describe('Global Components -> Ui -> TheButton', () => {
  // Nos devuelve un shallowmont del componente
  // es decir una copia de lo que se renderizaría en la web
  // Hacemos el build metiendole las propos, para ahorrarnos en cada uno hacer wrapper.setProps({ theme: 'primary' });
  const build = (propsData) => {
    const options = propsData ? { propsData } : null;
    const wrapper = shallowMount(TheButton, options);

    return {
      wrapper,
    };
  };

  // Coicide su snapshot
  test('should match snapshot', () => {
    const { wrapper } = build();
    expect(wrapper.element).toMatchSnapshot();
  });

  // Vamos a probar las clases con las que se renderiza
  // Con cale primary
  test('should add the primary theme classes when theme prop is primary', () => {
    // Creamos el warper con la propiedad theme
    const { wrapper } = build({ theme: 'primary' });
    // Podríamos hacerlo con
    // wrapper.setProps({ theme: 'primary' });
    // Obtenemos del renderizado el elemento botón
    const button = wrapper.find('button');
    // Obtenemos sus clases
    const buttonClasses = button.classes();
    // Las clases que esperamos
    expect(buttonClasses).toContain('bg-green-600');
    expect(buttonClasses).toContain('text-white');
  });

  // Con clase medium. Los comentarios son iguales al anterior
  test('should add the medium classes when size is medium', () => {
    const { wrapper } = build({ size: 'medium' });
    const button = wrapper.find('button');
    const buttonClasses = button.classes();
    // Su clase contiene
    expect(buttonClasses).toContain('w-3/5');
  });

  // Con clase large
  test('should add the large classes when size is large', () => {
    const { wrapper } = build({ size: 'large' });
    const button = wrapper.find('button');
    const buttonClasses = button.classes();
    // su clase contiene
    expect(buttonClasses).toContain('w-full');
  });

  // Probamos los validate. Primero como ejemplo montandolo
  // https://vueschool.io/articles/vuejs-tutorials/how-to-test-custom-prop-validators-in-vuejs/
  test('should validate primary style', () => {
    const { wrapper } = build({ theme: 'primary' });
    const { theme } = wrapper.vm.$options.props;
    // Debe ser distinto de -1
    expect(theme.validate('primary')).toBeTruthy();
    expect(theme.validate('other')).toBeFalsy();
  });

  // Este ejemplo sin montar
  test('should validate other styles', () => {
    const { theme } = TheButton.props;
    expect(theme.validate('primary')).toBeTruthy();
    expect(theme.validate('other')).toBeFalsy();
  });

  // Testeamos el size, sin montar
  test('should validate primary style', () => {
    const { size } = TheButton.props;
    expect(size.validate('small')).toBeTruthy();
    expect(size.validate('medium')).toBeTruthy();
    expect(size.validate('large')).toBeTruthy();
    expect(size.validate('other')).toBeFalsy();
  });
});
