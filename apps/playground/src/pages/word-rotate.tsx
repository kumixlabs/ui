import { WordRotate } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function WordRotatePage() {
  return (
    <Page title="Word Rotate" description="Cycles through a set of words with animation.">
      <Sample title="Basic">
        <WordRotate className="font-semibold text-xl" words={["Fast", "Accessible", "Themed"]} />
      </Sample>

      <Sample title="In a headline">
        <p className="flex items-center gap-1.5 font-bold text-2xl">
          <span>Build</span>
          <WordRotate className="text-primary" words={["faster", "smarter", "better"]} />
          <span>with Kumix.</span>
        </p>
      </Sample>
    </Page>
  );
}
