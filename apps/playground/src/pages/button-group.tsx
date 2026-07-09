import { Button, ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function ButtonGroupPage() {
  return (
    <Page title="Button Group" description="Grouped buttons acting as a single unit.">
      <Sample title="Basic">
        <ButtonGroup>
          <Button variant="outline">Left</Button>
          <Button variant="outline">Center</Button>
          <Button variant="outline">Right</Button>
        </ButtonGroup>
      </Sample>

      <Sample title="With text and separator">
        <ButtonGroup>
          <ButtonGroupText>Sort</ButtonGroupText>
          <ButtonGroupSeparator />
          <Button variant="outline">Newest</Button>
          <Button variant="outline">Oldest</Button>
        </ButtonGroup>
      </Sample>
    </Page>
  );
}
