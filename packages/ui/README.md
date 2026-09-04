# @kumix/ui

React UI kit for Kumix products. Built on **Base UI**, **Tailwind CSS**, **class-variance-authority**, and **Motion**. Ships as ESM with per-file exports (no barrel).

## Sources

| Path                              | Origin                                                                                            | Docs / previews                                                                 |
| --------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `src/components/ui/*`             | [shadcn/ui](https://ui.shadcn.com/) (base-nova style)                                             | [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)          |
| `src/components/reui/*`           | [ReUI](https://reui.io/) registry (`@reui/*`)                                                     | [reui.io/docs](https://reui.io/docs) · [components](https://reui.io/components) |
| `src/components/motion/*`         | [beUI](https://beui.dev/) registry (`@beui/*`, Motion-based)                                      | [beui.dev/components/motion](https://beui.dev/components/motion)                |
| `src/components/agents/*`         | [beUI](https://beui.dev/) AI agent components (`@beui/*`)                                         | [beui.dev/components/agents](https://beui.dev/components/agents)                |
| `src/components/custom/*`         | Hand-written Kumix-specific components                                                            | —                                                                               |
| `src/hooks/*`                     | Package helpers (+ ReUI `use-file-upload`, beUI helpers)                                          | —                                                                               |
| `src/lib/*`                       | Shared utilities (beUI `ease`, `tick-sound`, `text-shimmer`, `favicon`, `presence-gate`, `touch`) | —                                                                               |
| `src/style.css` · `src/theme.css` | Tailwind entry + design tokens                                                                    | —                                                                               |

For **previews, props, and usage examples** of each component, use the upstream docs:

- shadcn: https://ui.shadcn.com/docs/components/`<name>`
- ReUI: https://reui.io/docs/components/base/`<name>` (or browse https://reui.io/components)
- beUI motion: https://beui.dev/components/motion/`<name>`
- beUI agents: https://beui.dev/components/agents/`<name>`

This package is a maintained distribution: imports rewritten for monorepo (`@kumix/utils`, relative paths), Biome/TypeScript clean, published via npm. Motion + agents bundle `motion`, `lenis`, and `@paper-design/shaders-react` — no extra installs needed.

## Install

```bash
bun add @kumix/ui @kumix/utils
```

Install peers (see `package.json` → `peerDependencies`). Six peers are **always required**: `react`, `@kumix/utils`, `@base-ui/react`, `class-variance-authority`, `lucide-react`, `motion`. The remaining 21 are **optional** via `peerDependenciesMeta` — install only what your imported components need.

```bash
bun add @base-ui/react class-variance-authority lucide-react motion react @kumix/utils
```

**Feature peers** (optional — needed at runtime only if you import those components):

| Peer                                                | Used by                                        |
| --------------------------------------------------- | ---------------------------------------------- |
| `next-themes`                                       | `use-meta-color`, `motion/theme-toggle`        |
| `@shadcn/react`                                     | `message-scroller`, `questionnaire`            |
| `@tanstack/react-table` · `@tanstack/react-virtual` | data-grid                                      |
| `@dnd-kit/*`                                        | kanban, sortable, data-grid DnD                |
| `date-fns` · `@date-fns/tz`                         | calendar, event-calendar, gantt, date-selector |
| `recharts`                                          | chart                                          |
| `cmdk`                                              | command                                        |
| `embla-carousel-react`                              | carousel                                       |
| `input-otp`                                         | input-otp                                      |
| `react-day-picker`                                  | calendar                                       |
| `react-phone-number-input`                          | phone-input                                    |
| `react-resizable-panels`                            | resizable                                      |
| `@headless-tree/core`                               | tree                                           |
| `shiki`                                             | `agents/code-block`, `reui/code-block`         |

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

// beUI (agents)
import { PromptInput } from "@kumix/ui/agents/prompt-input";

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
| `src/components/agents/prompt-input.tsx`      | `@kumix/ui/agents/prompt-input`      |
| `src/components/custom/confirm-dialog.tsx`    | `@kumix/ui/custom/confirm-dialog`    |
| `src/hooks/use-mobile.ts`                     | `@kumix/ui/hooks/use-mobile`         |
| `src/lib/ease.ts`                             | `@kumix/ui/lib/ease`                 |
| `src/style.css`                               | `@kumix/ui/css`                      |
| `src/theme.css`                               | `@kumix/ui/theme`                    |

## Components

### shadcn (`components/ui`)

Base UI / shadcn base-nova. Preview: [ui.shadcn.com](https://ui.shadcn.com/docs/components).

`accordion` · `alert` · `alert-dialog` · `aspect-ratio` · `attachment` · `avatar` · `badge` · `breadcrumb` · `bubble` · `button` · `button-group` · `calendar` · `card` · `carousel` · `chart` · `checkbox` · `collapsible` · `combobox` · `command` · `context-menu` · `dialog` · `direction` · `drawer` · `dropdown-menu` · `empty` · `field` · `hover-card` · `input` · `input-group` · `input-otp` · `item` · `kbd` · `label` · `marker` · `menubar` · `message` · `message-scroller` · `native-select` · `navigation-menu` · `pagination` · `popover` · `progress` · `questionnaire` · `radio-group` · `resizable` · `scroll-area` · `select` · `separator` · `sheet` · `sidebar` · `skeleton` · `slider` · `spinner` · `switch` · `table` · `tabs` · `textarea` · `toggle` · `toggle-group` · `toast` · `tooltip`

### ReUI (`components/reui`)

Extended patterns. Preview: [reui.io](https://reui.io/docs).

| Module                                                                                                                                         | Notes                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `alert` · `badge`                                                                                                                              | Extended variants (info/success/warning/…)                                                                                                             |
| `autocomplete`                                                                                                                                 | Base UI autocomplete                                                                                                                                   |
| `cascader/*`                                                                                                                                   | Multi-column cascading select, i18n, async                                                                                                             |
| `data-grid/*`                                                                                                                                  | Spreadsheet cell selection (ranges, clipboard, fill handle, editor), i18n, quick-create row, pagination, filters, DnD, virtual (rows + opt-in columns) |
| `date-selector`                                                                                                                                | Day / month / quarter / range                                                                                                                          |
| `event-calendar/*`                                                                                                                             | Month, week, day, agenda, resource                                                                                                                     |
| `filters/*`                                                                                                                                    | Advanced filter builder (chip, date, DnD)                                                                                                              |
| `code-block/*`                                                                                                                                 | Shiki syntax highlighting, ANSI, collapsible                                                                                                           |
| `frame`                                                                                                                                        | Nested panel layout                                                                                                                                    |
| `gantt/*`                                                                                                                                      | Day–year scales, resources, DnD                                                                                                                        |
| `icon-stack` · `icon-tile` · `kanban` · `number-field` · `phone-input` · `rating` · `scrollspy` · `sortable` · `stepper` · `timeline` · `tree` | —                                                                                                                                                      |

### beUI (`components/motion`)

Animated components built with [Motion](https://motion.dev). Preview: [beui.dev](https://beui.dev/components/motion). Bundled — `motion`, `lenis`, `@paper-design/shaders-react` are included, no extra installs needed.

`action-swap` (4 variants: base, blur, cascade, roll) · `adaptive-stepper` (+ `Liquid` easing backdrop) · `animated-badge` · `animated-number` · `animated-sidebar` · `animated-toast-stack` · `attachment-upload` · `availability-scheduler/*` (copy-menu, day-row, time-select) · `bloom-menu` · `bottom-sheet` · `bounce-sidebar` · `bouncy-accordion` · `button/*` (base, magnetic, metallic, stateful, `ButtonLink`) · `center-morph-modal` · `checkbox` · `chromatic-text-reveal` · `combobox` + `combobox/*` (trigger, list, content, context) · `command-palette` · `context-menu` · `cylinder-carousel` · `dock` · `drawer` · `dynamic-island` · `expandable-action-bar` · `expandable-control` · `expandable-tabs` · `expanding-arrow-button` · `feedback-widget` · `file-tree` · `file-upload` · `hold-action-button` · `infinite-masonry` · `input` (`reserveErrorLine` reserves one validation line) · `liquid` (gooey SVG backdrop: `Liquid`, `LiquidItem`) · `loader` · `magnetic` · `marquee` · `morphing-modal` · `morphing-search` · `morphing-tabs` · `multi-select/*` (composable: trigger, list, content, context — entry `multi-select`) · `not-found/*` (glitch, magnetic, spotlight, stacked, terminal) · `notification-stack` · `number-ticker` · `otp-input` · `overflow-actions` · `parallax` · `popover` · `popover-morph` · `popover-position` (shared popover positioning helper) · `preview-rail` · `project-folder` · `pull-to-refresh` · `radio` · `range-slider` (5 variants) · `scroll-progress` · `scroll-reveal` · `scroll-to` · `select` · `select-morph` · `shader-background` · `shared-layout-bg` · `signup-form` · `slide-action-button` · `smooth-scroll` · `swipeable-list` · `switch` · `table/*` (virtualized, editable, async) · `tabs` · `text-cascade` · `text-reveal` · `text-scramble` · `text-shimmer` · `theme-toggle` · `tilt-card` · `tooltip` · `wheel-picker`

### beUI — AI Agents (`components/agents`)

AI agent / chat UI components from [beUI](https://beui.dev). Preview: [beui.dev/components/agents](https://beui.dev/components/agents).

`agent-code` · `agent-disclosure` · `agent-activity/*` (activity-row) · `ai-sidebar` · `approval-card` · `chat-app` · `citations` · `code-block` · `file-diff` · `image-generation` · `loading-states/*` (agent-progress, reasoning-text, thinking-shimmer) · `message` · `message-bubble` · `message-context` · `message-scroller` · `prompt-input` · `streaming-response` · `todo-list` · `tool-approval` · `tool-result`

### Custom (`components/custom`)

Hand-written Kumix-specific composite components (not from any registry).

`confirm-dialog` — `ConfirmDialog` (destructive alert dialog with loading state) + `ConfirmSignOut` (centered sign-out variant).

`toast` — Global toast system: `ToastContainer` (mount once) + `showToast` / `toastSuccess` / `toastError` / `toastInfo` / `toastLoading` (call anywhere). Wraps `motion/animated-toast-stack`.

### Hooks

`use-body-classes` · `use-copy-to-clipboard` · `use-dismiss` · `use-favicon` · `use-file-upload` · `use-hover-capable` · `use-hover-gesture` · `use-hydrated` · `use-intersection-observer` · `use-is-mac` · `use-media-query` · `use-meta-color` · `use-mobile` · `use-mutation-observer` · `use-on-open` · `use-row-cursor` · `use-scroll-position` · `use-slider` · `use-slider-input` · `use-tap-gesture` · `use-touch-capable` · `use-viewport`

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
bun run add:beui     # @beui/* components (Motion + AI agents + blocks)
# Or individually:
bun run add:beui:components   # motion/animated components
bun run add:beui:ai-agents   # agents/ chat & AI components
bun run add:beui:blocks      # precomposed layout blocks
node scripts/fix-imports.mjs   # REQUIRED after CLI adds
```

`fix-imports.mjs` rewrites `@/lib/utils` → `@kumix/utils`, converts `@/components/*` / `@/hooks/*` / `@/lib/*` to relative paths, handles all registries (`ui`, `reui`, `motion`, `agents`, `custom`), and prepends `"use client"` when missing.

## License

MIT © Kumix Labs
