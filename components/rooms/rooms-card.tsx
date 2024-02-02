import { useState } from "react";
import Icons from "@/components/global/icons";
import FeatureModals from "./room-complement/features-modal";
import Image from "next/image";
import { Amenities, Availability, Attributes, Restaurants } from "@/utils/fetch";

type Props = {
  brand: string;
  categoryId: number;
  amenities: Amenities[];
  availability: Availability[];
  attributes: Attributes[];
  categoryCode: string;
  rstId: number;
  resortName: string;
  rstCode: string;
  categoryView: string[];
  mapLocation: string[];
  name: string;
  description: string;
  bedding: string;
  maxOccupancy: number;
  maxAdults: number;
  transferType: string;
  roomClass: string;
  webImgCode: string;
  thumbnailImgURL: string;
  fullImageURL: string;
  restaurants: Restaurants[];
  loveNest: boolean;
  soldOut: boolean;
  totalPrice: number;
  pricePerMonth: number;
  availableRooms: number;
};

export default function RoomsCard({
  brand,
  categoryId,
  amenities,
  availability,
  attributes,
  categoryCode,
  rstId,
  resortName,
  rstCode,
  categoryView,
  name,
  description,
  bedding,
  maxOccupancy,
  maxAdults,
  transferType,
  roomClass,
  webImgCode,
  thumbnailImgURL,
  fullImageURL,
  restaurants,
  loveNest,
  soldOut,
  totalPrice,
  pricePerMonth,
  availableRooms,
}: Props) {
  const [isSelectedRooms, setisSelectedRooms] = useState(false);
  const [isOpenDetailsRooms, setisOpenDetailsRooms] = useState(false);
  const disableCard = soldOut || soldOut === undefined ? false : true;
  const disableCardStyle = !disableCard ? "bg-white cursor-pointer " : "bg-anti-flash-white ";
  const isSandals = brand == "sandals" ? true : false;

  const formattedAmount = totalPrice.toLocaleString("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const handleClickRoom = () => {
    setisOpenDetailsRooms(!isOpenDetailsRooms);
    if (soldOut || soldOut === undefined) {
      setisSelectedRooms(true);
    }
  };

  return (
    <div
      className={`basis-full w-full md:w-[116.4rem] max-w-[116.4rem] mx-auto md:px-6  `}
      onClick={handleClickRoom}
    >
      <div
        className={`content-room flex flex-row flex-wrap md:justify-center mb-6 ${disableCardStyle} relative  
                rounded-tl-none rounded-tr md:rounded-bl-none md:rounded-tr-[0.7rem] rounded-[0.7rem]   shadow-roomcard  ${isSelectedRooms ? "border-[0.3rem] border-solid border-blue" : !soldOut ? "border-[0.1rem] border-silverGray" : "border-none"}  `}
      >
        <div className="sm:basis-full md:basis-3/12  lg:basis-3/12  items-center pl-0 md:pr-6 sm:pr-0 pr-0">
          <Image
            alt=""
            src={thumbnailImgURL}
            className={`lg:rounded-none md:rounded-none block max-w-full w-full border-none ${isSandals ? "14.231rem" : "13.746rem"} `}
            width={268.5}
            height={isSandals ? 142.31 : 137.46}
          />
        </div>
        <div className="sm:basis-7/12 basis-full md:basis-4/12 lg:basis-4/12 px-6 items-center text-center sm:text-left ">
          <h4
            title={name}
            className="font-bold text-[1.4rem] leading-[1.8rem] mt-[2.5rem] mx-0 mb-[0.5rem]"
          >
            <span className="">{name}</span>
            <div className="text-sandals-gray text-[1.2rem] leading-[1.4rem] font-semibold">
              <p className="mt-[0.5rem] mb-[0.5rem]">Category Level: {roomClass} </p>
              <p className="mt-[0.5rem] mb-[0.5rem]">Category Code: {categoryCode} </p>
              {isSandals && (
                <p className="mt-[0.5rem] mb-[0.5rem]">Max Occupancy: {maxOccupancy} Guests</p>
              )}
            </div>
          </h4>
          {availableRooms < 5 && availableRooms > 0 && (
            <span className="w-full mt-[0.7rem] mb-4 text-[1.2rem] leading-[1] font-bold text-red10 md:block sm:hidden hidden">
              {availableRooms} ROOMS LEFT
            </span>
          )}

          <ul className="sm:text-left text-center lg:mt-[0.9rem] lg:basis-7/12 sm:basis-12 m-0 p-0 mb-[1.8rem] list-none sm:block md:hidden">
            {attributes.map((attr) => (
              <FeatureModals
                disable={disableCard}
                key={`${attr.attributesName}-${attr.attributesId}`}
                className="mr-[1.2rem] mb-[0.2rem] pl-0 mt-[1.1rem] inline-block relative w-[4.4rem] h-[4.4rem]"
                id={attr.attributesId}
                title={attr.attributesName}
                description={attr.attributesDescription}
              />
            ))}
          </ul>
        </div>
        <div className="basis-full sm:basis-5/12 md:basis-5/12  lg:basis-5/12 px-6 items-center">
          <div className="flex flex-row flex-wrap md:justify-center mx-[-1.5rem]">
            <ul className="text-center lg:mt-[0.9rem] mb-[0.9rem] lg:basis-7/12 sm:basis-12 px-6 m-0 p-0 list-none sm:hidden md:block hidden">
              {attributes.map((attr) => (
                <FeatureModals
                  disable={disableCard}
                  key={`${attr.attributesName}-${attr.attributesId}`}
                  className="mr-[1.2rem] mb-[0.2rem] pl-0 mt-[1.1rem] inline-block relative w-[4.4rem] h-[4.4rem]"
                  id={attr.attributesId}
                  title={attr.attributesName}
                  description={attr.attributesDescription}
                />
              ))}
            </ul>
            {(soldOut || soldOut === undefined) && (
              <div className="sm:pb-[2rem] sm:pl-[11rem] sm:pr-[2rem] sm:pt-[2.3rem] md:pb-0 md:pr-[1.7rem] md:mt-[1rem] md:pl-6 md:pt-0  text-center lg:basis-5/12 sm:basis-full basis-full pl-6">
                <div className="text-[2.72rem] leading-[1] font-semibold text-blue mb-[1.2rem]">
                  <h3 className="text-center text-[1.2rem] leading-[1.2rem] font-semibold  items-center relative content-center text-lightGray my-2">
                    Room All-Inclusive Price:
                  </h3>
                  ${formattedAmount}
                  {pricePerMonth > 0 && (
                    <div className="leading-4">
                      <span className="cursor-pointer text-[1.4rem] font-semibold text-sandals-gray">
                        <span className="">or from </span>
                        <span className="text-blue font-semibold">
                          $<span>{pricePerMonth}</span>/mo
                          <Icons
                            name="information"
                            className={`inline ml-[0.2rem] relative top-[-0.25rem] w-[1.4rem] h-[1.36rem] fill-blue mr-2 `}
                          />
                        </span>
                      </span>
                    </div>
                  )}
                </div>
                <button className="md:w-full font-semibold rounded-lg py-[1rem] px-[0.8rem] leading-[1.6rem] mx-auto  md:basis-full text-[1.6rem] sm:w-full text-white bg-blue justify-center items-center  w-full max-w-[25.5rem]">
                  ROOM DETAILS
                </button>
                {availableRooms < 5 && availableRooms > 0 && (
                  <span className="w-full mt-[0.7rem] mb-4 text-[1.2rem] leading-[1] font-bold text-red10 md:hidden sm:block block">
                    {availableRooms} ROOMS LEFT
                  </span>
                )}
              </div>
            )}
            {!soldOut && (
              <div className="sm:pb-[2rem] sm:pl-[11rem] sm:pr-[2rem] sm:pt-[2.3rem] md:pr-[1.7rem] md:mt-[1rem] md:pl-0 md:pt-0  text-center lg:basis-5/12 sm:basis-full basis-full  pl-6  pb-[1.2rem]">
                <h6 className="text-center text-[2.4rem] leading-[2.6rem] font-bold  items-center relative content-center text-red10 mt-[2.4rem] mb-4">
                  SOLD OUT
                  <small className="text-sandals-gray text-[1.4rem] leading-[1.821rem] font-semibold text-center w-full basis-full block">
                    for your dates
                  </small>
                </h6>
                <button className="md:w-full rounded-lg py-[1rem] px-[0.8rem] leading-[1.6rem] mx-auto  md:basis-full text-[1.6rem] sm:w-full text-white bg-onyx justify-center items-center  w-full max-w-[25.5rem] font-semibold">
                  FIND AVAILABILITY
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
