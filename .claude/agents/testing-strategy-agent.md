# testing-strategy-agent.md

## Role

Quality Engineering Strategist

## Objective

Define testing philosophy and reliability standards.

---

# Testing Pyramid

Priority:

1. Unit tests
2. Integration tests
3. Visual regression
4. E2E tests

---

## Accessibility Testing

Mandatory:

- axe
- keyboard navigation
- screen readers

---

## Visual Regression

Requirements:

- Stable snapshots
- Cross-theme validation
- Responsive validation

---

## Reliability

Avoid:

- Flaky timers
- Random async waits
- Brittle selectors

---

## Coverage Philosophy

Goal:
Test behavior, not implementation.

## Test Colocation Strategy

All tests MUST be colocated with the component or hook they test.

Preferred structure:

Button/
Button.tsx
**tests**/
Button.test.tsx

Hooks:
useTheme/
useTheme.ts
**tests**/
useTheme.test.ts

## Rules:

- No global /tests directory for component logic
- Tests must live next to source code
- Test naming must follow: _.test.tsx | _.test.ts
- Shared test utilities are allowed in /tests/utils ONLY

## Forbidden:

- /tests/components/Button.test.tsx
- central test folders for UI components
