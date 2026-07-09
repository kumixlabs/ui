import { SvgText } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function SvgTextPage() {
  return (
    <Page title="SVG Text" description="Text rendered as animated SVG.">
      <Sample title="Basic">
        <SvgText
          svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <title>gradient fill</title>
              <defs>
                <linearGradient id="svg-text-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--color-chart-1)" />
                  <stop offset="100%" stopColor="var(--color-chart-3)" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#svg-text-grad)" />
            </svg>
          }
        >
          Kumix
        </SvgText>
      </Sample>
    </Page>
  );
}
