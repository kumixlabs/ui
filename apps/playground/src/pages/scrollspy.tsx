import { Scrollspy } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function ScrollspyPage() {
  return (
    <Page title="Scrollspy" description="Highlights navigation based on scroll position.">
      <Sample title="Anchors">
        <Scrollspy className="w-full max-w-md text-sm">
          <div className="flex flex-col gap-2">
            <a href="#s1" data-scrollspy-anchor="s1" className="text-muted-foreground">
              Section 1
            </a>
            <a href="#s2" data-scrollspy-anchor="s2" className="text-muted-foreground">
              Section 2
            </a>
            <a href="#s3" data-scrollspy-anchor="s3" className="text-muted-foreground">
              Section 3
            </a>
          </div>
        </Scrollspy>
      </Sample>
    </Page>
  );
}
