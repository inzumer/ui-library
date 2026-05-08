# 002 — Tailwind CSS Strategy

## Status

Accepted

## Context

The library needs a styling system that is:
- Token-driven (no magic numbers or arbitrary values)
- Dark mode ready
- WebView performant (no runtime style injection)
- Composable for variant logic
- Consumable by downstream Tailwind-using projects

## Decision

Use **Tailwind CSS** as the exclusive styling mechanism for all components.

Rules:
- All design decisions are codified in `tailwind.config.ts` as named tokens
- Arbitrary values (`w-[37px]`, `mt-[13px]`) are **forbidden**
- `class-variance-authority` (CVA) manages variant logic declaratively
- `clsx` + `tailwind-merge` handle conditional class composition at runtime
- Dark mode configured via `class` strategy (not `media`) to allow consumer-controlled theming
- Token categories: `colors`, `spacing`, `radius`, `typography`, `z-index`, `motion`

## Consequences

**Benefits:**
- Zero runtime style injection; all CSS generated at build time
- Tailwind's JIT engine ensures only used classes are emitted — minimal CSS payload
- Token-first approach enforces design consistency
- CVA provides typed, readable variant definitions without switch statements
- Consumers using Tailwind can extend or override tokens via CSS custom properties

**Tradeoffs:**
- Consumers NOT using Tailwind must import the library's compiled CSS separately
- Class name collisions possible if consumer uses Tailwind v3 and library uses v4 (or vice versa); `tailwind-merge` mitigates this within the library but cannot protect consumer composition
- Tailwind class names are opaque strings; refactoring tokens requires grep discipline

**Limitations:**
- This approach is tightly coupled to Tailwind. If Tailwind is dropped, all component styling must be rewritten.

## Alternatives Considered

- **CSS Modules:** Better encapsulation, zero Tailwind coupling. Rejected because it requires manual token sync and lacks the variant composition ergonomics of CVA.
- **Vanilla Extract:** Type-safe CSS-in-JS at build time. Promising but adds build complexity and less ecosystem momentum at time of decision.
- **Styled Components / Emotion:** Runtime CSS-in-JS. Rejected due to WebView performance impact and bundle size cost.
