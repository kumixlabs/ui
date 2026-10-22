"use client";

import { type MutableRefObject, type ReactNode, useEffect, useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { AlertCircle, Inbox } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@kumix/utils";
import { EASE_OUT, SPRING_PANEL } from "../../lib/ease";

export type InfiniteMasonryKey = string | number | bigint;

export interface InfiniteMasonryProps<T> {
  items: readonly T[];
  getItemKey: (item: T, index: number) => InfiniteMasonryKey;
  renderItem: (item: T, index: number) => ReactNode;
  onLoadMore: () => void | Promise<void>;
  hasMore: boolean;
  loading?: boolean;
  error?: ReactNode;
  onRetry?: () => void;
  estimateSize?: (item: T, index: number) => number;
  renderLoadingItem?: (index: number) => ReactNode;
  emptyState?: ReactNode;
  endState?: ReactNode;
  minColumnWidth?: number;
  maxColumns?: number;
  gap?: number;
  overscan?: number;
  prefetch?: number;
  animateItems?: boolean;
  ariaLabel?: string;
  className?: string;
  contentClassName?: string;
  itemClassName?: string;
}

type MasonryMetrics = {
  columns: number;
  width: number;
};

function useMasonryMetrics({
  elementRef,
  gap,
  maxColumns,
  minColumnWidth,
}: {
  elementRef: React.RefObject<HTMLDivElement | null>;
  gap: number;
  maxColumns: number;
  minColumnWidth: number;
}) {
  const [metrics, setMetrics] = useState<MasonryMetrics>({
    columns: 1,
    width: 0,
  });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const update = (width: number) => {
      const columns = Math.min(
        maxColumns,
        Math.max(1, Math.floor((width + gap) / (minColumnWidth + gap))),
      );

      setMetrics((current) =>
        current.columns === columns && current.width === width ? current : { columns, width },
      );
    };

    update(element.getBoundingClientRect().width);

    const observer = new ResizeObserver(([entry]) => {
      update(entry.contentRect.width);
    });
    observer.observe(element);

    return () => observer.disconnect();
  }, [elementRef, gap, maxColumns, minColumnWidth]);

  return metrics;
}

function DefaultLoadingItem({ index }: { index: number }) {
  return (
    <div
      aria-hidden="true"
      className="border-border bg-card animate-pulse rounded-2xl border p-3"
      style={{ minHeight: 144 + (index % 3) * 36 }}
    >
      <div className="bg-muted h-3 w-2/3 rounded-full" />
      <div className="bg-muted mt-3 h-2 w-full rounded-full" />
      <div className="bg-muted mt-2 h-2 w-4/5 rounded-full" />
    </div>
  );
}

function DefaultEmptyState() {
  return (
    <div className="flex h-full min-h-64 flex-col items-center justify-center px-6 text-center">
      <Inbox className="text-muted-foreground size-8" aria-hidden="true" />
      <p className="text-foreground mt-3 text-sm font-medium">No items yet</p>
      <p className="text-muted-foreground mt-1 max-w-xs text-xs leading-5">
        New items will appear here when they become available.
      </p>
    </div>
  );
}

function MasonryItemReveal({
  itemKey,
  lane,
  revealedKeys,
  animate,
  children,
}: {
  itemKey: InfiniteMasonryKey;
  lane: number;
  revealedKeys: MutableRefObject<Set<InfiniteMasonryKey>>;
  animate: boolean;
  children: ReactNode;
}) {
  const [shouldReveal] = useState(() => animate && !revealedKeys.current.has(itemKey));

  useEffect(() => {
    revealedKeys.current.add(itemKey);
  }, [itemKey, revealedKeys]);

  const delay = Math.min(lane, 3) * 0.04;

  return (
    <motion.div
      initial={shouldReveal ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        y: { ...SPRING_PANEL, delay },
        opacity: { duration: 0.2, ease: EASE_OUT, delay },
      }}
    >
      {children}
    </motion.div>
  );
}

export function InfiniteMasonry<T>({
  items,
  getItemKey,
  renderItem,
  onLoadMore,
  hasMore,
  loading = false,
  error,
  onRetry,
  estimateSize = () => 240,
  renderLoadingItem = (index) => <DefaultLoadingItem index={index} />,
  emptyState = <DefaultEmptyState />,
  endState,
  minColumnWidth = 208,
  maxColumns = 4,
  gap = 12,
  overscan = 4,
  prefetch = 3,
  animateItems = true,
  ariaLabel = "Infinite masonry feed",
  className,
  contentClassName,
  itemClassName,
}: InfiniteMasonryProps<T>) {
  const reduceMotion = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const loadMoreRef = useRef(onLoadMore);
  const loadPendingRef = useRef(false);
  const initialItemCountRef = useRef(items.length);
  const revealedKeysRef = useRef(new Set<InfiniteMasonryKey>());
  const { columns, width } = useMasonryMetrics({
    elementRef: contentRef,
    gap,
    maxColumns,
    minColumnWidth,
  });

  useEffect(() => {
    loadMoreRef.current = onLoadMore;
  }, [onLoadMore]);

  useEffect(() => {
    if (!loading) loadPendingRef.current = false;
  }, [loading]);

  const hasError = error !== undefined && error !== null;
  const tailCount = hasError ? 1 : loading ? columns : 0;
  const virtualizer = useVirtualizer({
    count: items.length + tailCount,
    getScrollElement: () => scrollRef.current,
    getItemKey: (index) =>
      index < items.length
        ? getItemKey(items[index], index)
        : `masonry-tail-${index - items.length}`,
    estimateSize: (index) =>
      index < items.length
        ? estimateSize(items[index], index)
        : 144 + ((index - items.length) % 3) * 36,
    gap,
    lanes: columns,
    overscan: overscan * columns,
  });

  const virtualItems = virtualizer.getVirtualItems();
  const viewportEnd = (virtualizer.scrollOffset ?? 0) + (virtualizer.scrollRect?.height ?? 0);
  const lastVisibleIndex = virtualItems.reduce(
    (lastIndex, item) => (item.start < viewportEnd ? Math.max(lastIndex, item.index) : lastIndex),
    -1,
  );

  useEffect(() => {
    if (
      hasError ||
      loading ||
      !hasMore ||
      loadPendingRef.current ||
      lastVisibleIndex < Math.max(0, items.length - prefetch)
    ) {
      return;
    }

    loadPendingRef.current = true;
    void Promise.resolve(loadMoreRef.current()).finally(() => {
      loadPendingRef.current = false;
    });
  }, [hasError, hasMore, items.length, lastVisibleIndex, loading, prefetch]);

  if (items.length === 0 && !hasMore && !loading && !hasError) {
    return (
      <section
        aria-label={ariaLabel}
        className={cn(
          "border-border bg-background w-full overflow-hidden rounded-3xl border",
          className,
        )}
      >
        {emptyState}
      </section>
    );
  }

  const columnWidth = columns > 0 ? Math.max(0, (width - gap * (columns - 1)) / columns) : 0;

  return (
    <section
      ref={scrollRef}
      aria-label={ariaLabel}
      aria-busy={loading}
      className={cn(
        "border-border bg-background w-full [scrollbar-gutter:stable] overflow-y-auto overscroll-none rounded-3xl border p-3 contain-[layout_paint] [overflow-anchor:none]",
        className,
      )}
    >
      <div
        ref={contentRef}
        className={cn("relative w-full", contentClassName)}
        style={{ height: virtualizer.getTotalSize() }}
      >
        {virtualItems.map((virtualItem) => {
          const isTail = virtualItem.index >= items.length;
          const tailIndex = virtualItem.index - items.length;

          return (
            <div
              key={virtualItem.key}
              ref={virtualizer.measureElement}
              data-index={virtualItem.index}
              className={cn(
                "absolute top-0 left-0 will-change-transform",
                !isTail && itemClassName,
              )}
              style={{
                width: columnWidth,
                transform: `translate3d(${virtualItem.lane * (columnWidth + gap)}px, ${virtualItem.start}px, 0)`,
              }}
            >
              {isTail ? (
                hasError ? (
                  <div className="border-destructive/20 bg-destructive/5 flex min-h-36 flex-col items-start justify-center rounded-2xl border p-4">
                    <div className="text-destructive flex items-center gap-2">
                      <AlertCircle className="size-4" aria-hidden="true" />
                      <p className="text-sm font-medium">Couldn&apos;t load more</p>
                    </div>
                    <div className="text-muted-foreground mt-2 text-xs leading-5">{error}</div>
                    {onRetry ? (
                      <button
                        type="button"
                        onClick={onRetry}
                        className="border-border bg-background text-foreground hover:bg-muted focus-visible:ring-ring mt-3 min-h-10 rounded-full border px-4 text-xs font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      >
                        Try again
                      </button>
                    ) : null}
                  </div>
                ) : (
                  renderLoadingItem(tailIndex)
                )
              ) : (
                <MasonryItemReveal
                  itemKey={virtualItem.key}
                  lane={virtualItem.lane}
                  revealedKeys={revealedKeysRef}
                  animate={
                    animateItems &&
                    !reduceMotion &&
                    virtualItem.index >= initialItemCountRef.current
                  }
                >
                  {renderItem(items[virtualItem.index], virtualItem.index)}
                </MasonryItemReveal>
              )}
            </div>
          );
        })}
      </div>

      {!hasMore && items.length > 0 && endState ? (
        <div className="text-muted-foreground py-4 text-center text-xs">{endState}</div>
      ) : null}
      <span className="sr-only" aria-live="polite">
        {loading ? "Loading more items" : null}
      </span>
    </section>
  );
}
