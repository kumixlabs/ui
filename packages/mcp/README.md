# @kumix/mcp

Private MCP server for exploring **`@kumix/ui`** (and other `@kumix/*` workspace packages): metadata, source, and usage hints.

## What it indexes

Scans `packages/**/package.json` at runtime (skips `@kumix/mcp`, `node_modules`, `dist`).

| Package     | Layout                                                                       |
| ----------- | ---------------------------------------------------------------------------- |
| `@kumix/ui` | `src/components/ui` (shadcn), `src/components/reui` (ReUI), `src/hooks`, CSS |

**Categories** on each component entry:

| `category` | Source              | Docs / previews                                        |
| ---------- | ------------------- | ------------------------------------------------------ |
| `ui`       | shadcn/ui base-nova | [ui.shadcn.com](https://ui.shadcn.com/docs/components) |
| `reui`     | ReUI registry       | [reui.io/docs](https://reui.io/docs)                   |
| `hooks`    | package hooks       | package README                                         |

**Import paths** (per-file, no barrel):

```ts
@kumix/ui/ui/button
@kumix/ui/reui/kanban
@kumix/ui/reui/data-grid/data-grid
@kumix/ui/hooks/use-mobile
@kumix/ui/css
@kumix/ui/theme
```

Same names can exist in both `ui` and `reui` (e.g. `alert`, `badge`). `find_component` and `get_usage_example` return **all** matches (`matches[]` + `importPath` per entry).

## Setup

```bash
cd packages/mcp
bun run build
# optional: smoke-check the binary
bun run test
```

## MCP client

```json
{
  "mcpServers": {
    "Kumix UI": {
      "command": "node",
      "args": ["/absolute/path/to/ui/packages/mcp/dist/index.js"],
      "cwd": "/absolute/path/to/ui"
    }
  }
}
```

## Tools

| Tool                  | Purpose                                               |
| --------------------- | ----------------------------------------------------- |
| `list_packages`       | Indexed packages + category counts for `@kumix/ui`    |
| `get_package_info`    | Exports, peers, sample imports, doc links             |
| `find_component`      | Search by name/path; filter `ui` \| `reui` \| `hooks` |
| `read_component_code` | Read `src/`-relative file; returns `importPath`       |
| `get_usage_example`   | Per-file import snippet + package README              |

### Examples

```text
find_component  component_name=button  package_filter=ui
find_component  component_name=data-grid  package_filter=reui
read_component_code  package_name=@kumix/ui  component_path=components/ui/button.tsx
read_component_code  package_name=@kumix/ui  component_path=components/reui/kanban.tsx
get_usage_example  package_name=@kumix/ui  component_name=kanban
```

## Dev

```bash
bun run dev      # bun src/index.ts
bun run build    # tsc → dist/
bun run types:check
```

Private package (Changesets `ignore`). Not published to npm.
