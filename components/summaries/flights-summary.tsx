import { usePathname } from "next/navigation";
import {
  Airlines,
  DetailsData,
  Itinerary,
} from "../flights/itineraries-container";
import { getStepID } from "@/utils/lib";
import { changeTimeFormat } from "../flights/itinerary-utils";
import { Fragment } from "react";
import { HeaderBlock } from "./block-summary";
import { FlightContent } from "../edit-vacation";

function generateItinerary(itineraries: DetailsData[], airlines: Airlines[]) {
  const content = itineraries.map((itinerary, index) => {
    const {
      operatingCarrier,
      departureTime,
      arrivalTime,
      departureGateway,
      arrivalGateway,
      flightNumber,
      departureDate,
      departureCity,
    } = itinerary;
    const matchedAirline = airlines.find(
      (airline) => airline.code === operatingCarrier
    );
    const formatDepartureTime = changeTimeFormat(departureTime);
    const formatArrivalTime = changeTimeFormat(arrivalTime);

    return {
      title: `${matchedAirline?.name} Flight # ${flightNumber} - ${departureDate}`,
      stop: `Stop ${index} - layover - ${departureCity} ${departureGateway}`,
      time: `${formatDepartureTime} ${departureGateway} - ${formatArrivalTime} ${arrivalGateway}`,
    };
  });

  return content;
}

function FlightsDataBlock({
  name,
  label,
  information,
}: {
  name: string;
  label: string;
  information: FlightContent[];
}) {
  return (
    <div className={`${name}-details bg-anti-flash-white mx-6 px-6 mb-4 pt-2 pb-8`}>
      <p className="text-[1.5rem] font-semibold pt-2 pb-4">{label}</p>
      {information.map((data, index) => {
        return (
          <div key={"vsrf" + index} className="roundtrip">
            {index > 0 && (
              <p className="stop text-[1.3rem] mb-4">{data.stop}</p>
            )}
            <p className="title text-[1.3rem]">{data.title}</p>
            <p className="time text-[1.6rem] mb-4 uppercase">{data.time}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function FlightSummary({
  name,
  title,
  href,
  hrefLabel,
  summary,
  airlines,
  step,
}: {
  name: string;
  title: string;
  href: string;
  hrefLabel: string;
  summary: Itinerary;
  airlines: Airlines[];
  step: number;
}) {
  const { leaving, returning } = summary.detail;
  const pathname = usePathname();
  const showHref = getStepID(pathname) > step;

  const content = [
    {
      name: "leaving",
      label: "Leaving Flights:",
      information: generateItinerary(leaving, airlines),
    },
    {
      name: "leaving",
      label: "Returning Flights:",
      information: generateItinerary(returning, airlines),
    },
  ];

  return (
    <Fragment>
      <HeaderBlock
        name={name}
        title={title}
        href={showHref ? href : ""}
        hrefLabel={showHref ? hrefLabel : ""}
      />
      {content.map((data, index) => (
        <FlightsDataBlock
          key={"fdb-" + index}
          name={data.name}
          label={data.label}
          information={data.information}
        />
      ))}
    </Fragment>
  );
}
