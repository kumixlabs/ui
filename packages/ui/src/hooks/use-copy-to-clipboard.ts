/**
 * Clipboard copy functionality hook for React components.
 */

"use client";

import * as React from "react";

import { isDevelopment } from "@kumix/utils";

/**
 * Configuration options for the copy to clipboard hook
 */
interface UseCopyToClipboardOptions {
  /** Duration in milliseconds to show the copied state (default: 2000ms) */
  timeout?: number;
  /** Callback function executed after successful copy operation */
  onCopy?: () => void;
}

/**
 * Copies text to the clipboard and exposes temporary copied state.
 *
 * @param options - Configuration options for the hook
 * @returns Object containing copied state and an async copy function. The copy
 * function resolves to `true` when text is copied and `false` otherwise.
 *
 * @example
 * ```tsx
 * const { copied, copy } = useCopyToClipboard({
 *   timeout: 3000,
 *   onCopy: () => toast.success('Copied to clipboard!')
 * });
 *
 * return (
 *   <button onClick={() => copy('Hello World')}>
 *     {copied ? 'Copied!' : 'Copy Text'}
 *   </button>
 * );
 * ```
 */
export function useCopyToClipboard({ timeout = 2000, onCopy }: UseCopyToClipboardOptions = {}) {
  const [copied, setCopied] = React.useState(false);
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>(null);

  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const copy = React.useCallback(
    async (value: string) => {
      if (typeof window === "undefined" || !navigator.clipboard?.writeText) {
        if (isDevelopment) {
          console.warn("Clipboard API not supported in this environment");
        }
        return false;
      }

      if (!value) {
        if (isDevelopment) {
          console.warn("Cannot copy empty value to clipboard");
        }
        return false;
      }

      try {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        onCopy?.();

        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          setCopied(false);
        }, timeout);
        return true;
      } catch (error) {
        if (isDevelopment) {
          console.error("Failed to copy text to clipboard:", error);
        }
        return false;
      }
    },
    [timeout, onCopy],
  );

  return {
    /** Whether text was recently copied (true for timeout duration) */
    copied,
    /** Function to copy text to clipboard */
    copy,
  };
}
