"use client";

import { cn } from "@kumix/utils";
import { Magnetic } from "../magnetic";
import { NOT_FOUND_DEFAULTS, NotFoundActions, type NotFoundProps, NotFoundStage } from "./shared";

export function NotFoundMagnetic({
  className,
  code = NOT_FOUND_DEFAULTS.code,
  title = NOT_FOUND_DEFAULTS.title,
  description = NOT_FOUND_DEFAULTS.description,
  homeHref,
  homeLabel,
  browseHref,
  browseLabel,
}: NotFoundProps) {
  const chars = code.split("");

  return (
    <NotFoundStage className={className}>
      <h1
        aria-label={code}
        className="flex select-none items-center justify-center font-bold text-[clamp(5rem,18vw,12rem)] text-foreground leading-none tracking-tighter"
      >
        {chars.map((ch, i) => (
          <Magnetic key={i} strength={0.6} className={cn(i > 0 && "-ml-2")}>
            <span aria-hidden className="inline-block px-1 tabular-nums">
              {ch}
            </span>
          </Magnetic>
        ))}
      </h1>

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
