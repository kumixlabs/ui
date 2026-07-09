# @kumix/ui

## 0.1.3

### Patch Changes

- [`366ad09`](https://github.com/kumixlabs/ui/commit/366ad09db13a71ab5826e59584ab7cb8d6761ddf) Thanks [@kumixio](https://github.com/kumixio)! - Add a new `@kumix/ui/css/source` export.

  The package now ships a dedicated `source.css` entry (emitted as `dist/source.css`) containing the Tailwind `@source` directive for the package. Consumers on Tailwind v4 can import `@kumix/ui/css/source` to make their build scan the compiled component classes without pulling in the full theme stylesheet from `@kumix/ui/css`.

## 0.1.2

### Patch Changes

- [`50f4508`](https://github.com/kumixlabs/ui/commit/50f4508963dd51167080066e6d5c321384f44bb0) Thanks [@kumixio](https://github.com/kumixio)! - Add new components: `Attachment`, `Bubble`, `Chart` (Recharts-based), `Combobox`, `DirectionProvider` (RTL/LTR), `InputGroup`, `Marker`, `Message`, `MessageScroller`, and `NativeSelect`.

  Adds `@base-ui/react` and `recharts` as peer dependencies for the new components.

## 0.1.1

### Patch Changes

- [`4ef5de6`](https://github.com/kumixlabs/ui/commit/4ef5de6d7cff7f38c1633f23f94822599bbf4b24) Thanks [@kumixio](https://github.com/kumixio)! - Add `ErrorBoundary` component and harden several components:

  - **ErrorBoundary**: new component with a default fallback, `onError` callback, and value-based `resetKeys` comparison (previously compared by reference, which could cause reset loops or fail to reset).
  - **Rating**: fix accessibility by removing the dual-focus conflict; the slider role now lives only on the container while stars are non-focusable, plus keyboard navigation (Arrow/Home/End) and correct ARIA slider semantics.
  - **Alert**: fix invalid Tailwind arbitrary-variant syntax (`*:data-slot=alert-icon:` → `*:data-[slot=alert-icon]:`) so icon spacing applies correctly.
  - **useMediaQuery**: reimplement with `useSyncExternalStore` for SSR-safe, concurrent-safe reads without a first-render flash.

## 0.1.0

### Minor Changes

- [`12b268c`](https://github.com/kumixlabs/ui/commit/12b268cc1a560575492f4a5ead4af87d0e3a0f67) Thanks [@kumixio](https://github.com/kumixio)! - Initial release of the Kumix UI React component package.

  This release publishes the first `@kumix/ui` package with component exports, hooks, CSS entry, TypeScript declarations, package validation, and baseline tests.
