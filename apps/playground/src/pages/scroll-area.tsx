import { ScrollArea } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function ScrollAreaPage() {
  return (
    <Page title="Scroll Area" description="Custom-styled scrollable region.">
      <Sample title="Vertical">
        <ScrollArea className="h-40 w-64 rounded-md border border-border p-3">
          <div className="flex flex-col gap-2 text-sm">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i}>Scrollable row {i + 1}</div>
            ))}
          </div>
        </ScrollArea>
      </Sample>
    </Page>
  );
}
