import { Heading } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function HeadingPage() {
  return (
    <Page title="Heading" description="Semantic heading with visual levels.">
      <Sample title="Levels">
        <div className="flex flex-col gap-1">
          <Heading level={1}>Heading level 1</Heading>
          <Heading level={2}>Heading level 2</Heading>
          <Heading level={3}>Heading level 3</Heading>
          <Heading level={4}>Heading level 4</Heading>
          <Heading level={5}>Heading level 5</Heading>
          <Heading level={6}>Heading level 6</Heading>
        </div>
      </Sample>

      <Sample title="In context">
        <div className="flex max-w-md flex-col gap-1">
          <Heading level={2}>Getting started</Heading>
          <p className="text-muted-foreground text-sm">
            A short paragraph following a heading to show typographic rhythm.
          </p>
        </div>
      </Sample>
    </Page>
  );
}
