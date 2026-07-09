import { InboxIcon } from "lucide-react";

import { Button, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function EmptyPage() {
  return (
    <Page title="Empty" description="Empty state for no-data scenarios.">
      <Sample title="Basic">
        <Empty className="w-full max-w-md">
          <EmptyHeader>
            <InboxIcon className="size-8 text-muted-foreground" />
            <EmptyTitle>No messages</EmptyTitle>
            <EmptyDescription>You're all caught up. Check back later.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm">Refresh</Button>
          </EmptyContent>
        </Empty>
      </Sample>
    </Page>
  );
}
