"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { SPRING_PRESS } from "../../../lib/ease";
import { Checkbox } from "../checkbox";
import { MorphPopover, MorphPopoverContent } from "../popover-morph";
import { Tooltip } from "../tooltip";
import { IconButton } from "./icon-button";
import { type DayKey, WEEKDAYS } from "./types";

// Copy this day's hours to other days: a morph popover with a day picker.
export function CopyMenu({
  fromLabel,
  reduce,
  onApply,
}: {
  fromLabel: string;
  reduce: boolean;
  onApply: (targets: DayKey[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [picked, setPicked] = useState<Set<DayKey>>(new Set());
  const others = WEEKDAYS.filter((d) => d.label !== fromLabel);

  const toggle = (k: DayKey) =>
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(k)) next.delete(k);
      else next.add(k);
      return next;
    });

  const apply = (targets: DayKey[]) => {
    if (!targets.length) return;
    onApply(targets);
    setOpen(false);
    setPicked(new Set());
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <MorphPopover open={open} onOpenChange={setOpen}>
      <Tooltip content="Copy times">
        <IconButton
          label={`Copy ${fromLabel} hours to other days`}
          reduce={reduce}
          expanded={open}
          onClick={() => setOpen(!open)}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {copied ? (
              <motion.span
                key="done"
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.5 }}
                transition={SPRING_PRESS}
                className="text-foreground"
              >
                <Check className="h-4 w-4" />
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.5 }}
                transition={SPRING_PRESS}
              >
                <Copy className="h-4 w-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </IconButton>
      </Tooltip>

      <MorphPopoverContent align="end" className="w-52 p-2">
        <p className="text-muted-foreground px-2 py-1.5 text-xs font-medium">Copy times to</p>
        <div className="flex flex-col">
          {others.map((d) => (
            <Checkbox
              key={d.key}
              checked={picked.has(d.key)}
              onCheckedChange={() => toggle(d.key)}
              label={d.label}
              className="hover:bg-muted [&_button[data-state=unchecked]]:border-border-strong w-full flex-row-reverse justify-between rounded-lg px-2 py-1.5 transition-colors [&_button]:size-4 [&_button]:rounded-[5px] [&_button]:border"
            />
          ))}
        </div>
        <div className="border-border mt-1 flex items-center gap-2 border-t px-1 pt-2">
          <button
            type="button"
            onClick={() => apply(others.map((d) => d.key))}
            className="text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:bg-muted flex-1 rounded-lg px-2 py-1.5 text-xs font-medium transition-colors outline-none"
          >
            Every day
          </button>
          <button
            type="button"
            onClick={() => apply([...picked])}
            disabled={picked.size === 0}
            className="bg-primary text-primary-foreground focus-visible:ring-ring flex-1 rounded-lg px-2 py-1.5 text-xs font-semibold transition-opacity outline-none hover:opacity-90 focus-visible:ring-2 disabled:opacity-40"
          >
            Apply
          </button>
        </div>
      </MorphPopoverContent>
    </MorphPopover>
  );
}
