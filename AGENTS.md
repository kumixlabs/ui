# AGENTS.md

## Quick Rules

- **Always use `bun`, never `npm`/`yarn`.** `packageManager` is `bun@1.3.14`.
- Engines: `node >= 24`, `bun >= 1.3.0`.
- Workspaces: `packages/*`, `apps/*`.
- Internal deps: `"@kumix/other": "workspace:*"`.
- TypeScript via bun catalog: `"typescript": "catalog:"` → `6.0.3`.

## Workspace Layout

| Path           | Package      | Published    | Build  |
| -------------- | ------------ | ------------ | ------ |
| `packages/ui`  | `@kumix/ui`  | yes          | tsdown |
| `packages/mcp` | `@kumix/mcp` | no (private) | tsc    |

- **No `@kumix/shadcn` package** — shadcn + ReUI sources live inside `@kumix/ui`.
- `@kumix/mcp`: MCP server for package/component discovery. Changeset `ignore`.
- **No unit test suite** — CI is build + lint + types only. MCP has a smoke script (`node dist --test`) for the binary only.

## @kumix/ui structure

```
src/
  components/ui/      # shadcn/ui (Base UI, base-nova) — https://ui.shadcn.com/
  components/reui/    # ReUI registry — https://reui.io/ (data-grid/, event-calendar/, gantt/, …)
  hooks/
  style.css + style.css.d.ts
  theme.css + theme.css.d.ts
```

- **Per-file exports** (no barrel `index.ts`). Consumers:
  - `@kumix/ui/ui/button`
  - `@kumix/ui/reui/kanban`
  - `@kumix/ui/reui/data-grid/data-grid`
  - `@kumix/ui/hooks/use-mobile`
  - `@kumix/ui/css`, `@kumix/ui/theme`
- tsdown entry: `src/hooks/**/*.ts`, `src/components/**/*.tsx`.
- `build:css` copies CSS + `.d.ts` to `dist/` (hand-written, not generated).
- tsdown `clean: false`. ESM only. deps externalized via `neverBundle`.
- Local imports in source: **relative** (`../`, `../../`). Never `@/` in committed component source.
- Package imports OK: `@kumix/utils`, `@base-ui/react/*`, peers.

### shadcn / reui CLI

```bash
# from packages/ui
bun run add:shadcn   # shadcn add --all --overwrite
bun run add:reui     # shadcn add @reui/...
node scripts/fix-imports.mjs   # REQUIRED after CLI adds
```

`fix-imports.mjs` must:

1. Walk `src/components/ui`, `src/components/reui`, `src/hooks` (recursive).
2. Prepend `"use client"` if missing.
3. Rewrite `@/lib/utils` → `@kumix/utils`.
4. Rewrite `@/components/*` and `@/hooks/*` to **relative** paths with `./` prefix.
5. **Never** rewrite real package names that collide with local filenames (`input-otp`, `sonner`, `cmdk`, …).

Package notes:

- `sideEffects: ["**/*.css"]` so CSS is not tree-shaken.
- Feature peers optional (`peerDependenciesMeta`); core peers required: react, `@base-ui/react`, cva, lucide, `@kumix/utils`.
- Dual mobile hooks intentional: `useIsMobile` (fixed 768, used by sidebar) vs `useMediaQuery` (arbitrary, SSR-safe).

`components.json` aliases: `ui` → `@/components/ui`, registry `@reui` (CLI only; source stays relative after fix script).

Previews / API examples: upstream docs — [ui.shadcn.com](https://ui.shadcn.com/docs/components), [reui.io](https://reui.io/docs).

## Commands

```bash
bun install
bun run build               # turbo (dependsOn: ^build)
bun run types:check
bun run lint                # biome at root, NOT turbo
bun run lint:fix
bun run build --filter=@kumix/ui
bun run types:check --filter=@kumix/ui
```

## Pipeline / CI

- turbo: `build` / `types:check` depend on `^build`.
- Lint PR: build → lint → types:check.
- Release on main (`.changeset/**` or `packages/**`): same checks → changesets/action.
- Changesets: `ignore` = `@kumix/mcp`. `commit: false`. publish via `scripts/publish.sh` (scans `packages/**`, skips private).

## Commits

Commitlint types: `feat`, `feature`, `fix`, `refactor`, `docs`, `build`, `test`, `ci`, `chore`. Format: `type(scope?): message`.

## Biome

Extends `@kumix/biome-config/base`. 2-space, 100 width, double quotes, semicolons.
