# Configuració de serveis

## API mock de HiTrain

### Arrencar el servidor

```bash
npm run api
```

### Configuració

- URL base: `http://localhost:4301`
- Port: `4301`
- Fitxer de dades: `tools/api/cataleg.json`
- Fitxer d'entorn: `src/environments/environment.ts`

### Endpoints disponibles

- `GET /entrenaments` — Retorna tots els entrenaments.
- `GET /entrenaments?destacat=true` — Filtra els entrenaments destacats.
- `GET /entrenaments?categoria=Boxa` — Filtra els entrenaments de boxa.
- `GET /entrenaments/ent-001` — Retorna l'entrenament «Tècnica al sac».

## Servei d'entrenaments

El servei `EntrenamentsService` es troba a `src/app/services/entrenaments.service.ts`.

S'encarrega de consultar els entrenaments de l'API, aplicar els filtres, gestionar els estats de càrrega i errors i crear nous entrenaments.

### Consulta d'entrenaments (GET)

El mètode `obtenirEntrenaments()` fa una petició GET a l'API i passa les dades per l'adaptador abans de filtrar-les.

El mètode `carregarTot()` permet carregar inicialment tots els entrenaments i `cercar()` permet aplicar els filtres de text i categoria.

### Gestió d'estats

El servei utilitza un signal per gestionar quatre estats:

- `inicial`: encara no s'ha fet cap consulta
- `carregant`: s'està esperant la resposta de l'API
- `exit`: la consulta ha funcionat correctament
- `error`: la consulta ha fallat

A `app.component.html` utilitzo `@switch` per mostrar el contingut corresponent a cada estat.

Si hi ha un error, mostra un missatge i un botó per reintentar la consulta.

### Gestió de cerques amb switchMap

Utilitzo `switchMap` al constructor d'`EntrenamentsService`, dins del flux `filtres$`.

Aquest operador permet cancel·lar la subscripció a una consulta anterior quan arriba una cerca nova, evitant que una resposta antiga substitueixi els resultats de l'última cerca.

El mètode `reintentar()` torna a executar la consulta amb els darrers filtres utilitzats.

### Creació d'entrenaments (POST)

El mètode `crearEntrenament()` envia les dades d'un entrenament nou a l'API mitjançant una petició POST.

Abans d'enviar-les, `prepararEntrenamentApi()` prepara l'objecte sense identificador perquè `json-server` l'assigni automàticament.

Quan es crea, el servei actualitza el llistat amb una nova consulta GET.

El formulari d'alta es troba a `src/app/components/formulari-nou-entrenament/`.
