import { HoverBackground } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function HoverBackgroundPage() {
  return (
    <Page title="Hover Background" description="Interactive background reacting to the cursor.">
      <Sample title="Basic" description="Move your cursor over the panel.">
        <div className="relative h-48 w-full max-w-md overflow-hidden rounded-md border border-border">
          <HoverBackground className="absolute inset-0" />
        </div>
      </Sample>

      <Sample title="With content overlay">
        <div className="relative flex h-48 w-full max-w-md items-center justify-center overflow-hidden rounded-md border border-border">
          <HoverBackground className="absolute inset-0" />
          <span className="relative font-semibold text-lg">Hover me</span>
        </div>
      </Sample>
    </Page>
  );
}
