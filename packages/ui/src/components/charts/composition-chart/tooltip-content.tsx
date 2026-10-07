"use client";

import { cn } from "@kumix/utils";
import { NumberTicker } from "../../motion/number-ticker";
import { useCompositionChart } from "./context";

export function CompositionTooltipContent({ className }: { className?: string }) {
  const { column, formatValue } = useCompositionChart();
  if (!column) return null;
  return (
    <span className={cn("block w-72 min-w-0 max-w-full", className)}>
      <span className="mb-2 block font-medium text-xs">{column.id}</span>
      {column.valid ? (
        <span className="grid gap-2">
          {column.segments.map((row) => (
            <span key={row.id} className="flex items-center gap-2 text-[11px]">
              <span
                aria-hidden="true"
                className="size-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: row.color }}
              />
              <span className="min-w-0 flex-1 truncate">{row.name}</span>
              <span
                className="max-w-28 shrink-0 truncate text-muted-foreground tabular-nums"
                title={formatValue(row.value ?? 0)}
              >
                <NumberTicker
                  value={row.value ?? 0}
                  // Keep the consumer's exact formatting, including fractional values and units.
                  format={() => formatValue(row.value ?? 0)}
                  startOnView={false}
                  duration={0.2}
                  stagger={0}
                  className="whitespace-pre"
                />
              </span>
              <span className="w-12 shrink-0 text-right font-mono tabular-nums">
                <NumberTicker
                  value={row.share}
                  format={() => row.share.toFixed(1)}
                  suffix="%"
                  startOnView={false}
                  duration={0.2}
                  stagger={0}
                />
              </span>
            </span>
          ))}
        </span>
      ) : (
        <span className="block text-muted-foreground text-xs">
          No complete data for this period.
        </span>
      )}
    </span>
  );
}
