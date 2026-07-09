import { GithubButton } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function GithubButtonPage() {
  return (
    <Page title="GitHub Button" description="Social button with GitHub styling.">
      <Sample title="Basic">
        <GithubButton />
      </Sample>

      <Sample title="With repo link">
        <GithubButton repoUrl="https://github.com/kumixlabs/ui" label="Star on GitHub" />
      </Sample>
    </Page>
  );
}
