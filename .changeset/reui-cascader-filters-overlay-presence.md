---
"@kumix/ui": patch
---

Add ReUI cascader (multi-column, async, i18n), split ReUI filters into a `filters/*` directory (builder, chip, date, DnD, advanced), and add beUI morphing-search. Introduce `lib/presence-gate` and rework fixed overlays (bottom-sheet, drawer, morphing-modal, morphing-search, center-morph-modal, command-palette, animated-sidebar, attachment-upload, project-folder) to release interaction on exit start via `PresenceGate`, removing the full-viewport wrapper that clipped edge sampling. Fix text-shimmer to respect `prefers-reduced-motion` in installed copies. Align checkbox, radio-group, switch, and field focus styles with the `group-has-focus-visible/field-label` pattern.
