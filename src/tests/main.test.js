import { render } from '@testing-library/react';
import App from '../main';
test('Comprueba mensaje de bienvenida H1', () => {
  
  const {container} = render(<App/>);

  const h1 = container.querySelector('h1')
  expect(h1.innerHTML).toBe('Bienvenido!');

});
