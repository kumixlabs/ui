"use client";

import { cn } from "@kumix/utils";
import type { XYRow } from "./model";

export interface XYLegendProps {
  rows: readonly XYRow[];
  hidden: readonly string[];
  onToggle: (id: string) => void;
  onHover: (id: string | null) => void;
  canHover: boolean;
  label: string;
  className?: string;
}

/** Each entry is a toggle: pressed means the series is drawn. */
export function XYLegend({
  rows,
  hidden,
  onToggle,
  onHover,
  canHover,
  label,
  className,
}: XYLegendProps) {
  return (
    <ul
      aria-label={label}
      className={cn("flex flex-wrap items-center gap-x-1 gap-y-1 text-xs", className)}
    >
      {rows.map((row) => {
        const shown = !hidden.includes(row.id);
        return (
          <li key={row.id}>
            <button
              type="button"
              aria-pressed={shown}
              onClick={() => onToggle(row.id)}
              onPointerEnter={() => {
                if (canHover && shown) onHover(row.id);
              }}
              onPointerLeave={() => onHover(null)}
              onFocus={() => {
                if (shown) onHover(row.id);
              }}
              onBlur={() => onHover(null)}
              className={cn(
                "text-muted-foreground hover:text-foreground focus-visible:outline-ring flex min-h-9 items-center gap-2 rounded-md px-2 transition-[color,opacity] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2",
                !shown && "opacity-50",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "size-2.5 shrink-0 rounded-full border-2 transition-colors duration-150",
                )}
                style={{
                  borderColor: row.color,
                  backgroundColor: shown ? row.color : "transparent",
                }}
              />
              <span className={cn(!shown && "decoration-muted-foreground/60 line-through")}>
                {row.name}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
