import { usuarioIngresado } from './booleanos';

describe('Pruebas de boolenos', () => {
  it('Debe retornar true', () => {
    const resp = usuarioIngresado();
    expect(resp).toBeTruthy();
  });
});
