# Kumix UI

Monorepo for Kumix React UI packages. Publishable package: **`@kumix/ui`**.

Sources:

- **shadcn/ui** (Base UI, base-nova) → `packages/ui/src/components/ui` — [ui.shadcn.com](https://ui.shadcn.com/)
- **ReUI** → `packages/ui/src/components/reui` — [reui.io](https://reui.io/)
- **beUI** (Motion-based animated components) → `packages/ui/src/components/motion` — [beui.dev](https://beui.dev/components/motion)
- **beUI** (AI agent / chat components) → `packages/ui/src/components/agents` — [beui.dev](https://beui.dev/components/agents)
- **Custom** (hand-written Kumix-specific components) → `packages/ui/src/components/custom`

Previews and component examples: use the upstream docs (links in [`packages/ui/README.md`](./packages/ui/README.md)).

## Packages

| Path           | Package      | Published    |
| -------------- | ------------ | ------------ |
| `packages/ui`  | `@kumix/ui`  | yes          |
| `packages/mcp` | `@kumix/mcp` | no (private) |

## Install (consumers)

```bash
bun add @kumix/ui @kumix/utils
```

```tsx
import { Button } from "@kumix/ui/ui/button";
import { Kanban } from "@kumix/ui/reui/kanban";
import { TiltCard } from "@kumix/ui/motion/tilt-card";
import { PromptInput } from "@kumix/ui/agents/prompt-input";
import { useIsMobile } from "@kumix/ui/hooks/use-mobile";
import "@kumix/ui/css";
import "@kumix/ui/theme";
```

See [packages/ui/README.md](./packages/ui/README.md) for full import map, peers, and component lists.

## Development

Use **Bun** only (`packageManager: bun@1.4.0`). Engines: Node `>=24`, Bun `>=1.4.0`.

```bash
bun install
bun run build
bun run lint
bun run types:check
```

Filter:

```bash
bun run build --filter=@kumix/ui
bun run types:check --filter=@kumix/ui
```

After `shadcn` / `@reui` / `@beui` CLI adds (from `packages/ui`):

```bash
node scripts/fix-imports.mjs
```

CI (PR / release): **build → lint → types:check**. No unit test suite.

## Layout

```
packages/ui/src/
  components/ui/       # shadcn
  components/reui/     # reui (data-grid, event-calendar, gantt, …)
  components/motion/   # beui (tilt-card, morphing-modal, morphing-tabs, loader, shader-background, not-found/*, …)
  components/agents/   # beui AI agents (prompt-input, message-scroller, todo-list, code-block, …)
  components/custom/   # hand-written (confirm-dialog, toast, …)
  hooks/
  lib/                 # shared utils (ease, tick-sound, text-shimmer, favicon, presence-gate)
  style.css · theme.css
```

## License

MIT © Kumix Labs
