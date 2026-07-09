import { Tabs, TabsContent, TabsList, TabsTrigger } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function TabsPage() {
  return (
    <Page title="Tabs" description="Switch between related panels of content.">
      <Sample title="Basic">
        <Tabs defaultValue="overview" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="py-3 text-muted-foreground text-sm">
            Overview panel content.
          </TabsContent>
          <TabsContent value="activity" className="py-3 text-muted-foreground text-sm">
            Activity panel content.
          </TabsContent>
          <TabsContent value="settings" className="py-3 text-muted-foreground text-sm">
            Settings panel content.
          </TabsContent>
        </Tabs>
      </Sample>
    </Page>
  );
}
