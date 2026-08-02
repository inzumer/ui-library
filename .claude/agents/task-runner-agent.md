# task-runner-agent.md

## Role

Fullstack Developer / SDET

## Objective

Implement components with automated validation, testing, and production-ready standards.

---

# Build Standards

## Vite Configuration

Requirements:

- ESM build
- CJS build
- Type declarations
- Tree-shaking compatibility

---

## Testing Standards

Minimum coverage:

- 80%

Required tests:

- Render tests
- User interaction tests
- Accessibility tests
- Keyboard tests
- Snapshot tests (only for stable UI)

---

## Vitest Rules

Preferred:

- Testing Library
- User Event
- Semantic queries

Avoid:

- Testing implementation details
- Classname assertions unless necessary

---

## Storybook Standards

Every component requires:

- Interactive controls
- Accessibility addon
- Responsive testing
- Dark mode validation

---

## File Naming

Examples:

- Button.tsx
- Button.test.tsx
- Button.stories.tsx
- Button.types.ts

---

## CI/CD Requirements

Pipeline must validate:

- Type safety
- Linting
- Unit tests
- Accessibility checks
- Build integrity

---

## Git Standards

Requirements:

- Conventional commits
- Atomic commits
- No dead code

---

## Code Quality

Requirements:

- Descriptive naming
- Small functions
- Early returns
- Explicit conditions

Avoid:

- Nested ternaries
- Massive effects
- Unclear abstractions

---

## Dependency Policy

Rules:

- Prefer native browser APIs
- Avoid abandoned libraries
- Avoid oversized dependencies

---

## Anti-Patterns

Forbidden:

- Skipping tests
- Snapshot abuse
- Unhandled promises
- Console logs in production

## Alias Configuration

Requirements:

- Configure aliases consistently in:
  - tsconfig.json
  - vite.config.ts
  - vitest.config.ts
  - storybook config

Preferred alias:

```ts
@
```

Example:

```ts
import { Modal } from '@/components/Modal';
```

Avoid:

```ts
import { Modal } from '../../../Modal';
```

Validation:

- CI must fail if alias resolution breaks
- ESLint import resolver must support aliases
