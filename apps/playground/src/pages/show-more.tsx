import { useState } from "react";

import { ShowMore } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function ShowMorePage() {
  const [openA, setOpenA] = useState(false);
  const [openB, setOpenB] = useState(false);

  return (
    <Page title="Show More" description="Toggle divider that reveals or hides extra content.">
      <Sample title="Expandable text">
        <div className="w-full max-w-md">
          <p className="text-sm leading-6">
            Kumix UI is a headless, accessible React component library built on Radix UI, Tailwind
            CSS utilities, and related primitives.
          </p>
          {openA ? (
            <p className="mt-2 text-muted-foreground text-sm leading-6">
              It ships a broad set of components for building modern web applications, from simple
              buttons to complex data grids, all styled with semantic CSS variables and data-slot
              attributes for easy customization.
            </p>
          ) : null}
          <ShowMore isSelected={openA} onChange={setOpenA}>
            {openA ? "Show less" : "Show more"}
          </ShowMore>
        </div>
      </Sample>

      <Sample title="Vertical orientation">
        <div className="flex items-center gap-3 text-sm">
          <span>Summary</span>
          <ShowMore orientation="vertical" isSelected={openB} onChange={setOpenB}>
            {openB ? "Hide" : "Details"}
          </ShowMore>
          {openB ? <span className="text-muted-foreground">Extra detail revealed</span> : null}
        </div>
      </Sample>
    </Page>
  );
}
