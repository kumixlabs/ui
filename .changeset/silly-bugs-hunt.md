---
"@kumix/ui": minor
---

Rebuild `@kumix/ui` around **shadcn/ui** (Base UI, base-nova) and **ReUI** components.

- Ship shadcn primitives under `components/ui` and ReUI under `components/reui` (data-grid, event-calendar, gantt, filters, kanban, and more).
- Per-file ESM exports (no barrel); CSS via `@kumix/ui/css` and `@kumix/ui/theme`.
- Internal imports use relative paths and `@kumix/utils` (no `@/` aliases in published source).
- Drop the separate shadcn package layout; single `@kumix/ui` package for consumers.
