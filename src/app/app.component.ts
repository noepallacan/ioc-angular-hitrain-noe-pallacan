import { Component, inject, signal, type OnInit } from '@angular/core';
import { EntrenamentsService } from './services/entrenaments.service';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { LlistaEntrenamentsComponent } from './components/llista-entrenaments/llista-entrenaments.component';
import { FiltresEntrenamentsComponent } from './components/filtres-entrenaments/filtres-entrenaments.component';
import type { Entrenament } from './models/entrenament.model';
import type { FiltresEntrenament } from './components/filtres-entrenaments/filtres-entrenaments.component';

@Component({
  imports: [RouterOutlet, DatePipe, LlistaEntrenamentsComponent, FiltresEntrenamentsComponent],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App implements OnInit {
  protected readonly title = signal('ioc-angular-hitrain-noe-pallacan');
  public nomApp = 'HiTrain';

  private readonly entrenamentsService = inject(EntrenamentsService);
  private entrenaments: Entrenament[] = [];
  private filtresActuals: FiltresEntrenament = { text: '', categoria: 'Totes' };

  // Llista que llegeix la pantalla
  readonly entrenamentsFiltrats = signal<Entrenament[]>([]);
  entrenamentSeleccionat: Entrenament | null = null;

  // Carrega els entrenaments quan s'obre HiTrain
  ngOnInit(): void {
    this.entrenamentsService.obtenirEntrenaments().subscribe({
      next: (entrenaments) => {
        this.entrenaments = entrenaments;
        this.aplicarFiltres(this.filtresActuals);
      },
      error: (error) => console.error('Error en carregar els entrenaments:', error),
    });
  }

  // Aplica els filtres al llistat carregat
  aplicarFiltres(filtres: FiltresEntrenament): void {
    this.filtresActuals = filtres;
    const cerca = filtres.text.toLowerCase();

    const resultats = this.entrenaments.filter((entrenament) => {
      const coincideixText = entrenament.nom.toLowerCase().includes(cerca);
      const coincideixCategoria =
        filtres.categoria === 'Totes' || entrenament.categoria === filtres.categoria;

      return coincideixText && coincideixCategoria;
    });

    this.entrenamentsFiltrats.set(resultats);
    this.entrenamentSeleccionat = null;
  }

  // Mostra el detall de la targeta seleccionada.
  mostrarDetall(entrenament: Entrenament): void {
    this.entrenamentSeleccionat = entrenament;
  }
}
