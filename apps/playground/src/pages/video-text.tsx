import { VideoText } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function VideoTextPage() {
  return (
    <Page title="Video Text" description="Text masking a video background.">
      <Sample title="Basic">
        <div className="h-32 w-full max-w-md">
          <VideoText src="https://cdn.magicui.design/ocean-small.webm">Kumix</VideoText>
        </div>
      </Sample>

      <Sample title="Longer word">
        <div className="h-32 w-full max-w-lg">
          <VideoText src="https://cdn.magicui.design/ocean-small.webm">OCEAN</VideoText>
        </div>
      </Sample>
    </Page>
  );
}
