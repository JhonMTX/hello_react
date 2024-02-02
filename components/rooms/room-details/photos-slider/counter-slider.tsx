import Icons from "@/components/global/icons";

type CounterSliderProps = {
  currentSlide: number;
  count: number;
};

export const CounterSlider = ({ currentSlide, count }: CounterSliderProps) => (
  <div className="hidden sm:block">
    <div className="flex gap-2 relative bottom-[4.4rem] justify-center">
      <Icons name="camera" className="w-12 h-12 fill-white" />
      <span className="text-5xl text-white">{`${
        currentSlide + 1
      }/${count}`}</span>
    </div>
  </div>
);
