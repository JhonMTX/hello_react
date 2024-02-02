import { Dispatch, SetStateAction } from 'react';
import { FlightData, Summary } from './itineraries-container';
import { Icon } from '@sanservices/brands-ui';
import {
  changeTimeFormat,
  formatSummaryMoney,
  getAirlineIcon,
  getStops,
  setActiveItinerary,
} from './itinerary-utils';

function CreateItineraryDetails({label, flightSummary} : {label: string, flightSummary: FlightData}) {
  const flightIcon = getAirlineIcon(flightSummary.operatingCarrier);
  const flightDepartureTime = changeTimeFormat(flightSummary.departureTime);
  const flightDepartureGateway = flightSummary.departureGateway;
  const flightArrivalTime = changeTimeFormat(flightSummary.arrivalTime);
  const flightArrivalGateway = flightSummary.arrivalGateway;
  const flightStops = getStops(flightSummary.stops, false);
  const flightBasicEconomy = flightSummary.basicEconomy;

  return (
    <div
      className={`${label}-summary flex basis-full py-7 sm:p-0 sm:basis-6/12 lg:basis-4/12`}
    >
      <div className={`${label}-logo`}>
        <Icon src={flightIcon} className="bg-gray-12 w-12 h-12 mt-2 mr-4" />
      </div>
      <div
        className={`${label}-schedule-details flex flex-col w-full items-start`}
      >
        <p className={`${label}-label capitalize text-2xl text-sandals-gray`}>
          {label}
        </p>
        <div
          className={`${label}-schedule flex text-[1.7rem] sm:text-[1.8rem] leading-7 my-2`}
        >
          <div className="departure flex">
            <p className="time uppercase text-blue">{flightDepartureTime}</p>
            <p className="location pl-2">{flightDepartureGateway}</p>
          </div>
          <div className="arrow px-4">
            <p>&rarr;</p>
          </div>
          <div className="arrival flex">
            <p className="time uppercase text-blue">{flightArrivalTime}</p>
            <p className="location pl-2">{flightArrivalGateway}</p>
          </div>
        </div>
        <div className={`${label}-stops-fare-class flex text-2xl`}>
          {flightBasicEconomy && <p className="fare-class">Basic Economy - </p>}
          <p className="stop text-sandals-gray pl-1">{flightStops}</p>
        </div>
      </div>
    </div>
  );
}

export default function ItineraryPreview(
  {index, activeItineraries, summary, setActiveItineraries}
  :{  index: number,
  summary: Summary,
  activeItineraries: boolean[],
  setActiveItineraries: Dispatch<SetStateAction<boolean[]>>
}) {
  const roomPlusFlightPrice = summary.grandTotalAmount; // add the room price when the vacation summary is implemented.
  const totalPrice = formatSummaryMoney(roomPlusFlightPrice);
  const showDetails = activeItineraries[index];
  const showDetailsButtonColor = showDetails
    ? 'bg-cultured text-blue'
    : 'bg-blue text-white';
  const showDetailsButtonText = showDetails ? 'Hide Details' : 'Show Details';
  return (
    <button
      className="summary-card flex flex-wrap w-full items-center bg-white p-7 sm:pl-8 sm:pr-4 lg:pl-[3.4rem] lg:pr-0 rounded-lg"
      onClick={() =>
        setActiveItinerary(activeItineraries, setActiveItineraries, index)
      }
    >
      <CreateItineraryDetails label="leaving" flightSummary={summary.leaving}/>
      <CreateItineraryDetails label="returning" flightSummary={summary.returning}/>
      <div className="total-price flex flex-col basis-full sm:items-start sm:basis-6/12 sm:pt-16 sm:pl-16 lg:p-0 lg:items-center lg:basis-2/12">
        <p className="text-[3.3rem] pb-2 leading-none font-semibold text-blue">
          {totalPrice.dollar}.
          <sup className="text-[1.9rem]">{totalPrice.cents}</sup>
        </p>
        <p className="text-2xl text-sandals-gray">Room + Flights (USD)</p>
      </div>
      <div className="details-button py-8 sm:pb-0 basis-full sm:basis-6/12 lg:basis-2/12 px-6 sm:pt-16 sm:pl-16 lg:px-6 lg:pt-0">
        <p
          className={`uppercase text-2xl py-3 px-6 rounded-lg sm:ml-48 md:ml-[22rem] lg:m-0 ${showDetailsButtonColor}`}
        >
          {showDetailsButtonText}
        </p>
      </div>
    </button>
  );
}
