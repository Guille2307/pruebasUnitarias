import { ObtenerRobots } from './arreglos';

describe('Pruebas de arreglos', () => {
  it('debe de retornar al menos 3 robot', () => {
    const resp = ObtenerRobots();
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });
  it('debe de existir MegaMan y Ultron', () => {
    const resp = ObtenerRobots();
    expect(resp).toContain('MegaMan');
    expect(resp).toContain('Ultron');
  });
});
