import { Component, Output, EventEmitter, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import type {
  CategoriaEntrenament,
  FiltresEntrenament,
  CercaDesada,
} from '../../models/entrenament.model';
import { EntrenamentsService } from '../../services/entrenaments.service';
import { termeAmbResultatsValidator } from '../../validadors/terme-amb-resultats.validator';
import { HistorialCerquesService } from '../../services/historial-cerques.service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-filtres-entrenaments',
  styleUrl: './filtres-entrenaments.component.scss',
  templateUrl: './filtres-entrenaments.component.html',
})
export class FiltresEntrenamentsComponent {
  private readonly entrenamentsService = inject(EntrenamentsService);
  readonly historial = inject(HistorialCerquesService);

  @Output() filtresAplicats = new EventEmitter<FiltresEntrenament>();

  readonly categories: CategoriaEntrenament[] = ['Boxa', 'Running', 'Hibrid', 'Força'];

  // Camps i validacions del formulari
  readonly formulari = new FormGroup({
    text: new FormControl('', {
      nonNullable: true,
      validators: [Validators.minLength(3)],
      asyncValidators: [termeAmbResultatsValidator(this.entrenamentsService)],
    }),
    categoria: new FormControl<CategoriaEntrenament | 'Totes'>('Totes', {
      nonNullable: true,
    }),
  });

  // Envia els filtres quan el formulari és vàlid
  aplicar(): void {
    if (this.formulari.invalid || this.formulari.pending) {
      this.formulari.markAllAsTouched();
      return;
    }

    const filtres = this.formulari.getRawValue();

    this.historial.desar(filtres.text, filtres.categoria);

    this.filtresAplicats.emit({
      text: filtres.text.trim(),
      categoria: filtres.categoria,
    });
  }

  // Permet consultar fàcilment l'estat del camp de text
  get campText(): FormControl<string> {
    return this.formulari.controls.text;
  }

  // Indica quan s'han de mostrar els errors
  get mostrarErrors(): boolean {
    return this.campText.invalid && (this.campText.dirty || this.campText.touched);
  }

  // Neteja el formulari i mostra tots els entrenaments
  restablir(): void {
    this.formulari.reset();
    this.filtresAplicats.emit(this.formulari.getRawValue());
  }

  // Recupera una cerca guardada
  recuperar(cerca: CercaDesada): void {
    this.formulari.patchValue({
      text: cerca.terme,
      categoria: cerca.categoria,
    });

    this.aplicar();
  }
}
