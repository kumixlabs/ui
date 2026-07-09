import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function CarouselPage() {
  return (
    <Page title="Carousel" description="Horizontally scrollable content slides.">
      <Sample title="Basic">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, i) => (
              <CarouselItem key={i}>
                <div className="flex aspect-square items-center justify-center rounded-md border border-border bg-card font-semibold text-3xl">
                  {i + 1}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Sample>
    </Page>
  );
}
