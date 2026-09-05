---
"@kumix/ui": patch
---

Fix Tailwind v4 class syntax and migrate `cn` imports to the `cn` package: rewrite `transform-[...]` to `[transform:...]` in toast, fix invalid `group-has-focus-visible/` variants to `group-has-[:focus-visible]/`, replace `@kumix/utils` `cn` imports with the `cn` package (new required peer), and bump `@base-ui/react` to ^1.8.0 and `lucide-react` to ^1.41.0.
