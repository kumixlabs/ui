import { FileIcon, FolderIcon, SettingsIcon } from "lucide-react";

import {
  AccordionMenu,
  AccordionMenuGroup,
  AccordionMenuItem,
  AccordionMenuLabel,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function AccordionMenuPage() {
  return (
    <Page title="Accordion Menu" description="Collapsible navigation menu with selection.">
      <Sample title="Menu">
        <AccordionMenu
          type="single"
          selectedValue="dashboard"
          className="w-full max-w-xs rounded-md border border-border p-2"
        >
          <AccordionMenuGroup>
            <AccordionMenuLabel>Navigation</AccordionMenuLabel>
            <AccordionMenuItem value="dashboard">
              <FolderIcon />
              Dashboard
            </AccordionMenuItem>
            <AccordionMenuItem value="files">
              <FileIcon />
              Files
            </AccordionMenuItem>
            <AccordionMenuItem value="settings">
              <SettingsIcon />
              Settings
            </AccordionMenuItem>
          </AccordionMenuGroup>
        </AccordionMenu>
      </Sample>
    </Page>
  );
}
