import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

const steps = [
  { step: 1, title: "Account" },
  { step: 2, title: "Profile" },
  { step: 3, title: "Confirm" },
];

export function StepperPage() {
  return (
    <Page title="Stepper" description="Multi-step progress indicator.">
      <Sample title="Basic">
        <Stepper defaultValue={2} className="w-full max-w-md">
          <StepperNav>
            {steps.map((s) => (
              <StepperItem key={s.step} step={s.step}>
                <StepperTrigger>
                  <StepperIndicator>{s.step}</StepperIndicator>
                  <StepperTitle>{s.title}</StepperTitle>
                </StepperTrigger>
                {s.step < steps.length ? <StepperSeparator /> : null}
              </StepperItem>
            ))}
          </StepperNav>
        </Stepper>
      </Sample>
    </Page>
  );
}
