import { useState } from "react";

import { type Filter, type FilterFieldConfig, Filters } from "@kumix/ui";
import { Page, Sample } from "../showcase";

const fields: FilterFieldConfig[] = [
  {
    key: "status",
    label: "Status",
    type: "multiselect",
    options: [
      { label: "Active", value: "active" },
      { label: "Invited", value: "invited" },
      { label: "Suspended", value: "suspended" },
    ],
  },
  {
    key: "role",
    label: "Role",
    type: "select",
    options: [
      { label: "Engineer", value: "engineer" },
      { label: "Designer", value: "designer" },
    ],
  },
  { key: "name", label: "Name", type: "text" },
];

export function FiltersPage() {
  const [filters, setFilters] = useState<Filter[]>([]);

  return (
    <Page title="Filters" description="Composable query filter builder.">
      <Sample title="Filter builder">
        <Filters filters={filters} fields={fields} onChange={setFilters} className="w-full" />
      </Sample>
    </Page>
  );
}
