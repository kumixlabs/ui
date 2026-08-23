# @kumix/ui

## 0.3.9

### Patch Changes

- [`b46d6eb`](https://github.com/kumixlabs/ui/commit/b46d6eb228f68b099f96571a210f89926492c8e1) Thanks [@kumixio](https://github.com/kumixio)! - fix: resolve keyboard highlight during render instead of passive effects — `ai-sidebar` roving tabindex no longer skips on first paint/SSR, `command-palette` + `morphing-search` cursor holds row id stamped with query (Enter can't commit wrong row after list changes), `combobox` keeps filtering by the open query during exit animation. Adds `use-on-open` + `use-row-cursor` hooks and `combobox/use-active-option`.

## 0.3.8

### Patch Changes

- [`e41a63e`](https://github.com/kumixlabs/ui/commit/e41a63ea0819e26e3e33401150e19bad6bc4084e) Thanks [@kumixio](https://github.com/kumixio)! - Add ReUI cascader (multi-column, async, i18n), split ReUI filters into a `filters/*` directory (builder, chip, date, DnD, advanced), and add beUI morphing-search. Introduce `lib/presence-gate` and rework fixed overlays (bottom-sheet, drawer, morphing-modal, morphing-search, center-morph-modal, command-palette, animated-sidebar, attachment-upload, project-folder) to release interaction on exit start via `PresenceGate`, removing the full-viewport wrapper that clipped edge sampling. Fix text-shimmer to respect `prefers-reduced-motion` in installed copies. Align checkbox, radio-group, switch, and field focus styles with the `group-has-focus-visible/field-label` pattern.

## 0.3.7

### Patch Changes

- [`d507ef6`](https://github.com/kumixlabs/ui/commit/d507ef6faedb0298912a769bb36b1b6a69dd8044) Thanks [@kumixio](https://github.com/kumixio)! - fix: iOS Safari touch, gesture and narrow-width defects across the component set

## 0.3.6

### Patch Changes

- [`e1c25fa`](https://github.com/kumixlabs/ui/commit/e1c25fabe7aa5841741bfa3a590babbeda57e86c) Thanks [@kumixio](https://github.com/kumixio)! - update dependencies and improve motion components

  - Bump react-resizable-panels to version 4.12.3
  - Enhance BottomSheet component with accessibility improvements
  - Refactor ActionSwapText component for better performance
  - Add unique IDs for accessibility in BottomSheet component
  - Update styles in ComboboxList and TabsTrigger components
  - Add project folder block components

## 0.3.5

### Patch Changes

- [`9f5322e`](https://github.com/kumixlabs/ui/commit/9f5322e9be00239d369552cba01a0645d19beedc) Thanks [@kumixio](https://github.com/kumixio)! - Fix popover goo layer hiding trigger label in Safari by replacing SVG mask with clip-path, reuse TextScramble in ReasoningText scramble variant, add renderWorkingStatus/renderCompletedStatus render props to agent-activity, add @beui/combobox to add:beui:components script

## 0.3.4

### Patch Changes

- [`8ecfcde`](https://github.com/kumixlabs/ui/commit/8ecfcdea3062232aa6e4e6b49b124c2659d6eb1c) Thanks [@kumixio](https://github.com/kumixio)! - Add motion `signup-form` component and `aria-describedby` support on motion `checkbox`.
  Bump `@paper-design/shaders-react` to ^0.0.80. Fix `signup-form` in beui:blocks add script.

## 0.3.3

### Patch Changes

- [`a189553`](https://github.com/kumixlabs/ui/commit/a189553a50d64955eefbb288c5cc9ea5bc20240c) Thanks [@kumixio](https://github.com/kumixio)! - Add `peerDependenciesMeta` — 21 peers now optional (6 required: react, @kumix/utils, @base-ui/react, class-variance-authority, lucide-react, motion). Add `ButtonLink` (anchor variant) to motion/button. Add `morphing-tabs` component. Expand data-grid sort functions to full v9 set (alphanumeric, datetime, case-sensitive). Add drag-to-create range readout in event-calendar (all views). Add `QuestionnaireChoiceDescription` to questionnaire. Fix animated-toast-stack alignment.

## 0.3.2

### Patch Changes

- [`0336441`](https://github.com/kumixlabs/ui/commit/0336441d990a85985e336f4f871ca18ec7b1c08c) Thanks [@kumixio](https://github.com/kumixio)! - Add beUI AI agent components under `components/agents/` (20 files: prompt-input, message-scroller, ai-sidebar, code-block, citations, file-diff, image-generation, todo-list, tool-approval, tool-result, streaming-response, agent-code, agent-disclosure, chat-app, message, message-bubble, message-context, agent-activity/_, approval-card/_, loading-states/*). Add shadcn `questionnaire` component. Add `lib/favicon.ts` and `lib/text-shimmer.ts`. Migrate data-grid from TanStack Table v8 to v9 (`useReactTable` → `useTable`, `tableFeatures()` API, `columnResizing` state, `start`/`end` pinning, `Subscribe` for React Compiler, `sortFn` naming). Remove `ui/sonner` (superseded by `custom/toast`). Add `shiki` peer dep for `agents/code-block`. Update `fix-imports.mjs` to handle `components/agents/` paths.

## 0.3.1

### Patch Changes

- [`a77b10f`](https://github.com/kumixlabs/ui/commit/a77b10f5f800ba83c5eaa40fad650124c99ec6da) Thanks [@kumixio](https://github.com/kumixio)! - Add 19 new beUI motion components: attachment-upload, availability-scheduler, bloom-menu, command-palette, dynamic-island, expandable-action-bar, expandable-tabs, feedback-widget, file-upload, infinite-masonry, notification-stack, not-found (5 variants), otp-input, overflow-actions, swipeable-list. Fix toast icon alignment. Add custom/confirm-dialog (ConfirmDialog + ConfirmSignOut) and custom/toast (global toast helpers wrapping animated-toast-stack).

## 0.3.0

### Minor Changes

- [`32ce5b0`](https://github.com/kumixlabs/ui/commit/32ce5b06e0a6bbc1c7fe5a2b52e02e5c790ee2ed) Thanks [@kumixio](https://github.com/kumixio)! - Add beUI (Motion-based animated components) registry under `components/motion/`, shared utilities under `lib/`, and new hooks. Export map now includes `./lib/*` and `./motion/*`.

## 0.2.4

### Patch Changes

- [`5f1e89f`](https://github.com/kumixlabs/ui/commit/5f1e89fc72e57bcc0e4267caf40368c2667667ad) Thanks [@kumixio](https://github.com/kumixio)! - Adjust CSS variables for improved theming in theme.css & update font classes to use 'font-heading' in various UI component files for consistency.

## 0.2.3

### Patch Changes

- [`924544a`](https://github.com/kumixlabs/ui/commit/924544a557e33b6efdbc29326a8f7314e40a47b3) Thanks [@kumixio](https://github.com/kumixio)! - Sync ReUI registry upstream: data-grid `scrollToRowIndex` API, event-calendar RFC 5545 recurrence LIMIT filters and DnD pointer-scoping fixes, gantt ctrl/cmd wheel-zoom, kanban and sortable concurrent-safe mounted gate, new `icon-tile` component, and type-import housekeeping across components.

## 0.2.2

### Patch Changes

- [`b0d2053`](https://github.com/kumixlabs/ui/commit/b0d205346b001cb554b051e94edc8f34ff8c7278) Thanks [@kumixio](https://github.com/kumixio)! - Update event calendar agenda view styles

  - Adjust styles to remove the bottom border from the last agenda item to prevent double borders with the calendar container.
  - Enhance the sticky header to account for custom scrollbar visibility, ensuring it does not overlap with the header background.

## 0.2.1

### Patch Changes

- [`303d104`](https://github.com/kumixlabs/ui/commit/303d1049308ac12bcf8fa4c4fafb0acce577c215) Thanks [@kumixio](https://github.com/kumixio)! - Remove `peerDependenciesMeta` so all declared peers are required; update install docs accordingly.

## 0.2.0

### Minor Changes

- [`1ffb990`](https://github.com/kumixlabs/ui/commit/1ffb990b5bad9f16eff9db7c954940f6bfcdef33) Thanks [@kumixio](https://github.com/kumixio)! - Rebuild `@kumix/ui` around **shadcn/ui** (Base UI, base-nova) and **ReUI** components.
  - Ship shadcn primitives under `components/ui` and ReUI under `components/reui` (data-grid, event-calendar, gantt, filters, kanban, and more).
  - Per-file ESM exports (no barrel); CSS via `@kumix/ui/css` and `@kumix/ui/theme`.
  - Internal imports use relative paths and `@kumix/utils` (no `@/` aliases in published source).
  - Drop the separate shadcn package layout; single `@kumix/ui` package for consumers.

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
