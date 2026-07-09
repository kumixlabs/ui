import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function CommandPage() {
  return (
    <Page title="Command" description="Command palette for quick actions and search.">
      <Sample title="Basic">
        <Command className="w-full max-w-sm rounded-md border border-border">
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </Sample>
    </Page>
  );
}
