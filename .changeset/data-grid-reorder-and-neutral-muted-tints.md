---
"@kumix/ui": patch
---

Fix data grid column Move Left/Right to target rendered visible columns within the same pin bucket and skip grouped columns, replace expensive `:has()` ancestor selector for table footer border with direct tfoot border styling, gate pinned cell hover background on `columnsPinnable`, and normalize interactive hover/active tint colors across motion and agent components from primary tints to neutral muted tokens.
