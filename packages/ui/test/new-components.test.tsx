import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "../src/ui/attachment";
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from "../src/ui/bubble";
import { DirectionProvider } from "../src/ui/direction";
import {
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupNew,
  InputGroupText,
  InputGroupTextarea,
} from "../src/ui/input-group";
import { Marker, MarkerContent, MarkerIcon, markerVariants } from "../src/ui/marker";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "../src/ui/message";
import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "../src/ui/native-select";

describe("message components", () => {
  it("renders a message group with all slots and alignment", () => {
    render(
      <MessageGroup>
        <Message align="end">
          <MessageAvatar>AB</MessageAvatar>
          <MessageContent>
            <MessageHeader>Ada</MessageHeader>
            Hello there
            <MessageFooter>Delivered</MessageFooter>
          </MessageContent>
        </Message>
      </MessageGroup>,
    );

    const message = document.querySelector('[data-slot="message"]');
    expect(message?.getAttribute("data-align")).toBe("end");
    expect(document.querySelector('[data-slot="message-group"]')).not.toBeNull();
    expect(document.querySelector('[data-slot="message-avatar"]')).not.toBeNull();
    expect(document.querySelector('[data-slot="message-content"]')).not.toBeNull();
    expect(document.querySelector('[data-slot="message-header"]')).not.toBeNull();
    expect(document.querySelector('[data-slot="message-footer"]')).not.toBeNull();
  });

  it("defaults message alignment to start", () => {
    render(<Message>Hi</Message>);
    expect(document.querySelector('[data-slot="message"]')?.getAttribute("data-align")).toBe(
      "start",
    );
  });
});

describe("bubble components", () => {
  it("renders bubble variants, alignment, and reactions", () => {
    render(
      <BubbleGroup>
        <Bubble variant="secondary" align="end">
          <BubbleContent>Nice work</BubbleContent>
          <BubbleReactions side="top" align="start">
            👍
          </BubbleReactions>
        </Bubble>
      </BubbleGroup>,
    );

    const bubble = document.querySelector('[data-slot="bubble"]');
    expect(bubble?.getAttribute("data-variant")).toBe("secondary");
    expect(bubble?.getAttribute("data-align")).toBe("end");
    expect(document.querySelector('[data-slot="bubble-group"]')).not.toBeNull();
    expect(document.querySelector('[data-slot="bubble-content"]')?.textContent).toBe("Nice work");

    const reactions = document.querySelector('[data-slot="bubble-reactions"]');
    expect(reactions?.getAttribute("data-side")).toBe("top");
    expect(reactions?.getAttribute("data-align")).toBe("start");
  });

  it("uses default bubble variant and reaction placement", () => {
    render(
      <Bubble>
        <BubbleContent asChild>
          <button type="button">Reply</button>
        </BubbleContent>
        <BubbleReactions>🎉</BubbleReactions>
      </Bubble>,
    );

    expect(document.querySelector('[data-slot="bubble"]')?.getAttribute("data-variant")).toBe(
      "default",
    );
    expect(screen.getByRole("button", { name: "Reply" }).getAttribute("data-slot")).toBe(
      "bubble-content",
    );
    const reactions = document.querySelector('[data-slot="bubble-reactions"]');
    expect(reactions?.getAttribute("data-side")).toBe("bottom");
    expect(reactions?.getAttribute("data-align")).toBe("end");
  });
});

describe("attachment components", () => {
  it("renders attachment with media, content, actions, and trigger", () => {
    render(
      <AttachmentGroup>
        <Attachment state="uploading" size="sm" orientation="vertical">
          <AttachmentMedia variant="image">
            <img src="/x.png" alt="preview" />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>file.pdf</AttachmentTitle>
            <AttachmentDescription>2 MB</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="remove" />
          </AttachmentActions>
          <AttachmentTrigger aria-label="open" />
        </Attachment>
      </AttachmentGroup>,
    );

    const attachment = document.querySelector('[data-slot="attachment"]');
    expect(attachment?.getAttribute("data-state")).toBe("uploading");
    expect(attachment?.getAttribute("data-size")).toBe("sm");
    expect(attachment?.getAttribute("data-orientation")).toBe("vertical");
    expect(
      document.querySelector('[data-slot="attachment-media"]')?.getAttribute("data-variant"),
    ).toBe("image");
    expect(document.querySelector('[data-slot="attachment-group"]')).not.toBeNull();
    expect(screen.getByLabelText("open").getAttribute("type")).toBe("button");
    expect(screen.getByLabelText("remove").getAttribute("data-slot")).toBe("attachment-action");
  });

  it("applies default attachment state and trigger asChild", () => {
    render(
      <Attachment>
        <AttachmentTrigger asChild>
          <a href="/file">open link</a>
        </AttachmentTrigger>
      </Attachment>,
    );

    expect(document.querySelector('[data-slot="attachment"]')?.getAttribute("data-state")).toBe(
      "done",
    );
    const link = screen.getByRole("link", { name: "open link" });
    expect(link.getAttribute("data-slot")).toBe("attachment-trigger");
    expect(link.getAttribute("type")).toBeNull();
  });
});

describe("marker components", () => {
  it("renders marker with icon and content", () => {
    render(
      <Marker variant="separator">
        <MarkerIcon>*</MarkerIcon>
        <MarkerContent>Today</MarkerContent>
      </Marker>,
    );

    const marker = document.querySelector('[data-slot="marker"]');
    expect(marker?.getAttribute("data-variant")).toBe("separator");
    expect(document.querySelector('[data-slot="marker-icon"]')?.getAttribute("aria-hidden")).toBe(
      "true",
    );
    expect(document.querySelector('[data-slot="marker-content"]')?.textContent).toBe("Today");
    expect(markerVariants({ variant: "border" })).toContain("border-b");
  });

  it("supports marker asChild", () => {
    render(
      <Marker asChild>
        <section>section marker</section>
      </Marker>,
    );
    expect(document.querySelector("section")?.getAttribute("data-slot")).toBe("marker");
  });
});

describe("native select components", () => {
  it("renders wrapper, select, options, and optgroup", () => {
    render(
      <NativeSelect size="sm" defaultValue="b" aria-label="pick">
        <NativeSelectOptGroup label="group">
          <NativeSelectOption value="a">A</NativeSelectOption>
          <NativeSelectOption value="b">B</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>,
    );

    const wrapper = document.querySelector('[data-slot="native-select-wrapper"]');
    expect(wrapper?.getAttribute("data-size")).toBe("sm");
    const select = screen.getByRole("combobox", { name: "pick" });
    expect(select.getAttribute("data-slot")).toBe("native-select");
    expect(document.querySelector('[data-slot="native-select-optgroup"]')).not.toBeNull();
    expect(document.querySelectorAll('[data-slot="native-select-option"]').length).toBe(2);
  });
});

describe("input group components", () => {
  it("renders input group with addon, button, text, and control", () => {
    render(
      <InputGroupNew>
        <InputGroupAddon align="inline-start">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput aria-label="handle" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Go</InputGroupButton>
        </InputGroupAddon>
      </InputGroupNew>,
    );

    const group = document.querySelector('[data-slot="input-group"]');
    expect(group?.getAttribute("role")).toBe("group");
    const addons = document.querySelectorAll('[data-slot="input-group-addon"]');
    expect(addons.length).toBe(2);
    expect(addons[0]?.getAttribute("data-align")).toBe("inline-start");
    expect(addons[1]?.getAttribute("data-align")).toBe("inline-end");
    expect(screen.getByLabelText("handle").getAttribute("data-slot")).toBe("input-group-control");
    expect(screen.getByRole("button", { name: "Go" }).getAttribute("type")).toBe("button");
  });

  it("renders input group textarea control", () => {
    render(
      <InputGroupNew>
        <InputGroupTextarea aria-label="note" />
      </InputGroupNew>,
    );
    expect(screen.getByLabelText("note").getAttribute("data-slot")).toBe("input-group-control");
  });
});

describe("direction provider", () => {
  it("renders children within a direction provider", () => {
    render(
      <DirectionProvider direction="rtl">
        <span>rtl content</span>
      </DirectionProvider>,
    );
    expect(screen.getByText("rtl content")).not.toBeNull();
  });
});
