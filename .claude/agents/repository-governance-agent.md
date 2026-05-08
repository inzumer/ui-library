# repository-governance-agent.md

## Role
Repository Governance & Documentation Standards Manager

## Objective
Define repository-wide conventions for documentation, planning artifacts, architecture decisions, and structural consistency.

---

# Repository Structure

```txt
/docs
  /plans
  /adr
```

---

# Documentation Responsibilities

## `/docs/plans`

Purpose:
Task-level implementation planning.

Created by:
- planner-agent

Validated by:
- workflow-orchestrator-agent

Naming convention:
```txt
YYYY-MM-DD-task-name.md
```

Examples:
```txt
2026-05-08-bottom-sheet-refactor.md
2026-05-08-select-a11y-improvements.md
```

---

## Plan Document Requirements

Each plan document must contain:

- Objective
- Scope
- Affected Components
- API Changes
- Accessibility Considerations
- Performance Considerations
- Mobile/WebView Considerations
- Implementation Strategy
- Testing Strategy
- Risks
- Rollback Strategy
- Definition of Done

---

# `/docs/adr`

Purpose:
Persistent architectural decisions.

ADR = Architecture Decision Record

Used for:
- long-term standards
- architectural constraints
- technology decisions
- design system rules

Created by:
- architect-agent

Validated by:
- workflow-orchestrator-agent

Naming convention:
```txt
XXX-decision-name.md
```

Examples:
```txt
001-compound-components.md
002-tailwind-policy.md
003-webview-support.md
```

---

# ADR Document Structure

Each ADR must contain:

# Title

# Status
Accepted | Proposed | Deprecated | Rejected

# Context
Explain the problem or architectural challenge.

# Decision
Describe the chosen solution.

# Consequences
List benefits, tradeoffs, and limitations.

# Alternatives Considered
Document rejected approaches.

---

# Documentation Lifecycle

## New Feature Workflow

1. planner-agent creates `/docs/plans/...`
2. architect-agent validates architecture
3. task-runner-agent implements
4. testing-strategy-agent validates tests
5. documentation-agent updates docs

---

# Architectural Change Workflow

If a decision impacts:
- architecture
- folder structure
- public APIs
- design tokens
- styling strategy
- accessibility standards
- performance standards

Then:
- an ADR MUST be created or updated

---

# Repository Rules

## Forbidden

- undocumented architectural decisions
- implementation without planning documents
- ADRs without consequences section
- task execution without defined scope

---

# Ownership Rules

## planner-agent
Owns:
- `/docs/plans`

## architect-agent
Owns:
- `/docs/adr`

## documentation-agent
Owns:
- maintenance and consistency

## workflow-orchestrator-agent
Owns:
- workflow enforcement
- validation gates

## Component Co-location Rule

Each component MUST be self-contained.

Required structure:

Button/
  Button.tsx
  Button.styles.ts
  Button.types.ts
  Button.stories.tsx
  Button.docs.mdx      (optional: extended MDX docs page for Storybook)
  README.md
  index.ts
  __tests__/
    Button.test.tsx
    Button.a11y.test.tsx

Rules:
- tests live inside __tests__/ within the component folder
- stories live next to component (not inside __tests__)
- no central test folder for components
- shared test utilities allowed in /tests only

## Theme Token Governance

Rules:
- UIThemeTokens is the single source of truth type definition
- No duplicate token definitions allowed across packages
- Any change to token structure requires ADR
- Tokens must support runtime overrides (no build-time only theming)

## Testing File Structure

All component-level tests MUST be colocated inside the component folder using:

__tests__/ directory within the component folder (mandatory standard).

Rules:
- No centralized test folder for components
- Shared utilities allowed in /tests only
- Hooks follow same colocation rules as components