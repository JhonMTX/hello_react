import Image from "next/image";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { CounterSlider } from "./counter-slider";
import { ArrowSlider } from "./arrow-slider";
import { AppendDots } from "./magic-dots";

type Photo = {
  path: string;
  alt: string;
};

type PhotosSliderProps = {
  images: Photo[];
  infinite: boolean;
  showCounter: boolean;
  dotsToShow?: number;
};

export const PhotosSlider = ({
  images,
  infinite,
  showCounter,
  dotsToShow = 5,
}: PhotosSliderProps) => {
  const totalDots = images.length;
  dotsToShow = Math.min(dotsToShow, totalDots);

  const [nextSlide, setNextSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeDot, setActiveDot] = useState(0);

  const imageStyle = {
    width: "100%",
    height: "auto",
  };

  const sliderSettings: Settings = {
    infinite,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    beforeChange: (_, next) => {
      setNextSlide(next);

      const isMovingForward = next > currentSlide || next === 0;
      setActiveDot((prevActiveDot) => {
        if (!next) return 0;
        if (next === totalDots - 1) return dotsToShow - 1;
        const nextDotPosition = prevActiveDot + (isMovingForward ? 1 : -1);
        if (!nextDotPosition) return prevActiveDot;

        return nextDotPosition >= dotsToShow - 1 ? prevActiveDot : nextDotPosition;
      });
    },
    afterChange: (currentSlide) => setCurrentSlide(currentSlide),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          appendDots: (dots) => (
            <AppendDots
              dots={dots}
              infinite={infinite}
              nextSlide={nextSlide}
              activeDot={activeDot}
              dotsToShow={dotsToShow}
              totalDots={totalDots}
            />
          ),
        },
      },
    ],
  };

  return (
    <div className="max-w-[113.4rem]">
      <Slider
        {...sliderSettings}
        nextArrow={
          <ArrowSlider
            extraClasses="right-12"
            iconName="nextArrow"
            limit={totalDots - 1}
            activeSlide={nextSlide}
            infinite={infinite}
          />
        }
        prevArrow={
          <ArrowSlider
            extraClasses="left-12"
            iconName="prevArrow"
            limit={0}
            activeSlide={nextSlide}
            infinite={infinite}
          />
        }
      >
        {images.map(({ path, alt }, i) => (
          <div key={i}>
            <Image
              alt={alt}
              src={path}
              width={440}
              height={220}
              priority
              style={imageStyle}
            ></Image>
          </div>
        ))}
      </Slider>
      {showCounter && <CounterSlider count={totalDots} currentSlide={currentSlide} />}
    </div>
  );
};
