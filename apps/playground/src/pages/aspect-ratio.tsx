import { AspectRatio } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function AspectRatioPage() {
  return (
    <Page title="Aspect Ratio" description="Constrains content to a fixed ratio.">
      <Sample title="16 / 9">
        <div className="w-64">
          <AspectRatio ratio={16 / 9} className="rounded-md bg-muted">
            <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
              16 / 9
            </div>
          </AspectRatio>
        </div>
      </Sample>

      <Sample title="1 / 1">
        <div className="w-40">
          <AspectRatio ratio={1} className="rounded-md bg-muted">
            <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
              1 / 1
            </div>
          </AspectRatio>
        </div>
      </Sample>
    </Page>
  );
}
