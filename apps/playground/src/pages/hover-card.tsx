import { Button, HoverCard, HoverCardContent, HoverCardTrigger } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function HoverCardPage() {
  return (
    <Page title="Hover Card" description="Card preview shown on hover.">
      <Sample title="Basic">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost">@kumix</Button>
          </HoverCardTrigger>
          <HoverCardContent className="text-sm">
            Kumix Labs — React component library.
          </HoverCardContent>
        </HoverCard>
      </Sample>

      <Sample title="Profile preview">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost">Ada Lovelace</Button>
          </HoverCardTrigger>
          <HoverCardContent className="flex w-64 flex-col gap-1">
            <p className="font-medium text-sm">Ada Lovelace</p>
            <p className="text-muted-foreground text-xs">
              First computer programmer. Wrote the first algorithm intended for a machine.
            </p>
          </HoverCardContent>
        </HoverCard>
      </Sample>
    </Page>
  );
}
