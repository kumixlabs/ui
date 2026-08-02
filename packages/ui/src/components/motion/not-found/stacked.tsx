"use client";

import { motion, useReducedMotion } from "motion/react";

import { useHoverCapable } from "../../../hooks/use-hover-capable";
import { SPRING_PANEL } from "../../../lib/ease";
import { NOT_FOUND_DEFAULTS, NotFoundActions, type NotFoundProps, NotFoundStage } from "./shared";

const CARD = "absolute inset-0 rounded-3xl border border-border bg-card shadow-sm";

export function NotFoundStacked({
  className,
  code = NOT_FOUND_DEFAULTS.code,
  title = NOT_FOUND_DEFAULTS.title,
  description = NOT_FOUND_DEFAULTS.description,
  homeHref,
  homeLabel,
  browseHref,
  browseLabel,
}: NotFoundProps) {
  const reduce = useReducedMotion();
  const canHover = useHoverCapable();
  const interactive = !reduce && canHover;

  return (
    <NotFoundStage className={className}>
      <motion.div
        initial="rest"
        animate="rest"
        whileHover={interactive ? "hover" : undefined}
        className="relative h-44 w-64"
      >
        <motion.div
          aria-hidden
          variants={{ rest: { rotate: 0, x: 0, y: 0 }, hover: { rotate: -9, x: -28, y: 8 } }}
          transition={SPRING_PANEL}
          className={CARD}
        />
        <motion.div
          aria-hidden
          variants={{ rest: { rotate: 0, x: 0, y: 0 }, hover: { rotate: 9, x: 28, y: 8 } }}
          transition={SPRING_PANEL}
          className={CARD}
        />
        <motion.div
          variants={{ rest: { y: 0 }, hover: { y: -6 } }}
          transition={SPRING_PANEL}
          className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-3xl border border-border bg-card shadow-md"
        >
          <h1 className="select-none font-bold text-[clamp(3.5rem,9vw,5rem)] text-foreground leading-none tracking-tighter">
            {code}
          </h1>
          <span className="font-medium text-muted-foreground text-xs uppercase tracking-wide">
            out of the deck
          </span>
        </motion.div>
      </motion.div>

      <div className="flex flex-col items-center gap-2">
        <p className="font-semibold text-foreground text-lg">{title}</p>
        <p className="max-w-sm text-muted-foreground text-sm">{description}</p>
      </div>

      <NotFoundActions
        homeHref={homeHref}
        homeLabel={homeLabel}
        browseHref={browseHref}
        browseLabel={browseLabel}
      />
    </NotFoundStage>
  );
}
