---
"@kumix/ui": patch
---

Extract tooltip animation surface into `motion/tooltip-surface` (`TooltipSurface`), add controlled mode with `anchorRef`/`anchorPoint`/`open`/`onOpenChange` to `Tooltip`, extract scored fuzzy search into `lib/command-search` (`searchCommands`) used by `CommandPalette`, fix toast icon alignment for multi-line content, tune tab indicator spring to prevent scrollbar flash, clean up broken CSS selectors in `autocomplete`/`number-field`/`frame`, and widen `useDismiss` ref type to support SVG elements.
