# @kumix/ui

React UI kit for Kumix products. Built on **Base UI**, **Tailwind CSS**, **class-variance-authority**, and **Motion**. Ships as ESM with per-file exports (no barrel).

## Sources

| Path                              | Origin                                                       | Docs / previews                                                                 |
| --------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| `src/components/ui/*`             | [shadcn/ui](https://ui.shadcn.com/) (base-nova style)        | [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)          |
| `src/components/reui/*`           | [ReUI](https://reui.io/) registry (`@reui/*`)                | [reui.io/docs](https://reui.io/docs) · [components](https://reui.io/components) |
| `src/components/motion/*`         | [beUI](https://beui.dev/) registry (`@beui/*`, Motion-based) | [beui.dev/components/motion](https://beui.dev/components/motion)                |
| `src/components/custom/*`         | Hand-written Kumix-specific components                       | —                                                                               |
| `src/hooks/*`                     | Package helpers (+ ReUI `use-file-upload`, beUI helpers)     | —                                                                               |
| `src/lib/*`                       | Shared utilities (beUI `ease`, `tick-sound`)                 | —                                                                               |
| `src/style.css` · `src/theme.css` | Tailwind entry + design tokens                               | —                                                                               |

For **previews, props, and usage examples** of each component, use the upstream docs:

- shadcn: https://ui.shadcn.com/docs/components/`<name>`
- ReUI: https://reui.io/docs/components/base/`<name>` (or browse https://reui.io/components)
- beUI: https://beui.dev/components/motion/`<name>`

This package is a maintained distribution: imports rewritten for monorepo (`@kumix/utils`, relative paths), Biome/TypeScript clean, published via npm. Motion components bundle `motion`, `lenis`, and `@paper-design/shaders-react` — no extra installs needed.

## Install

```bash
bun add @kumix/ui @kumix/utils
```

Install peers (see `package.json` → `peerDependencies`). All listed peers are **required** by the package (no `peerDependenciesMeta`); install what your app needs for the components you import.

```bash
bun add @base-ui/react class-variance-authority lucide-react react
```

**Core (almost every app):** `react`, `@base-ui/react`, `class-variance-authority`, `lucide-react`, `@kumix/utils`.

**Feature peers** (required in `package.json`; needed at runtime only if you import those components):

| Peer                                                | Used by                                        |
| --------------------------------------------------- | ---------------------------------------------- |
| `next-themes`                                       | `sonner`, `use-meta-color`                     |
| `@shadcn/react`                                     | `message-scroller`                             |
| `@tanstack/react-table` · `@tanstack/react-virtual` | data-grid                                      |
| `@dnd-kit/*`                                        | kanban, sortable, data-grid DnD                |
| `date-fns` · `@date-fns/tz`                         | calendar, event-calendar, gantt, date-selector |
| `recharts`                                          | chart                                          |
| `sonner`                                            | toaster                                        |
| `cmdk`                                              | command                                        |
| `embla-carousel-react`                              | carousel                                       |
| `input-otp`                                         | input-otp                                      |
| `react-day-picker`                                  | calendar                                       |
| `react-phone-number-input`                          | phone-input                                    |
| `react-resizable-panels`                            | resizable                                      |
| `@headless-tree/core`                               | tree                                           |

## Import paths

Per-file exports (no root barrel):

```ts
// shadcn (ui)
import { Button } from "@kumix/ui/ui/button";
import { Dialog, DialogContent } from "@kumix/ui/ui/dialog";

// reui
import { Kanban } from "@kumix/ui/reui/kanban";
import { DataGrid } from "@kumix/ui/reui/data-grid/data-grid";

// beUI (motion)
import { TiltCard } from "@kumix/ui/motion/tilt-card";
import { MorphingModal } from "@kumix/ui/motion/morphing-modal";

// custom
import { ConfirmDialog } from "@kumix/ui/custom/confirm-dialog";

// hooks
import { useIsMobile } from "@kumix/ui/hooks/use-mobile";
import { useFileUpload } from "@kumix/ui/hooks/use-file-upload";

// lib (beUI helpers)
import { ease } from "@kumix/ui/lib/ease";

// styles (Tailwind v4)
import "@kumix/ui/css";
import "@kumix/ui/theme";
```

Mapped from source:

| Source                                        | Import                               |
| --------------------------------------------- | ------------------------------------ |
| `src/components/ui/button.tsx`                | `@kumix/ui/ui/button`                |
| `src/components/reui/kanban.tsx`              | `@kumix/ui/reui/kanban`              |
| `src/components/reui/data-grid/data-grid.tsx` | `@kumix/ui/reui/data-grid/data-grid` |
| `src/components/motion/tilt-card.tsx`         | `@kumix/ui/motion/tilt-card`         |
| `src/components/motion/morphing-modal.tsx`    | `@kumix/ui/motion/morphing-modal`    |
| `src/components/custom/confirm-dialog.tsx`    | `@kumix/ui/custom/confirm-dialog`    |
| `src/hooks/use-mobile.ts`                     | `@kumix/ui/hooks/use-mobile`         |
| `src/lib/ease.ts`                             | `@kumix/ui/lib/ease`                 |
| `src/style.css`                               | `@kumix/ui/css`                      |
| `src/theme.css`                               | `@kumix/ui/theme`                    |

## Components

### shadcn (`components/ui`)

Base UI / shadcn base-nova. Preview: [ui.shadcn.com](https://ui.shadcn.com/docs/components).

`accordion` · `alert` · `alert-dialog` · `aspect-ratio` · `attachment` · `avatar` · `badge` · `breadcrumb` · `bubble` · `button` · `button-group` · `calendar` · `card` · `carousel` · `chart` · `checkbox` · `collapsible` · `combobox` · `command` · `context-menu` · `dialog` · `direction` · `drawer` · `dropdown-menu` · `empty` · `field` · `hover-card` · `input` · `input-group` · `input-otp` · `item` · `kbd` · `label` · `marker` · `menubar` · `message` · `message-scroller` · `native-select` · `navigation-menu` · `pagination` · `popover` · `progress` · `radio-group` · `resizable` · `scroll-area` · `select` · `separator` · `sheet` · `sidebar` · `skeleton` · `slider` · `sonner` · `spinner` · `switch` · `table` · `tabs` · `textarea` · `toggle` · `toggle-group` · `tooltip`

### ReUI (`components/reui`)

Extended patterns. Preview: [reui.io](https://reui.io/docs).

| Module                                                                                                                           | Notes                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `alert` · `badge`                                                                                                                | Extended variants (info/success/warning/…) |
| `autocomplete`                                                                                                                   | Base UI autocomplete                       |
| `data-grid/*`                                                                                                                    | Table, pagination, filters, DnD, virtual   |
| `date-selector`                                                                                                                  | Day / month / quarter / range              |
| `event-calendar/*`                                                                                                               | Month, week, day, agenda, resource         |
| `filters`                                                                                                                        | Faceted filter builder                     |
| `frame`                                                                                                                          | Nested panel layout                        |
| `gantt/*`                                                                                                                        | Day–year scales, resources, DnD            |
| `icon-stack` · `kanban` · `number-field` · `phone-input` · `rating` · `scrollspy` · `sortable` · `stepper` · `timeline` · `tree` | —                                          |

### beUI (`components/motion`)

Animated components built with [Motion](https://motion.dev). Preview: [beui.dev](https://beui.dev/components/motion). Bundled — `motion`, `lenis`, `@paper-design/shaders-react` are included, no extra installs needed.

`action-swap` · `animated-badge` · `animated-number` · `animated-sidebar` · `animated-toast-stack` · `attachment-upload` · `availability-scheduler/*` (copy-menu, day-row, time-select) · `bloom-menu` · `bottom-sheet` · `bounce-sidebar` · `bouncy-accordion` · `button/*` (base, stateful, magnetic) · `center-morph-modal` · `checkbox` · `chromatic-text-reveal` · `command-palette` · `context-menu` · `cylinder-carousel` · `dock` · `drawer` · `dynamic-island` · `expandable-action-bar` · `expandable-tabs` · `feedback-widget` · `file-upload` · `hold-action-button` · `infinite-masonry` · `input` · `loader` · `magnetic` · `marquee` · `morphing-modal` · `not-found/*` (glitch, magnetic, spotlight, stacked, terminal) · `notification-stack` · `number-ticker` · `otp-input` · `overflow-actions` · `parallax` · `popover` · `popover-morph` · `preview-rail` · `pull-to-refresh` · `radio` · `range-slider` (5 variants) · `scroll-progress` · `scroll-reveal` · `scroll-to` · `select` · `select-morph` · `shader-background` · `shared-layout-bg` · `slide-action-button` · `smooth-scroll` · `swipeable-list` · `switch` · `table/*` (virtualized, editable, async) · `tabs` · `text-cascade` · `text-reveal` · `text-shimmer` · `theme-toggle` · `tilt-card` · `tooltip` · `wheel-picker`

### Custom (`components/custom`)

Hand-written Kumix-specific composite components (not from any registry).

`confirm-dialog` — `ConfirmDialog` (destructive alert dialog with loading state) + `ConfirmSignOut` (centered sign-out variant).

`toast` — Global toast system: `ToastContainer` (mount once) + `showToast` / `toastSuccess` / `toastError` / `toastInfo` / `toastLoading` (call anywhere). Wraps `motion/animated-toast-stack`.

### Hooks

`use-body-classes` · `use-copy-to-clipboard` · `use-file-upload` · `use-hover-capable` · `use-hydrated` · `use-intersection-observer` · `use-is-mac` · `use-media-query` · `use-meta-color` · `use-mobile` · `use-mutation-observer` · `use-scroll-position` · `use-slider` · `use-slider-input` · `use-viewport`

- `useIsMobile` (`use-mobile`) — fixed `768px` breakpoint; used by `sidebar` / `date-selector`. First paint may be `false` until mount.
- `useMediaQuery` — arbitrary query string; SSR-safe via `useSyncExternalStore` (server snapshot `false`).
- `useHoverCapable` — detects pointer/hover capability; used by beUI tilt-card.
- `useSlider` — shared slider input logic; used by beUI range-sliders.

## Styling

- Tokens live in `@kumix/ui/theme` (`--background`, `--primary`, `--sidebar`, extended `--success` / `--info` / `--warning` / `--invert`, …).
- In the **app** CSS, also `@source` the package so class names inside published JS are scanned:

  ```css
  @import "@kumix/ui/theme";
  @import "@kumix/ui/css";
  @source "../node_modules/@kumix/ui/dist";
  ```

  (Adjust the path to your monorepo layout.) Shipped `@source "."` only covers files next to the CSS in `dist/`.

- Dark mode: `.dark` class (see `theme.css`).

## Development (monorepo)

```bash
bun install
bun run build --filter=@kumix/ui
bun run types:check --filter=@kumix/ui
bun run lint
```

Refresh registry sources (from `packages/ui`):

```bash
bun run add:shadcn   # shadcn add --all --overwrite
bun run add:reui     # @reui/* components
bun run add:beui     # @beui/* components (Motion-based)
node scripts/fix-imports.mjs   # REQUIRED after CLI adds
```

`fix-imports.mjs` rewrites `@/lib/utils` → `@kumix/utils`, converts `@/components/*` / `@/hooks/*` / `@/lib/*` to relative paths, handles all three registries (`ui`, `reui`, `motion`), and prepends `"use client"` when missing.

## License

MIT © Kumix Labs
