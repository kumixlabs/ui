import { CountingNumber } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function CountingNumberPage() {
  return (
    <Page title="Counting Number" description="Number that counts up on view.">
      <Sample title="Basic">
        <CountingNumber from={0} to={1234} className="font-bold text-2xl" />
      </Sample>

      <Sample title="Metric row">
        <div className="flex gap-8">
          <div className="flex flex-col">
            <CountingNumber from={0} to={98} className="font-bold text-3xl" />
            <span className="text-muted-foreground text-xs">Uptime %</span>
          </div>
          <div className="flex flex-col">
            <CountingNumber from={0} to={12500} className="font-bold text-3xl" />
            <span className="text-muted-foreground text-xs">Users</span>
          </div>
          <div className="flex flex-col">
            <CountingNumber from={0} to={4200} className="font-bold text-3xl" />
            <span className="text-muted-foreground text-xs">Deploys</span>
          </div>
        </div>
      </Sample>
    </Page>
  );
}
