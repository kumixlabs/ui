import { Marker, MarkerContent } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function MarkerPage() {
  return (
    <Page title="Marker" description="Inline label and separator for grouping content.">
      <Sample title="Variants">
        <div className="flex w-full max-w-md flex-col gap-3">
          <Marker variant="separator">
            <MarkerContent>Today</MarkerContent>
          </Marker>
          <Marker>
            <MarkerContent>A subtle default marker</MarkerContent>
          </Marker>
          <Marker variant="border">
            <MarkerContent>Border marker</MarkerContent>
          </Marker>
        </div>
      </Sample>
    </Page>
  );
}
