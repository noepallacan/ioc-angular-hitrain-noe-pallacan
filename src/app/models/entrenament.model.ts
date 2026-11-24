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

// Fases per les quals pot passar la consulta
export type EstatServei = 'inicial' | 'carregant' | 'exit' | 'error';

// Informació que el servei comparteix amb la vista
export interface EstatEntrenaments {
  estat: EstatServei;
  entrenaments: Entrenament[];
  error?: string;
}

// Criteris que comparteixen el formulari i el servei
export interface FiltresEntrenament {
  text: string;
  categoria: CategoriaEntrenament | 'Totes';
}

// Camps que omple l'usuari quan crea un entrenament
export type NouEntrenament = Pick<
  Entrenament,
  'nom' | 'descripcio' | 'categoria' | 'data' | 'duradaMinuts'
>;

// Dades d'una cerca guardada a l'historial
export interface CercaDesada {
  terme: string;
  categoria: CategoriaEntrenament | 'Totes';
  data: string;
}
