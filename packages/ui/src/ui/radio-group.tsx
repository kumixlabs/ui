"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { CircleIcon } from "lucide-react";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";

import { cn } from "@kumix/utils";

type RadioSize = "sm" | "md" | "lg";

const radioGroupVariants = cva("grid gap-2.5");

const RadioGroupContext = React.createContext<{
  size: RadioSize;
}>({ size: "md" });

function RadioGroup({
  className,
  size,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root> & {
  size?: RadioSize;
}) {
  return (
    <RadioGroupContext.Provider value={{ size: size ?? "md" }}>
      <RadioGroupPrimitive.Root
        data-slot="radio-group"
        className={cn(radioGroupVariants(), className)}
        {...props}
      />
    </RadioGroupContext.Provider>
  );
}

// Define variants for the RadioGroupItem using cva.
const radioItemVariants = cva(
  `
    peer aspect-square rounded-full border outline-hidden ring-offset-background focus:outline-none focus-visible:ring-2
    focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
    aria-invalid:border-destructive/60 aria-invalid:ring-destructive/10 dark:aria-invalid:border-destructive dark:aria-invalid:ring-destructive/20
    in-data-[invalid=true]:border-destructive/60 in-data-[invalid=true]:ring-destructive/10  dark:in-data-[invalid=true]:border-destructive dark:in-data-[invalid=true]:ring-destructive/20
    border-input text-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-foreground
  `,
  {
    variants: {
      size: {
        sm: "size-4.5 [&_svg]:size-2",
        md: "size-5 [&_svg]:size-2.5",
        lg: "size-5.5 [&_svg]:size-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

function RadioGroupItem({
  className,
  size,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> & VariantProps<typeof radioItemVariants>) {
  // Use the variant and size from context if not provided at the item level.
  const { size: contextSize } = React.useContext(RadioGroupContext);
  const effectiveSize = size ?? contextSize;

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(radioItemVariants({ size: effectiveSize }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex items-center justify-center"
      >
        <CircleIcon className="fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
