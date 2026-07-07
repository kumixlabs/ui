/**
 * Media query hook for responsive React components
 * Provides real-time tracking of CSS media query matches
 * with SSR-safe implementation and automatic cleanup
 */

"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Hook for tracking CSS media query matches in React components
 *
 * Features:
 * - Real-time updates when media query state changes
 * - SSR-safe implementation
 * - Automatic event listener cleanup
 * - Supports all standard CSS media queries
 *
 * @param query - CSS media query string (e.g., '(min-width: 768px)')
 * @returns Boolean indicating whether the media query currently matches
 *
 * @example
 * ```tsx
 * // Basic responsive behavior
 * const isMobile = useMediaQuery('(max-width: 768px)');
 * const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
 * const isDesktop = useMediaQuery('(min-width: 1025px)');
 *
 * // Dark mode preference
 * const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
 *
 * // Reduced motion preference
 * const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
 *
 * return (
 *   <div>
 *     {isMobile && <MobileLayout />}
 *     {isTablet && <TabletLayout />}
 *     {isDesktop && <DesktopLayout />}
 *   </div>
 * );
 * ```
 */
export const useMediaQuery = (query: string): boolean => {
  // Subscribe to media query changes and clean up automatically
  const subscribe = useCallback(
    (onChange: () => void) => {
      const matchMedia = window.matchMedia(query);
      matchMedia.addEventListener("change", onChange);
      return () => {
        matchMedia.removeEventListener("change", onChange);
      };
    },
    [query],
  );

  // Read the current match status on the client
  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

  // Always report false during SSR to avoid hydration mismatches
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
