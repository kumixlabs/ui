import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Checkbox } from "../src/ui/checkbox";
import { Kbd, KbdGroup } from "../src/ui/kbd";
import { Progress, ProgressCircle } from "../src/ui/progress";
import { RadioGroup, RadioGroupItem } from "../src/ui/radio-group";
import { Spinner, SpinnerDefault } from "../src/ui/spinner";
import { Switch, SwitchIndicator, SwitchWrapper } from "../src/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../src/ui/tabs";
import { Toggle, toggleVariants } from "../src/ui/toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "../src/ui/tooltip";

describe("Spinner", () => {
  it("renders with status role and loading label", () => {
    render(<Spinner />);

    const spinner = screen.getByRole("status", { name: /loading/i });
    expect(spinner.getAttribute("data-slot")).toBeNull();
    expect(spinner.classList.contains("animate-spin")).toBe(true);
  });

  it("SpinnerDefault renders the default loader icon", () => {
    render(<SpinnerDefault />);

    expect(screen.getByRole("status", { name: /loading/i })).toBeTruthy();
  });
});

describe("Toggle", () => {
  it("applies variant and size classes via cva", () => {
    expect(toggleVariants({ variant: "outline" })).toContain("border-input");
    expect(toggleVariants({ size: "sm" })).toContain("h-7");
  });

  it("toggles pressed state on click", () => {
    render(<Toggle aria-label="Bold">B</Toggle>);

    const toggle = screen.getByRole("button", { name: /bold/i });
    expect(toggle.getAttribute("data-state")).toBe("off");

    fireEvent.click(toggle);
    expect(toggle.getAttribute("data-state")).toBe("on");
  });
});

describe("Switch", () => {
  it("renders within a wrapper and toggles checked state", () => {
    render(
      <SwitchWrapper>
        <Switch aria-label="Notifications" />
      </SwitchWrapper>,
    );

    const sw = screen.getByRole("switch", { name: /notifications/i });
    expect(sw.getAttribute("data-slot")).toBe("switch");

    fireEvent.click(sw);
    expect(sw.getAttribute("data-state")).toBe("checked");
  });

  it("passes permanent context to indicators", () => {
    render(
      <SwitchWrapper permanent>
        <Switch aria-label="Always on" />
        <SwitchIndicator state="on" data-testid="indicator" />
      </SwitchWrapper>,
    );

    const indicator = screen.getByTestId("indicator");
    expect(indicator.getAttribute("data-slot")).toBe("switch-indicator");
    expect(indicator.className).toContain("start-0");
  });
});

describe("Checkbox", () => {
  it("renders and toggles checked state", () => {
    render(<Checkbox aria-label="Accept terms" />);

    const checkbox = screen.getByRole("checkbox", { name: /accept terms/i });
    expect(checkbox.getAttribute("data-slot")).toBe("checkbox");

    fireEvent.click(checkbox);
    expect(checkbox.getAttribute("data-state")).toBe("checked");
  });
});

describe("Progress", () => {
  it("renders a linear bar and positions the indicator by value", () => {
    render(<Progress value={40} aria-label="Upload" />);

    const bar = screen.getByRole("progressbar", { name: /upload/i });
    expect(bar.getAttribute("data-slot")).toBe("progress");

    const indicator = bar.querySelector("[data-slot=progress-indicator]");
    expect(indicator).not.toBeNull();
    expect(indicator?.getAttribute("style")).toContain("translateX(-60%)");
  });

  it("renders a circular progress with correct dashoffset", () => {
    const { container } = render(
      <ProgressCircle value={50} size={100} strokeWidth={10} aria-label="Circle">
        <span>50%</span>
      </ProgressCircle>,
    );

    const wrapper = container.querySelector("[data-slot=progress-circle]");
    expect(wrapper).not.toBeNull();

    const indicator = wrapper?.querySelector("[data-slot=progress-circle-indicator]");
    expect(indicator).not.toBeNull();

    const radius = (100 - 10) / 2;
    const circumference = radius * 2 * Math.PI;
    const expectedOffset = circumference - (50 / 100) * circumference;
    expect(Number(indicator?.getAttribute("stroke-dashoffset"))).toBeCloseTo(expectedOffset, 1);
  });
});

describe("Tabs", () => {
  it("activates the default tab and shows its content", () => {
    render(
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account settings</TabsContent>
        <TabsContent value="password">Password settings</TabsContent>
      </Tabs>,
    );

    const accountTab = screen.getByRole("tab", { name: /account/i });
    const passwordTab = screen.getByRole("tab", { name: /password/i });

    expect(accountTab.getAttribute("data-state")).toBe("active");
    expect(passwordTab.getAttribute("data-state")).toBe("inactive");

    expect(screen.getByText("Account settings")).toBeTruthy();
    expect(screen.queryByText("Password settings")).toBeNull();
  });

  it("renders disabled tabs as non-interactive", () => {
    render(
      <Tabs defaultValue="a">
        <TabsList>
          <TabsTrigger value="a">Active</TabsTrigger>
          <TabsTrigger value="b" disabled>
            Disabled
          </TabsTrigger>
        </TabsList>
        <TabsContent value="a">A</TabsContent>
        <TabsContent value="b">B</TabsContent>
      </Tabs>,
    );

    const disabledTab = screen.getByRole("tab", { name: /disabled/i });
    expect(disabledTab.getAttribute("data-disabled")).toBe("");
    expect(screen.queryByText("B content")).toBeNull();
  });

  it("propagates variant context from TabsList to TabsTrigger", () => {
    render(
      <Tabs defaultValue="a">
        <TabsList variant="line">
          <TabsTrigger value="a">A</TabsTrigger>
        </TabsList>
        <TabsContent value="a">Content A</TabsContent>
      </Tabs>,
    );

    const trigger = screen.getByRole("tab", { name: /a/i });
    expect(trigger.className).toContain("border-b-2");
  });
});

describe("RadioGroup", () => {
  it("renders radio items and checks one on click", () => {
    render(
      <RadioGroup defaultValue="a">
        <RadioGroupItem value="a" aria-label="Option A" />
        <RadioGroupItem value="b" aria-label="Option B" />
      </RadioGroup>,
    );

    const optionA = screen.getByRole("radio", { name: /option a/i });
    const optionB = screen.getByRole("radio", { name: /option b/i });

    expect(optionA.getAttribute("data-state")).toBe("checked");
    expect(optionB.getAttribute("data-state")).toBe("unchecked");

    fireEvent.click(optionB);
    expect(optionB.getAttribute("data-state")).toBe("checked");
    expect(optionA.getAttribute("data-state")).toBe("unchecked");
  });
});

describe("Tooltip", () => {
  it("renders the trigger with the correct data-slot", () => {
    render(
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Helpful tip</TooltipContent>
      </Tooltip>,
    );

    const trigger = screen.getByText("Hover me");
    expect(trigger.getAttribute("data-slot")).toBe("tooltip-trigger");
  });
});

describe("Kbd", () => {
  it("renders a keyboard key with the correct slot", () => {
    render(<Kbd>⌘</Kbd>);

    const kbd = screen.getByText("⌘");
    expect(kbd.tagName).toBe("KBD");
    expect(kbd.getAttribute("data-slot")).toBe("kbd");
  });

  it("renders a group of keys", () => {
    render(
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>,
    );

    const group = screen.getByText("Ctrl").parentElement;
    expect(group?.getAttribute("data-slot")).toBe("kbd-group");
    expect(group?.querySelectorAll("kbd")).toHaveLength(2);
  });
});
