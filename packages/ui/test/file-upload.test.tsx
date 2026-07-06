import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { formatBytes, useFileUpload } from "../src/hooks/use-file-upload";

describe("formatBytes", () => {
  it("formats bytes into readable units", () => {
    expect(formatBytes(0)).toBe("0 Bytes");
    expect(formatBytes(1024)).toBe("1 KB");
    expect(formatBytes(1536, 1)).toBe("1.5 KB");
  });
});

describe("useFileUpload", () => {
  beforeEach(() => {
    vi.spyOn(URL, "createObjectURL").mockReturnValue("blob:image-preview");
    vi.spyOn(URL, "revokeObjectURL").mockImplementation(() => undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("adds valid files and creates image previews", () => {
    const onFilesAdded = vi.fn();
    const { result } = renderHook(() =>
      useFileUpload({ accept: "image/*", multiple: true, onFilesAdded }),
    );

    const file = new File(["avatar"], "avatar.png", { type: "image/png" });

    act(() => {
      result.current[1].addFiles([file]);
    });

    expect(result.current[0].files).toHaveLength(1);
    expect(result.current[0].files[0]?.preview).toBe("blob:image-preview");
    expect(onFilesAdded).toHaveBeenCalledOnce();
  });

  it("reports validation errors for rejected file types", () => {
    const onError = vi.fn();
    const { result } = renderHook(() => useFileUpload({ accept: "image/*", onError }));

    const file = new File(["document"], "document.txt", { type: "text/plain" });

    act(() => {
      result.current[1].addFiles([file]);
    });

    expect(result.current[0].files).toHaveLength(0);
    expect(result.current[0].errors[0]).toContain("not an accepted file type");
    expect(onError).toHaveBeenCalledWith(result.current[0].errors);
  });

  it("removes files and revokes image object URLs", () => {
    const { result } = renderHook(() => useFileUpload({ multiple: true }));
    const file = new File(["avatar"], "avatar.png", { type: "image/png" });

    act(() => {
      result.current[1].addFiles([file]);
    });

    const id = result.current[0].files[0]?.id;
    expect(id).toBeDefined();

    act(() => {
      result.current[1].removeFile(id as string);
    });

    expect(result.current[0].files).toHaveLength(0);
    expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:image-preview");
  });

  it("revokes image object URLs on unmount", () => {
    const { result, unmount } = renderHook(() => useFileUpload({ multiple: true }));
    const file = new File(["avatar"], "avatar.png", { type: "image/png" });

    act(() => {
      result.current[1].addFiles([file]);
    });

    unmount();

    expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:image-preview");
  });
});
