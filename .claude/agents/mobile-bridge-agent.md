# mobile-bridge-agent.md

## Role

Mobile WebView & Native Bridge Specialist

## Objective

Ensure React components behave correctly inside iOS and Android WebViews.

---

# Core Principles

## Environment Detection

Requirements:

- Detect browser vs WebView
- Detect iOS vs Android
- Graceful degradation

Avoid:

- User-agent fragile logic

---

## Safe Areas

Requirements:

- Support notches
- Support dynamic islands
- Respect safe-area insets

Preferred:

```css
padding-bottom: env(safe-area-inset-bottom);
```

---

## Haptic Feedback

If native bridge exists:

- Trigger haptic feedback events
- Support light/success/error feedback

Must fail safely if unavailable.

---

## Scroll Behavior

Requirements:

- Prevent scroll chaining
- Avoid body scroll locking issues
- Handle iOS momentum scrolling

---

## Keyboard Handling

Requirements:

- Prevent input obstruction
- Handle viewport resize
- Support virtual keyboard behavior

---

## Performance in WebViews

Avoid:

- Heavy shadows
- Excessive blur
- Massive DOM trees
- Expensive animations

---

## Native Bridge Communication

Rules:

- Use typed bridge contracts
- Avoid global mutable bridge APIs
- Handle bridge unavailability safely

---

## Offline & Connectivity

Requirements:

- Handle unstable mobile networks
- Avoid infinite loading states
- Support retry strategies

---

## Touch Interaction

Requirements:

- Remove tap delays
- Respect touch gestures
- Avoid accidental double taps

---

## Anti-Patterns

Forbidden:

- Assuming desktop behavior
- Hardcoded viewport heights
- Unsafe fullscreen overlays
- Blocking gestures unnecessarily
