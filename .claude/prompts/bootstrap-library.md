# React UI Library Initialization

You are operating inside a multi-agent React component library architecture.

Before executing any task:

1. Read and follow ALL rules defined inside:
   `.claude/agents/`

This includes:
- architecture rules
- accessibility rules
- performance rules
- repository governance
- workflow orchestration
- planning requirements
- testing strategy
- mobile/WebView constraints

You MUST respect all agent responsibilities and repository conventions.

---

# Project Goal

Initialize a production-grade React component library from scratch optimized for:

- Web applications
- Mobile WebViews
- Accessibility (WCAG 2.1 AA)
- Design system scalability
- Multi-project reuse
- Tree-shakable distribution

---

# Required Stack

Use:

- React
- TypeScript (strict mode)
- Vite
- Vitest
- React Testing Library
- Storybook
- Tailwind CSS
- ESLint
- Prettier

Recommended:
- class-variance-authority
- clsx
- tailwind-merge
- @storybook/addon-a11y
- axe-core
- eslint-plugin-jsx-a11y

---

# Mandatory Workflow

## Phase 1 — Planning

Act as `planner-agent`.

Before implementation:

1. Create a planning document inside:

```txt
/docs/plans
```

Naming convention:

YYYY-MM-DD-library-bootstrap.md

Location:

/docs/plans/

The planning document MUST include:

# Objective

Define:

- why the library exists
- target consumers
- target platforms
- expected scalability goals
- design philosophy

# Scope

Define:

- what the library includes
- what the library explicitly excludes
- MVP boundaries
- future extensibility considerations

# Architecture Decisions

Define and justify:

- component architecture
- styling architecture
- build architecture
- export strategy
- token strategy
- accessibility approach
- testing approach
- documentation strategy

# Folder Structure

Explain the purpose of every top-level folder.

# Dependency Strategy

Define:

- runtime dependencies
- peer dependencies
- dev dependencies
- dependency minimization strategy
- versioning strategy

# Accessibility Strategy

Mandatory considerations:

- WCAG goals
- semantic-first HTML
- keyboard navigation
- screen reader support
- focus management
- touch targets
- reduced motion support

# Testing Strategy

Mandatory considerations:

- unit testing
- accessibility testing
- interaction testing
- coverage expectations
- CI validation strategy

# Storybook Strategy

Define:

- documentation philosophy
- story structure
- accessibility addon usage
- interaction testing
- visual consistency strategy

# Mobile / WebView Considerations

Define:

- touch interactions
- viewport behavior
- safe area handling
- performance constraints
- gesture considerations
- responsive constraints

# Risks

Document:

- architectural risks
- dependency risks
- styling risks
- build risks
- scalability risks

# Rollback Strategy

Define:

- dependency rollback
- release rollback
- architectural rollback procedures

# Definition of Done

A task is NOT complete unless:

- typed correctly
- tested
- documented
- accessible
- tree-shakable
- Storybook documented
- exported correctly

---

# HARD RULE

Implementation MUST NOT begin until the planning document exists.

No exceptions.
Yes, this is bureaucracy.
No, you cannot skip it.
Future-you will complain less.

---

# Phase 2 — Repository Governance

Create the following repository structure:

```txt
/docs
  /plans
  /adr

/.claude
  /agents
```

If architectural decisions are made during setup:

Create ADRs inside:

/docs/adr

Naming convention:

```txt
001-library-architecture.md
002-tailwind-strategy.md
003-build-distribution-strategy.md
```

Each ADR MUST contain:

- context
- decision
- consequences
- alternatives considered

---

# Phase 3 — Project Initialization

Initialize:

- Git repository
- package.json
- README.md
- .gitignore

README.md MUST include:

- project purpose
- stack
- setup instructions
- development scripts
- contribution guidelines
- accessibility commitment

---

# Phase 4 — Tooling Setup

## TypeScript

Configure:

- strict mode enabled
- noImplicitAny enabled
- isolatedModules enabled
- declaration generation
- path aliases

Alias rules:

```json
{
  "@/*": ["src/*"]
}
```

Mandatory:

- zero usage of any
- explicit typing
- isolated type definitions where appropriate

---

## Vite

Configure library mode with:

- ESM output
- CJS output
- tree-shaking compatibility
- sourcemaps
- declaration generation support

Mandatory:

- side-effect free exports
- optimized package exports
- clean build pipeline

---

## Tailwind CSS

Requirements:

- token-oriented setup
- no arbitrary values
- dark mode ready
- scalable theme structure
- semantic design tokens

Mandatory token categories:

```txt
colors
spacing
radius
typography
z-index
motion
```

Forbidden:

```txt
className="w-[37px]"
className="mt-[13px]"
```

You are building a design system.
Not escaping CSS prison with inline hacks.

---

## Vitest

Configure:

- React Testing Library
- jsdom
- coverage support
- accessibility testing support

Mandatory:

- test utilities
- reusable render helpers
- isolated test setup

Coverage expectations:

- components
- hooks
- utilities

---

## Storybook

Configure using:

- Vite framework

Mandatory addons:

- @storybook/addon-a11y
- @storybook/addon-viewport
- @storybook/addon-interactions

Stories MUST include:

- default state
- variants
- disabled state
- loading state
- interaction examples
- accessibility considerations

---

# Required Folder Structure

Create:

```txt
/src
  /components
  /hooks
  /utils
  /types
  /styles
  /tokens

/docs
  /plans
  /adr

/.storybook

/.claude
  /agents
```

Recommended component structure:

```txt
/components
  /Button
    Button.tsx
    Button.types.ts
    Button.test.tsx
    Button.stories.tsx
    index.ts
```

---

# Import Rules

Use aliases instead of deep relative imports.

Preferred:

```ts
import { Button } from '@/components/Button'
```

Forbidden:

```ts
import { Button } from '../../../../components/Button'
```

If imports look like archaeological layers,
the architecture is already rotting.

---

# First Component — Button

Create a minimal Button component following ALL architecture rules.

Requirements:

- semantic button element
- strict typing
- accessible states
- keyboard-safe behavior
- Tailwind styling
- variant support
- loading support
- disabled support
- forwardRef support
- Storybook stories
- unit tests
- accessibility tests

Required files:

```txt
Button/
 ├── Button.tsx
 ├── Button.types.ts
 ├── Button.test.tsx
 ├── Button.stories.tsx
 ├── index.ts
```

---

# Accessibility Rules

Mandatory:

- visible focus states
- keyboard navigation
- disabled state support
- minimum touch target sizing
- semantic HTML only
- aria support where appropriate
- reduced motion consideration

Forbidden:

- clickable divs
- missing focus indicators
- tabindex abuse
- keyboard traps
- inaccessible icon-only buttons

Semantic HTML first.
ARIA is not duct tape for bad markup.

---

# Performance Rules

Mandatory:

- tree-shakable exports
- no unnecessary re-renders
- memoization only when justified
- side-effect free exports
- optimized bundle structure
- no arbitrary Tailwind values

Forbidden:

- premature memoization
- oversized dependencies
- component-level business logic
- runtime-heavy styling solutions

---

# Repository Rules

Forbidden:

- implementation before planning
- undocumented architecture decisions
- usage of any
- deep relative imports
- business logic inside UI components
- arbitrary Tailwind values
- implicit exports
- mutable shared state

Mandatory:

- explicit exports
- predictable structure
- composable APIs
- isolated concerns
- accessibility-first mindset

---

# Execution Strategy

Execute tasks STRICTLY in this order:

1. planner-agent
2. architect-agent
3. repository-governance-agent
4. performance-agent
5. a11y-agent
6. task-runner-agent
7. testing-strategy-agent
8. documentation-agent

Do not reorder phases.
Do not skip phases.
Do not parallelize architectural decisions prematurely.

Chaos is fast.
Maintenance is slower.

---

# Final Deliverables

At the end provide:

## Repository Structure

Full generated tree.

## Installed Dependencies

Grouped by:

- dependencies
- peerDependencies
- devDependencies

## Created ADRs

List all ADR files created.

## Created Planning Documents

List all planning documents created.

## Setup Summary

Explain:

- architecture decisions
- build strategy
- testing strategy
- accessibility strategy
- token strategy

## Next Recommended Steps

Recommend:

- CI/CD
- release automation
- visual regression testing
- semantic versioning
- changelog automation
- monorepo considerations
- package publishing strategy

---

# Global Rules

Mandatory:

- TypeScript-first architecture
- accessibility-first implementation
- semantic HTML
- composable components
- scalable structure
- documentation-first workflow
- maintainable exports
- deterministic builds

Forbidden:

- placeholder architecture
- weak typing
- hidden dependencies
- undocumented setup
- inaccessible interactions
- CSS chaos
- implementation shortcuts

You are building infrastructure.
Not a weekend side quest held together by optimism and caffeine.