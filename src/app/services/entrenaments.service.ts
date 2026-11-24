import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Service, inject, signal } from '@angular/core';
import { Subject, catchError, map, of, switchMap, tap, type Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import {
  adaptarEntrenamentsApi,
  adaptarEntrenamentApi,
  prepararEntrenamentApi,
} from '../adaptadors/entrenament.adaptador';
import type {
  EntrenamentApiResponse,
  EstatEntrenaments,
  FiltresEntrenament,
  NouEntrenament,
} from '../models/entrenament.model';

@Service()
export class EntrenamentsService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/entrenaments`;

  // Rep cada cerca i guarda els últims filtres
  private readonly filtresInicials: FiltresEntrenament = { text: '', categoria: 'Totes' };
  private readonly filtres$ = new Subject<FiltresEntrenament>();
  private darrersFiltres = this.filtresInicials;

  // El servei actualitza l'estat i la vista el llegeix
  private readonly estatSignal = signal<EstatEntrenaments>({
    estat: 'inicial',
    entrenaments: [],
  });
  readonly estat = this.estatSignal.asReadonly();

  // Gestiona les peticions i conserva el resultat de l'última cerca
  constructor() {
    this.filtres$
      .pipe(
        tap((filtres) => {
          this.darrersFiltres = filtres;
          this.estatSignal.set({ estat: 'carregant', entrenaments: [] });
        }),
        switchMap((filtres) =>
          this.obtenirEntrenaments(filtres).pipe(
            map((entrenaments): EstatEntrenaments => ({ estat: 'exit', entrenaments })),
            catchError((error: unknown) =>
              of<EstatEntrenaments>({
                estat: 'error',
                entrenaments: [],
                error: this.gestionarError(error),
              }),
            ),
          ),
        ),
      )
      .subscribe((estat) => this.estatSignal.set(estat));
  }

  // Demana tots els entrenaments
  carregarTot(): void {
    this.cercar(this.filtresInicials);
  }

  // Envia uns filtres nous al servei
  cercar(filtres: FiltresEntrenament): void {
    this.filtres$.next({
      text: filtres.text.trim(),
      categoria: filtres.categoria,
    });
  }

  // Repeteix la consulta amb els darrers filtres
  reintentar(): void {
    this.filtres$.next(this.darrersFiltres);
  }

  // Crea l'entrenament i refresca el llistat
  crearEntrenament(nou: NouEntrenament) {
    return this.http.post<EntrenamentApiResponse>(this.apiUrl, prepararEntrenamentApi(nou)).pipe(
      map(adaptarEntrenamentApi),
      tap(() => this.reintentar()),
    );
  }

  // Compta els entrenaments que coincideixen amb el text
  comptarResultats(terme: string): Observable<number> {
    return this.obtenirEntrenaments({ text: terme, categoria: 'Totes' }).pipe(
      map((entrenaments) => entrenaments.length),
    );
  }

  // Llegeix els entrenaments i els adapta al model de HiTrain
  obtenirEntrenaments(filtres: FiltresEntrenament) {
    let params = new HttpParams();

    if (filtres.categoria !== 'Totes') {
      params = params.set('categoria', filtres.categoria);
    }

    const cerca = filtres.text.toLowerCase();

    return this.http.get<EntrenamentApiResponse[]>(this.apiUrl, { params }).pipe(
      map(adaptarEntrenamentsApi),
      map((entrenaments) =>
        entrenaments.filter((entrenament) => entrenament.nom.toLowerCase().includes(cerca)),
      ),
    );
  }

  // Prepara un missatge d'error per mostrar a la vista
  private gestionarError(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 0) {
        return "No es pot connectar amb l'API. Comprova que npm run api està en marxa";
      }

      return `La consulta ha fallat (HTTP ${error.status})`;
    }

    return error instanceof Error ? error.message : "No s'han pogut carregar els entrenaments";
  }
}
