import { TextReveal } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function TextRevealPage() {
  return (
    <Page title="Text Reveal" description="Text that reveals word-by-word on scroll.">
      <Sample title="Basic">
        <TextReveal className="max-w-md text-lg">
          Kumix UI helps you build accessible interfaces faster.
        </TextReveal>
      </Sample>

      <Sample title="Longer passage">
        <TextReveal className="max-w-lg text-xl">
          Every component is themed, accessible, and ready for production out of the box.
        </TextReveal>
      </Sample>
    </Page>
  );
}
