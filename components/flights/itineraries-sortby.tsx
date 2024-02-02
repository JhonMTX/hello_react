import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Itinerary } from "./itineraries-container";

function sortByPrice(itineraries: Itinerary[], ascending: boolean) {
  const itinerariesCopy = [...itineraries];

  itinerariesCopy.sort((previous, next) => {
    if(ascending) {
      return previous.summary.grandTotalAmount - next.summary.grandTotalAmount;  
    }
    return next.summary.grandTotalAmount - previous.summary.grandTotalAmount;
  });

  return itinerariesCopy;
}

function sortByLeaving(itineraries: Itinerary[], ascending: boolean) {
  const itinerariesCopy = [...itineraries];

  itinerariesCopy.sort((previous, next) => {
    const previousHour = parseFloat(previous.summary.leaving.departureTime.replace(':', '.'));
    const nextHour = parseFloat(next.summary.leaving.departureTime.replace(':', '.'));
    if(ascending) {
      return previousHour - nextHour;  
    }
    return nextHour - previousHour;
  });

  return itinerariesCopy;
}

function sortByReturning(itineraries: Itinerary[], ascending: boolean) {
  const itinerariesCopy = [...itineraries];

  itinerariesCopy.sort((previous, next) => {
    const previousHour = parseFloat(previous.summary.returning.departureTime.replace(':', '.'));
    const nextHour = parseFloat(next.summary.returning.departureTime.replace(':', '.'));
    if(ascending) {
      return previousHour - nextHour;  
    }
    return nextHour - previousHour;
  });

  return itinerariesCopy;
}

export default function ItinerariesSortBy({
  itineraries,
  setItineraries,
}: {
  itineraries: Itinerary[];
  setItineraries: Dispatch<SetStateAction<Itinerary[]>>;
}) {
  const options = [
    {
      label: "Price (lowest)",
      value: "PL",
    },
    {
      label: "Price (highest)",
      value: "PH",
    },
    {
      label: "Leaving (earliest)",
      value: "LE",
    },
    {
      label: "Leaving (lastest)",
      value: "LL",
    },
    {
      label: "Returning (earliest)",
      value: "RE",
    },
    {
      label: "Returning (latest)",
      value: "RL",
    },
  ];
  const [sortBy, setSortBy] = useState<string>("PL");

  useEffect(() => {
    switch(sortBy) {
      case "PH":
        setItineraries(sortByPrice(itineraries, false));
      break;
      case "LE":
        setItineraries(sortByLeaving(itineraries, true));
      break;
      case "LL":
        setItineraries(sortByLeaving(itineraries, false));
      break;
      case "RE":
        setItineraries(sortByReturning(itineraries, true));
      break;
      case "RL":
        setItineraries(sortByReturning(itineraries, false));
      break;
      default:
        setItineraries(sortByPrice(itineraries, true));
      break;
    };
  }, [sortBy, itineraries, setItineraries])

  const topArrow =
    "before:absolute before:z-10 before:block before:border-solid before:border-x-[0.8rem] before:border-b-[0.8rem] before:border-b-blue before:border-x-transparent";
  const bottomArrow =
    "after:absolute after:z-10 after:block after:border-solid after:border-x-[0.8rem] after:border-t-[0.8rem] after:border-t-blue after:border-x-transparent";

  return (
    <div className="sort-by flex basis-full items-center mb-6 sm:mb-0 sm:basis-6/12 lg:basis-4/12">
      <h3 className="text-[1.6rem] font-[500] mb-4 basis-3/12 text-right pr-4">Sort By:</h3>
      <div className="basis-9/12 options relative text-2xl flex flex-col">
        <div
          className={`option mb-3 ${topArrow} ${bottomArrow} before:top-[1.4rem] after:top-[2.6rem] before:right-4 after:right-4`}
        >
          <select
            className="w-full h-20 px-6 appearance-none focus:outline-none rounded-md focus:ring-blue focus:ring-2"
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
          >
            {options.map((option) => (
              <option
                key={option.value}
                className="sot-option"
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
