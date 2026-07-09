import { TypingText } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function TypingTextPage() {
  return (
    <Page title="Typing Text" description="Text that types out and cycles through phrases.">
      <Sample title="Looping">
        <TypingText
          className="text-lg"
          texts={["Build faster", "Ship better", "With Kumix UI"]}
          loop
        />
      </Sample>

      <Sample title="Single phrase">
        <TypingText className="font-mono text-lg" texts={["> npm install @kumix/ui"]} />
      </Sample>
    </Page>
  );
}
