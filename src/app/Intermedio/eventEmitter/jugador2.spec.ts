import { Jugador2 } from './Jugador2';

describe('Pruebas de EventEmitter', () => {
  let jugador: Jugador2;
  beforeEach(() => (jugador = new Jugador2()));

  it('debe de emitir un evento cuando el jugador recibe daño', () => {
    let nuevoHp = 0;

    jugador.hpCambia.subscribe((hp) => {
      nuevoHp = hp;
    });

    jugador.recibeDanio(1000);

    expect(nuevoHp).toBe(0);
  });

  it('debe de emitir un evento cuando el jugador recibe daño y sobre vivir si es menos de 100', () => {
    let nuevoHp = 0;

    jugador.hpCambia.subscribe((hp) => {
      nuevoHp = hp;
    });

    jugador.recibeDanio(50);

    expect(nuevoHp).toBe(50);
  });
});
