import { Alert, AlertContent, AlertDescription, AlertTitle } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function AlertPage() {
  return (
    <Page title="Alert" description="Callout for surfacing important messages.">
      <Sample title="Default">
        <Alert className="w-full max-w-md">
          <AlertContent>
            <AlertTitle>Heads up</AlertTitle>
            <AlertDescription>
              You can update your preferences at any time in settings.
            </AlertDescription>
          </AlertContent>
        </Alert>
      </Sample>

      <Sample title="Title only">
        <Alert className="w-full max-w-md">
          <AlertContent>
            <AlertTitle>Changes saved successfully</AlertTitle>
          </AlertContent>
        </Alert>
      </Sample>

      <Sample title="Description only">
        <Alert className="w-full max-w-md">
          <AlertContent>
            <AlertDescription>
              Your session will expire in 5 minutes. Save your work.
            </AlertDescription>
          </AlertContent>
        </Alert>
      </Sample>
    </Page>
  );
}
