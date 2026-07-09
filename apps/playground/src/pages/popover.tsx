import { Button, Input, Label, Popover, PopoverContent, PopoverTrigger } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function PopoverPage() {
  return (
    <Page title="Popover" description="Floating content anchored to a trigger.">
      <Sample title="Basic">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent className="text-sm">
            Popover content with any markup inside.
          </PopoverContent>
        </Popover>
      </Sample>

      <Sample title="Rich content">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Dimensions</Button>
          </PopoverTrigger>
          <PopoverContent className="flex w-64 flex-col gap-2">
            <p className="font-medium text-sm">Dimensions</p>
            <div className="flex items-center justify-between gap-2 text-sm">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="h-8 w-32" />
            </div>
            <div className="flex items-center justify-between gap-2 text-sm">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="h-8 w-32" />
            </div>
          </PopoverContent>
        </Popover>
      </Sample>
    </Page>
  );
}
