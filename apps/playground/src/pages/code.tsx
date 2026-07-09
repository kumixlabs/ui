import { Code, Kbd, KbdGroup } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function CodePage() {
  return (
    <Page title="Code & Kbd" description="Inline code snippets and keyboard shortcuts.">
      <Sample title="Code">
        <Code>npm install @kumix/ui</Code>
        <Code showCopyButton copyText="bun add @kumix/ui">
          bun add @kumix/ui
        </Code>
      </Sample>

      <Sample title="Inline in text">
        <p className="text-sm">
          Run <Code>bun run build</Code> then <Code>bun run test</Code> to verify.
        </p>
      </Sample>

      <Sample title="Keyboard shortcut">
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Sample>
    </Page>
  );
}
