import { Input, Label } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function LabelPage() {
  return (
    <Page title="Label" description="Accessible label for form controls.">
      <Sample title="With input">
        <div className="flex w-64 flex-col gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" placeholder="Ada Lovelace" />
        </div>
      </Sample>

      <Sample title="Required">
        <div className="flex w-64 flex-col gap-2">
          <Label htmlFor="req">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input id="req" type="email" placeholder="you@example.com" required />
        </div>
      </Sample>

      <Sample title="Disabled">
        <div className="flex w-64 flex-col gap-2">
          <Label htmlFor="disabled-input" className="opacity-50">
            Unavailable
          </Label>
          <Input id="disabled-input" placeholder="Disabled" disabled />
        </div>
      </Sample>
    </Page>
  );
}
