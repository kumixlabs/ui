---
"@kumix/ui": patch
---

Add a new `@kumix/ui/css/source` export.

The package now ships a dedicated `source.css` entry (emitted as `dist/source.css`) containing the Tailwind `@source` directive for the package. Consumers on Tailwind v4 can import `@kumix/ui/css/source` to make their build scan the compiled component classes without pulling in the full theme stylesheet from `@kumix/ui/css`.
