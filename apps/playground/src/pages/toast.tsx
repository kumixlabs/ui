import { toast } from "sonner";

import { Button, Toaster } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function ToastPage() {
  return (
    <Page title="Toast (Sonner)" description="Transient notification messages.">
      <Sample title="Triggers">
        <Button variant="outline" onClick={() => toast("Event has been created")}>
          Default
        </Button>
        <Button variant="outline" onClick={() => toast.success("Saved successfully")}>
          Success
        </Button>
        <Button variant="outline" onClick={() => toast.error("Something went wrong")}>
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("Message sent", { description: "We'll notify you when there's a reply." })
          }
        >
          With description
        </Button>
      </Sample>
      <Toaster theme="system" />
    </Page>
  );
}
