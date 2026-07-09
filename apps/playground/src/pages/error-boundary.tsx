import { useState } from "react";

import { Button, ErrorBoundary } from "@kumix/ui";
import { Page, Sample } from "../showcase";

function Boom(): React.ReactElement {
  throw new Error("Intentional render error");
}

export function ErrorBoundaryPage() {
  const [crash, setCrash] = useState(false);

  return (
    <Page title="Error Boundary" description="Catches render errors and shows a fallback.">
      <Sample title="Basic">
        <div className="flex flex-col items-start gap-2">
          <ErrorBoundary resetKeys={[crash]}>
            {crash ? <Boom /> : <span className="text-sm">No error yet.</span>}
          </ErrorBoundary>
          <Button variant="outline" size="sm" onClick={() => setCrash((v) => !v)}>
            Toggle error
          </Button>
        </div>
      </Sample>
    </Page>
  );
}
