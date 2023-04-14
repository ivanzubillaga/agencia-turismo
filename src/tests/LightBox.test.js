import { render } from '@testing-library/react';
import { LightBox } from '../components/LightBox';

test('Comprueba mensaje de Formulario exitoso', () => {
  
  const {container} = render(<LightBox/>);

  const h3 = container.querySelector('h3')
  expect(h3.innerHTML).toBe('Tu información fue enviada con éxito, estaremos en contacto contigo');

});
