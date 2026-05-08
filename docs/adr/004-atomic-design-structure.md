# 004 — Atomic Design Component Structure

## Status

Accepted

## Context

La librería fue inicializada con todos los componentes en `src/components/` sin clasificación. A medida que la librería escala hacia decenas de componentes, la ausencia de una taxonomía clara dificulta:
- Distinguir primitivos reutilizables de composiciones complejas
- Establecer reglas de dependencia entre componentes (un atom no puede importar un organism)
- Comunicar el nivel de abstracción esperado al contribuidor

El `architect-agent` del repositorio define explícitamente que los componentes deben seguir una estructura de carpeta que incluya clasificación por nivel de composición.

## Decision

Adoptar **Atomic Design** como taxonomía de clasificación de componentes dentro de `src/components/`.

```
src/components/
  atoms/         ← primitivos: Button, Input, Badge, Icon, Spinner
  molecules/     ← composiciones simples: InputGroup, SearchBar, FormField
  organisms/     ← composiciones complejas: Modal, Drawer, Form, Navigation
```

### Reglas de dependencia

- `atoms` no pueden importar de `molecules` ni `organisms`
- `molecules` pueden importar de `atoms` únicamente
- `organisms` pueden importar de `atoms` y `molecules`
- Ningún nivel puede importar de `application code` externo a la librería

### Barrel chain

```
src/components/index.ts
  └── export * from './atoms'
  └── export * from './molecules'   ← cuando existan
  └── export * from './organisms'   ← cuando existan

src/components/atoms/index.ts
  └── export * from './Button'
  └── export * from './Input'       ← cuando existan
```

### Estructura por componente

Cada componente debe incluir:
```
ComponentName/
  ComponentName.tsx          ← lógica del componente
  ComponentName.styles.ts    ← variantes CVA
  ComponentName.types.ts     ← tipos públicos
  ComponentName.test.tsx     ← unit + interaction tests
  ComponentName.a11y.test.tsx ← tests axe dedicados
  ComponentName.stories.tsx  ← stories con play(), dark mode, mobile
  README.md                  ← documentación del componente
  index.ts                   ← barrel público
```

## Consequences

**Benefits:**
- Escala predeciblemente: cada nuevo componente sabe dónde va
- Las reglas de dependencia previenen acoplamiento descendente
- La estructura estandarizada reduce fricción para nuevos contribuidores
- Facilita la migración futura a monorepo (un package por nivel o por componente)

**Tradeoffs:**
- Mayor overhead de carpetas para proyectos pequeños
- Requiere juicio para clasificar componentes borderline (e.g., ¿un Avatar es atom o molecule?)
- Los imports no cambian para el consumidor (el barrel `src/index.ts` no expone la estructura interna)

**Limitations:**
- La clasificación `atoms/molecules/organisms` no incluye `templates` ni `pages` — esas categorías pertenecen a la aplicación consumidora, no a la librería.
- El nivel `organisms` solo debe crearse cuando el primer componente de ese nivel sea implementado.

## Alternatives Considered

- **Flat structure (`src/components/Button/`):** Más simple inicialmente. Rechazado porque no escala y no establece reglas de dependencia explícitas.
- **Domain-based structure (`src/components/form/`, `src/components/overlay/`):** Organiza por contexto de uso, no por complejidad. Rechazado porque mezcla concerns y dificulta la reutilización cruzada entre dominios.
- **Feature flags per component:** Rechazado por complejidad prematura en v0.x.
