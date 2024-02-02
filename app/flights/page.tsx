import EditVacation from "@/components/edit-vacation";
import ItinerariesContainer from "@/components/flights/itineraries-container";
import {
  airlineNamesMockData,
  gatewaysMockData,
  guestData,
  itinerariesMockData,
  ratesData,
  selectedFlight,
  selectedRoom,
  vacationData,
} from "@/components/flights/mock-data";
import RoundtripFlightsContainer from "@/components/flights/rountrip-flights-container";
import StepsTitles from "@/components/steps-titles";
import { fetchGateways } from "@/utils/fetch";

export default async function Flights() {
  /** NOTE: this variables are temporal ones all of them maybe will be removed in the future. **/
  /** controller - api/gateway **/
  const departingCity = "MIAMI".toLowerCase(); // city
  const departingGateway = "MIA"; // gateway
  const departingCountry = "USA"; // country

  /** controller - api/resort/gateway **/
  const arrivalCity = "Montego Bay"; // city
  const arrivalCountry = "JAMAICA".toLowerCase(); // country
  const arrivalGateway = "MBJ"; // gateway
  const gateways = gatewaysMockData;
  const airlines = airlineNamesMockData;
  const itineraries = itinerariesMockData;

  /** adults always 2 in case of Sandals. **/
  const adultsNumber = 2; // in case of Beaches this wil change.

  /**
   * remove this variable once the vacation summary data is provide.
   * or adapt it to a new validation when the vacation summary include flights or not. 
  */
  const summaryWithFlights = true; 
  const vacation = vacationData;
  const room = selectedRoom;
  const flight = selectedFlight;
  const guest = guestData;
  const rates = ratesData;

  return (
    <>
      <EditVacation vacationData={vacation} roomData={room} flightsData={flight} guestData={guest} airlines={airlines} rates={rates}/>
      <main className="flex min-h-screen flex-col py-24 px-0 bg-anti-flash-white text-onyx">
        {/* <StepsTitles title="Roundtrip Airfare">
            <p>
              <span className="capitalize">{departingCity}</span>,{" "}
              {departingCountry} ({departingGateway}) to {arrivalCity},{" "}
              <span className="capitalize">{arrivalCountry}</span> (
              {arrivalGateway}
              ). Prices in US dollars. {adultsNumber} adults
            </p>
            <p>
              * We guarantee no booking fees, the most convenient flight
              itineraries available, up-to-date flight information and 24-hour
              assistance.
            </p>
          </StepsTitles> */}
        <div className="root w-full mx-auto max-w-[124rem] px-6">
          {summaryWithFlights && 
            <>
              <div className="flights-header mt-[3.2rem] flex flex-col items-center justify-center">
                <p className="uppercase text-[4.5rem] sm:text-[5.3rem] font-light leading-[1.1] text-center">
                  Select Flights
                </p>
                <p className="uppercase text-2xl sm:text-[1.8rem] font-light text-center">
                  <span>{departingCity}</span>, {departingCountry} ({departingGateway}
                  ) - {arrivalCity}
                </p>
                <p className="text-[1.4rem] py-6 text-center">
                  <span className="text-blue">*</span> We guarantee no booking fees, the most convenient flight
                  itineraries available, up-to-date flight information and 24-hour
                  assistance.
                </p>
              </div>
              <ItinerariesContainer
                itineraries={itineraries}
                airlines={airlines}
                gateways={gateways}
              />
            </>
          }
          {!summaryWithFlights && 
            <RoundtripFlightsContainer gateways={gateways}/>
          }
        </div>
      </main>
    </>
  );
}
