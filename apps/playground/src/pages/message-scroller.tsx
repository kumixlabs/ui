import {
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function MessageScrollerPage() {
  return (
    <Page title="Message Scroller" description="Auto-scrolling virtualized message list.">
      <Sample title="Basic">
        <MessageScrollerProvider>
          <MessageScroller className="h-56 w-full max-w-md rounded-md border border-border">
            <MessageScrollerViewport>
              <MessageScrollerContent className="p-3">
                {Array.from({ length: 12 }).map((_, i) => (
                  <MessageScrollerItem key={i} className="rounded-md bg-muted px-3 py-2 text-sm">
                    Message {i + 1}
                  </MessageScrollerItem>
                ))}
              </MessageScrollerContent>
            </MessageScrollerViewport>
          </MessageScroller>
        </MessageScrollerProvider>
      </Sample>
    </Page>
  );
}
