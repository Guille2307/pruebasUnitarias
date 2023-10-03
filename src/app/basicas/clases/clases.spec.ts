import { Jugador } from './clases';

describe('Pruebas de clase', () => {
  let jugador = new Jugador();
  beforeEach(() => {
    jugador.hp = 100;
    jugador = new Jugador();
  });

  it('Debe de retornar 80 de hp si recibe 20 daño', () => {
    const resp = jugador.recibeDanio(20);

    expect(resp).toBe(80);
  });

  it('Debe de retornar 50 de hp si recibe 50 daño', () => {
    const resp = jugador.recibeDanio(50);

    expect(resp).toBe(50);
  });

  it('Debe de retornar 0 de hp si recibe 100 de daño o mas', () => {
    const resp = jugador.recibeDanio(101);

    expect(resp).toBe(0);
  });
});
