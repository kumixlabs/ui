import { Slider, SliderThumb } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function SliderPage() {
  return (
    <Page title="Slider" description="Range selection control.">
      <Sample title="Single value">
        <div className="w-full max-w-md">
          <Slider defaultValue={[40]}>
            <SliderThumb />
          </Slider>
        </div>
      </Sample>

      <Sample title="Range">
        <div className="w-full max-w-md">
          <Slider defaultValue={[25, 75]}>
            <SliderThumb />
            <SliderThumb />
          </Slider>
        </div>
      </Sample>

      <Sample title="Stepped">
        <div className="w-full max-w-md">
          <Slider defaultValue={[50]} step={10}>
            <SliderThumb />
          </Slider>
        </div>
      </Sample>

      <Sample title="Disabled">
        <div className="w-full max-w-md">
          <Slider defaultValue={[40]} disabled>
            <SliderThumb />
          </Slider>
        </div>
      </Sample>
    </Page>
  );
}
