# execution-state-machine.md

## Role
Deterministic Task Execution Pipeline for UI Component Library

## Objective
Enforce a strict lifecycle for all engineering tasks to ensure predictability, quality, and architectural consistency.

---

# State Machine Overview

All tasks MUST pass through the following states:

```
PLAN → VALIDATE → DESIGN → IMPLEMENT → TEST → REVIEW → DOCUMENT → DONE
```

No state may be skipped unless one of the approved shortcut workflows defined in workflow-orchestrator-agent is explicitly invoked (Emergency, Refactor, Accessibility Incident).

---

# STATE 1 — PLAN

## Responsible Agent
planner-agent

## Requirements
- Create `/docs/plans/YYYY-MM-DD-task-name.md`
- Define:
  - scope
  - API contract
  - edge cases
  - UX behavior
  - mobile/WebView behavior
  - testing strategy

## Exit Criteria
- Plan document exists
- Scope is approved

---

# STATE 2 — VALIDATE

## Responsible Agent
workflow-orchestrator-agent + repository-governance-agent

## Requirements
- Validate:
  - plan completeness
  - ADR requirement (if architectural change exists)
  - naming conventions
  - folder impact
  - alias compliance

## Exit Criteria
- No violations in governance rules

---

# STATE 3 — DESIGN

## Responsible Agent
architect-agent + a11y-agent + performance-agent

## Requirements
- Define:
  - component architecture
  - composition model
  - accessibility strategy
  - performance constraints
  - atomic design classification

## Exit Criteria
- Architecture approved
- A11y approved
- Performance constraints defined

---

# STATE 4 — IMPLEMENT

## Responsible Agent
task-runner-agent

## Requirements
- Implement component
- Follow:
  - atomic design structure
  - alias imports only
  - barrel file rules
- Create:
  - component
  - index.ts
  - types
  - styles (if needed)

## Exit Criteria
- Component compiles
- No lint/type errors

---

# STATE 5 — TEST

## Responsible Agent
testing-strategy-agent + task-runner-agent

## Requirements
- Unit tests (Vitest)
- Accessibility tests
- Interaction tests
- Storybook validation
- MSW usage if needed

## Exit Criteria
- ≥ 80% coverage
- No failing tests
- A11y validated

---

# STATE 6 — REVIEW

## Responsible Agent
architect-agent + a11y-agent + performance-agent

## Requirements
- Validate:
  - architecture correctness
  - accessibility compliance
  - performance impact
  - API consistency
  - design system alignment

## Exit Criteria
- All agents approve

---

# STATE 7 — DOCUMENT

## Responsible Agent
documentation-agent

## Requirements
- Update:
  - Storybook stories
  - usage examples
  - limitations
  - mobile considerations
- Ensure clarity and consistency

## Exit Criteria
- Documentation complete and accurate

---

# STATE 8 — DONE

## Responsible Agent
workflow-orchestrator-agent

## Requirements
- Mark task as complete
- Ensure:
  - plan exists
  - tests exist
  - docs exist
  - ADR created if needed

---

# RULES

## Rule 1 — No skipping states
No implementation without PLAN + VALIDATE.

## Rule 2 — No direct execution
task-runner-agent cannot start without DESIGN approval.

## Rule 3 — A11y override
If a11y-agent fails → pipeline resets to DESIGN.

## Rule 4 — Architecture override
If architect-agent rejects → return to PLAN or DESIGN.

## Rule 5 — Performance override
If performance constraints are violated → return to IMPLEMENT.

---

# FAILURE HANDLING

If a task fails at any stage:

- Identify failing agent
- Roll back to previous valid state
- Re-run affected stage only
- Do not restart full pipeline unless required

---

# PRINCIPLE

This system optimizes for:

- deterministic output
- predictable architecture
- reduced cognitive load
- enforced consistency
- scalable design system evolution

It explicitly rejects:
- ad-hoc implementation
- skipping planning
- undocumented changes