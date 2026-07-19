# AGENTS.md

## Quick Rules

- **Always use `bun`, never `npm`/`yarn`.** `packageManager` is `bun@1.3.14`.
- Engines: `node >= 24`, `bun >= 1.3.0`.
- Workspaces: `packages/**`, `apps/**` (defined in `package.json`).
- Internal deps use workspace protocol: `"@kumix/other": "workspace:*"`.
- `bun install` runs `prepare` → installs Husky hooks (v9, `.husky/_/`).

## Workspace Layout

- `packages/*` — libs: `@kumix/ui`, `@kumix/shadcn`, `@kumix/mcp`. `scripts/publish.sh` only scans `packages/**` and skips any package with `"private": true`.
- `@kumix/ui` is the publishable React component package (Radix-based, Tailwind).
- `@kumix/shadcn` is the publishable React component package (Base UI + shadcn registry, per-component exports).
- `@kumix/mcp` is in changeset `ignore` (`.changeset/config.json`) — excluded from versioning even if made public.
- `apps/*` — application placeholders.
- `@kumix/ui` and `@kumix/shadcn` build with `tsdown`, extending external `@kumix/tsconfig/react`. Output goes to `dist/`.

## Commands

```bash
bun install                 # also installs husky hooks
bun run build               # turbo build (dependsOn: ^build)
bun run types:check         # turbo types:check (dependsOn: ^build)
bun run lint                # biome check
bun run lint:fix            # biome check --write --unsafe
bun run format              # biome format --write
bun run dev                 # turbo dev (persistent)
bun run clean               # turbo clean
bun run clean:all           # turbo clean:all + rm .turbo bun.lock coverage node_modules
bun run test                # turbo test (vitest run per package)
bun run test:watch          # turbo test:watch (vitest watch per package)
bun run test:coverage       # turbo test:coverage (vitest run --coverage)
bunx changeset              # create a changeset
bun run version             # changeset version + bun update
bun run release             # bash scripts/publish.sh (publishes only packages/**, not apps/ or examples/)
```

Filter to a single workspace:

```bash
bun run build --filter=@kumix/ui
bun run types:check --filter=@kumix/ui
bun run test --filter=@kumix/ui
bun add <pkg> --filter=@kumix/ui
```

## Pipeline (turbo.json)

| Task            | dependsOn | Persistent | Cached |
| --------------- | --------- | ---------- | ------ |
| build           | ^build    | no         | yes    |
| types:check     | ^build    | no         | yes    |
| dev             | -         | yes        | no     |
| start           | ^build    | yes        | no     |
| test            | ^build    | no         | yes    |
| test:coverage   | ^build    | no         | yes    |
| test:watch      | ^build    | yes        | no     |
| clean/clean:all | -         | no         | no     |

> Note: `lint`/`format`/`lint:fix` run Biome directly at the root (not via turbo).

## Lint-staged (pre-commit)

- `*.{js,ts,cjs,mjs,...}` → `biome check --write --no-errors-on-unmatched`
- `*.{md,yml,yaml}` → `prettier --write`
- `*.{json,jsonc,html}` → `biome format --write --no-errors-on-unmatched`

## Commit Convention

Commitlint enforces types: `feat`, `feature`, `fix`, `refactor`, `docs`, `build`, `test`, `ci`, `chore`. Configured in `.commitlintrc.cjs`. Format: `type(scope?): message`.

## Changesets

- Repo: `kumixlabs/ui`
- `commit: false` — changeset PRs are auto-committed by CI, not locally.
- `access: public`, `baseBranch: main`
- `bumpVersionsWithWorkspaceProtocolOnly: true`

## CI

- **Lint** (`.github/workflows/lint.yml`): PRs to `main` → build → lint → types:check → test
- **Release** (`.github/workflows/release.yml`): push to `main` with `.changeset/**` or `packages/**` changes → build → lint → types:check → test → changesets/action (version PR or publish). Uses `GH_PAT || GITHUB_TOKEN` and `NPM_TOKEN`.

## Biomes

Extends `@kumix/biome-config/base` (`biome.jsonc`).
