import { Spinner } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function SpinnerPage() {
  return (
    <Page title="Spinner" description="Indeterminate loading indicator.">
      <Sample title="Basic">
        <Spinner />
      </Sample>

      <Sample title="Sizes">
        <Spinner className="size-3" />
        <Spinner className="size-5" />
        <Spinner className="size-8" />
      </Sample>

      <Sample title="Colors">
        <Spinner className="text-primary" />
        <Spinner className="text-muted-foreground" />
        <Spinner className="text-destructive" />
      </Sample>

      <Sample title="With label">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Spinner />
          Loading...
        </div>
      </Sample>
    </Page>
  );
}
