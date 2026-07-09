import { FileIcon } from "lucide-react";

import {
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function ItemPage() {
  return (
    <Page title="Item" description="List item rows with media, content, and actions.">
      <Sample title="Item group">
        <ItemGroup className="w-full max-w-md">
          <Item>
            <ItemMedia>
              <FileIcon className="size-5 text-muted-foreground" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>report.pdf</ItemTitle>
              <ItemDescription>2.4 MB · PDF document</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost" size="sm">
                Open
              </Button>
            </ItemActions>
          </Item>
          <Item>
            <ItemMedia>
              <FileIcon className="size-5 text-muted-foreground" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>notes.txt</ItemTitle>
              <ItemDescription>12 KB · Text file</ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </Sample>
    </Page>
  );
}
