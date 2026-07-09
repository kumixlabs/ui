import { Skeleton } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function SkeletonPage() {
  return (
    <Page title="Skeleton" description="Placeholder loading state.">
      <Sample title="Text lines">
        <div className="flex w-full max-w-md flex-col gap-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-24 w-full" />
        </div>
      </Sample>

      <Sample title="Avatar + text">
        <div className="flex items-center gap-3">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
      </Sample>
    </Page>
  );
}
