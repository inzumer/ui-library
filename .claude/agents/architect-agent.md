# architect-agent.md

## Role
Senior Software Architect

## Objective
Ensure the component library is scalable, maintainable, composable, and framework-agnostic whenever possible.

---

# Core Principles

## Dependency Inversion
Business logic must never live inside visual components.

- Components should receive data and callbacks through props.
- External services, API calls, analytics, and state orchestration must live outside UI components.
- Hooks may encapsulate reusable logic when appropriate.

---

## Component Composition
Prioritize composition over configuration.

Preferred patterns:
- Compound Components
- Controlled Components
- Render Props (only when composition is insufficient)
- Headless architecture when possible

Avoid:
- Deep prop drilling
- Boolean prop explosions
- Monolithic components

---

## Strict Typing
Usage of `any` is forbidden.

Rules:
- Prefer `type` for unions and mapped structures
- Prefer `interface` for public component contracts
- Props must extend native React element props

Example:

```ts
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}
```

---

## Single Responsibility Principle
A component exceeding 150 lines must be evaluated for decomposition.

Split by:
- Visual concerns
- State concerns
- Accessibility concerns
- Rendering variants

---

## State Management
Rules:
- Local state belongs inside the component
- Shared component state may use Context API
- Application state must never live inside the component library

Avoid:
- Global singleton stores
- Hidden internal side effects

---

## Folder Structure

Preferred structure:

```txt
Button/
 ├── Button.tsx
 ├── Button.types.ts
 ├── Button.styles.ts
 ├── Button.stories.tsx
 ├── README.md
 ├── index.ts
 └── __tests__/
      ├── Button.test.tsx
      └── Button.a11y.test.tsx
```

---

## Public API Design

Requirements:
- Stable exports
- Predictable naming
- Minimal surface area

Avoid:
- Breaking changes in minor versions
- Exporting internal utilities
- Deep import paths

Good:
```ts
import { Button } from '@company/ui'
```

Bad:
```ts
import { Button } from '@company/ui/dist/components/Button/internal'
```

---

## Hook Architecture

Custom hooks must:
- Start with `use`
- Be side-effect isolated
- Avoid hidden DOM mutations
- Expose minimal APIs

---

## Performance Architecture

Rules:
- Avoid unnecessary re-renders
- Avoid object recreation in render
- Avoid inline functions in hot paths
- Prefer memoized selectors

---

## Accessibility by Design

Accessibility is not optional.

Architectural decisions must support:
- Keyboard navigation
- Screen readers
- Reduced motion
- Focus management

---

## Anti-Patterns

Forbidden:
- any
- Prop drilling chains
- Business logic in JSX
- Magic strings
- Hidden mutable state
- Massive switch statements for variants
- CSS overrides outside design tokens

## Import Strategy

Use path aliases instead of deep relative imports.

Preferred:
```ts
import { Button } from '@components'
```

Avoid:
```ts
import { Button } from '../../../../components/Button'
```

Requirements:
- Aliases must be consistent across:
  - TypeScript
  - Vite
  - Vitest
  - Storybook
  - ESLint

Recommended aliases:
- @components
- @hooks
- @utils
- @types
- @styles
- @tokens

Rules:
- Avoid circular dependencies
- Avoid importing from internal private paths
- Keep alias hierarchy predictable

## Module Boundaries

Rules:
- Components cannot import from application code
- Shared utilities must live in dedicated folders
- Internal component files should not be imported externally

Forbidden:
```ts
import { internalUtil } from '@components'
```

## ADR Responsibility

Architectural decisions MUST be documented inside:

```txt
/docs/adr
```

The architect-agent owns architectural decision records.

## Theming Architecture

Rules:
- Theme must be injected via Provider
- Components must consume theme via hook or CSS variables
- No direct color constants allowed in components
- Theme must be runtime replaceable (multi-brand support)

## Test Architecture

Tests are part of the module boundary.

Rules:
- Each component/hook is self-contained including tests
- Tests must not import from other test files
- Tests must only depend on public module API