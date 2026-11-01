import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { Entrenament } from '../../models/entrenament.model';
import { EtiquetaEntrenamentComponent } from '../etiqueta-entrenament/etiqueta-entrenament.component';

@Component({
  imports: [EtiquetaEntrenamentComponent],
  selector: 'app-targeta-entrenament',
  styleUrl: './targeta-entrenament.component.scss',
  templateUrl: './targeta-entrenament.component.html',
})
export class TargetaEntrenamentComponent {
  @Input({ required: true }) entrenament!: Entrenament;
  @Output() seleccionat = new EventEmitter<Entrenament>();

  seleccionar(): void {
    this.seleccionat.emit(this.entrenament);
  }
}
