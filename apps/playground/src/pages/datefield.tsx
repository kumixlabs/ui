import { DateField, DateInput, Label, TimeField } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function DateFieldPage() {
  return (
    <Page title="Date & Time Field" description="Segmented date and time inputs.">
      <Sample title="Date field">
        <DateField className="flex w-56 flex-col gap-2">
          <Label>Event date</Label>
          <DateInput />
        </DateField>
      </Sample>

      <Sample title="Disabled">
        <DateField isDisabled className="flex w-56 flex-col gap-2">
          <Label>Locked date</Label>
          <DateInput />
        </DateField>
      </Sample>

      <Sample title="Time field">
        <TimeField className="flex w-56 flex-col gap-2">
          <Label>Start time</Label>
          <DateInput />
        </TimeField>
      </Sample>
    </Page>
  );
}
