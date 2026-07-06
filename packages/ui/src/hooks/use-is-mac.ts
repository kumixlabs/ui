/**
 * Platform detection hook for React components
 * Determines whether the current user agent is running on a macOS device.
 * Useful for rendering platform-specific keyboard shortcuts or UI variations.
 */

"use client";

import { useEffect, useState } from "react";

/**
 * React hook that returns whether the current browser reports a macOS platform.
 * It prefers `navigator.userAgentData.platform` when available and falls back
 * to `navigator.userAgent`.
 *
 * @returns `true` if the current platform is macOS, otherwise `false`.
 *
 * @example
 * ```tsx
 * const isMac = useIsMac();
 *
 * return (
 *   <kbd>
 *     {isMac ? "⌘" : "Ctrl"} + K
 *   </kbd>
 * );
 * ```
 */
export function useIsMac() {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    const platform =
      (navigator as Navigator & { userAgentData?: { platform?: string } }).userAgentData
        ?.platform ??
      navigator.userAgent ??
      "";
    setIsMac(platform.toUpperCase().includes("MAC"));
  }, []);

  return isMac;
}
