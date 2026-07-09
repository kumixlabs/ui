import { Progress, ProgressCircle } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function ProgressPage() {
  return (
    <Page title="Progress" description="Determinate progress indicators.">
      <Sample title="Progress bar">
        <div className="flex w-full max-w-md flex-col gap-3">
          <Progress value={25} />
          <Progress value={60} />
          <Progress value={90} />
        </div>
      </Sample>

      <Sample title="Progress circle">
        <ProgressCircle value={25} />
        <ProgressCircle value={60} />
        <ProgressCircle value={90} />
      </Sample>

      <Sample title="Empty and full">
        <div className="flex w-full max-w-md flex-col gap-3">
          <Progress value={0} />
          <Progress value={100} />
        </div>
      </Sample>
    </Page>
  );
}
