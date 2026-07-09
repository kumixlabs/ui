import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function ResizablePage() {
  return (
    <Page title="Resizable" description="Resizable panel layout with drag handles.">
      <Sample title="Horizontal">
        <ResizablePanelGroup
          orientation="horizontal"
          className="h-40 w-full max-w-md rounded-md border border-border"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center text-sm">Left</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center text-sm">Right</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </Sample>
    </Page>
  );
}
