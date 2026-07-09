import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function ToggleGroupPage() {
  return (
    <Page title="Toggle Group" description="Set of toggles acting as a group.">
      <Sample title="Multiple">
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold" aria-label="Bold">
            <BoldIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <ItalicIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <UnderlineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </Sample>

      <Sample title="Single">
        <ToggleGroup type="single" defaultValue="left">
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
      </Sample>
    </Page>
  );
}
