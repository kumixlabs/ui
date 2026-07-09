import { Rating } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function RatingPage() {
  return (
    <Page title="Rating" description="Star rating display and selection.">
      <Sample title="Basic">
        <Rating rating={3} maxRating={5} />
      </Sample>

      <Sample title="Partial value">
        <Rating rating={3.5} maxRating={5} />
      </Sample>

      <Sample title="Scales">
        <div className="flex flex-col gap-2">
          <Rating rating={2} maxRating={3} />
          <Rating rating={7} maxRating={10} />
        </div>
      </Sample>

      <Sample title="Empty and full">
        <div className="flex flex-col gap-2">
          <Rating rating={0} maxRating={5} />
          <Rating rating={5} maxRating={5} />
        </div>
      </Sample>
    </Page>
  );
}
