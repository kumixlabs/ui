"use client";

import { useRef } from "react";
import { cn } from "cn";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "motion/react";

import { useHoverCapable } from "../../../hooks/use-hover-capable";
import { NOT_FOUND_DEFAULTS, NotFoundActions, type NotFoundProps, NotFoundStage } from "./shared";

export function NotFoundSpotlight({
  className,
  code = NOT_FOUND_DEFAULTS.code,
  title = NOT_FOUND_DEFAULTS.title,
  description = NOT_FOUND_DEFAULTS.description,
  homeHref,
  homeLabel,
  browseHref,
  browseLabel,
}: NotFoundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const canHover = useHoverCapable();
  const enabled = !reduce && canHover;

  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const mask = useMotionTemplate`radial-gradient(220px circle at ${mx}% ${my}%, #000 25%, transparent 72%)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !enabled) return;
    const rect = el.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <NotFoundStage className={className}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        className="relative isolate flex aspect-16/9 w-full max-w-xl items-center justify-center overflow-hidden rounded-3xl border border-border bg-neutral-950"
      >
        {/* Dim base layer. */}
        <span
          aria-hidden
          className="select-none font-bold text-[clamp(5rem,16vw,10rem)] text-white/10 leading-none tracking-tighter"
        >
          {code}
        </span>
        {/* Bright layer, revealed only under the spotlight. */}
        <motion.h1
          aria-label={code}
          style={enabled ? { WebkitMaskImage: mask, maskImage: mask } : undefined}
          className={cn(
            "absolute select-none font-bold text-[clamp(5rem,16vw,10rem)] text-white leading-none tracking-tighter",
            !enabled && "text-white/90",
          )}
        >
          <span aria-hidden>{code}</span>
        </motion.h1>
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
