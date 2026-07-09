import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function AccordionPage() {
  return (
    <Page title="Accordion" description="Vertically stacked, expandable sections.">
      <Sample title="Single" description="Only one item open at a time.">
        <Accordion type="single" collapsible className="w-full max-w-md">
          <AccordionItem value="a">
            <AccordionTrigger>What is Kumix UI?</AccordionTrigger>
            <AccordionContent>A React component library.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="b">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes, built on Radix primitives.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </Sample>

      <Sample title="Multiple" description="Several items can stay open.">
        <Accordion type="multiple" className="w-full max-w-md">
          <AccordionItem value="a">
            <AccordionTrigger>Shipping</AccordionTrigger>
            <AccordionContent>Ships within 2 business days.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="b">
            <AccordionTrigger>Returns</AccordionTrigger>
            <AccordionContent>30-day return policy on all items.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="c">
            <AccordionTrigger>Warranty</AccordionTrigger>
            <AccordionContent>One-year limited warranty included.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </Sample>
    </Page>
  );
}
