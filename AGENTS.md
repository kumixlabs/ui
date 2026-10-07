# AGENTS.md

## Tooling & Setup

- **Always use `bun`, never `npm`/`yarn`.** Package manager is `bun@1.4.2`.
- TS version is locked via root workspaces `catalog` to `6.0.3`. Depend on it as `"typescript": "catalog:"`.

## Package Layout & Architecture

- `packages/ui` (`@kumix/ui`): Published package. Per-file ESM exports only (no barrel `index.ts` files).
  - `components/ui/` — shadcn/ui (Base UI, base-nova). Add via `bun run add:shadcn`. Docs: [ui.shadcn.com](https://ui.shadcn.com/docs/components)
  - `components/reui/` — ReUI registry. Add via `bun run add:reui`. Docs: [reui.io](https://reui.io/docs). Multi-file dirs: `code-block/` (entry `code-block.tsx` + `code-block-highlight.tsx`), `data-grid/` (entry `data-grid.tsx`; parts include `data-grid-table.tsx`, `data-grid-table-virtual.tsx`, `data-grid-cell-selection.tsx`, `data-grid-i18n.tsx`, pagination/column-header/filter/visibility/scroll-area/dnd)
  - `components/motion/` — beUI registry (Motion-based animated components). Add via `bun run add:beui`. Docs: [beui.dev](https://beui.dev/components/motion). Bundles `motion`, `lenis`, `@paper-design/shaders-react` — no extra installs needed. Multi-file dirs: `button/`, `table/`, `availability-scheduler/`, `not-found/`, `multi-select/` (each has `index.tsx`), plus `combobox/` (parts only — entry is flat `combobox.tsx`), `tooltip/` (positioner and hook helper). Flat entries include `adaptive-stepper.tsx` (Liquid-eased), `liquid.tsx` (`Liquid`/`LiquidItem`), `breadcrumb.tsx`, and `color-selector.tsx`.
  - `components/agents/` — beUI registry (AI agent / chat components). Add via `bun run add:beui:ai-agents`. Docs: [beui.dev/components/agents](https://beui.dev/components/agents). Multi-file dirs: `agent-activity/`, `approval-card/`, `loading-states/`.
  - `components/charts/` — Financial & data visualization charts (bump-chart, treemap, funnel-chart, liquidity-heatmap, order-book, price-target-fan, returns-calendar, status-bar, volume-profile, etc.).
  - `components/custom/` — hand-written Kumix-specific composite components (not from any registry).
  - `hooks/` — custom hooks (per-file). Includes beUI helpers like `use-hover-capable`, `use-slider`.
  - `lib/` — shared utilities used by motion + agents (e.g. `ease.ts`, `tick-sound.ts`, `text-shimmer.ts`, `favicon.ts`, `presence-gate.tsx`, `command-search.ts`).
  - Imports in component source must be **relative** (e.g. `../button`, `../../lib/ease`). **Never use `@/` alias** in committed files.
  - CSS styles (`style.css` and `theme.css`) are hand-written and copied to `dist/` via `build:css`.
  - **Peer deps**: 6 required (`react`, `@kumix/utils`, `@base-ui/react`, `class-variance-authority`, `lucide-react`, `motion`); 22 optional via `peerDependenciesMeta`. When adding a component that needs a new dep, add it to both `devDependencies` and `peerDependencies`, and mark it optional in `peerDependenciesMeta` unless it's universally needed.
- `packages/mcp` (`@kumix/mcp`): Private MCP server for package/component discovery. Ignored by changesets.

## Export Map (`package.json`)

| Pattern     | Source              | Example import                                                                                                                                                               |
| ----------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `./*`       | `src/components/**` | `@kumix/ui/ui/button`, `@kumix/ui/reui/kanban`, `@kumix/ui/motion/tilt-card`, `@kumix/ui/charts/treemap`, `@kumix/ui/agents/prompt-input`, `@kumix/ui/custom/confirm-dialog` |
| `./hooks/*` | `src/hooks/**`      | `@kumix/ui/hooks/use-mobile`                                                                                                                                                 |
| `./lib/*`   | `src/lib/**`        | `@kumix/ui/lib/ease`                                                                                                                                                         |
| `./css`     | `src/style.css`     | `@kumix/ui/css`                                                                                                                                                              |
| `./theme`   | `src/theme.css`     | `@kumix/ui/theme`                                                                                                                                                            |

`tsdown` entry: `src/hooks/**/*.ts`, `src/lib/**/*.ts`, `src/components/**/*.tsx`. ESM only, deps externalized via `neverBundle`.

## Workflow Rules & Codegen

- **Running CLI Adds**:
  1. Add components using `bun run add:shadcn`, `bun run add:reui`, or `bun run add:beui` inside `packages/ui`.
  2. Run `node scripts/fix-imports.mjs` inside `packages/ui`. This script:
     - Rewrites `@/lib/utils` → `@kumix/utils`.
     - Rewrites `@/lib/*` → relative paths (e.g. `../../lib/ease`).
     - Rewrites `@/components/ui/*`, `@/components/reui/*`, `@/components/motion/*`, `@/components/agents/*`, `@/components/charts/*` → relative.
     - Rewrites `@/hooks/*` → relative.
     - Prepends `"use client"` when missing.
     - Handles bare same-dir imports (e.g. `"button"` → `"./button"`), skipping real package names that collide (`motion`, `cmdk`, …).
- **Testing**: No test suite for `packages/ui`. Smoke test for `@kumix/mcp` via:
  ```bash
  bun --filter=@kumix/mcp run test
  ```

## Development Commands

```bash
bun install
bun run build               # turbo build
bun run types:check         # turbo typecheck
bun run lint                # root biome check
bun run lint:fix            # fix lint errors
```

## CI/CD & Changesets

- PR pipeline: `build` -> `lint` -> `types:check`.
- Releases: Auto-versioned via changesets, published using `./scripts/publish.sh` (skips private packages, idempotent).
- Commits must use conventional commit prefix, e.g. `feat(ui): add input component`.
- Biome rules: 2-space indentation, double quotes, semicolons.

<!-- BEGIN:turborepo-agent-rules -->

# This is NOT the Turborepo you know

Turborepo configuration, task behavior, and CLI commands can vary between installed versions and may differ from your training data. Resolve the `turbo` package from this file's directory or relevant workspace; in monorepos, it may not be visible from the repository root. For example, run `node -p "require.resolve('turbo/package.json')"` from a workspace that depends on `turbo`.

Read `docs/README.md` inside that installed package first, then read the relevant pages from its `docs/` directory before changing Turborepo configuration or commands. Heed deprecation notices. These bundled docs match the installed package version and are available without network access.

This block is written and re-added by `turbo` before repository-scoped commands when an AI agent is detected. In the Turborepo source repository, its template is defined in `crates/turborepo-cli/src/cli/agent_guidance.rs`. Removing the managed block while updates are enabled means a later qualifying invocation will add it again. Set `"agentGuidance": false` in the root `turbo.json` or `turbo.jsonc` to opt out; this does not remove an existing block. Keep the block committed with your work to avoid an uncommitted change on the next agent invocation.
<!-- END:turborepo-agent-rules -->
