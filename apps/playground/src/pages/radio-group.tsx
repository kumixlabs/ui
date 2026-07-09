import { Label, RadioGroup, RadioGroupItem } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function RadioGroupPage() {
  return (
    <Page title="Radio Group" description="Single selection from a set of options.">
      <Sample title="Basic">
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

      <Sample title="Horizontal">
        <RadioGroup defaultValue="card" className="flex gap-4">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="card" id="p1" />
            <Label htmlFor="p1">Card</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="paypal" id="p2" />
            <Label htmlFor="p2">PayPal</Label>
          </div>
        </RadioGroup>
      </Sample>

      <Sample title="Disabled">
        <RadioGroup defaultValue="a" className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="a" id="d1" disabled />
            <Label htmlFor="d1" className="opacity-50">
              Unavailable option
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="b" id="d2" disabled />
            <Label htmlFor="d2" className="opacity-50">
              Also unavailable
            </Label>
          </div>
        </RadioGroup>
      </Sample>
    </Page>
  );
}
