import {
  Airlines,
  Itinerary,
} from "@/components/flights/itineraries-container";

function stopsOptions(stops: number[]) {
  const availableStopsOptions = {
    nonstop: false,
    oneStop: false,
    moreStops: false,
  };

  stops.map((stop) => {
    if (stop === 0) {
      availableStopsOptions.nonstop = true;
    } else if (stop === 1) {
      availableStopsOptions.oneStop = true;
    } else if (stop >= 2) {
      availableStopsOptions.moreStops = true;
    }
  });

  return availableStopsOptions;
}

export default function itineraryFilterOptions(
  itineraries: Itinerary[], allItineraries: Itinerary[]
) {
  const arrivalAirlines = allItineraries.map(
    (itinerary) => itinerary.summary.leaving.operatingCarrier
  );
  const departureAirlines = allItineraries.map(
    (itinerary) => itinerary.summary.returning.operatingCarrier
  );
  const arrivalStops = itineraries.map(
    (itinerary) => itinerary.summary.leaving.stops
  );
  const departureStops = itineraries.map(
    (itinerary) => itinerary.summary.returning.stops
  );
  const basicEconomy = itineraries.some(
    (itinerary) =>
      itinerary.summary.leaving.basicEconomy ||
      itinerary.summary.returning.basicEconomy
  );
  const overnight = itineraries.some(
    (itinerary) =>
      itinerary.summary.leaving.overnight ||
      itinerary.summary.returning.overnight
  );

  const operatingCarriers = Array.from(
    new Set(arrivalAirlines.concat(departureAirlines))
  );
  const stops = Array.from(new Set(arrivalStops.concat(departureStops)));

  return {
    airlines: operatingCarriers,
    basicEconomy: overnight,
    overnight: basicEconomy,
    stops: stopsOptions(stops),
  };
}
