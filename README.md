# HiTrain

## Autor/a

Noé Pallacan Jalmar

## Descripció

HiTrain és una aplicació pensada per registrar i consultar l'històric d'entrenaments

## Versions utilitzades

- Angular: 22.2.0
- Node.js: v24.15.0
- npm: 11.12.1

## Comandes per el projecte

Comanda per crear el projecte:

ng new ioc-angular-hitrain-noe-pallacan --routing --style=scss --ssr=false --standalone=true --file-name-style-guide=2016 --skip-git=true --package-manager=npm

Creació dels components:

Comandes per generar els quatre components standalone de l'EAC2:

ng generate component components/llista-entrenaments
ng generate component components/targeta-entrenament
ng generate component components/etiqueta-entrenament
ng generate component components/filtres-entrenaments

El model Entrenament, les categories i les dades mock s'han creat manualment als fitxers corresponents.

Instal·lació de dependències:

npm install

Execució de l'aplicació:

ng serve

Execució de proves:

ng test

Compilació del projecte:

ng build

## Estat del projecte

### EAC1

Projecte base per aquest EAC llest

### EAC2

Implementació de components standalone, comunicació entre components, formularis, filtres, control de flux i millores d'accessibilitat.

Components creats:

- LlistaEntrenamentsComponent: mostra el llistat d'entrenaments.
- TargetaEntrenamentComponent: mostra les dades de cada entrenament.
- EtiquetaEntrenamentComponent: identifica la categoria de l'entrenament.
- FiltresEntrenamentsComponent: permet filtrar els entrenaments per nom i categoria.

Funcionalitats

- Llistat de 10 entrenaments amb dades mock.
- Filtres combinats per text i categoria.
- Validació del formulari.
- Comptador de resultats.
- Missatge quan no hi ha resultats.
- Panell de detalls de l'entrenament seleccionat.
- Format de dates amb el pipe date.
- Disseny responsive.
- Millores d'accessibilitat i navegació amb teclat.

## Enllaç del repositori

https://github.com/noepallacan/ioc-angular-hitrain-noe-pallacan
