"use client";

import { createContext, useState } from "react";
import { ItineraryCard } from "./itinerary-card";
import { Gateway } from "@/utils/fetch";
import itineraryFilterOptions from "@/utils/itinerary-filter-options";
import ItineraryFilter from "./itinerary-filter";
import ItinerariesSortBy from "./itineraries-sortby";

export type FlightData = {
  operatingCarrier: string;
  overnight: boolean;
  departureTime: string;
  departureGateway: string;
  arrivalTime: string;
  arrivalGateway: string;
  classOfService: string;
  cabinTypeDescription: string;
  tripFlightDuration: string | null;
  marketingCarrier: string | null;
  stops: number;
  basicEconomy: boolean;
};

export type DetailsData = {
  operatingCarrier: string;
  overnight: boolean;
  departureTime: string;
  departureGateway: string;
  arrivalTime: string;
  arrivalGateway: string;
  classOfService: string;
  cabinTypeDescription: string;
  flightNumber: string;
  departureDate: string | null;
  departureGatewayName: string;
  arrivalGatewayName: string;
  departureCity: string;
  arrivalCity: string;
  marketingCarrier: string;
  basicEconomy: boolean;
};

export type Summary = {
  leaving: FlightData;
  returning: FlightData;
  grandTotalAmount: number;
  totalTripFlightTime: number;
};

export type Details = {
  leaving: DetailsData[];
  returning: DetailsData[];
};

export type Itinerary = {
  airLine: string;
  summary: Summary;
  detail: Details;
};

export type Airlines = {
  id: number;
  code: string;
  name: string;
};

export type ItinerariesContainerData = {
  itineraries: Itinerary[];
  airlines: Airlines[];
  gateways: Gateway[];
};

export const ItinerariesContext = createContext<ItinerariesContainerData>({
  itineraries: [],
  airlines: [],
  gateways: [],
});

export default function ItinerariesContainer({
  itineraries,
  airlines,
  gateways,
}: {
  itineraries: Itinerary[];
  airlines: Airlines[];
  gateways: Gateway[];
}) {
  const itinerarieArray = itineraries.map(() => false);
  const [activeItineraries, setActiveItineraries] =
    useState<boolean[]>(itinerarieArray);
  const [matchedItineraries, setMatchedItineraries] =
    useState<Itinerary[]>(itineraries);
  const [sortedItineraries, setSortedItineraries] =
    useState<Itinerary[]>(matchedItineraries);
  const filterOptions = itineraryFilterOptions(matchedItineraries, itineraries);

  const itineraiesGlobalData = {
    itineraries: itineraries,
    airlines: airlines,
    gateways: gateways,
  };

  return (
    <>
      <ItinerariesContext.Provider value={itineraiesGlobalData}>
        <ItineraryFilter
          availableOptions={filterOptions}
          setMatchedItineraries={setMatchedItineraries}
        />
        <div className="itinerary-top w-full sm:px-6 flex flex-wrap">
          <h3 className="matched-itineraries text-[2.2rem] leading-10 uppercase font-semibold my-9 basis-full sm:basis-6/12 lg:basis-8/12">
            <span className="text-5xl text-blue block md:inline">
              {itineraries.length} Roundtrips
            </span>{" "}
            Matching your preferences
          </h3>
          <ItinerariesSortBy
            itineraries={matchedItineraries}
            setItineraries={setSortedItineraries}
          />
        </div>
        <div className="itinerary-cards w-full sm:px-6">
          {sortedItineraries.map((itinerary, index) => (
            <ItineraryCard
              key={"card-" + index}
              index={index}
              itinerary={itinerary}
              activeItineraries={activeItineraries}
              setActiveItineraries={setActiveItineraries}
            />
          ))}
        </div>
      </ItinerariesContext.Provider>
    </>
  );
}
