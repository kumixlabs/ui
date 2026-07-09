import { Input, Label } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function InputPage() {
  return (
    <Page title="Input" description="Single-line text input.">
      <Sample title="Basic">
        <div className="flex w-64 flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
      </Sample>

      <Sample title="Types">
        <div className="flex w-64 flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
        <div className="flex w-64 flex-col gap-2">
          <Label htmlFor="number">Amount</Label>
          <Input id="number" type="number" placeholder="0" />
        </div>
        <div className="flex w-64 flex-col gap-2">
          <Label htmlFor="search">Search</Label>
          <Input id="search" type="search" placeholder="Search…" />
        </div>
      </Sample>

      <Sample title="States">
        <div className="flex w-64 flex-col gap-2">
          <Label htmlFor="prefilled">Prefilled</Label>
          <Input id="prefilled" defaultValue="Hello world" />
        </div>
        <div className="flex w-64 flex-col gap-2">
          <Label htmlFor="readonly">Read only</Label>
          <Input id="readonly" defaultValue="Cannot edit" readOnly />
        </div>
        <div className="flex w-64 flex-col gap-2">
          <Label htmlFor="disabled">Disabled</Label>
          <Input id="disabled" placeholder="Disabled" disabled />
        </div>
      </Sample>
    </Page>
  );
}
