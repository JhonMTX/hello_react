"use client";

import { Icon } from "@sanservices/brands-ui";
import { CDN_ICONS_URL } from "@/utils/constants";
import { useState } from "react";
import { Rates, Room, VacationDetails } from "@/utils/fetch";
import {
  Airlines,
  Itinerary,
} from "./flights/itineraries-container";
import { Guests } from "./guests/guests-container";
import VacationSummary from "./summaries/vacation-summary";
import RoomSummary from "./summaries/room-summary";
import FlightSummary from "./summaries/flights-summary";
import GuestsSummary from "./summaries/guest-summary";
import PriceSummary from "./summaries/price-summary";

export type FlightContent = {
  stop: string;
  title: string;
  time: string;
};

export type GuestContent = {
  title: string;
  address1: string;
  address2: string | null;
  location: string;
  additionalGuests: string[];
};

export default function EditVacation({
  vacationData,
  roomData,
  flightsData,
  guestData,
  airlines,
  rates
}: {
  vacationData: VacationDetails;
  roomData: Room;
  flightsData: Itinerary;
  guestData: Guests;
  airlines: Airlines[];
  rates: Rates[];
}) {

  const { leaving, returning } = flightsData.detail;
  const {
    title,
    firstName,
    lastName,
    address1,
    city,
    state,
    province,
    additionalGuests,
  } = guestData;
  const [open, setOpen] = useState<boolean>(false);
  const btnIcon = open ? "arrow-up.svg" : "arrow-down.svg";
  const btnIconSize = open ? "w-4 h-5 sm:w-6 sm:h-7" : "w-4 h-3 sm:w-6 sm:h-4";

  return (
    <section className="edit-vacation-details-section bg-onyx relative flex justify-end flex-wrap z-30">
      <button
        className="show-details text-[1.8rem] text-white bg-blue w-full sm:w-[39rem] md:w-[45rem] h-[5.4rem] flex justify-center items-center"
        onClick={() => setOpen(!open)}
      >
        <Icon
          src={CDN_ICONS_URL + btnIcon}
          className={`bg-white ${btnIconSize} pr-12`}
        />
        Edit Vacation Details
      </button>

      {open && (
        <div className="travel-details w-full top-[5.45rem] sm:w-[39rem] md:w-[45rem] bg-white absolute z-20 px-6 pt-8 pb-12 shadow-center">
          {Object.keys(vacationData).length > 0 && (
            <VacationSummary
              name="vacation"
              title="Travel Information"
              href="/vacation"
              hrefLabel="Start Over"
              summary={vacationData}
              step={1}
            />
          )}
          {Object.keys(roomData).length > 0 && (
            <RoomSummary
              name="rooms"
              title="Room Selection"
              href="/rooms"
              hrefLabel="Edit"
              summary={roomData}
              step={2}
            />
          )}
          {Object.keys(flightsData).length > 0 && (
            <FlightSummary
              name="flight"
              title="Rountrip Flights"
              href="/flights"
              hrefLabel="Edit"
              summary={flightsData}
              airlines={airlines}
              step={3}
            />
          )}
          {Object.keys(guestData).length > 0 && (
            <GuestsSummary
              name="guests"
              title="Guest Information"
              href="/guests"
              hrefLabel="Edit"
              summary={guestData}
              step={4}
            />
          )}
          {Object.keys(rates).length > 0 && (
            <PriceSummary
              name="prices"
              title="Total Vacation Price"
              flight={flightsData}
              rates={rates}
            />
          )}
        </div>
      )}
    </section>
  );
}
