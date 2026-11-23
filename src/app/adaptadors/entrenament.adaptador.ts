import type {
  CategoriaEntrenament,
  Entrenament,
  EntrenamentApiResponse,
  NouEntrenament,
} from '../models/entrenament.model';

export function adaptarEntrenamentApi(dadaApi: EntrenamentApiResponse): Entrenament {
  return {
    id: dadaApi.id,
    nom: dadaApi.nom.trim(),
    descripcio: dadaApi.descripcio.trim(),
    categoria: normalitzaCategoria(dadaApi.categoria),
    data: normalitzaData(dadaApi.data),
    duradaMinuts: dadaApi.duradaMinuts,
    destacat: dadaApi.destacat,
    ubicacio: null,
  };
}

function normalitzaCategoria(text: string): CategoriaEntrenament {
  switch (text.trim().toLowerCase()) {
    case 'boxa':
      return 'Boxa';
    case 'running':
      return 'Running';
    case 'hibrid':
      return 'Hibrid';
    case 'força':
      return 'Força';
    default:
      throw new Error(`Categoria desconeguda: ${text}`);
  }
}

function normalitzaData(data: string): string {
  const parts = data.trim().split('-');
  const [any, mes, dia] = parts;

  if (parts.length !== 3 || !any || !mes || !dia) {
    throw new Error(`Format de data inesperat: ${data}`);
  }

  return `${any}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
}

// Adapta una llista d'entrenaments de l'API al model de HiTrain
export function adaptarEntrenamentsApi(llistaApi: EntrenamentApiResponse[]): Entrenament[] {
  return llistaApi.map(adaptarEntrenamentApi);
}

// Prepara les dades que s'enviena l'API
export function prepararEntrenamentApi(nou: NouEntrenament): Omit<EntrenamentApiResponse, 'id'> {
  return {
    nom: nou.nom.trim(),
    descripcio: nou.descripcio.trim(),
    categoria: nou.categoria,
    data: nou.data,
    duradaMinuts: nou.duradaMinuts,
    destacat: false,
  };
}
