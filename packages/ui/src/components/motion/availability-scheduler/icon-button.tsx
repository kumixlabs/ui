"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

import { cn } from "@kumix/utils";
import { SPRING_PRESS } from "../../../lib/ease";

export function IconButton({
  onClick,
  label,
  disabled,
  expanded,
  reduce,
  children,
  className,
  // Rest props let a wrapping Tooltip inject its hover/focus handlers.
  ...rest
}: {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  expanded?: boolean;
  reduce: boolean;
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <motion.button
      {...rest}
      type="button"
      aria-label={label}
      aria-expanded={expanded}
      onClick={onClick}
      disabled={disabled}
      whileTap={reduce || disabled ? undefined : { scale: 0.86 }}
      transition={SPRING_PRESS}
      className={cn(
        "text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:ring-ring inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-40",
        className,
      )}
    >
      {children}
    </motion.button>
  );
}
