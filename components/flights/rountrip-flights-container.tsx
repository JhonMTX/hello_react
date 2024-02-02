"use client";

import { Gateway } from "@/utils/fetch";
import ItinerarySearch from "./itinerary-search";
import { useState } from "react";

type FlightInformation = {
  gateway: string;
  type: string;
};

export default function RountripFlightsContainer({
  gateways,
}: {
  gateways: Gateway[];
}) {
  const [showFlights, setShowFlights] = useState<boolean>(true);
  const [flightType, setFlightType] = useState<string>("economy");
  const [gateway, setGateway] = useState<string>("");
  const buttonLabel = showFlights ? "View Flights" : "Continue";

  const topArrow =
    "before:absolute before:z-10 before:block before:border-solid before:border-x-[0.8rem] before:border-b-[0.8rem] before:border-b-blue before:border-x-transparent";
  const bottomArrow =
    "after:absolute after:z-10 after:block after:border-solid after:border-x-[0.8rem] after:border-t-[0.8rem] after:border-t-blue after:border-x-transparent";
  const radioStyle = "mr-3 relative appearance-none w-16 h-16 rounded-[50%] -translate-y-3 focus:border-blue focus:shadow-blur-input focus:shadow-blue border border-solid border-platinum bg-white";
  const selectOptionStyle = "after:absolute after:top-1/4 after:left-1/4 after:-rotate-45 after:w-8 after:h-8 after:rounded-full after:bg-blue";
  const triangleStyle = "before:border-t-0 before:border-r-0 before:border-b-2 before:border-l-2 before:border-solid before:w-12 before:h-12 before:rotate-[135deg] before:inline-block before:absolute before:left-2/4 before:top-0 before:-m-6 before:bg-white before:border-transparent";
  
  return (
    <div className="roundtrip-flights-container flex items-center flex-col">
      <div className="flights-header flex flex-col flex-wrap items-center justify-center sm:px-6">
        <p className="mt-[3.9rem] mb-[2rem] text-[2.6rem] sm:text-[2.6rem] font-light leading-[1.1] text-center">
          Include Roundtrip Flights?
        </p>
        <p className="w-full sm:w-10/12 md:w-7/12 text-2xl sm:text-[1.6rem] mb-16 text-center">
          We guarantee no booking fees, the most convenient flight itineraries
          available, up-to-date flight information and 24-hour assistance.
        </p>
      </div>

      <div className="include-roundtrip-radiobuttons px-6 text-[1.6rem] flex justify-center mb-12">
        <input
          className={`no-option ${radioStyle} ${!showFlights ? selectOptionStyle : ''}`}
          type="radio"
          onChange={() => setShowFlights(false)}
          checked={!showFlights}
        />
        <label className="pr-12">No, thank you</label>
        <input
          className={`yes-option ${radioStyle} ${showFlights ? selectOptionStyle : ''}`}
          type="radio"
          onChange={() => setShowFlights(true)}
          checked={showFlights}
        />
        <label>Yes, please</label>
      </div>
      {showFlights && (
        <div className={`flight-details relative flex flex-wrap w-full sm:w-10/12 bg-white pt-5 mt-16 rounded-md shadow-center ${triangleStyle}`}>
          <h4 className="px-6 text-[2.4rem] sm:text-[2.8rem] font-light basis-full sm:ml-[5.3rem] lg:ml-32 mt-[1.6rem] mb-[1.6rem]">
            We need a few more details:
          </h4>
          <div className="input-section flex flex-wrap basis-full sm:ml-[5.3rem] lg:ml-32">
            <div className="departing-options basis-full mb-6 sm:mb-20 sm:basis-6/12 px-6">
              <p className="text-[1.5rem] mb-4 text-sandals-gray">
                Flights departing from:
              </p>
              <ItinerarySearch brand="sandals" gateways={gateways} setState={setGateway}/>
            </div>
            <div className="flight-type px-6 basis-full sm:basis-6/12 mb-14 sm:mb-0">
              <p className="text-[1.5rem] mb-4 text-sandals-gray">
                Search flights by:
              </p>
              <div className="options relative text-2xl flex flex-col">
                <div
                  className={`option mb-3 ${topArrow} ${bottomArrow} before:top-[1.4rem] after:top-[2.6rem] before:right-4 after:right-4`}
                >
                  <select
                    className="flight-type-input border-solid border-[1px] border-platinum w-full h-20 px-6 appearance-none focus:outline-none rounded-md focus:ring-blue focus:ring-2"
                    onChange={(e) => setFlightType(e.target.value)}
                    value={flightType}
                  >
                    <option className="type-option" value="economy">
                      Economy/Coach
                    </option>
                    <option className="type-option" value="business">
                      First Class/Business
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="continue-or-view flex w-full px-6 justify-center mt-16">
        <button className="flex bg-blue text-white uppercase items-center justify-center basis-10/12 sm:basis-5/12 md:basis-3/12 text-[2.8rem] py-5 transition-all delay-75 ease-in-out rounded-md">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
