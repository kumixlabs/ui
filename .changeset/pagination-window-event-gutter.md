---
"@kumix/ui": patch
---

Replace block-based data grid pagination with adaptive sliding-window that always shows first/last page and ellipsis jumps, add `EVENT_TRACK_WIDTH` CSS calc gutter to event calendar time grid and resource view so the bare strip beside a full-width event reaches the column create handler, fix React Compiler virtualizer freeze in cascader with `"use no memo"`, rename `user-select-none` to `select-none` in data grid resize handle, and document `defaultOperator` fallback behavior in filters.
