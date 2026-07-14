# @kumix/shadcn

Headless, accessible React component library built on Base UI, Tailwind CSS, CVA, and related primitives. 60 UI components with individual entry points — import only what you need.

## What's Inside

- 60 UI components: form controls, overlays, navigation, data display, messaging, and more.
- Charts: `Chart` components built on Recharts with theme-aware colors, tooltips, and legends.
- Messaging: `Message`, `Bubble`, `Attachment`, and `MessageScroller` primitives for chat and AI interfaces.
- Input building blocks: `Combobox`, `InputGroup`, `NativeSelect`, and `Marker`, plus a `DirectionProvider` for RTL/LTR support.
- Hooks: `useIsMobile` viewport breakpoint hook.
- Tailwind-friendly styling via utility classes, semantic CSS variables, and `data-slot` attributes.
- ESM-only build with generated TypeScript declarations.

## Install

```bash
bun add @kumix/shadcn
```

Install peer dependencies required by the components you use. Common peers include:

```bash
bun add @kumix/utils @base-ui/react @shadcn/react class-variance-authority lucide-react react
```

Feature-specific components may also require `cmdk`, `recharts`, `react-day-picker`, `react-resizable-panels`, `embla-carousel-react`, `input-otp`, `next-themes`, `sonner`, or `date-fns`.

See `package.json` for exact peer dependency ranges.

## Usage

Each component is imported from its own entry point:

```tsx
import { Button } from "@kumix/shadcn/button";
import { Card, CardContent, CardHeader, CardTitle } from "@kumix/shadcn/card";
import "@kumix/shadcn/css";

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

Hooks:

```tsx
import { useIsMobile } from "@kumix/shadcn/hooks/use-mobile";
```

## Package Entries

| Entry               | Description                                               |
| ------------------- | --------------------------------------------------------- |
| `@kumix/shadcn/css` | Tailwind `@source` directive, emitted as `dist/style.css` |
| `@kumix/shadcn/*`   | Individual component (e.g. `@kumix/shadcn/button`)        |

## Available Components

`accordion`, `alert`, `alert-dialog`, `aspect-ratio`, `attachment`, `avatar`, `badge`, `breadcrumb`, `bubble`, `button`, `button-group`, `calendar`, `card`, `carousel`, `chart`, `checkbox`, `collapsible`, `combobox`, `command`, `context-menu`, `dialog`, `direction`, `drawer`, `dropdown-menu`, `empty`, `field`, `hover-card`, `input`, `input-group`, `input-otp`, `item`, `kbd`, `label`, `marker`, `menubar`, `message`, `message-scroller`, `native-select`, `navigation-menu`, `pagination`, `popover`, `progress`, `radio-group`, `resizable`, `scroll-area`, `select`, `separator`, `sheet`, `sidebar`, `skeleton`, `slider`, `sonner`, `spinner`, `switch`, `table`, `tabs`, `textarea`, `toggle`, `toggle-group`, `tooltip`.

## Styling

Components use Tailwind utility classes and semantic CSS variables, such as `--color-background`, `--color-foreground`, `--color-primary`, `--color-border`, and related tokens.

`@kumix/shadcn/css` emits `src/style.css`, which contains only the Tailwind `@source "."` directive. Import it in your own Tailwind v4 stylesheet so Tailwind scans the compiled component classes shipped in `dist`:

```css
/* Your app stylesheet, Tailwind v4 */
@import "tailwindcss";
@import "@kumix/shadcn/css";
```

Every component exposes `data-slot` attributes for targeted styling, for example `data-slot="button"` and `data-slot="card"`.

## Development

```bash
bun run build --filter=@kumix/shadcn
bun run types:check --filter=@kumix/shadcn
```

The build emits ESM JavaScript, TypeScript declarations, and CSS output. Package validation uses Are The Types Wrong and `publint`.

## License

MIT - see [LICENSE](../../LICENSE).
