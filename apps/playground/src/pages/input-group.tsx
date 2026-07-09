import { SearchIcon } from "lucide-react";

import {
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupNew,
  InputGroupText,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function InputGroupPage() {
  return (
    <Page title="Input Group" description="Input composed with addons and buttons.">
      <Sample title="With icon and button">
        <InputGroupNew className="w-72">
          <InputGroupAddon align="inline-start">
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon align="inline-end">
            <InputGroupButton>Go</InputGroupButton>
          </InputGroupAddon>
        </InputGroupNew>
      </Sample>

      <Sample title="With prefix text">
        <InputGroupNew className="w-72">
          <InputGroupAddon align="inline-start">
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="example.com" />
        </InputGroupNew>
      </Sample>
    </Page>
  );
}
