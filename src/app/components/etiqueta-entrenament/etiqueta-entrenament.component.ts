import { Component, Input } from '@angular/core';
import type { CategoriaEntrenament } from '../../models/entrenament.model';

@Component({
  imports: [],
  selector: 'app-categoria',
  styleUrl: './etiqueta-entrenament.component.scss',
  templateUrl: './etiqueta-entrenament.component.html',
})
export class EtiquetaEntrenamentComponent {
  @Input({ required: true }) categoria!: CategoriaEntrenament;
}
