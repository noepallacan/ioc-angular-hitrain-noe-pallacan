import { Component, inject, signal, type OnInit } from '@angular/core';
import { EntrenamentsService } from './services/entrenaments.service';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { LlistaEntrenamentsComponent } from './components/llista-entrenaments/llista-entrenaments.component';
import { FiltresEntrenamentsComponent } from './components/filtres-entrenaments/filtres-entrenaments.component';
import type { Entrenament, FiltresEntrenament, NouEntrenament } from './models/entrenament.model';
import { FormulariNouEntrenamentComponent } from './components/formulari-nou-entrenament/formulari-nou-entrenament.component';

@Component({
  imports: [
    RouterOutlet,
    DatePipe,
    LlistaEntrenamentsComponent,
    FiltresEntrenamentsComponent,
    FormulariNouEntrenamentComponent,
  ],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App implements OnInit {
  protected readonly title = signal('ioc-angular-hitrain-noe-pallacan');
  public nomApp = 'HiTrain';

  private readonly entrenamentsService = inject(EntrenamentsService);
  entrenamentSeleccionat: Entrenament | null = null;

  // Demana la primera càrrega
  ngOnInit(): void {
    this.entrenamentsService.carregarTot();
  }

  // Envia els filtres del formulari al servei
  aplicarFiltres(filtres: FiltresEntrenament): void {
    this.entrenamentSeleccionat = null;
    this.entrenamentsService.cercar(filtres);
  }

  // Mostra el detall de l'entrenament clicat
  mostrarDetall(entrenament: Entrenament): void {
    this.entrenamentSeleccionat = entrenament;
  }
}
