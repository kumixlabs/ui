"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  type UseInViewOptions,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "motion/react";

import { cn } from "@kumix/utils";

interface CountingNumberProps {
  from?: number;
  to?: number;
  duration?: number; // seconds
  delay?: number; // ms
  className?: string;
  startOnView?: boolean;
  once?: boolean;
  inViewMargin?: UseInViewOptions["margin"];
  onComplete?: () => void;
  format?: (value: number) => string;
}

export function CountingNumber({
  from = 0,
  to = 100,
  duration = 2,
  delay = 0,
  className,
  startOnView = true,
  once = false,
  inViewMargin,
  onComplete,
  format,
  ...props
}: CountingNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: inViewMargin });
  const shouldReduceMotion = useReducedMotion();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [display, setDisplay] = useState(from);
  const motionValue = useMotionValue(from);

  const shouldStart = !startOnView || (isInView && (!once || !hasAnimated));

  useEffect(() => {
    if (!shouldStart) return;
    setHasAnimated(true);

    if (shouldReduceMotion) {
      setDisplay(to);
      onComplete?.();
      return;
    }

    let controls: { stop: () => void } | undefined;
    const timeout = setTimeout(() => {
      controls = animate(motionValue, to, {
        duration,
        onUpdate: (v) => setDisplay(v),
        onComplete,
      });
    }, delay);
    return () => {
      clearTimeout(timeout);
      controls?.stop();
    };
  }, [shouldStart, to, duration, delay, motionValue, onComplete, shouldReduceMotion]);

  return (
    <motion.span ref={ref} className={cn("inline-block", className)} {...props}>
      {format ? format(display) : Math.round(display)}
    </motion.span>
  );
}
