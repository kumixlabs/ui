import { useState } from "react";

import { Calendar } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Page title="Calendar" description="Date selection calendar.">
      <Sample title="Single date">
        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
      </Sample>

      <Sample title="With multiple months">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
          className="rounded-md border"
        />
      </Sample>
    </Page>
  );
}
