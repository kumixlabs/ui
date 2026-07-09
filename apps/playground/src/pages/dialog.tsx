import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function DialogPage() {
  return (
    <Page title="Dialog" description="Modal dialog for focused content.">
      <Sample title="Basic">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>Make changes and save when done.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Sample>
    </Page>
  );
}
