import clsx from "clsx";
import React, { useEffect, useState } from "react";

type DotProps = {
  i: number;
  nextSlide: number;
  className?: string;
};

export const Dot = ({ i, nextSlide, className }: DotProps) => (
  <button
    className={clsx(
      "before:content-['•']",
      className,
      i === nextSlide && "before:!text-[#00b8f4] before:!opacity-100"
    )}
  >
    {i}
  </button>
);

type AppendDotsProps = {
  dots: React.ReactNode;
  infinite: boolean;
  nextSlide: number;
  activeDot: number;
  totalDots: number;
  dotsToShow: number;
};
export const AppendDots = ({
  dots,
  infinite,
  nextSlide,
  activeDot,
  dotsToShow,
  totalDots,
}: AppendDotsProps) => {
  const [translateX, setTranslateX] = useState(`translateX(-0rem)`);

  useEffect(() => {
    setTranslateX(() => {
      if (nextSlide === 0) return `translateX(-0rem)`;
      const translate = nextSlide - activeDot;
      const transform = 3 * (translate < 0 ? 0 : translate);

      return `translateX(-${transform}rem)`;
    });
  }, [activeDot, nextSlide]);

  const mappedDots = React.Children.toArray(dots).map((_, i) => {
    const leftSmallDot = i === nextSlide + dotsToShow - 1 - activeDot && i !== totalDots - 1;
    const rightSmallDot = i === nextSlide - activeDot && activeDot < nextSlide;
    const smallDot = i !== nextSlide && (leftSmallDot || rightSmallDot);

    return (
      <li key={i}>
        <Dot
          i={i}
          nextSlide={nextSlide}
          className={clsx({
            "before:!text-[0.5rem]": infinite && smallDot,
            "before:!text-[0.75rem]": !infinite || !smallDot,
          })}
        />
      </li>
    );
  });
  return (
    <div
      className={clsx(
        "slick-dots !bottom-0 !relative !m-auto overflow-hidden",
        infinite && "!w-[15rem]"
      )}
    >
      <ul
        style={{ transform: translateX }}
        className={clsx("flex m-0 transition-all duration-200", !infinite && "justify-center")}
      >
        {mappedDots}
      </ul>
    </div>
  );
};
