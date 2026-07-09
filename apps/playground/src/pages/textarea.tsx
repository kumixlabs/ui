import { Label, Textarea } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function TextareaPage() {
  return (
    <Page title="Textarea" description="Multi-line text input.">
      <Sample title="Basic">
        <div className="flex w-72 flex-col gap-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself" />
        </div>
      </Sample>

      <Sample title="Prefilled">
        <div className="flex w-72 flex-col gap-2">
          <Label htmlFor="notes">Notes</Label>
          <Textarea id="notes" defaultValue={"Line one\nLine two\nLine three"} rows={4} />
        </div>
      </Sample>

      <Sample title="Disabled">
        <div className="flex w-72 flex-col gap-2">
          <Label htmlFor="disabled-area">Disabled</Label>
          <Textarea id="disabled-area" placeholder="Cannot edit" disabled />
        </div>
      </Sample>
    </Page>
  );
}
