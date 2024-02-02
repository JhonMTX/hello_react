"use client";

import { useState } from "react";
import Modal from "../global/modal";
import Image from "next/image";
import { CDN_IMAGES_URL } from "@/utils/constants";
import Icons from "../global/icons";

type ImageInfo = {
  path: string;
  alt: string;
};

type Popup = {
  brand: string;
  tel: string;
  url: string;
  image: ImageInfo;
};

type Props = {
  label: string;
  iconName: string;
  popup: Popup;
};

export default function BestPriceGuarantee({ label, iconName, popup }: Props) {
  const [isOpen, changeIsOpen] = useState(false);
  const { brand, tel, url, image } = popup;
  const imageStyle = {
    width: "100%",
    height: "100%",
  };

  function onChange() {
    changeIsOpen(!isOpen);
  }

  return (
    <div className="flex justify-center items-center">
      <button
        className="text-header-black uppercase flex items-center text-[1.4rem]"
        onClick={onChange}
      >
        {label}
        <Icons className="w-6 h-6 ml-2 fill-blue" name={iconName} />
      </button>
      {isOpen && (
        <Modal
          className="bg-white flex flex-col z-10 w-full max-w-xl sm:max-w-[68.8rem] top-80 relative mx-auto rounded-lg pt-8 pl-6 sm:pl-20 pr-6 pb-16"
          isOpen={isOpen}
          onChange={onChange}
        >
          <div className="custom-content px-2 sm:pl-0 sm:pr-14">
            <h3 className="header text-[2.2rem] text-blue font-semibold uppercase border-b border-platinum pb-5">
              The {brand} Best Price Guarantee
            </h3>
            <div className="statement flex justify-center flex-wrap">
              <p className="description text-[1.4rem] pt-[2.5rem] basis-full pr-2 mb-2">
                Our Best Price Guarantee allows you to feel certain that the room rate you receive
                is the best price for your Sandals vacation. You can book with confidence online,
                through your favorite travel agent, or by calling{" "}
                <a className="text-blue hover:text-spiro-disco uppercase" href={tel}>
                  1-888-{brand}
                </a>
                .
              </p>
              <div className="statement flex basis-full flex-wrap pr-2 sm:pr-6">
                <p className="description basis-full sm:basis-6/12 text-[1.4rem] pt-[1rem]">
                  If within 24 hours of booking your online vacation at{" "}
                  <a
                    className="text-blue hover:text-spiro-disco lowercase"
                    href={url}
                    target="_blank"
                  >
                    {url}
                  </a>
                  , you find a lower price for the same arrival date, number of nights and room
                  accommodations we will refund the difference.
                </p>
                <div className="best-price-img basis-full sm:basis-6/12 max-w-[17.5rem] mx-auto mt-[1.7rem] sm:mt-0 sm:ml-24">
                  <Image
                    src={`${CDN_IMAGES_URL}${image.path}`}
                    alt={image.alt}
                    width={175}
                    height={175}
                    priority
                    style={imageStyle}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
