import { adaptarEntrenamentApi } from './entrenament.adaptador';
import type { EntrenamentApiResponse } from '../models/entrenament.model';

// Comprova els canvis que fem en un entrenament de l'API.
describe('adaptarEntrenamentApi', () => {
  const dadaApi: EntrenamentApiResponse = {
    id: 'ent-007',
    nom: '  Tecnica de boxa avançada  ',
    descripcio: 'Combinacions ofensives i contraatacs.',
    categoria: '  BOXA  ',
    data: '2026-11-2',
    duradaMinuts: 60,
    destacat: true,
  };

  it('neteja el nom, unifica la categoria i normalitza la data', () => {
    const resultat = adaptarEntrenamentApi(dadaApi);

    expect(resultat.nom).toBe('Tecnica de boxa avançada');
    expect(resultat.categoria).toBe('Boxa');
    expect(resultat.data).toBe('2026-11-02');
  });
});