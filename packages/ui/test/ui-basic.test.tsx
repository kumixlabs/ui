import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../src/ui/accordion";
import { Alert, AlertContent, AlertDescription, AlertTitle } from "../src/ui/alert";
import { Avatar, AvatarFallback } from "../src/ui/avatar";
import { Badge, BadgeButton, BadgeDot } from "../src/ui/badge";
import { BreadcrumbEllipsis } from "../src/ui/breadcrumb";
import { Button, ButtonArrow, buttonVariants } from "../src/ui/button";
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "../src/ui/button-group";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../src/ui/card";
import { Code } from "../src/ui/code";
import { Input, InputAddon, InputGroup, InputWrapper } from "../src/ui/input";
import { Label } from "../src/ui/label";
import { Separator } from "../src/ui/separator";
import { Skeleton } from "../src/ui/skeleton";
import { Textarea } from "../src/ui/textarea";

describe("basic UI components", () => {
  it("renders button variants and arrow", () => {
    render(
      <Button variant="secondary">
        Action
        <ButtonArrow />
      </Button>,
    );

    expect(screen.getByRole("button", { name: /action/i }).getAttribute("data-slot")).toBe(
      "button",
    );
    expect(screen.getByRole("button", { name: /action/i }).getAttribute("type")).toBe("button");
    expect(buttonVariants({ variant: "secondary" })).toContain("bg-secondary");
  });

  it("renders accessible code copy and breadcrumb ellipsis controls", () => {
    render(
      <div>
        <Code showCopyButton copyText="npm install">
          npm install
        </Code>
        <BreadcrumbEllipsis />
      </div>,
    );

    expect(screen.getByRole("button", { name: "Copy code" })).toBeTruthy();
    expect(screen.getByRole("img", { name: "More" })).toBeTruthy();
  });

  it("renders badges and uses a semantic button for badge actions", () => {
    render(
      <Badge>
        <BadgeDot />
        Active
        <BadgeButton aria-label="Remove badge" />
      </Badge>,
    );

    expect(screen.getByText("Active").getAttribute("data-slot")).toBe("badge");
    expect(screen.getByRole("button", { name: /remove badge/i }).getAttribute("type")).toBe(
      "button",
    );
  });

  it("calls alert close handlers", () => {
    const onClose = vi.fn();

    render(
      <Alert close onClose={onClose}>
        <AlertContent>
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>Something happened.</AlertDescription>
        </AlertContent>
      </Alert>,
    );

    fireEvent.click(screen.getByRole("button", { name: /dismiss/i }));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("renders card sections with accent variant context", () => {
    render(
      <Card variant="accent">
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );

    expect(screen.getByText("Revenue").getAttribute("data-slot")).toBe("card-title");
    expect(screen.getByText("Content").classList.contains("bg-card")).toBe(true);
    expect(screen.getByText("Footer").classList.contains("rounded-b-xl")).toBe(true);
  });

  it("renders form primitives", () => {
    render(
      <div>
        <Label htmlFor="name">Name</Label>
        <InputGroup>
          <InputAddon>@</InputAddon>
          <Input id="name" defaultValue="kumix" />
        </InputGroup>
        <InputWrapper>
          <Input aria-label="Wrapped input" />
        </InputWrapper>
        <Textarea aria-label="Description" defaultValue="hello" />
      </div>,
    );

    expect((screen.getByLabelText("Name") as HTMLInputElement).value).toBe("kumix");
    expect(screen.getByLabelText("Wrapped input").getAttribute("data-slot")).toBe("input");
    expect((screen.getByLabelText("Description") as HTMLTextAreaElement).value).toBe("hello");
  });

  it("renders layout primitives", () => {
    render(
      <div>
        <Avatar>
          <AvatarFallback>KL</AvatarFallback>
        </Avatar>
        <ButtonGroup>
          <ButtonGroupText>Group</ButtonGroupText>
          <ButtonGroupSeparator />
        </ButtonGroup>
        <Separator />
        <Skeleton aria-label="Loading" />
      </div>,
    );

    expect(screen.getByText("KL").getAttribute("data-slot")).toBe("avatar-fallback");
    expect(screen.getByRole("group").getAttribute("data-orientation")).toBe("horizontal");
    expect(screen.getByLabelText("Loading").getAttribute("data-slot")).toBe("skeleton");
  });

  it("renders accordion with no indicator", () => {
    render(
      <Accordion type="single" collapsible indicator="none">
        <AccordionItem value="item-1">
          <AccordionTrigger>Question</AccordionTrigger>
          <AccordionContent>Answer</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByRole("button", { name: "Question" }).getAttribute("data-slot")).toBe(
      "accordion-trigger",
    );
  });
});
