# Models i adaptadors

## Interfícies principals

Les dues interfícies són a `src/app/models/entrenament.model.ts`.

### Entrenament (model intern)

Model que fan servir els components de HiTrain. La categoria es limita a les quatre categories de l'aplicació i la ubicació pot ser `null` si es desconeix.

```typescript
export type CategoriaEntrenament = 'Boxa' | 'Running' | 'Hibrid' | 'Força';

export interface Entrenament {
  id: string;
  nom: string;
  descripcio: string;
  categoria: CategoriaEntrenament;
  data: string;
  duradaMinuts: number;
  destacat?: boolean;
  ubicacio: string | null;
}
```

### EntrenamentApiResponse (resposta de l'API)

Format de cada entrenament que retorna l'API. La categoria arriba com a text i el JSON no porta el camp `ubicacio`.

```typescript
export interface EntrenamentApiResponse {
  id: string;
  nom: string;
  descripcio: string;
  categoria: string;
  data: string;
  duradaMinuts: number;
  destacat: boolean;
}
```

## Adaptadors

Les funcions són a `src/app/adaptadors/entrenament.adaptador.ts`.

### adaptarEntrenamentApi()

Transforma un registre de l'API en un `Entrenament`:

- Treu els espais dels extrems del nom i la descripció amb `trim()`.
- Unifica la categoria amb `normalitzaCategoria()`.
- Dona un format coherent a la data amb `normalitzaData()`.
- Afegeix `ubicacio: null` perquè l'API no envia aquesta dada.
- Conserva l'identificador, la durada i el valor de `destacat`.

### adaptarEntrenamentsApi()

Aplica `adaptarEntrenamentApi()` a cada registre de l'array amb `.map()` i retorna la llista d'entrenaments adaptats.

### normalitzaCategoria()

Treu els espais dels extrems i passa el text a minúscules. Després, un `switch` retorna la categoria corresponent de HiTrain. Si la categoria ésno coincideix, genera un error amb el text rebut.

### normalitzaData()

Separa la data en any, mes i dia. Comprova que les tres parts tinguin contingut i completa el mes i el dia amb un zero quan tenen un sol dígit.

## Mapeig de camps

| Camp API       | Camp intern    | Transformació                                            |
| -------------- | -------------- | -------------------------------------------------------- |
| `id`           | `id`           | Es conserva l'identificador de text.                     |
| `nom`          | `nom`          | `trim()` treu els espais dels extrems.                   |
| `descripcio`   | `descripcio`   | `trim()` treu els espais dels extrems.                   |
| `categoria`    | `categoria`    | Es converteix a una de les quatre categories de HiTrain. |
| `data`         | `data`         | Es normalitza al format `AAAA-MM-DD`.                    |
| `duradaMinuts` | `duradaMinuts` | Es conserva el valor numèric en minuts.                  |
| `destacat`     | `destacat`     | Es conserva el valor `true` o `false`.                   |
| —              | `ubicacio`     | L'adaptador afegeix el camp amb el valor `null`.         |
