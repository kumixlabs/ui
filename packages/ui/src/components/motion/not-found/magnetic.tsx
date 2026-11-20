"use client";

import { cn } from "@kumix/utils";
import { Magnetic } from "../magnetic";
import {
  NOT_FOUND_DEFAULTS,
  NotFoundActions,
  type NotFoundProps,
  NotFoundStage,
  useNotFoundMessages,
} from "./shared";

export function NotFoundMagnetic({
  className,
  code = NOT_FOUND_DEFAULTS.code,
  title,
  description,
  homeHref,
  homeLabel,
  browseHref,
  browseLabel,
  labels,
}: NotFoundProps) {
  const t = useNotFoundMessages(labels);
  const chars = code.split("");

  return (
    <NotFoundStage className={className}>
      <h1
        aria-label={code}
        className="text-foreground flex items-center justify-center text-[clamp(5rem,18vw,12rem)] leading-none font-bold tracking-tighter select-none"
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
        <p className="text-foreground text-lg font-semibold">{title ?? t("title")}</p>
        <p className="text-muted-foreground max-w-sm text-sm">{description ?? t("description")}</p>
      </div>

      <NotFoundActions
        homeHref={homeHref}
        homeLabel={homeLabel}
        browseHref={browseHref}
        browseLabel={browseLabel}
        labels={labels}
      />
    </NotFoundStage>
  );
}
