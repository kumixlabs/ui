import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function InputOtpPage() {
  return (
    <Page title="Input OTP" description="One-time password / verification code input.">
      <Sample title="Six digits">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </Sample>

      <Sample title="Grouped with separator">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </Sample>
    </Page>
  );
}
