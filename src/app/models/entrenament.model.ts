export type CategoriaEntrenament = 'Boxa' | 'Running' | 'Hibrid' | 'Força';

export interface Entrenament {
  id: number;
  nom: string;
  descripcio: string;
  categoria: CategoriaEntrenament;
  data: string;
  duradaMinuts: number;
  destacat?: boolean;
}
