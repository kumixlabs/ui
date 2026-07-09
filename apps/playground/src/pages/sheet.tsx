import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function SheetPage() {
  return (
    <Page title="Sheet" description="Side slide-in panel.">
      <Sample title="Basic">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Settings</SheetTitle>
              <SheetDescription>Manage your preferences here.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </Sample>
    </Page>
  );
}
