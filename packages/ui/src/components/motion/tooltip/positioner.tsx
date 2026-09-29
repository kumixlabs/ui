"use client";

import { type ReactNode, useCallback, useState } from "react";
import { useIsPresent } from "motion/react";

import { useTooltipPosition } from "./use-position";

type PositionProps = Parameters<typeof useTooltipPosition>[0];

/** Readiness lives with the mounted overlay, not a trigger ref's attach/detach cycle. */
export function TooltipPositioner({
  children,
  ...position
}: Omit<PositionProps, "open" | "onPosition"> & {
  children: (ready: boolean, present: boolean) => ReactNode;
}) {
  const present = useIsPresent();
  const [ready, setReady] = useState(false);
  const onPosition = useCallback(() => setReady(true), []);
  useTooltipPosition({ ...position, open: present, onPosition });
  return (
    <span
      ref={position.floatingRef}
      inert={!present}
      aria-hidden={!present || undefined}
      className="pointer-events-none fixed top-0 left-0 z-9999 w-max"
      style={{ visibility: "hidden", maxWidth: "calc(100vw - 16px)" }}
    >
      {children(ready, present)}
    </span>
  );
}
