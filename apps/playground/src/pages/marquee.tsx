import { Marquee } from "@kumix/ui";
import { Page, Sample } from "../showcase";

const logos = ["Kumix", "React", "Tailwind", "Radix", "Vite", "TypeScript"];

export function MarqueePage() {
  return (
    <Page title="Marquee" description="Continuously scrolling content strip.">
      <Sample title="Horizontal" description="Pauses on hover.">
        <div className="w-full max-w-lg overflow-hidden">
          <Marquee pauseOnHover className="[--duration:12s]">
            {logos.map((logo) => (
              <span key={logo} className="mx-3 rounded-md border border-border px-4 py-2 text-sm">
                {logo}
              </span>
            ))}
          </Marquee>
        </div>
      </Sample>

      <Sample title="Reverse" description="Scrolls in the opposite direction.">
        <div className="w-full max-w-lg overflow-hidden">
          <Marquee reverse className="[--duration:12s]">
            {logos.map((logo) => (
              <span
                key={logo}
                className="mx-3 rounded-md bg-muted px-4 py-2 text-muted-foreground text-sm"
              >
                {logo}
              </span>
            ))}
          </Marquee>
        </div>
      </Sample>
    </Page>
  );
}
