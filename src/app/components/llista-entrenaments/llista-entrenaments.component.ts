import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { Entrenament } from '../../models/entrenament.model';
import { TargetaEntrenamentComponent } from '../targeta-entrenament/targeta-entrenament.component';

@Component({
  selector: 'app-llista-entrenaments',
  imports: [TargetaEntrenamentComponent],
  templateUrl: './llista-entrenaments.component.html',
  styleUrl: './llista-entrenaments.component.scss',
})
export class LlistaEntrenamentsComponent {
  @Input({ required: true }) entrenaments!: Entrenament[];

  @Output() entrenamentSeleccionat = new EventEmitter<Entrenament>();

  seleccionar(entrenament: Entrenament): void {
    this.entrenamentSeleccionat.emit(entrenament);
  }
}
