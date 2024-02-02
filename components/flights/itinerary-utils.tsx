import { Dispatch, SetStateAction } from "react";

export function setActiveItinerary(
  activeItineraries: boolean[],
  setActiveItineraries: Dispatch<SetStateAction<boolean[]>>,
  itineraryIndex: number
) {
  const newActiveItineraries = activeItineraries.map(() => false);
  const itineraryLength = newActiveItineraries.length;

  if (itineraryLength > 0 && itineraryIndex < itineraryLength) {
    newActiveItineraries[itineraryIndex] = !activeItineraries[itineraryIndex];
  }

  setActiveItineraries(newActiveItineraries);
}

export function formatSummaryMoney(price: number) {
  const usdFormat = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formatPrice = usdFormat.format(price).split(".");

  return { dollar: formatPrice[0], cents: formatPrice[1] };
}

export function changeTimeFormat(time: string) {
  const hour = parseInt(time.slice(0, 2));
  const min = time.slice(3, 5);
  const amOrPm = hour >= 12 ? "pm" : "am";
  const hours = hour % 12 || 12;
  const finalHour = hours < 10 ? `0${hours}` : `${hours}`;

  return `${finalHour}:${min} ${amOrPm}`;
}

export function getAirlineIcon(operatingCarrier: string) {
  return `https://cdn.sandals.com/obe/v12/images//logos/airlines/${operatingCarrier}.svg`;
}

export function getStops(stops: number, forFilter: boolean) {
  if (stops === 1) {
    return "1 Stop";
  } else if (stops >= 2) {
    return forFilter ? "2+ Stop" : "2 or More Stops";
  }

  return "Nonstop";
}
