import VacationCard from "./vacation-card";
import { Slide } from "./vacation-extras";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  slides: Slide[];
};

export default function CardSlider({ slides }: Props) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  let slidesToShow = 4;

  if (isTablet) {
    slidesToShow = 3;
  }
  if (isMobile) {
    slidesToShow = 1;
  }

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
  }, []);

  /**
   * The URL mush have param of the booking information
   * this can be the phase two of this component
   * */

  return (
    <div className="vacation-extra-slider max-w-[26rem] sm:max-w-[74rem] md:max-w-[99.8rem]">
      <Slider
        infinite={true}
        speed={500}
        slidesToShow={slidesToShow}
        slidesToScroll={1}
        arrows={false}
      >
        {slides.map((slide) => (
          <a key={slide.code} href="#" target="_blank">
            <VacationCard
              path={slide.path}
              alt={slide.path}
              label={slide.label}
            />
          </a>
        ))}
      </Slider>
    </div>
  );
}
