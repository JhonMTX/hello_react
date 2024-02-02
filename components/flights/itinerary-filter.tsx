import { Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import ItinerariesContainer, { Airlines, ItinerariesContext, Itinerary } from "./itineraries-container";
import { Gateway } from "@/utils/fetch";
import { Icon } from "@sanservices/brands-ui";
import { CDN_ICONS_URL } from "@/utils/constants";
import ItinerarySearch from "./itinerary-search";
import ItineraryCheckbox from "./itinerary-filter/itinerary-checkbox";
import ItineraryDropdown from "./itinerary-filter/itinerary-dropdown";

type AvailableOptions = {
  airlines: string[];
  basicEconomy: boolean;
  overnight: boolean;
  stops: {
    moreStops: boolean;
    nonstop: boolean;
    oneStop: boolean;
  };
};

function hadExcludeFor(itinerary: Itinerary, excludeFor: string[]) {
  let count = 0;
  const { leaving, returning } = itinerary.summary;
  excludeFor.forEach((exclude) => {
    if (exclude === "Exclude Basic Economy") {
      if (leaving.basicEconomy || returning.basicEconomy) {
        count++;
      }
    } else if (exclude === "Exclude Overnight Flights") {
      if (leaving.overnight || returning.overnight) {
        count++;
      }
    }
  });

  return count > 0;
}

function hadPreferred(itinerary: Itinerary, preferredAirline: string) {
  return itinerary.summary.leaving.operatingCarrier === preferredAirline;
}

function hadAnyStop(itinerary: Itinerary, stops: string[]) {
  const { leaving, returning } = itinerary.summary;
  let stopFound = true;

  stops.forEach((stop) => {
    switch (stop) {
      case "Nonstop":
        stopFound = leaving.stops === 0 || returning.stops === 0;
        break;

      case "1 Stop":
        stopFound = leaving.stops === 1 || returning.stops === 1;
        break;

      case "2+ Stops":
        stopFound = leaving.stops > 1 || returning.stops > 1;
        break;

      default:
        stopFound = false;
        break;
    }
  });

  return stopFound;
}

function getMatchedItineraries(
  exclude: string[],
  preferredAirline: string,
  stops: string[],
  itineraries: Itinerary[]
) {
  const filteredItineraries: Itinerary[] = [];
  itineraries.forEach((itinerary) => {
    let hadExclude = true;
    let hadPreferredAirline = true;
    let hadStops = true;

    if (exclude.length > 0) {
      hadExclude = !hadExcludeFor(itinerary, exclude);
    }

    if (preferredAirline !== "ALL") {
      hadPreferredAirline = hadPreferred(itinerary, preferredAirline);
    }

    if (stops.length > 0) {
      hadStops = hadAnyStop(itinerary, stops);
    }

    if (hadExclude && hadPreferredAirline && hadStops) {
      filteredItineraries.push(itinerary);
    }
  });

  return filteredItineraries;
}

function resetFilterOptions(
  setStops: Dispatch<SetStateAction<string[]>>,
  setpreferredAirline: Dispatch<SetStateAction<string>>,
  setFlightsBy: Dispatch<SetStateAction<string[]>>
) {
  setStops([]);
  setpreferredAirline("ALL");
  setFlightsBy([]);
}

export default function ItineraryFilter({
  availableOptions,
  setMatchedItineraries,
}: {
  availableOptions: AvailableOptions;
  setMatchedItineraries: Dispatch<SetStateAction<Itinerary[]>>;
}) {
  const {gateways, itineraries} = useContext(ItinerariesContext)
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [flightsBy, setFlightsBy] = useState<string[]>([]);
  const [preferredAirline, setpreferredAirline] = useState<string>("ALL");
  const [stops, setStops] = useState<string[]>([]);
  const [gateway, setGateway] = useState<string>("");


  const openFilterClass = openFilter
    ? "bg-gainsboro rounded-t-lg"
    : "bg-blue text-white rounded-lg";
  const airlinesOptions = availableOptions.airlines;
  const searchFlightsOptions = [
    "Exclude Basic Economy",
    "Exclude Overnight Flights",
  ];
  const stopsOptions = ["Nonstop", "1 Stop", "2+ Stops"];
  const availableSearchFlights = [
    availableOptions.basicEconomy,
    availableOptions.overnight,
  ];
  const availableStops = availableOptions.stops;
  const stopsAvailableOptions = [
    availableStops.nonstop,
    availableStops.oneStop,
    availableStops.moreStops,
  ];

  const showReset =
    stops.length > 0 || preferredAirline !== "ALL" || flightsBy.length > 0;

  useEffect(() => {
    const match = getMatchedItineraries(
      flightsBy,
      preferredAirline,
      stops,
      itineraries
    );
    setMatchedItineraries(match);
  }, [flightsBy, preferredAirline, stops, itineraries, setMatchedItineraries]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const itineraryDetailsStyles = isMobile
    ? "mobile-filter fixed px-6 h-full w-full z-10 top-0 left-0 overflow-auto bg-anti-flash-white"
    : "filter-container";

  return (
    <div className="itinerary-filter w-full sm:px-6 py-6 flex flex-col mt-5">
      <div className="filter-buttons-section flex w-full justify-between">
        <button
          className={`open-filter flex items-center justify-center basis-full sm:basis-5/12 md:basis-4/12 lg:basis-3/12 text-[2rem] py-5 transition-all delay-75 ease-in-out ${openFilterClass}`}
          onClick={() => setOpenFilter(!openFilter)}
        >
          <Icon
            src={CDN_ICONS_URL + `${openFilter ? "close.svg" : "menu.svg"}`}
            className={`w-7 h-7 mr-4 ${openFilter ? "bg-blue" : "bg-white"}`}
          />
          Flight Preferences
        </button>
        {showReset && openFilter && (
          <button
            className="reset-filter basis-3/12 text-[1.6rem] uppercase flex justify-end items-center"
            onClick={() =>
              resetFilterOptions(setStops, setpreferredAirline, setFlightsBy)
            }
          >
            Reset
            <Icon
              src={CDN_ICONS_URL + "reset.svg"}
              className="w-8 h-8 ml-2 bg-blue"
            />
          </button>
        )}
      </div>
      {openFilter && (
        <div className={itineraryDetailsStyles}>
          {isMobile && (
            <div className="buttons basis-full flex justify-end mt-6 mb-8">
              {showReset && openFilter && (
                <button
                  className="reset-filter basis-6/12 text-[1.6rem] uppercase flex justify-start items-center"
                  onClick={() =>
                    resetFilterOptions(
                      setStops,
                      setpreferredAirline,
                      setFlightsBy
                    )
                  }
                >
                  Reset
                  <Icon
                    src={CDN_ICONS_URL + "reset.svg"}
                    className="w-8 h-8 ml-2 bg-blue"
                  />
                </button>
              )}
              <button
                className="close basis-6/12 flex justify-end"
                onClick={() => setOpenFilter(false)}
              >
                <Icon
                  src={CDN_ICONS_URL + "close.svg"}
                  className="bg-header-black w-8 h-8 mr-2 font-bold"
                />
              </button>
            </div>
          )}
          <div className="filter-options bg-gainsboro flex flex-wrap justify-between py-12 transition-all delay-75 ease-in-out">
            <div className="departing-options basis-full mb-6 sm:mb-20 sm:basis-6/12 md:basis-3/12 px-6"> 
              <h3 className="text-[1.8rem] font-[500] mb-4">Flights departing from:</h3>
              <ItinerarySearch brand="sandals" gateways={gateways} setState={setGateway}/>
            </div>
            <ItineraryCheckbox
              name="search"
              label="Search flights by:"
              options={searchFlightsOptions}
              checkboxList={flightsBy}
              availableOptions={availableSearchFlights}
              setState={setFlightsBy}
            />
            <ItineraryDropdown
              name="preferred"
              label="Preferred airline:"
              options={airlinesOptions}
              selected={preferredAirline}
              setState={setpreferredAirline}
            />
            <ItineraryCheckbox
              name="stops"
              label="Show in results:"
              options={stopsOptions}
              checkboxList={stops}
              availableOptions={stopsAvailableOptions}
              setState={setStops}
            />
          </div>
          {showReset && isMobile && (
            <div className="apply-changes basis-full mt-8 mb-[3.8rem] flex justify-center">
              <button
                className="apply-btn w-full py-4 px-10 uppercase rounded-lg text-[1.8rem] sm:text-[2.4rem] bg-blue text-white"
                onClick={() => setOpenFilter(false)}
              >
                Apply Changes
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
