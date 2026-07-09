import { Label, NativeSelect, NativeSelectOption } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function NativeSelectPage() {
  return (
    <Page title="Native Select" description="Styled native HTML select element.">
      <Sample title="Basic">
        <div className="flex w-64 flex-col gap-2">
          <Label htmlFor="plan">Plan</Label>
          <NativeSelect id="plan" defaultValue="pro">
            <NativeSelectOption value="free">Free</NativeSelectOption>
            <NativeSelectOption value="pro">Pro</NativeSelectOption>
            <NativeSelectOption value="team">Team</NativeSelectOption>
          </NativeSelect>
        </div>
      </Sample>

      <Sample title="Small size">
        <NativeSelect size="sm" defaultValue="a">
          <NativeSelectOption value="a">Option A</NativeSelectOption>
          <NativeSelectOption value="b">Option B</NativeSelectOption>
        </NativeSelect>
      </Sample>
    </Page>
  );
}
