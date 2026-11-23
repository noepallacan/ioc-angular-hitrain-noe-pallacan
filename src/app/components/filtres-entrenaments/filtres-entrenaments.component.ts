import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { FiltresEntrenament } from '../../models/entrenament.model';
@Component({
  imports: [FormsModule],
  selector: 'app-filtres-entrenaments',
  styleUrl: './filtres-entrenaments.component.scss',
  templateUrl: './filtres-entrenaments.component.html',
})
export class FiltresEntrenamentsComponent {
  @Output() filtresAplicats = new EventEmitter<FiltresEntrenament>();

  filtres: FiltresEntrenament = {
    text: '',
    categoria: 'Totes',
  };

  aplicar(): void {
    this.filtresAplicats.emit({
      ...this.filtres,
      text: this.filtres.text.trim(),
      categoria: this.filtres.categoria,
    });
  }

  restablir(): void {
    this.filtres = { text: '', categoria: 'Totes' };
    this.aplicar();
  }
}
