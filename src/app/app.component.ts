import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LlistaEntrenamentsComponent } from './components/llista-entrenaments/llista-entrenaments.component';
import { FiltresEntrenamentsComponent } from './components/filtres-entrenaments/filtres-entrenaments.component';
import { ENTRENAMENTS_MOCK } from './mocks/dades-mock';
import type { Entrenament } from './models/entrenament.model';
import type { FiltresEntrenament } from './components/filtres-entrenaments/filtres-entrenaments.component';

@Component({
  imports: [RouterOutlet, LlistaEntrenamentsComponent, FiltresEntrenamentsComponent],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('ioc-angular-hitrain-noe-pallacan');

  public nomApp = 'HiTrain';

  entrenaments = ENTRENAMENTS_MOCK;

  entrenamentsFiltrats: Entrenament[] = this.entrenaments;

  aplicarFiltres(filtres: FiltresEntrenament): void {
    const cerca = filtres.text.toLowerCase();

    this.entrenamentsFiltrats = this.entrenaments.filter((entrenament) => {
      const coincideixText = entrenament.nom.toLowerCase().includes(cerca);

      const coincideixCategoria =
        filtres.categoria === 'Totes' || entrenament.categoria === filtres.categoria;

      return coincideixText && coincideixCategoria;
    });

    this.entrenamentSeleccionat = null;
  }

  entrenamentSeleccionat: Entrenament | null = null;

  mostrarDetall(entrenament: Entrenament): void {
    this.entrenamentSeleccionat = entrenament;
  }
}
