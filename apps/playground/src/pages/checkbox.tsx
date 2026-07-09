import { Checkbox, Label } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function CheckboxPage() {
  return (
    <Page title="Checkbox" description="Binary selection control.">
      <Sample title="Basic">
        <div className="flex items-center gap-2">
          <Checkbox id="terms" defaultChecked />
          <Label htmlFor="terms">Accept terms</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="news" />
          <Label htmlFor="news">Subscribe to newsletter</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="disabled" disabled />
          <Label htmlFor="disabled">Disabled</Label>
        </div>
      </Sample>
    </Page>
  );
}
