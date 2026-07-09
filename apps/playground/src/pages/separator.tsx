import { Separator } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function SeparatorPage() {
  return (
    <Page title="Separator" description="Visual divider between content.">
      <Sample title="Horizontal">
        <div className="flex w-full max-w-md flex-col gap-3">
          <span className="text-sm">Above</span>
          <Separator />
          <span className="text-sm">Below</span>
        </div>
      </Sample>

      <Sample title="Vertical">
        <div className="flex h-8 items-center gap-3 text-sm">
          <span>Left</span>
          <Separator orientation="vertical" />
          <span>Right</span>
        </div>
      </Sample>

      <Sample title="Navigation">
        <div className="flex h-5 items-center gap-3 text-muted-foreground text-sm">
          <span>Docs</span>
          <Separator orientation="vertical" />
          <span>Guides</span>
          <Separator orientation="vertical" />
          <span>API</span>
        </div>
      </Sample>
    </Page>
  );
}
