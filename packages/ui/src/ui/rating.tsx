"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { StarIcon } from "lucide-react";

import { cn } from "@kumix/utils";

const ratingVariants = cva("flex items-center", {
  variants: {
    size: {
      sm: "gap-2",
      md: "gap-2.5",
      lg: "gap-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const starVariants = cva("", {
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const valueVariants = cva("w-5 text-muted-foreground", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

function Rating({
  rating,
  maxRating = 5,
  size,
  className,
  starClassName,
  showValue = false,
  editable = false,
  onRatingChange,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof ratingVariants> & {
    /**
     * Current rating value (supports decimal values for partial stars)
     */
    rating: number;
    /**
     * Maximum rating value (number of stars to show)
     */
    maxRating?: number;
    /**
     * Whether to show the numeric rating value
     */
    showValue?: boolean;
    /**
     * Class name applied to the numeric value span
     */
    starClassName?: string;
    /**
     * Whether the rating is editable (clickable)
     */
    editable?: boolean;
    /**
     * Callback function called when rating changes
     */
    onRatingChange?: (rating: number) => void;
  }) {
  const [hoveredRating, setHoveredRating] = React.useState<number | null>(null);
  const displayRating = editable && hoveredRating !== null ? hoveredRating : rating;

  const handleRatingChange = (value: number) => {
    if (editable && onRatingChange) {
      onRatingChange(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!editable) return;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      handleRatingChange(Math.min(maxRating, Math.round(displayRating) + 1));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      handleRatingChange(Math.max(1, Math.round(displayRating) - 1));
    } else if (e.key === "Home") {
      e.preventDefault();
      handleRatingChange(1);
    } else if (e.key === "End") {
      e.preventDefault();
      handleRatingChange(maxRating);
    }
  };

  const handleStarMouseEnter = (starRating: number) => {
    if (editable) {
      setHoveredRating(starRating);
    }
  };

  const handleStarMouseLeave = () => {
    if (editable) {
      setHoveredRating(null);
    }
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      const filled = displayRating >= i;
      const partiallyFilled = displayRating > i - 1 && displayRating < i;
      const fillPercentage = partiallyFilled ? (displayRating - (i - 1)) * 100 : 0;

      stars.push(
        <button
          key={i}
          type="button"
          className={cn("relative border-0 bg-transparent p-0", editable && "cursor-pointer")}
          onClick={() => handleRatingChange(i)}
          onMouseEnter={() => handleStarMouseEnter(i)}
          onMouseLeave={handleStarMouseLeave}
          aria-label={`${i} star${i > 1 ? "s" : ""}`}
          disabled={!editable}
          tabIndex={-1}
        >
          <StarIcon
            data-slot="rating-star-empty"
            className={cn(starVariants({ size }), "text-muted-foreground/30")}
          />

          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              width: filled ? "100%" : `${fillPercentage}%`,
            }}
          >
            <StarIcon
              data-slot="rating-star-filled"
              className={cn(starVariants({ size }), "fill-yellow-400 text-yellow-400")}
            />
          </div>
        </button>,
      );
    }

    return stars;
  };

  return (
    <div
      data-slot="rating"
      className={cn(ratingVariants({ size }), className)}
      role={editable ? "slider" : undefined}
      tabIndex={editable ? 0 : undefined}
      aria-valuenow={editable ? displayRating : undefined}
      aria-valuemin={editable ? 1 : undefined}
      aria-valuemax={editable ? maxRating : undefined}
      aria-label={editable ? "Rating" : undefined}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <div className="flex items-center">{renderStars()}</div>
      {showValue && (
        <span data-slot="rating-value" className={cn(valueVariants({ size }), starClassName)}>
          {displayRating.toFixed(1)}
        </span>
      )}
    </div>
  );
}

export { Rating };
