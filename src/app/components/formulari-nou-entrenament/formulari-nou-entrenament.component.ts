import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import type { CategoriaEntrenament } from '../../models/entrenament.model';
import { EntrenamentsService } from '../../services/entrenaments.service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formulari-nou-entrenament',
  styleUrl: './formulari-nou-entrenament.component.scss',
  templateUrl: './formulari-nou-entrenament.component.html',
})
export class FormulariNouEntrenamentComponent {
  private readonly entrenamentsService = inject(EntrenamentsService);

  readonly categories: CategoriaEntrenament[] = ['Boxa', 'Running', 'Hibrid', 'Força'];

  // Camps i regles del formulari
  readonly formulari = new FormGroup({
    nom: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    descripcio: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)],
    }),
    categoria: new FormControl<CategoriaEntrenament>('Boxa', { nonNullable: true }),
    data: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    duradaMinuts: new FormControl(60, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1)],
    }),
  });

  // Estat de l'enviament i missatges
  readonly enviant = signal(false);
  readonly missatge = signal<string | null>(null);
  readonly error = signal<string | null>(null);

  // Valida el formulari i demana al servei que faci el POST
  crear(): void {
    if (this.enviant()) {
      return;
    }

    const { nom, descripcio } = this.formulari.getRawValue();
    this.formulari.patchValue({ nom: nom.trim(), descripcio: descripcio.trim() });

    if (this.formulari.invalid) {
      this.formulari.markAllAsTouched();
      return;
    }

    this.enviant.set(true);
    this.missatge.set(null);
    this.error.set(null);

    this.entrenamentsService.crearEntrenament(this.formulari.getRawValue()).subscribe({
      next: (entrenament) => {
        this.missatge.set(`S'ha creat «${entrenament.nom}» amb l'identificador ${entrenament.id}`);
        this.formulari.reset();
        this.enviant.set(false);
      },
      error: () => {
        this.error.set("No s'ha pogut crear l'entrenament");
        this.enviant.set(false);
      },
    });
  }
}
