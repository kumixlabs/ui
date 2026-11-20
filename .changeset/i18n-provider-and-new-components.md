---
"@kumix/ui": minor
---

Localization infrastructure: new `lib/i18n` (`LocaleProvider`, `useMessages`, `useLocale`, `formatNumber`) gives every component with user-visible strings a `labels` prop and a sibling `messages.ts` English dictionary. Resolution order is `labels` → provider messages for the component namespace → built-in defaults; `{name}` placeholders stay JSON-serializable and numbers are formatted with `Intl.NumberFormat` for the provider's locale. Applied across 114 files (motion, agents, charts, combobox/table/wallet-card parts). All `lib/*.tsx` are now standalone tsdown entries so `lib/i18n`'s React context is one shared instance.

New components: `before-after-slider` (drag divider comparing two layers, optional sweep-on-first-view hint), `bookshelf` (3D book spines that pull out and open; `BookshelfBook` items, page-turn sounds via new `lib/book-sounds`), `dropdown-menu` (animated compound menu: Trigger/Content/Item, checkbox and radio items, submenus, portal positioning), `slide-game` (casino slide-under game with `slideResult(random, houseEdge)` payout helper). New shared `motion/casino/game-parts.tsx` (multiplier format and heat colors, recent-rounds strip, sound toggle) now backs crash, mines and slide-game; `treemap/model` exports `ResolvedNode`.

Dependency bumps: `motion` 14.14.0, `lucide-react` 1.77.0, `react-resizable-panels` 4.24.1, `recharts` 3.11.0, `tailwind-merge` 3.7.1, Biome 2.6.8, Turbo 2.11.13, bun 1.4.5.
