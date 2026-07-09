import { Label, Switch } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function SwitchPage() {
  return (
    <Page title="Switch" description="Toggle between on and off states.">
      <Sample title="Basic">
        <div className="flex items-center gap-2">
          <Switch id="notify" defaultChecked />
          <Label htmlFor="notify">Notifications</Label>
        </div>
      </Sample>

      <Sample title="States">
        <div className="flex items-center gap-2">
          <Switch id="on" defaultChecked />
          <Label htmlFor="on">On by default</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="off" />
          <Label htmlFor="off">Off by default</Label>
        </div>
      </Sample>

      <Sample title="Disabled">
        <div className="flex items-center gap-2">
          <Switch id="disabled-off" disabled />
          <Label htmlFor="disabled-off">Disabled off</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="disabled-on" disabled defaultChecked />
          <Label htmlFor="disabled-on">Disabled on</Label>
        </div>
      </Sample>
    </Page>
  );
}
