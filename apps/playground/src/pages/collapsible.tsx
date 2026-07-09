import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function CollapsiblePage() {
  return (
    <Page title="Collapsible" description="Toggle visibility of content.">
      <Sample title="Basic">
        <Collapsible className="w-full max-w-md">
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm">
              Toggle details
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2 text-muted-foreground text-sm">
            Hidden content revealed on toggle.
          </CollapsibleContent>
        </Collapsible>
      </Sample>

      <Sample title="Open by default">
        <Collapsible defaultOpen className="w-full max-w-md">
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm">
              Toggle changelog
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col gap-1 pt-2 text-muted-foreground text-sm">
            <span>v1.2.0 — new components</span>
            <span>v1.1.0 — dark mode</span>
            <span>v1.0.0 — initial release</span>
          </CollapsibleContent>
        </Collapsible>
      </Sample>
    </Page>
  );
}
