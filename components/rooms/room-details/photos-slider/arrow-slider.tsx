import Icons from "@/components/global/icons";
import clsx from "clsx";

type ArrowSliderProps = {
  iconName: string;
  onClick?: () => void;
  extraClasses: string;
  limit: number;
  activeSlide: number;
  infinite: boolean;
};

export const ArrowSlider = ({
  onClick,
  iconName,
  extraClasses,
  limit,
  activeSlide,
  infinite,
}: ArrowSliderProps) => {
  return (
    <div
      className={clsx(
        "absolute top-1/2 block max-w-[4.1rem] z-[1] -translate-y-1/2",
        extraClasses,
        {
          "cursor-pointer": infinite || activeSlide !== limit,
        }
      )}
      onClick={onClick}
    >
      <Icons
        className={clsx("bg-transparent w-full fill-white", {
          "hover:opacity-100 opacity-75": infinite || activeSlide !== limit,
          "opacity-25": !infinite && activeSlide === limit,
        })}
        name={iconName}
      />
    </div>
  );
};
