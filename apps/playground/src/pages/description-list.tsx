import { DescriptionDetails, DescriptionList, DescriptionTerm } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function DescriptionListPage() {
  return (
    <Page title="Description List" description="Key-value pairs for structured detail.">
      <Sample title="Package metadata">
        <DescriptionList className="w-full max-w-md">
          <DescriptionTerm>Name</DescriptionTerm>
          <DescriptionDetails>Kumix UI</DescriptionDetails>
          <DescriptionTerm>Version</DescriptionTerm>
          <DescriptionDetails>0.1.2</DescriptionDetails>
          <DescriptionTerm>License</DescriptionTerm>
          <DescriptionDetails>MIT</DescriptionDetails>
        </DescriptionList>
      </Sample>

      <Sample title="Order summary">
        <DescriptionList className="w-full max-w-md">
          <DescriptionTerm>Subtotal</DescriptionTerm>
          <DescriptionDetails>$120.00</DescriptionDetails>
          <DescriptionTerm>Shipping</DescriptionTerm>
          <DescriptionDetails>$8.00</DescriptionDetails>
          <DescriptionTerm>Total</DescriptionTerm>
          <DescriptionDetails>$128.00</DescriptionDetails>
        </DescriptionList>
      </Sample>
    </Page>
  );
}
