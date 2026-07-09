import { Bubble, BubbleContent, BubbleGroup } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function BubblePage() {
  return (
    <Page title="Bubble" description="Chat message bubble with variants.">
      <Sample title="Variants">
        <BubbleGroup className="w-full max-w-xs">
          <Bubble variant="default">
            <BubbleContent>Default bubble</BubbleContent>
          </Bubble>
          <Bubble variant="secondary">
            <BubbleContent>Secondary bubble</BubbleContent>
          </Bubble>
          <Bubble variant="outline">
            <BubbleContent>Outline bubble</BubbleContent>
          </Bubble>
          <Bubble variant="destructive">
            <BubbleContent>Destructive bubble</BubbleContent>
          </Bubble>
        </BubbleGroup>
      </Sample>

      <Sample title="Alignment">
        <BubbleGroup className="w-full max-w-xs">
          <Bubble variant="muted">
            <BubbleContent>Start aligned</BubbleContent>
          </Bubble>
          <Bubble variant="default" align="end">
            <BubbleContent>End aligned</BubbleContent>
          </Bubble>
        </BubbleGroup>
      </Sample>
    </Page>
  );
}
