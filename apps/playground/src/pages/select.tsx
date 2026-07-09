import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function SelectPage() {
  return (
    <Page title="Select" description="Dropdown selection with a styled trigger.">
      <Sample title="Basic">
        <Select defaultValue="apple">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Pick a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
          </SelectContent>
        </Select>
      </Sample>

      <Sample title="Placeholder">
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select a plan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="pro">Pro</SelectItem>
            <SelectItem value="team">Team</SelectItem>
          </SelectContent>
        </Select>
      </Sample>

      <Sample title="Disabled">
        <Select disabled>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Unavailable" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="a">Option A</SelectItem>
          </SelectContent>
        </Select>
      </Sample>
    </Page>
  );
}
