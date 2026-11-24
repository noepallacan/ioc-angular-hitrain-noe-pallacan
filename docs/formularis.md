# Formularis de HiTrain

## FiltresEntrenamentsComponent

| Control     | Validacions                                                                                     | Missatge                                                                                          |
| ----------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `text`      | `minLength(3)` síncrona i `termeAmbResultatsValidator` asíncrona amb `timer(400)` i `switchMap` | La cerca ha de tenir almenys 3 caràcters / No hi ha entrenaments que coincideixin amb aquest text |
| `categoria` | Cap                                                                                             | —                                                                                                 |

- Cerca explícita amb el botó Aplicar filtres o Retorn (`ngSubmit`)
- Els missatges d'error només apareixen quan el camp ha estat modificat o tocat
- El botó Aplicar filtres es deshabilita quan el formulari és invàlid o està pendent
- El formulari emet `FiltresEntrenament` mitjançant `@Output() filtresAplicats`

## Historial de cerques

El servei `HistorialCerquesService` guarda les cerques a `localStorage`.

- Es guarden un màxim de 8 cerques
- S'eviten els duplicats consecutius
- Només es guarden termes de 3 caràcters o més
- Les cerques es conserven després de recarregar la pàgina
- Les cerques es poden recuperar des del formulari
- El botó Neteja elimina l'historial
- Es gestionen els possibles errors amb `try/catch`
