import {
  Button,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function DrawerPage() {
  return (
    <Page title="Drawer" description="Bottom slide-in panel for secondary content.">
      <Sample title="Basic">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Confirm order</DrawerTitle>
              <DrawerDescription>Review the details below.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Confirm</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Sample>
    </Page>
  );
}
