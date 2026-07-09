import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function TooltipPage() {
  return (
    <Page title="Tooltip" description="Contextual hint shown on hover or focus.">
      <Sample title="Basic">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>Helpful hint</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Sample>

      <Sample title="Sides">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Top</Button>
            </TooltipTrigger>
            <TooltipContent side="top">Above</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">Right side</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Below</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left">Left side</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Sample>
    </Page>
  );
}
