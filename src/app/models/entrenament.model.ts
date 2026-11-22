export type CategoriaEntrenament = 'Boxa' | 'Running' | 'Hibrid' | 'Força';

export interface Entrenament {
  id: string;
  nom: string;
  descripcio: string;
  categoria: CategoriaEntrenament;
  data: string;
  duradaMinuts: number;
  destacat?: boolean;
  ubicacio: string | null;
}

export interface EntrenamentApiResponse {
  id: string;
  nom: string;
  descripcio: string;
  categoria: string;
  data: string;
  duradaMinuts: number;
  destacat: boolean;
}
