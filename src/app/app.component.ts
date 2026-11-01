import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LlistaEntrenamentsComponent } from './components/llista-entrenaments/llista-entrenaments.component';
import { FiltresEntrenamentsComponent } from './components/filtres-entrenaments/filtres-entrenaments.component';
import { ENTRENAMENTS_MOCK } from './mocks/dades-mock';
import type { Entrenament } from './models/entrenament.model';

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

  entrenamentSeleccionat: Entrenament | null = null;

  mostrarDetall(entrenament: Entrenament): void {
    this.entrenamentSeleccionat = entrenament;
  }
}
