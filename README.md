# @inzumer/ui

Production-grade React component library for web applications and mobile WebViews.

---

## Purpose

`@inzumer/ui` provides a unified, accessible, and performant design system for TypeScript React projects. It enforces consistent visual language, interaction patterns, and WCAG 2.1 AA accessibility standards across web and WebView platforms.

---

## Stack

| Tool | Purpose |
|---|---|
| React 18 | Component model |
| TypeScript (strict) | Type safety |
| Vite | Build tooling (library mode) |
| Tailwind CSS | Token-driven styling |
| class-variance-authority | Variant management |
| Vitest + RTL | Unit and accessibility testing |
| Storybook 8 | Component documentation |
| ESLint + Prettier | Code quality |

---

## Setup

### Prerequisites

- Node.js >=20
- npm >=10

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens Storybook at `http://localhost:6006`.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Storybook development server |
| `npm run build` | Build library for distribution |
| `npm run build:storybook` | Build static Storybook |
| `npm test` | Run test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run typecheck` | TypeScript type check (no emit) |
| `npm run lint` | Lint source files |
| `npm run lint:fix` | Lint and auto-fix |
| `npm run format` | Format source files with Prettier |
| `npm run format:check` | Check formatting without writing |

---

## Using the library

```tsx
import { Button } from '@inzumer/ui'
import '@inzumer/ui/dist/style.css'

export function App() {
  return (
    <Button variant="primary" onClick={() => console.log('clicked')}>
      Click me
    </Button>
  )
}
```

---

## Contributing

### Architecture rules

All agents and architecture rules are defined in `.claude/agents/`. Read them before contributing.

### Planning requirement

All non-trivial changes require a planning document in `/docs/plans/` before implementation begins.  
See `YYYY-MM-DD-task-name.md` format.

### Architectural decisions

Significant architecture changes require an ADR in `/docs/adr/`.

### Code standards

- Zero `any` — strict TypeScript throughout
- Semantic HTML first — no clickable `div`s
- Token-only Tailwind — no arbitrary values
- Every component must: be tested, be accessible, be Storybook-documented, be exported

### Commit convention

Conventional Commits format:

```
feat(button): add loading state
fix(button): correct focus ring on Firefox
docs: update README setup instructions
```

### Pull request checklist

- [ ] Planning document exists in `/docs/plans/`
- [ ] All tests pass (`npm test`)
- [ ] TypeScript passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Storybook stories cover new states
- [ ] axe-core violations: zero

---

## Accessibility commitment

This library targets **WCAG 2.1 AA** compliance for every component. Accessibility is not optional and is tested automatically via axe-core on every build.

If you find an accessibility issue, please open an issue with the label `a11y`.
