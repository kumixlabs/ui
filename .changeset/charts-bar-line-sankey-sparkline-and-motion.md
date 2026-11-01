---
"@kumix/ui": patch
---

New charts: `bar-chart` (grouped/stacked layouts, vertical/horizontal orientation), `line-chart` (line/area variants, curve options), `sankey-chart` (flow diagram), `sparkline` (inline mini-trend with gap handling for missing values), plus shared `xy/` model/scale/axis/tooltip/inspection infrastructure consumed by them (no public entry).

New motion components: `avatar-group` (stack + overflow count, initials fallback), `card-dealer` (deck→hand→pile draggable card zones), `pagination` (page window with ellipses, controlled/uncontrolled, exported `paginationRange` helper).

New `lib/focusable` shared `FOCUSABLE_SELECTOR` (adds `input[type=hidden]` exclusion) — `use-modal-scope` focus trap now uses it.

Fixes: `morphing-modal` view transitions lift the outgoing view out of flow (popLayout takes the motion ref directly) so the panel no longer grows to combined view heights; `popover-morph` keyboard open path moves focus to the first item itself and seeds `d`/`cx` motion values before keyframes; `loader` seeds `d`/`cx` to avoid `undefined` attribute writes; `composition-chart` crosshair tracks touch directly with spring layout disabled while touching.

Dependency bumps: `motion` 14.9.0, `lucide-react` 1.66.0, `react-resizable-panels` 4.16.0, `@tanstack/react-virtual` 3.14.24, `tsdown` 0.23.4, Biome 2.6.4, bun 1.4.4.
