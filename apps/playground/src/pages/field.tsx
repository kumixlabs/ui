import {
  Field,
  FieldDescription,
  FieldLabel,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function FieldPage() {
  return (
    <Page title="Field" description="Structured form field with label and description.">
      <Sample title="Field">
        <Field className="w-full max-w-sm">
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input id="username" placeholder="kumix" />
          <FieldDescription>This is your public display name.</FieldDescription>
        </Field>
      </Sample>

      <Sample title="Radio group">
        <RadioGroup defaultValue="comfortable" className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      </Sample>
    </Page>
  );
}
