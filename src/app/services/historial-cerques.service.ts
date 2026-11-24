import { Service, signal } from '@angular/core';
import type { CategoriaEntrenament, CercaDesada } from '../models/entrenament.model';

@Service()
export class HistorialCerquesService {
  private readonly clauStorage = 'hitrain-historial-cerques';

  private readonly historialSignal = signal<CercaDesada[]>(this.llegir());

  readonly historial = this.historialSignal.asReadonly();

  // Desa una cerca vàlida i evita duplicats consecutius
  desar(terme: string, categoria: CategoriaEntrenament | 'Totes'): void {
    const termeNormalitzat = terme.trim();

    if (termeNormalitzat.length < 3) {
      return;
    }

    const novaCerca: CercaDesada = {
      terme: termeNormalitzat,
      categoria,
      data: new Date().toISOString(),
    };

    const anterior = this.historialSignal()[0];

    if (anterior?.terme === novaCerca.terme && anterior.categoria === novaCerca.categoria) {
      return;
    }

    this.historialSignal.update((historial) => [novaCerca, ...historial].slice(0, 8));

    this.escriure();
  }

  // Elimina les cerques guardades
  netejar(): void {
    this.historialSignal.set([]);
    this.escriure();
  }

  // Recupera les cerques del navegador
  private llegir(): CercaDesada[] {
    try {
      const dades = localStorage.getItem(this.clauStorage);
      const historial: unknown = dades ? JSON.parse(dades) : [];

      if (!Array.isArray(historial)) {
        return [];
      }

      return historial.filter(
        (cerca): cerca is CercaDesada =>
          typeof cerca?.terme === 'string' &&
          typeof cerca?.categoria === 'string' &&
          typeof cerca?.data === 'string',
      );
    } catch {
      return [];
    }
  }

  // Guarda l'historial en format JSON
  private escriure(): void {
    try {
      localStorage.setItem(this.clauStorage, JSON.stringify(this.historialSignal()));
    } catch {
      // El formulari continua funcionant si no es pot guardar l'historial
    }
  }
}
