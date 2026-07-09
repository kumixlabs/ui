import { GradientBackground } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function GradientBackgroundPage() {
  return (
    <Page title="Gradient Background" description="Animated gradient backdrop.">
      <Sample title="Basic">
        <div className="relative h-40 w-full max-w-md overflow-hidden rounded-md border border-border">
          <GradientBackground className="absolute inset-0" />
        </div>
      </Sample>
    </Page>
  );
}
