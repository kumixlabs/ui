---
"@kumix/ui": patch
---

fix: resolve keyboard highlight during render instead of passive effects — `ai-sidebar` roving tabindex no longer skips on first paint/SSR, `command-palette` + `morphing-search` cursor holds row id stamped with query (Enter can't commit wrong row after list changes), `combobox` keeps filtering by the open query during exit animation. Adds `use-on-open` + `use-row-cursor` hooks and `combobox/use-active-option`.
