import { HomeIcon, InboxIcon, SettingsIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

const items = [
  { title: "Home", icon: HomeIcon },
  { title: "Inbox", icon: InboxIcon },
  { title: "Settings", icon: SettingsIcon },
];

export function SidebarPage() {
  return (
    <Page title="Sidebar" description="Collapsible application sidebar with menu.">
      <Sample title="Sidebar layout">
        <div className="h-80 w-full overflow-hidden rounded-md border border-border">
          <SidebarProvider className="min-h-full">
            <Sidebar className="absolute">
              <SidebarHeader className="px-3 py-2 font-semibold text-sm">Kumix</SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Application</SidebarGroupLabel>
                  <SidebarMenu>
                    {items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton>
                          <item.icon />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <SidebarInset className="flex flex-col gap-2 p-4">
              <SidebarTrigger />
              <p className="text-muted-foreground text-sm">
                Main content area. Toggle the sidebar with the trigger.
              </p>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </Sample>
    </Page>
  );
}
