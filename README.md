# HiTrain

## Autor/a

Noé Pallacan Jalmar

## Descripció

HiTrain és una aplicació pensada per registrar i consultar l'històric d'entrenaments

## Versions utilitzades

- `Angular`: 22.2.0
- `Node.js`: v24.15.0
- `npm`: 11.12.1

## Branques del repositori

- `main`: branca principal del repositori.
- `ra1-setup`: projecte base creat a l'EAC1.
- `ra2-components`: branca de treball de l'EAC2, amb els components, el formulari de
  filtres, el control de flux i les millores d'accessibilitat i responsive.

## Comandes per el projecte

Comanda per crear el projecte:

ng new ioc-angular-hitrain-noe-pallacan --routing --style=scss --ssr=false --standalone=true --file-name-style-guide=2016 --skip-git=true --package-manager=npm

Instal·lació de dependències:

npm install

Execució de l'aplicació:

ng serve

Execució de proves:

ng test

Compilació del projecte:

ng build

Executar API local:

npm run api

## Estat del projecte

### EAC1

Projecte base per aquest EAC llest

### EAC2

Implementació de components standalone, comunicació entre components, formularis, filtres, control de flux i millores d'accessibilitat.

Components creats:

- `LlistaEntrenamentsComponent`: mostra el llistat d'entrenaments.
- `TargetaEntrenamentComponent`: mostra les dades de cada entrenament.
- `EtiquetaEntrenamentComponent`: identifica la categoria de l'entrenament.
- `FiltresEntrenamentsComponent`: permet filtrar els entrenaments per nom i categoria.

Funcionalitats

- Llistat de 10 entrenaments amb dades mock.
- Filtres combinats per text i categoria.
- Validació del formulari.
- Comptador de resultats.
- Missatge quan no hi ha resultats.
- Panell de detalls de l'entrenament seleccionat.
- Format de dates amb el pipe date.
- Layout dividit (llista i detall) amb CSS Grid, que passa a una sola columna
  per sota dels 600 px d'amplada(versió mòbil).
- Millores d'accessibilitat i navegació amb teclat.

### EAC3

Implementació d'una API local amb `json-server`, serveis HTTP, formularis reactius i historial de cerques.

Funcionalitats:

- Substitució de les dades mock per dades obtingudes de l'API.
- Consultes GET per carregar i filtrar entrenaments.
- Peticions POST per crear entrenaments nous.
- Adaptadors per transformar i normalitzar les dades de l'API.
- Gestió dels estats de càrrega, èxit i error amb signals.
- Botó Reintentar per repetir l'última consulta.
- Formulari reactiu de cerca amb validació síncrona i asíncrona, i debounce de 400 ms.
- Historial de cerques amb `localStorage`, recuperació i neteja de cerques.
- Formulari reactiu d'alta d'entrenaments amb validacions.

Serveis creats:

- `EntrenamentsService`: gestiona les peticions HTTP, els filtres, els estats i els reintents.
- `HistorialCerquesService`: gestiona l'historial de cerques guardat al navegador.

## Enllaç del repositori

https://github.com/noepallacan/ioc-angular-hitrain-noe-pallacan
