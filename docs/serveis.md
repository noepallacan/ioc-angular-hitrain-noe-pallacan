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