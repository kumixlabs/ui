/**
 * Body class management hook for React components.
 */

"use client";

import { useEffect } from "react";

/**
 * Adds classes to `document.body` while the component is mounted.
 * Shared classes are reference-counted, so one component unmounting does not
 * remove a class that another mounted component still owns.
 *
 * @param className - Space-separated string of CSS class names to apply to body
 *
 * @example
 * ```tsx
 * // Single class
 * useBodyClasses('dark-theme');
 *
 * // Multiple classes
 * useBodyClasses('modal-open overflow-hidden');
 *
 * // Conditional classes
 * useBodyClasses(isModalOpen ? 'modal-open' : '');
 * ```
 */
export const useBodyClasses = (className: string) => {
  useEffect(() => {
    if (!className.trim()) return;

    const classList = className.split(/\s+/).filter(Boolean);

    classList.forEach((cls) => {
      const count = bodyClassCounts.get(cls) ?? 0;
      bodyClassCounts.set(cls, count + 1);
      if (count === 0) {
        document.body.classList.add(cls);
      }
    });

    return () => {
      classList.forEach((cls) => {
        const nextCount = (bodyClassCounts.get(cls) ?? 1) - 1;
        if (nextCount <= 0) {
          bodyClassCounts.delete(cls);
          document.body.classList.remove(cls);
          return;
        }
        bodyClassCounts.set(cls, nextCount);
      });
    };
  }, [className]);
};

const bodyClassCounts = new Map<string, number>();
