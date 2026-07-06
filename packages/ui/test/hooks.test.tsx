import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useBodyClasses } from "../src/hooks/use-body-classes";
import { useCopyToClipboard } from "../src/hooks/use-copy-to-clipboard";
import { useIntersectionObserver } from "../src/hooks/use-intersection-observer";
import { useMediaQuery } from "../src/hooks/use-media-query";
import { useMenu } from "../src/hooks/use-menu";
import { useRemoveGAParams } from "../src/hooks/use-remove-ga-params";
import { useSliderInput } from "../src/hooks/use-slider-input";
import { useViewport } from "../src/hooks/use-viewport";

describe("useBodyClasses", () => {
  afterEach(() => {
    document.body.className = "";
  });

  it("keeps shared classes until all users unmount", () => {
    const first = renderHook(() => useBodyClasses("modal-open"));
    const second = renderHook(() => useBodyClasses("modal-open"));

    expect(document.body.classList.contains("modal-open")).toBe(true);

    first.unmount();
    expect(document.body.classList.contains("modal-open")).toBe(true);

    second.unmount();
    expect(document.body.classList.contains("modal-open")).toBe(false);
  });
});

describe("useCopyToClipboard", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: vi.fn().mockResolvedValue(undefined) },
    });
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("copies text and resets copied state after the timeout", async () => {
    const onCopy = vi.fn();
    const { result } = renderHook(() => useCopyToClipboard({ timeout: 100, onCopy }));

    await act(async () => {
      await expect(result.current.copy("hello")).resolves.toBe(true);
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("hello");
    expect(onCopy).toHaveBeenCalledOnce();
    expect(result.current.copied).toBe(true);

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current.copied).toBe(false);
  });

  it("returns false for empty values", async () => {
    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      await expect(result.current.copy("")).resolves.toBe(false);
    });

    expect(navigator.clipboard.writeText).not.toHaveBeenCalled();
  });
});

describe("useMediaQuery", () => {
  it("returns the current media query match", () => {
    mockMatchMedia(true);

    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));

    expect(result.current).toBe(true);
  });
});

describe("useIntersectionObserver", () => {
  it("returns false when IntersectionObserver is unavailable", () => {
    const original = window.IntersectionObserver;
    // @ts-expect-error intentional environment simulation
    window.IntersectionObserver = undefined;
    const element = document.createElement("div");
    const ref = { current: element };

    const { result } = renderHook(() => useIntersectionObserver(ref));

    expect(result.current).toBe(false);
    window.IntersectionObserver = original;
  });
});

describe("useMenu", () => {
  const items = [
    { title: "Dashboard", path: "/dashboard" },
    {
      title: "Settings",
      path: "/settings",
      children: [{ title: "Profile", path: "/settings/profile" }],
    },
  ];

  it("finds active items and breadcrumbs", () => {
    const { result } = renderHook(() => useMenu("/settings/profile"));

    expect(result.current.isActive("/settings")).toBe(true);
    expect(result.current.getCurrentItem(items)?.title).toBe("Profile");
    expect(result.current.getBreadcrumb(items).map((item) => item.title)).toEqual([
      "Settings",
      "Profile",
    ]);
  });
});

describe("useRemoveGAParams", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    window.history.replaceState({}, "", "/?foo=bar&_gl=abc");
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("removes only the _gl query parameter after the GA delay", () => {
    renderHook(() => useRemoveGAParams());

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(window.location.search).toBe("?foo=bar");
  });
});

describe("useSliderInput", () => {
  it("syncs slider values and clamps input values", () => {
    const { result } = renderHook(() =>
      useSliderInput({ minValue: 0, maxValue: 100, initialValue: [10, 90] }),
    );

    act(() => {
      result.current.handleSliderChange([20, 80]);
    });

    expect(result.current.sliderValues).toEqual([20, 80]);
    expect(result.current.inputValues).toEqual([20, 80]);

    act(() => {
      result.current.validateAndUpdateValue(200, 1);
    });

    expect(result.current.sliderValues).toEqual([20, 100]);
    expect(result.current.inputValues).toEqual([20, 100]);
  });
});

describe("useViewport", () => {
  it("returns current viewport dimensions", () => {
    resizeWindow(800, 600);

    const { result } = renderHook(() => useViewport());

    expect(result.current).toEqual([800, 600]);

    act(() => {
      resizeWindow(1024, 768);
    });

    expect(result.current).toEqual([1024, 768]);
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

function resizeWindow(width: number, height: number) {
  Object.defineProperty(window, "innerWidth", { configurable: true, value: width });
  Object.defineProperty(window, "innerHeight", { configurable: true, value: height });
  window.dispatchEvent(new Event("resize"));
}
