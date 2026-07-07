"use client";

import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon, CopyIcon } from "lucide-react";
import { Slot } from "radix-ui";

import { cn } from "@kumix/utils";
import { useCopyToClipboard } from "../hooks/use-copy-to-clipboard";
import { Button } from "./button";

export interface CodeProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof codeVariants> {
  asChild?: boolean;
  showCopyButton?: boolean;
  copyText?: string;
}

const codeVariants = cva("relative rounded-md bg-muted font-medium font-mono text-sm", {
  variants: {
    variant: {
      default: "bg-muted text-muted-foreground",
      destructive: "bg-destructive/10 text-destructive",
      outline: "border border-border bg-background text-foreground",
    },
    size: {
      default: "px-2.5 py-1.5 text-sm",
      sm: "px-2 py-1.5 text-xs",
      lg: "px-3 py-1.5 text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

function Code({
  className,
  variant,
  size,
  asChild = false,
  showCopyButton = false,
  copyText,
  children,
  ...props
}: CodeProps) {
  const { copy, copied } = useCopyToClipboard();
  const Comp = asChild ? Slot.Root : "code";
  const textToCopy = copyText || (typeof children === "string" ? children : "");

  return (
    <span className={cn("inline-flex items-center gap-2", className)} data-slot="code">
      <Comp data-slot="code-panel" className={cn(codeVariants({ variant, size }))} {...props}>
        {children}
      </Comp>
      {showCopyButton && textToCopy && (
        <Button
          mode="icon"
          size="sm"
          variant="ghost"
          className="h-4 w-4 p-0 opacity-60 hover:opacity-100"
          aria-label={copied ? "Copied" : "Copy code"}
          onClick={() => copy(textToCopy)}
        >
          {copied ? (
            <CheckIcon aria-hidden="true" className="h-3 w-3" />
          ) : (
            <CopyIcon aria-hidden="true" className="h-3 w-3" />
          )}
        </Button>
      )}
    </span>
  );
}

export { Code, codeVariants };
