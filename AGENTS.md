# AGENTS.md

## Quick Rules

- **Always use `bun`, never `npm`/`yarn`.** `packageManager` is `bun@1.3.14`.
- Engines: `node >= 24`, `bun >= 1.3.0`.
- Workspaces: `packages/*`, `apps/*`.
- Internal deps: `"@kumix/other": "workspace:*"`.
- TypeScript via bun catalog: `"typescript": "catalog:"` → `6.0.3`.

## Workspace Layout

| Path           | Package      | Published    | Build  | Tests              |
| -------------- | ------------ | ------------ | ------ | ------------------ |
| `packages/ui`  | `@kumix/ui`  | yes          | tsdown | vitest (jsdom)     |
| `packages/mcp` | `@kumix/mcp` | no (private) | tsc    | `node dist --test` |

- **No `@kumix/shadcn` package** — shadcn/reui sources live inside `@kumix/ui`.
- `@kumix/mcp`: MCP server. Changeset `ignore`.

## @kumix/ui structure

```
src/
  components/ui/      # shadcn base-nova components
  components/reui/    # reui registry (incl. data-grid/, event-calendar/, gantt/)
  hooks/
  style.css + style.css.d.ts
  theme.css + theme.css.d.ts
```

- **Per-file exports** (no barrel `index.ts`). Consumers:
  - `@kumix/ui/components/ui/button`
  - `@kumix/ui/components/reui/kanban`
  - `@kumix/ui/hooks/use-mobile`
  - `@kumix/ui/css`, `@kumix/ui/theme`
- tsdown entry: `src/hooks/**/*.ts`, `src/components/**/*.tsx`.
- `build:css` copies CSS + `.d.ts` to `dist/` (hand-written, not generated).
- tsdown `clean: false`. ESM only. deps externalized via `neverBundle`.

### shadcn / reui CLI

```bash
# from packages/ui
bun run add:shadcn   # shadcn add --all --overwrite
bun run add:reui     # shadcn add @reui/...
node scripts/fix-imports.mjs   # REQUIRED after CLI adds
```

`fix-imports.mjs` must:

1. Walk `src/components/ui`, `src/components/reui` (recursive), `src/hooks`.
2. Prepend `"use client"` if missing.
3. Rewrite `@/lib/utils` → `@kumix/utils`.
4. Rewrite `@/components/*` and `@/hooks/*` to **relative** paths with `./` prefix.
5. **Never** rewrite real package names that collide with local filenames (`input-otp`, `sonner`, `cmdk`, …).

`components.json` aliases: `ui` → `@/components/ui`, registry `@reui`.

## Commands

```bash
bun install
bun run build               # turbo (dependsOn: ^build)
bun run types:check
bun run lint                # biome at root, NOT turbo
bun run lint:fix
bun run test
bun run build --filter=@kumix/ui
bun run test --filter=@kumix/ui
cd packages/ui && bunx vitest run <pattern>
```

## Testing

- Only `@kumix/ui` has vitest (`test/**/*.test.{ts,tsx}`, jsdom).
- Coverage V8, 10% floor. `@kumix/mcp`: `test` = `node dist --test` (build first).

## Pipeline / CI

- turbo: `build`/`types:check`/`test` depend on `^build`.
- Lint PR: build → lint → types:check → test.
- Release on main (`.changeset/**` or `packages/**`): same checks → changesets/action.
- Changesets: `ignore` = `@kumix/mcp`, `playground`. `commit: false`. publish via `scripts/publish.sh` (scans `packages/**`, skips private).

## Commits

Commitlint types: `feat`, `feature`, `fix`, `refactor`, `docs`, `build`, `test`, `ci`, `chore`. Format: `type(scope?): message`.

## Biome

Extends `@kumix/biome-config/base`. 2-space, 100 width, double quotes, semicolons.
