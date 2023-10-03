import { incrementar } from './numeros';

describe('Pruebas números', () => {
  it('Debe de retonar 100 si el número es mayor de 100', () => {
    const resp = incrementar(300);

    expect(resp).toBe(100);
  });
  it('Debe de retonar el número mas 1 si el numero es menor de 100', () => {
    const resp = incrementar(50);

    expect(resp).toBe(51);
  });
});
