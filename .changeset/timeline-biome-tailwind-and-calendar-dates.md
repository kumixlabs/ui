---
"@kumix/ui": patch
---

Add `motion/timeline`: pointer-drag horizontal event carousel with flick-glide spring focus (controlled `value`/`onValueChange` or uncontrolled), and optional backdrop layers — drifting year numerals, gap ruler ticks, fan cables. Reduced-motion renders without glide.

Lint toolchain: Biome 2.6.2 with `@kumix/biome-config` 0.2.0 — Tailwind rules enabled (`useTailwindSortedClasses` autofix re-sorts class strings across the package), `noTailwindRestyledComponents`/`noTailwindRawColors` disabled for `packages/ui/src/components/**` (className forwarding is the library API; status palette colors are intentional), `noComponentHookFactories` disabled for `ui/calendar.tsx` (react-aria render-prop factories need `locale` scope).

Fixes: `event-calendar` date clamping keeps `Date` types via new `maxDate`/`minDate` helpers instead of `Math.max`/`Math.min` (which collapse to `number`); cascader/data-grid dynamic class strings move to `cn()`; `data-grid-table-dnd` drag cursor classes.

Dependency bumps: `motion` 14.5.0, `lucide-react` 1.61.0, `@paper-design/shaders-react` 0.0.82, `react-resizable-panels` 4.14.8, `turbo` 2.11.10.
