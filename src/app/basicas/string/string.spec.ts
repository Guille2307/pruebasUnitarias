// describe('pruebas de string');
// it('debe de regresar un string');

import { mensaje } from './string';

describe('Pruebas de string', () => {
  it('Debe de regresar un string', () => {
    const resp = mensaje('Guillermo');

    expect(typeof resp).toBe('string');
  });
  it('Debe de regresar el nombre enviado', () => {
    const nombre = 'juan';
    const resp = mensaje(nombre);

    expect(resp).toContain(nombre);
  });
});
