"use client";

import { Gateway, ResortGateways } from "@/utils/fetch";
import { useState } from "react";
import FlightsRadioButtons, { RadioButtonProps } from "./flights-selection/fligths-radio-buttons";
import FlightDetail from "./flights-selection/flight-detail";
import { ItineraryInput } from "./flights-selection/gateway-search";

export type VacationFlight = {
  arrivalGateway: string;
  departureGateway: string;
  flightType: "economy" | "business";
};

type Props = {
  brand: string;
  gateways: Gateway[];
  selected: VacationFlight;
  resortGateways: ResortGateways[];
  radioProps?: RadioButtonProps;
  onChange: (values: VacationFlight) => void;
  itineraryInput?: ItineraryInput;
};

export default function FlightsSelection({
  gateways,
  brand,
  selected,
  onChange,
  radioProps,
  itineraryInput,
  resortGateways,
}: Props) {
  const [showFlights, setShowFlights] = useState<boolean>(true);

  const setSelect = (key: string, value: string) => {
    const copySelected = selected;
    copySelected[key as keyof VacationFlight] = value as "economy" | "business";
    onChange(copySelected);
  };

  return (
    <div className="flights-selected-option flex flex-col mb-[2.8rem] text-[1.4rem] px-6">
      <div className="flights-header flex flex-col flex-wrap">
        <h3 className="mb-6 text-[1.4rem] text-onyx font-semibold">Include Roundtrip Flights?</h3>
      </div>
      <FlightsRadioButtons
        setShowFlights={setShowFlights}
        showFlights={showFlights}
        brand={brand}
        {...radioProps}
      />
      {showFlights && (
        <FlightDetail
          brand={brand}
          gateways={gateways}
          selected={selected}
          onChange={setSelect}
          itineraryInput={itineraryInput}
          resortGateways={resortGateways}
        />
      )}
    </div>
  );
}
