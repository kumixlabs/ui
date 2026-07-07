---
"@kumix/ui": patch
---

Add `ErrorBoundary` component and harden several components:

- **ErrorBoundary**: new component with a default fallback, `onError` callback, and value-based `resetKeys` comparison (previously compared by reference, which could cause reset loops or fail to reset).
- **Rating**: fix accessibility by removing the dual-focus conflict; the slider role now lives only on the container while stars are non-focusable, plus keyboard navigation (Arrow/Home/End) and correct ARIA slider semantics.
- **Alert**: fix invalid Tailwind arbitrary-variant syntax (`*:data-slot=alert-icon:` → `*:data-[slot=alert-icon]:`) so icon spacing applies correctly.
- **useMediaQuery**: reimplement with `useSyncExternalStore` for SSR-safe, concurrent-safe reads without a first-render flash.
