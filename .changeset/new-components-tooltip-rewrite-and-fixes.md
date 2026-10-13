---
"@kumix/ui": patch
---

New components: `motion/card`, `motion/color-picker`, `motion/morphing-search-chips`, `motion/tooltip/grace`, `reui/color-picker`, `reui/emoji-picker`, `reui/file-type`, `charts/candlestick-chart`, `charts/donut-chart`.

Tooltip rewrite: `TooltipProvider` context, arrow support, `followCursor`, grace area via `@floating-ui/dom`.

DataGrid: adaptive pagination, column reorder target fix, pinned cell hover background, table foot border CSS perf.

Dep bumps: `@base-ui/react` 1.9.0, `motion` 14.1.1, `@tanstack/react-table` 9.3.1, `lucide-react` 1.56.0.

Lint fixes: `useIterableCallbackReturn` in emoji-picker, removed unused biome-ignore suppressions, duplicate `"use client"` directives, triple-slash import typo.
