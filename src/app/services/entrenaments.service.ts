import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { map } from 'rxjs';

import { environment } from '../../environments/environment';
import { adaptarEntrenamentsApi } from '../adaptadors/entrenament.adaptador';
import type { EntrenamentApiResponse } from '../models/entrenament.model';

@Service()
export class EntrenamentsService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/entrenaments`;

  // Llegeix els entrenaments i els adapta al model de HiTrain.
  obtenirEntrenaments() {
    return this.http.get<EntrenamentApiResponse[]>(this.apiUrl).pipe(map(adaptarEntrenamentsApi));
  }
}
