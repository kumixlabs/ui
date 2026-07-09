import { BoldIcon } from "lucide-react";

import { Toggle } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function TogglePage() {
  return (
    <Page title="Toggle" description="Two-state button.">
      <Sample title="Basic">
        <Toggle aria-label="Bold">
          <BoldIcon />
        </Toggle>
      </Sample>

      <Sample title="With text">
        <Toggle aria-label="Bold">
          <BoldIcon />
          Bold
        </Toggle>
      </Sample>

      <Sample title="States">
        <Toggle aria-label="Bold" defaultPressed>
          <BoldIcon />
        </Toggle>
        <Toggle aria-label="Bold" disabled>
          <BoldIcon />
        </Toggle>
      </Sample>
    </Page>
  );
}
