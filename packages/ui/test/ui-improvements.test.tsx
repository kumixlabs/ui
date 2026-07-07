import * as React from "react";
import { act, fireEvent, render, renderHook, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useMediaQuery } from "../src/hooks/use-media-query";
import { ErrorBoundary, ErrorFallback } from "../src/ui/error-boundary";
import { Rating } from "../src/ui/rating";

function Bomb({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error("boom");
  }
  return <div>safe</div>;
}

describe("ErrorBoundary", () => {
  beforeEach(() => {
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders children when there is no error", () => {
    render(
      <ErrorBoundary>
        <div>content</div>
      </ErrorBoundary>,
    );

    expect(screen.getByText("content")).toBeTruthy();
  });

  it("renders the default fallback and calls onError when a child throws", () => {
    const onError = vi.fn();

    render(
      <ErrorBoundary onError={onError}>
        <Bomb shouldThrow />
      </ErrorBoundary>,
    );

    expect(screen.getByRole("alert")).toBeTruthy();
    expect(screen.getByText("boom")).toBeTruthy();
    expect(onError).toHaveBeenCalledOnce();
  });

  it("renders a custom fallback component", () => {
    render(
      <ErrorBoundary fallback={({ error }) => <div>custom: {error.message}</div>}>
        <Bomb shouldThrow />
      </ErrorBoundary>,
    );

    expect(screen.getByText("custom: boom")).toBeTruthy();
  });

  it("resets when resetKeys change by value, not by reference", () => {
    function Wrapper() {
      const [resetKey, setResetKey] = React.useState(0);
      const [shouldThrow, setShouldThrow] = React.useState(true);

      return (
        <div>
          <button
            type="button"
            onClick={() => {
              setShouldThrow(false);
              setResetKey((k) => k + 1);
            }}
          >
            recover
          </button>
          <ErrorBoundary resetKeys={[resetKey]}>
            <Bomb shouldThrow={shouldThrow} />
          </ErrorBoundary>
        </div>
      );
    }

    render(<Wrapper />);
    expect(screen.getByRole("alert")).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: /recover/i }));
    expect(screen.getByText("safe")).toBeTruthy();
    expect(screen.queryByRole("alert")).toBeNull();
  });

  it("does not reset when resetKeys are equal by value across re-renders", () => {
    function Wrapper() {
      const [, forceRender] = React.useState(0);

      return (
        <div>
          <button type="button" onClick={() => forceRender((n) => n + 1)}>
            rerender
          </button>
          <ErrorBoundary resetKeys={[1]}>
            <Bomb shouldThrow />
          </ErrorBoundary>
        </div>
      );
    }

    render(<Wrapper />);
    expect(screen.getByRole("alert")).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: /rerender/i }));
    expect(screen.getByRole("alert")).toBeTruthy();
  });

  it("exports the default fallback as ErrorFallback", () => {
    const reset = vi.fn();
    render(<ErrorFallback error={new Error("nope")} reset={reset} />);

    fireEvent.click(screen.getByRole("button", { name: /try again/i }));
    expect(reset).toHaveBeenCalledOnce();
  });
});

describe("Rating", () => {
  it("renders read-only stars without slider semantics", () => {
    const { container } = render(<Rating rating={3} />);

    const root = container.querySelector("[data-slot=rating]");
    expect(root?.getAttribute("role")).toBeNull();
    expect(container.querySelectorAll("button")).toHaveLength(5);

    for (const button of container.querySelectorAll("button")) {
      expect((button as HTMLButtonElement).disabled).toBe(true);
      expect(button.getAttribute("tabindex")).toBe("-1");
    }
  });

  it("exposes slider semantics only when editable", () => {
    const { container } = render(<Rating rating={2} editable maxRating={5} />);

    const root = container.querySelector("[data-slot=rating]");
    expect(root?.getAttribute("role")).toBe("slider");
    expect(root?.getAttribute("tabindex")).toBe("0");
    expect(root?.getAttribute("aria-valuenow")).toBe("2");
    expect(root?.getAttribute("aria-valuemin")).toBe("1");
    expect(root?.getAttribute("aria-valuemax")).toBe("5");
  });

  it("calls onRatingChange on click when editable", () => {
    const onRatingChange = vi.fn();
    render(<Rating rating={1} editable onRatingChange={onRatingChange} />);

    fireEvent.click(screen.getByRole("button", { name: "4 stars" }));
    expect(onRatingChange).toHaveBeenCalledWith(4);
  });

  it("does not call onRatingChange when not editable", () => {
    const onRatingChange = vi.fn();
    render(<Rating rating={1} onRatingChange={onRatingChange} />);

    fireEvent.click(screen.getByRole("button", { name: "4 stars" }));
    expect(onRatingChange).not.toHaveBeenCalled();
  });

  it("supports keyboard navigation on the slider", () => {
    const onRatingChange = vi.fn();
    const { container } = render(<Rating rating={3} editable onRatingChange={onRatingChange} />);
    const root = container.querySelector("[data-slot=rating]") as HTMLElement;

    fireEvent.keyDown(root, { key: "ArrowRight" });
    expect(onRatingChange).toHaveBeenLastCalledWith(4);

    fireEvent.keyDown(root, { key: "ArrowLeft" });
    expect(onRatingChange).toHaveBeenLastCalledWith(2);

    fireEvent.keyDown(root, { key: "Home" });
    expect(onRatingChange).toHaveBeenLastCalledWith(1);

    fireEvent.keyDown(root, { key: "End" });
    expect(onRatingChange).toHaveBeenLastCalledWith(5);
  });

  it("clamps keyboard navigation at the bounds", () => {
    const onRatingChange = vi.fn();
    const { container } = render(<Rating rating={5} editable onRatingChange={onRatingChange} />);
    const root = container.querySelector("[data-slot=rating]") as HTMLElement;

    fireEvent.keyDown(root, { key: "ArrowRight" });
    expect(onRatingChange).toHaveBeenLastCalledWith(5);
  });

  it("ignores keyboard events when not editable", () => {
    const onRatingChange = vi.fn();
    const { container } = render(<Rating rating={3} onRatingChange={onRatingChange} />);
    const root = container.querySelector("[data-slot=rating]") as HTMLElement;

    fireEvent.keyDown(root, { key: "ArrowRight" });
    expect(onRatingChange).not.toHaveBeenCalled();
  });

  it("shows the numeric value when showValue is set", () => {
    const { container } = render(<Rating rating={3.5} showValue />);
    const value = container.querySelector("[data-slot=rating-value]");
    expect(value?.textContent).toBe("3.5");
  });
});

describe("useMediaQuery", () => {
  it("reads the current match and reacts to changes", () => {
    const listeners = new Set<() => void>();
    let matches = false;

    const matchMedia = vi.fn().mockImplementation((query: string) => ({
      get matches() {
        return matches;
      },
      media: query,
      addEventListener: (_event: string, cb: () => void) => listeners.add(cb),
      removeEventListener: (_event: string, cb: () => void) => listeners.delete(cb),
    }));

    vi.stubGlobal("matchMedia", matchMedia);

    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));
    expect(result.current).toBe(false);

    act(() => {
      matches = true;
      for (const cb of listeners) cb();
    });

    expect(result.current).toBe(true);
    expect(matchMedia).toHaveBeenCalledWith("(min-width: 768px)");

    vi.unstubAllGlobals();
  });
});
