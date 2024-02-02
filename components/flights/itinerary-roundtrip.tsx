"use client";

import { Dispatch, SetStateAction, useContext } from "react";
import { Airlines, Details, DetailsData, ItinerariesContext } from "./itineraries-container";
import {
  changeTimeFormat,
  formatSummaryMoney,
  getAirlineIcon,
  getStops,
  setActiveItinerary,
} from "./itinerary-utils";
import { Icon } from "@sanservices/brands-ui";
import { CDN_ICONS_URL } from "@/utils/constants";

function createScheduleJSX(
  label: string,
  flightDetails: DetailsData[],
  airlines: Airlines[]
) {
  const flightsJSX = flightDetails.map((flight, index) => {
    const {
      operatingCarrier,
      departureTime,
      arrivalTime,
      departureGatewayName,
      departureGateway,
      arrivalGatewayName,
      arrivalGateway,
      flightNumber,
      departureDate,
      classOfService,
      cabinTypeDescription,
      departureCity,
      basicEconomy,
    } = flight;
    const matchedAirline = airlines.find(
      (airline) => airline.code === operatingCarrier
    );
    const flightIcon = getAirlineIcon(operatingCarrier);
    const formatDepartureTime = changeTimeFormat(departureTime).toUpperCase();
    const formatArrivalTime = changeTimeFormat(arrivalTime).toUpperCase();
    const baggageFees = true;
    const stopsBarText = `Stop ${index} - ${departureCity} (${departureGateway})`;
    const flightHeader = `${matchedAirline?.name} Flight # ${flightNumber}`;
    const serviceClass = `${cabinTypeDescription} (${classOfService})`;
    const departureTimeGateway = `${formatDepartureTime} ${departureGatewayName} (${departureGateway})`;
    const arrivalTimeGateway = `${formatArrivalTime} ${arrivalGatewayName} (${arrivalGateway})`;

    return (
      <div
        key={`${flightNumber}-${label}`}
        className={`${label}-flight bg-cultured flex flex-col sm:flex-row sm:justify-start rounded-md flex-wrap`}
      >
        {index >= 1 && (
          <div className="stops-bar text-2xl my-4 basis-full flex items-center justify-center border-y-2 py-4 px-6 sm:px-0 sm:mx-10 border-solid border-bright-gray">
            <Icon
              src={CDN_ICONS_URL + "clock.svg"}
              className="bg-header-black w-6 h-6 mr-2"
            />
            <p>{stopsBarText}</p>
          </div>
        )}
        <div
          className={`${label}-details-logo px-6 sm:px-0 sm:ml-24 md:ml-40 lg:ml-8 my-9`}
        >
          <div className="icon-container w-[3.8rem] h-[3.8rem] mt-2 mr-4 p-2 border-solid border-[1px] rounded-lg bg-white border-sandals-gray">
            <Icon src={flightIcon} className="bg-gray-12 w-full h-full" />
          </div>
        </div>
        <div className={`${label}-details pl-12 mb-9 sm:px-0 sm:ml-12 sm:my-9`}>
          <p className="airline-name text-[1.8rem] text-sandals-gray">
            {flightHeader}
          </p>
          <p className="departure-date text-[1.8rem] text-sandals-gray">
            {departureDate}
          </p>
          {!basicEconomy && (
            <p className="service-class text-[1.4rem] text-sandals-gray">
              {serviceClass}
            </p>
          )}
          {basicEconomy && (
            <p className="basic-economy text-[1.4rem] underline text-blue">
              Basic Economy
            </p>
          )}
          <p className="departing-details text-[1.8rem] my-9">
            Departing:{" "}
            <span className="time-gateway block">{departureTimeGateway}</span>
          </p>
          <p className="arriving-details text-[1.8rem] my-9">
            Arriving:{" "}
            <span className="time-gateway block">{arrivalTimeGateway}</span>
          </p>
          {baggageFees && (
            <a
              href="#"
              className="baggage-fees text-[1.4rem] underline text-blue"
            >
              Airline Baggage Fees
            </a>
          )}
        </div>
      </div>
    );
  });

  return flightsJSX;
}

function createFlightSchedule(
  label: string,
  flightDetails: DetailsData[],
  airlines: Airlines[]
) {
  const stopsLabel = getStops(flightDetails.length - 1, true).replace("+", "");
  const stopsGateways = flightDetails.map((flight, index) => {
    return { gateway: flight.arrivalGateway, city: flight.arrivalCity };
  });

  let gatewaysLabel = "(";

  stopsGateways.forEach((stopGateway, index) => {
    if (index > 1) {
      gatewaysLabel += `,${stopGateway.gateway}`;
    } else if (index !== 0) {
      gatewaysLabel += stopGateway.gateway;
    }
  });
  gatewaysLabel += ")";

  const flightsJSX = createScheduleJSX(label, flightDetails, airlines);

  return (
    <div className={`${label} basis-full lg:basis-6/12 px-6`}>
      <div className="title flex my-[1.8rem]">
        <p className="type capitalize text-[1.8rem] sm:text-[2.6rem]">
          {label} Flights
        </p>
        <p className="divider text-[1.8rem] sm:text-[2.6rem] px-4 text-sandals-gray">
          |
        </p>
        <p className="stop text-[1.8rem] sm:text-[2.6rem]">
          {stopsLabel}{" "}
          {flightDetails.length - 1 > 0 && (
            <span className="text-2xl sm:text-3xl">{gatewaysLabel}</span>
          )}
        </p>
      </div>
      {flightsJSX}
    </div>
  );
}

export function ItineraryRountrip({
  index,
  details,
  flightPrice,
  activeItineraries,
  setActiveItineraries,
}: {
  index: number;
  details: Details;
  flightPrice: number;
  activeItineraries: boolean[];
  setActiveItineraries: Dispatch<SetStateAction<boolean[]>>;
}) {
  const { airlines } = useContext(ItinerariesContext);
  const leavingFlights = createFlightSchedule("leaving", details.leaving, airlines);
  const returningFlights = createFlightSchedule(
    "returning",
    details.returning,
    airlines
  );
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const itineraryDetailsStyles = isMobile
    ? "fixed h-full w-full z-10 top-0 left-0 overflow-auto bg-anti-flash-white"
    : "";
  const roomPlusFlightPrice = flightPrice; // add the room price when the vacation summary is implemented.
  const totalPrice = formatSummaryMoney(roomPlusFlightPrice);

  return (
    <div className={itineraryDetailsStyles}>
      {isMobile && (
        <div className="close-button basis-full flex justify-end px-6 mt-6 mb-8">
          <button
            className="close"
            onClick={() =>
              setActiveItinerary(activeItineraries, setActiveItineraries, index)
            }
          >
            <Icon
              src={CDN_ICONS_URL + "close.svg"}
              className="bg-header-black w-8 h-8 mr-2 font-bold"
            />
          </button>
        </div>
      )}
      <div className="itinerary-details mx-6 sm:mx-0 bg-white pt-12 flex sm:justify-center flex-wrap">
        {leavingFlights}
        {returningFlights}
        {isMobile && (
          <div className="total-price flex flex-col basis-full items-center mt-12">
            <p className="text-[3.3rem] pb-2 leading-none font-semibold text-blue">
              {totalPrice.dollar}.
              <sup className="text-[1.9rem]">{totalPrice.cents}</sup>
            </p>
            <p className="text-2xl text-sandals-gray">Room + Flights (USD)</p>
          </div>
        )}
        <div className="select-flight-button basis-full mt-8 mb-[3.8rem] flex justify-center">
          <button className="continue py-6 px-10 uppercase rounded-lg text-[2rem] sm:text-[2.4rem] bg-blue text-white">
            Select Flight & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
