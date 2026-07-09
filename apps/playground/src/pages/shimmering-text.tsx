import { ShimmeringText } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function ShimmeringTextPage() {
  return (
    <Page title="Shimmering Text" description="Text with an animated shimmer effect.">
      <Sample title="Basic">
        <ShimmeringText text="Kumix UI" className="font-semibold text-xl" />
      </Sample>

      <Sample title="Sizes">
        <div className="flex flex-col gap-2">
          <ShimmeringText text="Loading your workspace" className="text-sm" />
          <ShimmeringText text="Generating report" className="font-medium text-lg" />
          <ShimmeringText text="Almost there" className="font-bold text-3xl" />
        </div>
      </Sample>
    </Page>
  );
}
