import { useState, useEffect } from "react";
import FeatureModals from "./room-complement/features-modal";
import { Attributes} from '@/utils/fetch';

type Props = {
  brand: string;
  name: string;
  description: string;
  categoryCode: string;
  availability: {
    reservationDate: string;
    availableRooms: number;
  };
  maxOccupancy: number;
  bedding: string;
  categoryView?: string[];
  attributes: Attributes[];
};

export default function RoomDescription({
  brand,
  name,
  description,
  categoryCode,
  availability,
  maxOccupancy,
  bedding,
  categoryView,
  attributes
}: Props) {
  return (
    <div className="max-w-[116.4rem] w-full  mx-auto px-6 text-onyx">
      <div className="flex flex-row flex-wrap -mx-6">
        <p className="basis-full max-w-full flex-grow-0 flex-shrink-0 px-6 font-bold text-[1.8rem] text-red10 mt-[0.6rem] mb-2 sm:mt-[1.8rem] sm:mb-[1.8rem] ">
          {availability.availableRooms} room left
        </p>
        <div className="basis-full sm:basis-8/12 md:basis-9/12 max-w-full flex-grow-0 flex-shrink-0 px-6">
          <h2 className="font-semibold leading-[1.333] text-[1.8rem] sm:text-[2.4rem] sm:leading-[1] my-[0.5rem] ">
            {name} - {categoryCode}
          </h2>
          <p className="leading-[2.6rem] text-[1.6rem] py-4">{description}</p>
          <div className="flex flex-row flex-wrap -mx-6">
            <div className="basis-full sm:basis-6/12 max-w-full flex-grow-0 flex-shrink-0 px-6">
              <p className="my-[1em] font-semibold text-[1.6rem]">
                <span className="font-semibold text-[1.6rem] leading-[1] text-blue">
                  Room View:{" "}
                </span>{" "}
                {categoryView && categoryView.join(", ")}
              </p>
              <p className="my-[1em] font-semibold text-[1.6rem]">
                <span className="font-semibold text-[1.6rem] leading-[1] text-blue">
                  Max Occupancy:{" "}
                </span>{" "}
                {maxOccupancy} Guests
              </p>
            </div>
            <p className="basis-full sm:basis-6/12 max-w-full flex-grow-0 flex-shrink-0 px-6 my-[1em] font-semibold text-[1.6rem]">
              <span className="font-semibold text-[1.6rem] leading-[1] text-blue">Bedding: </span>{" "}
              {bedding}
            </p>
          </div>
        </div>
        <div className="basis-full sm:basis-4/12 md:basis-3/12 max-w-full flex-grow-0 flex-shrink-0 px-6">
          <h3 className="mt-0 mb-[0.5rem] text-[1.6rem] font-semibold text-blue">Included Features:</h3>
          <ul className="m-0 p-0 mb-[1.8rem] md:mb-[0.9rem] list-none">
            {attributes.map((attr) => (
              <FeatureModals
                disable={false}
                key={`${attr.attributesName}-${attr.attributesId}`}
                className="mr-[1.2rem] mb-[0.2rem] pl-0 mt-[1.1rem] relative flex items-center"
                id={attr.attributesId}
                title={attr.attributesName}
                description={attr.attributesDescription}
                showLabel={true}
              ></FeatureModals>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
