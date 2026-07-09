import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function ContextMenuPage() {
  return (
    <Page title="Context Menu" description="Right-click contextual menu.">
      <Sample title="Basic">
        <ContextMenu>
          <ContextMenuTrigger className="flex h-24 w-full max-w-md items-center justify-center rounded-md border border-border border-dashed text-muted-foreground text-sm">
            Right-click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              Back <ContextMenuShortcut>Alt+Left</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Save as...</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Sample>
    </Page>
  );
}
