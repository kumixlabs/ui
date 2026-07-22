# @kumix/ui

React UI kit for Kumix products. Built on **Base UI**, **Tailwind CSS**, and **class-variance-authority**. Ships as ESM with per-file exports (no barrel).

## Sources

| Path                              | Origin                                                | Docs / previews                                                                 |
| --------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------- |
| `src/components/ui/*`             | [shadcn/ui](https://ui.shadcn.com/) (base-nova style) | [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)          |
| `src/components/reui/*`           | [ReUI](https://reui.io/) registry (`@reui/*`)         | [reui.io/docs](https://reui.io/docs) · [components](https://reui.io/components) |
| `src/hooks/*`                     | Package helpers (+ ReUI `use-file-upload`)            | —                                                                               |
| `src/style.css` · `src/theme.css` | Tailwind entry + design tokens                        | —                                                                               |

For **previews, props, and usage examples** of each component, use the upstream docs:

- shadcn: https://ui.shadcn.com/docs/components/`<name>`
- ReUI: https://reui.io/docs/components/base/`<name>` (or browse https://reui.io/components)

This package is a maintained distribution: imports rewritten for monorepo (`@kumix/utils`, relative paths), Biome/TypeScript clean, published via npm.

## Install

```bash
bun add @kumix/ui @kumix/utils
```

Install peers for the components you use (see `package.json` → `peerDependencies`). Common set:

```bash
bun add @base-ui/react class-variance-authority lucide-react react
```

**Required peers (core):** `react`, `@base-ui/react`, `class-variance-authority`, `lucide-react`, `@kumix/utils`.

All other peers are **optional** — install only what you import:

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

// hooks
import { useIsMobile } from "@kumix/ui/hooks/use-mobile";
import { useFileUpload } from "@kumix/ui/hooks/use-file-upload";

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
| `src/hooks/use-mobile.ts`                     | `@kumix/ui/hooks/use-mobile`         |
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

### Hooks

`use-body-classes` · `use-copy-to-clipboard` · `use-file-upload` · `use-hydrated` · `use-intersection-observer` · `use-is-mac` · `use-media-query` · `use-meta-color` · `use-mobile` · `use-mutation-observer` · `use-scroll-position` · `use-slider-input` · `use-viewport`

- `useIsMobile` (`use-mobile`) — fixed `768px` breakpoint; used by `sidebar` / `date-selector`. First paint may be `false` until mount.
- `useMediaQuery` — arbitrary query string; SSR-safe via `useSyncExternalStore` (server snapshot `false`).

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
node scripts/fix-imports.mjs   # REQUIRED after CLI adds
```

`fix-imports.mjs` rewrites `@/lib/utils` → `@kumix/utils`, converts `@/components/*` / `@/hooks/*` to relative paths, and prepends `"use client"` when missing.

## License

MIT © Kumix Labs
