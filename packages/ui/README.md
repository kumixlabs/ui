# @kumix/ui

Headless, accessible React component library for Kumix products. Built on Radix UI, Tailwind CSS utilities, CVA, and related headless UI primitives.

## What's Inside

- 90+ UI components: form controls, overlays, navigation, data display, DataGrid, Kanban, Sortable, and more.
- Charts: `Chart` components built on Recharts, with theme-aware colors, tooltips, and legends.
- Messaging: `Message`, `Bubble`, `Attachment`, and `MessageScroller` primitives for chat and AI interfaces.
- Input building blocks: `Combobox`, `InputGroup`, `NativeSelect`, and `Marker`, plus a `DirectionProvider` for RTL/LTR support.
- Hooks entry: viewport, media query, copy-to-clipboard, file upload, intersection observer, mutation observer, and related utilities.
- Animation components: marquee, text effects, counting/sliding numbers, animated backgrounds, avatar groups, and more.
- Tailwind-friendly styling via utility classes, semantic CSS variables, and `data-slot` attributes.
- ESM-only build with generated TypeScript declarations.

## Install

```bash
bun add @kumix/ui
```

Install peer dependencies required by the components you use. Common peers include:

```bash
bun add @kumix/utils class-variance-authority lucide-react radix-ui react
```

Feature-specific components may also require `@base-ui/react`, `recharts`, `@tanstack/react-table`, `@dnd-kit/*`, `cmdk`, `motion`, `react-day-picker`, `react-aria-components`, `react-hook-form`, `react-resizable-panels`, `sonner`, `vaul`, `input-otp`, `embla-carousel-react`, `next-themes`, or `@headless-tree/core`.

See `package.json` for exact peer dependency ranges.

## Usage

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from "@kumix/ui";
import "@kumix/ui/css";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Kumix UI</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Continue</Button>
      </CardContent>
    </Card>
  );
}
```

Hooks are available from the hooks entry:

```tsx
import { useMediaQuery, useViewport } from "@kumix/ui/hooks";
```

## Package Entries

| Entry             | Description                           |
| ----------------- | ------------------------------------- |
| `@kumix/ui`       | React components                      |
| `@kumix/ui/hooks` | Standalone hooks                      |
| `@kumix/ui/css`   | CSS entry emitted as `dist/style.css` |

## Styling

Components use Tailwind utility classes and semantic CSS variables, such as `--color-background`, `--color-foreground`, `--color-primary`, `--color-border`, and related tokens.

The CSS entry currently emits the package stylesheet from `src/style.css`, which contains the Tailwind source directive for this package. Consumers should include `@kumix/ui/css` once in their app and ensure their Tailwind setup scans the package source/classes as needed.

Every component exposes `data-slot` attributes for targeted styling, for example `data-slot="button"` and `data-slot="card"`.

## DataGrid Example

```tsx
import {
  DataGrid,
  DataGridColumnHeader,
  DataGridContainer,
  DataGridPagination,
  DataGridTable,
} from "@kumix/ui";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

const table = useReactTable({
  columns,
  data,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
});

export function UsersTable() {
  return (
    <DataGrid table={table} recordCount={data.length}>
      <DataGridContainer>
        <DataGridTable />
        <DataGridPagination />
      </DataGridContainer>
    </DataGrid>
  );
}
```

DataGrid supports TanStack Table composition, pagination, column visibility, column pinning, resizing, skeleton/spinner loading modes, expandable rows, and optional drag-and-drop table variants.

## Development

```bash
bun run build --filter=@kumix/ui
bun run types:check --filter=@kumix/ui
bun run test --filter=@kumix/ui
bun run test:coverage --filter=@kumix/ui
```

The build emits ESM JavaScript, TypeScript declarations, and CSS output. Package validation uses Are The Types Wrong and `publint`.

## License

MIT - see [LICENSE](../../LICENSE).
