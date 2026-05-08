# 001 — Library Architecture

## Status

Accepted

## Context

We need a React component library that serves web apps and mobile WebViews from a single codebase. The library must be accessible (WCAG 2.1 AA), performant (tree-shakable, minimal runtime), and maintainable (typed, tested, documented). We need an architecture that allows atomic components to compose into complex patterns without coupling business logic to UI.

## Decision

Adopt a **monolithic single-package library** with atomic components as the primary unit. Components are composed using the **Compound Components** pattern for complex interactions. Simple primitives (Button, Badge) follow a single-file model with types extracted to a `.types.ts` file.

Key architectural constraints:
- No business logic inside components — components accept data and callbacks via props only
- All components extend native HTML element prop types via `React.XxxHTMLAttributes<XxxElement>`
- `forwardRef` mandatory on all DOM-element wrappers
- Public API exposed via a single `src/index.ts` barrel, named exports only
- React and ReactDOM are peer dependencies, never bundled

## Consequences

**Benefits:**
- Single package simplifies versioning and consumer integration
- Compound components enable flexible composition without prop explosion
- Extending native HTML attributes gives consumers full DOM passthrough capability
- Single barrel entry point is easy to tree-shake with ESM

**Tradeoffs:**
- A single package grows over time; requires disciplined folder structure
- Compound component APIs add initial design overhead for each complex widget
- Named-only exports means consumers cannot use default import shortcuts

**Limitations:**
- Does not support multi-package (monorepo) splitting until package grows beyond ~50 components
- Shared utilities are co-located with UI; if reuse beyond UI is needed, a separate utilities package would be required

## Alternatives Considered

- **Monorepo (Turborepo / Nx):** More flexible long-term but adds significant tooling overhead at MVP stage. Documented as a future migration path in ADR 003.
- **CSS Modules instead of Tailwind:** More explicit isolation but requires a separate design token sync mechanism. Rejected in ADR 002.
- **Runtime CSS-in-JS (styled-components, Emotion):** Better dynamic theming but adds runtime overhead incompatible with WebView performance targets. Rejected.
