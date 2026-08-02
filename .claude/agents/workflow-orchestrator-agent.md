# workflow-orchestrator-agent.md

## Role

Multi-Agent Workflow Orchestrator

## Objective

Coordinate specialized agents during component lifecycle execution.

---

# Standard Workflow

## 1. planner-agent

Responsibilities:

- define API
- define UX behavior
- define edge cases
- define responsive behavior

Output:

- Component contract
- Stories plan
- Testing requirements

---

## 2. architect-agent

Responsibilities:

- validate architecture
- validate composition patterns
- validate folder structure
- validate dependency boundaries

Output:

- Architectural approval

---

## 3. a11y-agent

Responsibilities:

- validate semantics
- validate keyboard behavior
- validate screen reader support

Output:

- Accessibility requirements

---

## 4. performance-agent

Responsibilities:

- validate rendering strategy
- validate animation performance
- validate bundle impact

Output:

- Performance recommendations

---

## 5. task-runner-agent

Responsibilities:

- implement component
- create tests
- create stories
- validate builds

Output:

- Production-ready implementation

---

## 6. testing-strategy-agent

Responsibilities:

- validate testing quality
- validate coverage
- validate edge-case coverage

Output:

- Testing approval

---

## 7. documentation-agent

Responsibilities:

- validate docs
- validate examples
- validate Storybook clarity

Output:

- Documentation approval

---

# Emergency Workflow

For urgent bug fixes:

1. architect-agent
2. a11y-agent
3. task-runner-agent

Skip full orchestration.

---

# Refactor Workflow

1. architect-agent
2. performance-agent
3. task-runner-agent
4. testing-strategy-agent

---

# Accessibility Incident Workflow

1. a11y-agent
2. task-runner-agent
3. testing-strategy-agent

---

# Anti-Patterns

Forbidden:

- implementing before planning
- skipping accessibility validation
- skipping performance validation
- creating undocumented APIs

# Pre-Execution Validation

Before any implementation task:

1. Verify planning document exists in `/docs`
2. Verify filename follows:
   `YYYY-MM-DD-task-name.md`
3. Verify implementation strategy is documented
4. Verify testing strategy is documented
5. Verify affected components are listed

If missing:

- stop execution
- request planning phase first

**Exception:** Emergency, Refactor, and Accessibility Incident shortcut workflows defined in this document are pre-approved and do NOT require a planning document. The executing agent must still create a brief post-implementation note in `/docs/plans` when time permits.

---

# Documentation Lifecycle

Workflow:

1. Planning document created
2. Architecture validated
3. Implementation executed
4. Tests completed
5. Documentation updated
6. Task marked complete

# Repository Governance Validation

Before execution:

- verify `/docs/plans` document exists
- verify naming conventions
- verify ADR requirements for architectural changes

Architectural changes MUST NOT proceed without ADR validation.

## Global Enforcement Rules

The following rules are ALWAYS enforced across all agents:

### Imports & Aliases

- All imports MUST use configured aliases (@components, @hooks, etc.)
- Relative imports are forbidden outside of same folder

### Barrel Files

- All public exports MUST go through index.ts
- No deep imports allowed from internal files

### Documentation Structure

- All planning documents MUST go in /docs/plans
- All architectural decisions MUST go in /docs/adr

### Mocking Strategy

- Only external systems may be mocked
- Internal components MUST NOT be mocked

### Pre-Execution Rule

- No implementation is allowed without:
  - a planning document (if feature work)
  - ADR (if architectural change required)

### Execution Authority

If any agent violates these rules:

- execution must stop
- system must request correction via planner-agent

## Testing Enforcement Rule

No component is considered complete unless:

- test file exists in colocated structure
- tests validate behavior (not implementation)
- accessibility scenarios are covered where applicable
