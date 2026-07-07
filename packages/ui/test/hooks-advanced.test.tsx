import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useHydrated } from "../src/hooks/use-hydrated";
import { useIsMac } from "../src/hooks/use-is-mac";
import { useIsMobile } from "../src/hooks/use-is-mobile";
import { useMutationObserver } from "../src/hooks/use-mutation-observer";
import { useScrollPosition } from "../src/hooks/use-scroll-position";

describe("useHydrated", () => {
  it("returns true on the client after hydration", () => {
    const { result } = renderHook(() => useHydrated());

    expect(result.current).toBe(true);
  });
});

describe("useIsMobile", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns true when viewport is narrower than the breakpoint", () => {
    mockWindowInnerWidth(500);
    mockMatchMedia(true);

    const { result } = renderHook(() => useIsMobile(1024));

    expect(result.current).toBe(true);
  });

  it("returns false when viewport is wider than the breakpoint", () => {
    mockWindowInnerWidth(1280);
    mockMatchMedia(false);

    const { result } = renderHook(() => useIsMobile(1024));

    expect(result.current).toBe(false);
  });

  it("respects a custom breakpoint", () => {
    mockWindowInnerWidth(700);
    mockMatchMedia(false);

    const { result } = renderHook(() => useIsMobile(640));

    expect(result.current).toBe(false);
  });
});

describe("useIsMac", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns true on a macOS user agent", () => {
    Object.defineProperty(navigator, "userAgent", {
      configurable: true,
      value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    });

    const { result } = renderHook(() => useIsMac());

    expect(result.current).toBe(true);
  });

  it("returns false on a Windows user agent", () => {
    Object.defineProperty(navigator, "userAgent", {
      configurable: true,
      value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    });

    const { result } = renderHook(() => useIsMac());

    expect(result.current).toBe(false);
  });
});

describe("useScrollPosition", () => {
  beforeEach(() => {
    Object.defineProperty(window, "scrollY", { configurable: true, writable: true, value: 0 });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("tracks window scroll position on scroll events", () => {
    const { result } = renderHook(() => useScrollPosition());

    expect(result.current).toBe(0);

    act(() => {
      Object.defineProperty(window, "scrollY", { configurable: true, writable: true, value: 250 });
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe(250);
  });

  it("reads initial scroll position from an element ref", () => {
    const element = document.createElement("div");
    Object.defineProperty(element, "scrollTop", { configurable: true, value: 42 });
    const ref = { current: element };

    const { result } = renderHook(() => useScrollPosition({ targetRef: ref }));

    expect(result.current).toBe(42);
  });
});

describe("useMutationObserver", () => {
  it("calls the callback when the observed element mutates", async () => {
    const callback = vi.fn();
    const element = document.createElement("div");
    const ref = { current: element };

    renderHook(() => useMutationObserver(ref, callback));

    element.appendChild(document.createElement("span"));

    await vi.waitFor(() => expect(callback).toHaveBeenCalledTimes(1));
    expect(callback.mock.calls[0]?.[0]).toHaveLength(1);
    expect(callback.mock.calls[0]?.[1]).toBeInstanceOf(MutationObserver);
  });

  it("does nothing when the ref has no current element", () => {
    const callback = vi.fn();
    const ref = { current: null };

    renderHook(() => useMutationObserver(ref, callback));

    expect(callback).not.toHaveBeenCalled();
  });
});

function mockMatchMedia(matches: boolean) {
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

function mockWindowInnerWidth(width: number) {
  Object.defineProperty(window, "innerWidth", { configurable: true, value: width });
}
