import { Gateway, ResortGateways } from "@/utils/fetch";
import Dropdown from "../../global/dropdown";
import { useState } from "react";
import { VacationFlight } from "../flights-selection";
import GatewaySearch, { ItineraryInput } from "./gateway-search";
import clsx from "clsx";

type Props = {
  brand: string;
  selected: VacationFlight;
  gateways: Gateway[];
  onChange: (key: string, value: string) => void;
  resortGateways: ResortGateways[];
  itineraryInput?: ItineraryInput;
};

const FlightDetail = ({
  brand,
  gateways,
  selected,
  onChange,
  itineraryInput,
  resortGateways,
}: Props) => {
  const [flightType, setFlightType] = useState("Economy/Coach");
  const [departureGateway, setDepartureGateway] = useState(selected.departureGateway);
  const [arrivalGateway, setArrivalGateway] = useState(selected.arrivalGateway);
  const flightTypeOptions = ["Economy/Coach", "Business/First"];
  const resortGatewayOptions = resortGateways.map((gateway) => gateway.gateway);
  const hideArrivalGateway = resortGatewayOptions.length < 2 || departureGateway !== "MIA";

  const setType = (value: string) => {
    setFlightType(value);
    onChange("flightType", value);
  };

  const setDeparture = (value: string) => {
    setDepartureGateway(value);
    onChange("departureGateway", value);
  };

  const setArrival = (value: string) => {
    setArrivalGateway(value);
    onChange("arrivalGateway", value);
  };

  return (
    <div className="input-section basis-full mt-16 lg:flex lg:flex-wrap">
      <div className="departing-options basis-full mb-6 sm:mb-4 sm:basis-6/12 lg:pr-6">
        <p className="text-[1.5rem] mb-4 text-onyx font-semibold">Flights departing from:</p>
        <GatewaySearch
          gateways={gateways}
          setState={setDeparture}
          brand={brand}
          itineraryInput={itineraryInput}
          error={itineraryInput?.error}
        />
        <p className="text-[1.5rem] mb-4 mt-4 text-sandals-gray">
          Results will be displayed in the &quot;flights&quot; section.
        </p>
        {itineraryInput?.error && (
          <p className="text-[1.5rem] mb-4 mt-4 text-red10">{itineraryInput.error}</p>
        )}
      </div>
      <div className="flight-type basis-full sm:basis-6/12 mb-8 sm:mb-0 lg:pl-6">
        <p className="text-[1.5rem] mb-4 text-onyx font-semibold">Search flights by:</p>
        <div className="options relative text-2xl flex flex-col -z-0">
          <Dropdown
            name={"flightType"}
            options={flightTypeOptions}
            value={flightType}
            brand={brand}
            background={"bg-sandals-light-gray"}
            onChangeDropdown={(value) => setType(value)}
          />
        </div>
      </div>
      <div
        className={clsx(
          "departing-options basis-full mb-6 sm:basis-6/12 lg:pr-6",
          hideArrivalGateway && "hidden",
        )}
      >
        <p className="text-[1.5rem] mb-4 text-onyx font-semibold">Airport Arriving to:</p>
        <div className="options relative text-2xl flex flex-col z-0">
          <Dropdown
            name={"gateway"}
            options={resortGatewayOptions}
            value={arrivalGateway}
            brand={brand}
            background={"bg-sandals-light-gray"}
            onChangeDropdown={(value) => setArrival(value)}
          />
        </div>
      </div>
      <div
        className={clsx(
          "flight-type basis-full sm:basis-6/12 mb-8 sm:mb-0 lg:pl-6 lg:mt-10",
          hideArrivalGateway && "hidden",
        )}
      >
        <p className="text-[1.5rem] text-sandals-gray">
          <span className="font-semibold text-onyx">Note:</span> New direct flights from MIA to OCJ
          Airport, conveniently located just 15 minutes from your resort, are available on
          Wednesday, and Saturday.
        </p>
      </div>
    </div>
  );
};

export default FlightDetail;
