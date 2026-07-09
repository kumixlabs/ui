import { Badge, BadgeDot } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function BadgePage() {
  return (
    <Page title="Badge" description="Compact status and label indicator.">
      <Sample title="Variants">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </Sample>

      <Sample title="With dot">
        <Badge variant="secondary">
          <BadgeDot />
          Active
        </Badge>
        <Badge variant="outline">
          <BadgeDot className="bg-destructive" />
          Offline
        </Badge>
      </Sample>
    </Page>
  );
}
