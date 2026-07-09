import { Kbd, KbdGroup } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function KbdPage() {
  return (
    <Page title="Kbd" description="Keyboard key and shortcut display.">
      <Sample title="Single keys">
        <Kbd>Esc</Kbd>
        <Kbd>Enter</Kbd>
        <Kbd>Tab</Kbd>
      </Sample>

      <Sample title="Shortcut group">
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>Shift</Kbd>
          <Kbd>P</Kbd>
        </KbdGroup>
      </Sample>
    </Page>
  );
}
