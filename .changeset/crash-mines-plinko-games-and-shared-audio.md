---
"@kumix/ui": minor
---

New game components: `crash` (multiplier-climb game with balloon + tower stage designs, shared `use-crash-game` model, exported `crashPoint`/`growth`/`timeAt`/`milestone` helpers), `mines` (gem/mine grid with cash-out, exported `minesMultiplier`/`formatMultiplier`), `plinko` (ball drop through peg rows, `plinkoSlots(rows)` generator, `onLand` callback).

New shared audio libs: `lib/audio-context` (page-wide ref-counted Web Audio context, closes after last player disposes) and `lib/game-sounds` (synthesized pentatonic gem chimes, blast, cash-out arpeggio). `tick-sound` now builds on `audio-context` and `play(rate?)` pitch-bends the tick; `ease` exports `EASE_IN` for falling/thrown motion.

`bouncy-accordion` simplification: row and content springs are local (no shared layout projection on text content); gap spring no longer overshoots, so adjacent rows never briefly overlap.

`fix-imports.mjs` now also processes `.ts` files in `components/**` (previously `@/` aliases in game/model `.ts` files were skipped) and no longer duplicates the `"use client"` directive when it follows a `biome-ignore` comment.

Dependency bumps: `motion` 14.10.1, `lucide-react` 1.70.0, `react-resizable-panels` 4.21.0, `shiki` 4.6.0, `@tanstack/react-virtual` 3.14.26, `tsdown` 0.23.7, Biome 2.6.6, `glob` 14.0.4, `rimraf` 6.1.4.
