---
"@kumix/ui": patch
---

Add shadcn `ui/code-block` (copy button, line numbers, wrap, variants) and `ui/trace` (collapsible trace lines for agent runs), new hooks `use-focus-trap`, `use-listbox`, `use-highlighted-code`, and `lib/highlighter` (lazy Shiki core, 14 languages + `ansi`).

Motion: `tabs` gains spring-tracked pill and `icons="always" | "selected"`; `select` / `select-morph` adopt the shared listbox keyboard model (arrows, Home/End, typeahead) with focus returning to the trigger; `drawer` and `bottom-sheet` trap focus while open (stack-aware, Escape closes); animation tuning across `action-swap`, `animated-badge`, `bloom-menu`, `bouncy-accordion`, `morphing-modal`, `otp-input`, `popover`, `popover-morph`, `radio`, `shader-background`, `shared-layout-bg`, `swipeable-list`, `feedback-widget`.

ReUI: React Compiler compatibility for `event-calendar`, `date-selector`, `gantt`, and `data-grid` (`"use no memo"` on interactive parts, selector-based clock/index reads); `cascader` fixes async deep links and page-loaded levels after `loadKey` changes (stub levels, more-row); `file-type` adds 30+ extensions (mdx, numbers, parquet, sqlite, vue, svelte, astro, graphql, wasm, …) and a custom short `label`; `autocomplete` hides its scroll area when the list filters to empty.

Dependency bumps: `turbo` 2.11.9, `react`/`react-dom` 19.3.1, `motion` 14.4.0, `lucide-react` 1.59.0, `@tanstack/react-virtual` 3.14.21, `@headless-tree/core` 1.8.0, `react-resizable-panels` 4.14.7.
