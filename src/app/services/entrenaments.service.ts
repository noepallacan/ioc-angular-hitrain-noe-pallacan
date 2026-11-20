import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';

import { environment } from '../../environments/environment';

@Service()
export class EntrenamentsService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/entrenaments`;

  obtenirEntrenaments() {
    return this.http.get<unknown[]>(this.apiUrl);
  }
}
