import type { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { catchError, map, of, switchMap, timer, type Observable } from 'rxjs';
import { EntrenamentsService } from '../services/entrenaments.service';

// Comprova que el terme tingui resultats a l'API
export function termeAmbResultatsValidator(
  entrenamentsService: EntrenamentsService,
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const terme = (control.value ?? '').toString().trim();

    if (terme.length < 3) {
      return of(null);
    }

    return timer(400).pipe(
      switchMap(() => entrenamentsService.comptarResultats(terme)),
      map((total) => (total > 0 ? null : { senseResultats: true })),
      catchError(() => of(null)),
    );
  };
}