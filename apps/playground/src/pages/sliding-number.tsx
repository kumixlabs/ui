import { SlidingNumber } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function SlidingNumberPage() {
  return (
    <Page title="Sliding Number" description="Number that animates by sliding digits.">
      <Sample title="Basic">
        <SlidingNumber from={0} to={2026} className="font-bold text-2xl" />
      </Sample>

      <Sample title="Counter values">
        <div className="flex gap-8">
          <SlidingNumber from={0} to={42} className="font-bold text-3xl" />
          <SlidingNumber from={100} to={87} className="font-bold text-3xl" />
          <SlidingNumber from={0} to={999} className="font-bold text-3xl" />
        </div>
      </Sample>
    </Page>
  );
}
