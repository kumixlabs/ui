import { GridBackground } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function GridBackgroundPage() {
  return (
    <Page title="Grid Background" description="Animated grid backdrop.">
      <Sample title="Basic">
        <div className="relative h-40 w-full max-w-md overflow-hidden rounded-md border border-border">
          <GridBackground className="absolute inset-0" />
        </div>
      </Sample>

      <Sample title="With content overlay">
        <div className="relative flex h-40 w-full max-w-md items-center justify-center overflow-hidden rounded-md border border-border">
          <GridBackground className="absolute inset-0" />
          <span className="relative font-semibold text-lg">Hero section</span>
        </div>
      </Sample>
    </Page>
  );
}
