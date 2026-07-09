import { Button } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function ButtonPage() {
  return (
    <Page title="Button" description="Clickable action trigger with variants and sizes.">
      <Sample title="Variants">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="dashed">Dashed</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="mono">Mono</Button>
      </Sample>

      <Sample title="Sizes">
        <Button size="lg">Large</Button>
        <Button size="md">Medium</Button>
        <Button size="sm">Small</Button>
        <Button size="xs">Extra small</Button>
      </Sample>

      <Sample title="States">
        <Button>Enabled</Button>
        <Button disabled>Disabled</Button>
      </Sample>

      <Sample title="As child (link)">
        <Button variant="outline" asChild>
          <a href="https://kumix.io">Anchor button</a>
        </Button>
      </Sample>
    </Page>
  );
}
