---
"@kumix/ui": patch
---

Add beUI AI agent components under `components/agents/` (20 files: prompt-input, message-scroller, ai-sidebar, code-block, citations, file-diff, image-generation, todo-list, tool-approval, tool-result, streaming-response, agent-code, agent-disclosure, chat-app, message, message-bubble, message-context, agent-activity/_, approval-card/_, loading-states/*). Add shadcn `questionnaire` component. Add `lib/favicon.ts` and `lib/text-shimmer.ts`. Migrate data-grid from TanStack Table v8 to v9 (`useReactTable` → `useTable`, `tableFeatures()` API, `columnResizing` state, `start`/`end` pinning, `Subscribe` for React Compiler, `sortFn` naming). Remove `ui/sonner` (superseded by `custom/toast`). Add `shiki` peer dep for `agents/code-block`. Update `fix-imports.mjs` to handle `components/agents/` paths.
