"use client";

import type { ReactNode } from "react";

import { cn } from "@kumix/utils";
import { NumberTicker } from "../../motion/number-ticker";
import { usePriceTargetFan } from "./context";
import { ink, LOW, UP } from "./utils";

export function PriceTargetFanHeader({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const { head, headPct } = usePriceTargetFan();
  return (
    <div className={cn("mb-1 flex items-end justify-between px-1", className)}>
      {children ?? (
        <div className="flex flex-wrap items-center gap-2">
          <NumberTicker
            value={Math.round(head.price * 100)}
            format={(v) => (v / 100).toFixed(2)}
            prefix="$"
            duration={0.5}
            className="font-mono font-semibold text-2xl text-foreground tabular-nums tracking-tight"
          />
          <span
            className="font-medium font-mono text-xs tabular-nums"
            style={{ color: ink((head.color as string | undefined) ?? (headPct >= 0 ? UP : LOW)) }}
          >
            <NumberTicker
              value={Math.round(Math.abs(headPct) * 10)}
              format={(v) => (v / 10).toFixed(1)}
              prefix={headPct >= 0 ? "+" : "−"}
              suffix="%"
              duration={0.5}
            />
          </span>
          <span className="text-muted-foreground text-xs">{head.key} target</span>
        </div>
      )}
    </div>
  );
}
