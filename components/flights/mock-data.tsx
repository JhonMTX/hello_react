import { Gateway, Rates, Resort, Room, VacationDetails } from "@/utils/fetch";
import { Airlines, Itinerary } from "./itineraries-container";
import { Guests } from "../guests/guests-container";

/**
 * Delete this file once the air request are implemented in the project.
 */
export const itinerariesMockData: Itinerary[] = [
  {
    airLine: "American Airlines",
    summary: {
      leaving: {
        operatingCarrier: "AA",
        overnight: false,
        departureTime: "12:38",
        departureGateway: "MIA",
        arrivalTime: "13:18",
        arrivalGateway: "MBJ",
        classOfService: "B",
        cabinTypeDescription: "Basic Economy",
        tripFlightDuration: null,
        marketingCarrier: null,
        stops: 0,
        basicEconomy: true,
      },
      returning: {
        operatingCarrier: "AA",
        overnight: false,
        departureTime: "10:26",
        departureGateway: "MBJ",
        arrivalTime: "13:16",
        arrivalGateway: "MIA",
        classOfService: "B",
        cabinTypeDescription: "Basic Economy",
        tripFlightDuration: null,
        marketingCarrier: null,
        stops: 0,
        basicEconomy: true,
      },
      grandTotalAmount: 518.24,
      totalTripFlightTime: 0,
    },
    detail: {
      leaving: [
        {
          operatingCarrier: "AA",
          overnight: false,
          departureTime: "12:38",
          departureGateway: "MIA",
          arrivalTime: "13:18",
          arrivalGateway: "MBJ",
          classOfService: "B",
          cabinTypeDescription: "Basic Economy",
          flightNumber: "2763",
          departureDate: "Sep 11, 2023",
          departureGatewayName: "Miami Intl",
          arrivalGatewayName: "Sangster Arpt",
          departureCity: "MIAMI",
          arrivalCity: "MONTEGO BAY",
          marketingCarrier: "AA",
          basicEconomy: true,
        },
      ],
      returning: [
        {
          operatingCarrier: "AA",
          overnight: false,
          departureTime: "10:26",
          departureGateway: "MBJ",
          arrivalTime: "13:16",
          arrivalGateway: "MIA",
          classOfService: "B",
          cabinTypeDescription: "Basic Economy",
          flightNumber: "2300",
          departureDate: "Sep 11, 2023",
          departureGatewayName: "Sangster Arpt",
          arrivalGatewayName: "Miami Intl",
          departureCity: "MONTEGO BAY",
          arrivalCity: "MIAMI",
          marketingCarrier: "AA",
          basicEconomy: true,
        },
      ],
    },
  },
  {
    airLine: "American Airlines",
    summary: {
      leaving: {
        operatingCarrier: "AA",
        overnight: false,
        departureTime: "12:38",
        departureGateway: "MIA",
        arrivalTime: "13:18",
        arrivalGateway: "MBJ",
        classOfService: "B",
        cabinTypeDescription: "Basic Economy",
        tripFlightDuration: null,
        marketingCarrier: null,
        stops: 0,
        basicEconomy: true,
      },
      returning: {
        operatingCarrier: "AA",
        overnight: false,
        departureTime: "12:00",
        departureGateway: "MBJ",
        arrivalTime: "14:50",
        arrivalGateway: "MIA",
        classOfService: "B",
        cabinTypeDescription: "Basic Economy",
        tripFlightDuration: null,
        marketingCarrier: null,
        stops: 0,
        basicEconomy: true,
      },
      grandTotalAmount: 518.24,
      totalTripFlightTime: 0,
    },
    detail: {
      leaving: [
        {
          operatingCarrier: "AA",
          overnight: false,
          departureTime: "12:38",
          departureGateway: "MIA",
          arrivalTime: "13:18",
          arrivalGateway: "MBJ",
          classOfService: "B",
          cabinTypeDescription: "Basic Economy",
          flightNumber: "2763",
          departureDate: "Sep 11, 2023",
          departureGatewayName: "Miami Intl",
          arrivalGatewayName: "Sangster Arpt",
          departureCity: "MIAMI",
          arrivalCity: "MONTEGO BAY",
          marketingCarrier: "AA",
          basicEconomy: true,
        },
      ],
      returning: [
        {
          operatingCarrier: "AA",
          overnight: false,
          departureTime: "12:00",
          departureGateway: "MBJ",
          arrivalTime: "14:50",
          arrivalGateway: "MIA",
          classOfService: "B",
          cabinTypeDescription: "Basic Economy",
          flightNumber: "2963",
          departureDate: "Sep 11, 2023",
          departureGatewayName: "Sangster Arpt",
          arrivalGatewayName: "Miami Intl",
          departureCity: "MONTEGO BAY",
          arrivalCity: "MIAMI",
          marketingCarrier: "AA",
          basicEconomy: true,
        },
      ],
    },
  },
  {
    airLine: "American Airlines",
    summary: {
      leaving: {
        operatingCarrier: "AA",
        overnight: false,
        departureTime: "12:38",
        departureGateway: "MIA",
        arrivalTime: "13:18",
        arrivalGateway: "MBJ",
        classOfService: "B",
        cabinTypeDescription: "Basic Economy",
        tripFlightDuration: null,
        marketingCarrier: null,
        stops: 0,
        basicEconomy: true,
      },
      returning: {
        operatingCarrier: "AA",
        overnight: false,
        departureTime: "14:25",
        departureGateway: "MBJ",
        arrivalTime: "17:12",
        arrivalGateway: "MIA",
        classOfService: "B",
        cabinTypeDescription: "Basic Economy",
        tripFlightDuration: null,
        marketingCarrier: null,
        stops: 0,
        basicEconomy: true,
      },
      grandTotalAmount: 518.24,
      totalTripFlightTime: 0,
    },
    detail: {
      leaving: [
        {
          operatingCarrier: "AA",
          overnight: false,
          departureTime: "12:38",
          departureGateway: "MIA",
          arrivalTime: "13:18",
          arrivalGateway: "MBJ",
          classOfService: "B",
          cabinTypeDescription: "Basic Economy",
          flightNumber: "2763",
          departureDate: "Sep 11, 2023",
          departureGatewayName: "Miami Intl",
          arrivalGatewayName: "Sangster Arpt",
          departureCity: "MIAMI",
          arrivalCity: "MONTEGO BAY",
          marketingCarrier: "AA",
          basicEconomy: true,
        },
      ],
      returning: [
        {
          operatingCarrier: "AA",
          overnight: false,
          departureTime: "14:25",
          departureGateway: "MBJ",
          arrivalTime: "17:12",
          arrivalGateway: "MIA",
          classOfService: "B",
          cabinTypeDescription: "Basic Economy",
          flightNumber: "2763",
          departureDate: "Sep 11, 2023",
          departureGatewayName: "Sangster Arpt",
          arrivalGatewayName: "Miami Intl",
          departureCity: "MONTEGO BAY",
          arrivalCity: "MIAMI",
          marketingCarrier: "AA",
          basicEconomy: true,
        },
      ],
    },
  },
  {
    airLine: "United Airlines",
    summary: {
      leaving: {
        operatingCarrier: "UA",
        overnight: true,
        departureTime: "06:00",
        departureGateway: "BOS",
        arrivalTime: "11:34",
        arrivalGateway: "MBJ",
        classOfService: "G",
        cabinTypeDescription: "Standard Economy",
        tripFlightDuration: null,
        marketingCarrier: null,
        stops: 1,
        basicEconomy: false,
      },
      returning: {
        operatingCarrier: "UA",
        overnight: false,
        departureTime: "12:40",
        departureGateway: "MBJ",
        arrivalTime: "23:59",
        arrivalGateway: "BOS",
        classOfService: "G",
        cabinTypeDescription: "Standard Economy",
        tripFlightDuration: null,
        marketingCarrier: null,
        stops: 2,
        basicEconomy: false,
      },
      grandTotalAmount: 999.52,
      totalTripFlightTime: 0,
    },
    detail: {
      leaving: [
        {
          operatingCarrier: "UA",
          overnight: false,
          departureTime: "06:00",
          departureGateway: "BOS",
          arrivalTime: "07:26",
          arrivalGateway: "EWR",
          classOfService: "G",
          cabinTypeDescription: "Standard Economy",
          flightNumber: "601",
          departureDate: "Sep 11, 2023",
          departureGatewayName: "Logan Intl Arpt",
          arrivalGatewayName: "Newark Liberty Intl Arpt",
          departureCity: "BOSTON LOGAN",
          arrivalCity: "NEWARK",
          marketingCarrier: "UA",
          basicEconomy: false,
        },
        {
          operatingCarrier: "UA",
          overnight: false,
          departureTime: "08:29",
          departureGateway: "EWR",
          arrivalTime: "11:34",
          arrivalGateway: "MBJ",
          classOfService: "G",
          cabinTypeDescription: "Standard Economy",
          flightNumber: "1462",
          departureDate: "Sep 11, 2023",
          departureGatewayName: "Newark Liberty Intl Arpt",
          arrivalGatewayName: "Sangster Arpt",
          departureCity: "NEWARK",
          arrivalCity: "MONTEGO BAY",
          marketingCarrier: "UA",
          basicEconomy: false,
        },
      ],
      returning: [
        {
          operatingCarrier: "UA",
          overnight: false,
          departureTime: "12:40",
          departureGateway: "MBJ",
          arrivalTime: "17:38",
          arrivalGateway: "EWR",
          classOfService: "G",
          cabinTypeDescription: "Standard Economy",
          flightNumber: "1628",
          departureDate: "Sep 11, 2023",
          departureGatewayName: "Sangster Arpt",
          arrivalGatewayName: "Newark Liberty Intl Arpt",
          departureCity: "MONTEGO BAY",
          arrivalCity: "NEWARK",
          marketingCarrier: "UA",
          basicEconomy: false,
        },
        {
          operatingCarrier: "UA",
          overnight: false,
          departureTime: "19:59",
          departureGateway: "EWR",
          arrivalTime: "21:19",
          arrivalGateway: "IAD",
          classOfService: "G",
          cabinTypeDescription: "Standard Economy",
          flightNumber: "2494",
          departureDate: "Sep 11, 2023",
          departureGatewayName: "Newark Liberty Intl Arpt",
          arrivalGatewayName: "Washington Dulles Intl",
          departureCity: "NEWARK",
          arrivalCity: "DULLES INTERNATIONAL AIRPORT",
          marketingCarrier: "UA",
          basicEconomy: false,
        },
        {
          operatingCarrier: "UA",
          overnight: false,
          departureTime: "22:24",
          departureGateway: "IAD",
          arrivalTime: "23:59",
          arrivalGateway: "BOS",
          classOfService: "G",
          cabinTypeDescription: "Standard Economy",
          flightNumber: "352",
          departureDate: "Sep 11, 2023",
          departureGatewayName: "Washington Dulles Intl",
          arrivalGatewayName: "Logan Intl Arpt",
          departureCity: "DULLES INTERNATIONAL AIRPORT",
          arrivalCity: "BOSTON LOGAN",
          marketingCarrier: "UA",
          basicEconomy: false,
        },
      ],
    },
  },
];

export const airlineNamesMockData: Airlines[] = [
  {
    id: 1,
    code: "AA",
    name: "American Airlines",
  },
  {
    id: 2,
    code: "AC",
    name: "Air Canada Airlines",
  },
  {
    id: 3,
    code: "JM",
    name: "Air Jamaica Airlines",
  },
  {
    id: 4,
    code: "FL",
    name: "Air Tran Airlines",
  },
  {
    id: 5,
    code: "UP",
    name: "Bahamas Air Airlines",
  },
  {
    id: 6,
    code: "CO",
    name: "Continental Airlines",
  },
  {
    id: 7,
    code: "DL",
    name: "Delta Airlines",
  },
  {
    id: 8,
    code: "B6",
    name: "JetBlue Airlines",
  },
  {
    id: 9,
    code: "NK",
    name: "Spirit Airlines",
  },
  {
    id: 10,
    code: "UA",
    name: "United Airlines",
  },
  {
    id: 11,
    code: "US",
    name: "US Airlines",
  },
  {
    id: 12,
    code: "WS",
    name: "WestJet Airlines",
  },
  {
    id: 13,
    code: "BW",
    name: "Caribbean Airlines",
  },
  {
    id: 14,
    code: "AV",
    name: "Avianca",
  },
  {
    id: 15,
    code: "7I",
    name: "Insel Air",
  },
  {
    id: 16,
    code: "LI",
    name: "Liat Airlines",
  },
  {
    id: 17,
    code: "BA",
    name: "British Airways",
  },
  {
    id: 18,
    code: "WN",
    name: "SouthWest Airlines",
  },
  {
    id: 19,
    code: "VS",
    name: "Virgin Atlantic",
  },
  {
    id: 20,
    code: "F9",
    name: "Frontier Airlines",
  },
  {
    id: 21,
    code: "CM",
    name: "Copa Airlines",
  },
  {
    id: 22,
    code: "3M",
    name: "Silver Airways",
  },
  {
    id: 23,
    code: "WG",
    name: "Sunwing Airlines",
  },
  {
    id: 24,
    code: "JY",
    name: "InterCaribbean Airways",
  },
  {
    id: 25,
    code: "TS",
    name: "Air Transat",
  },
  {
    id: 26,
    code: "SY",
    name: "Sun Country Airlines",
  },
  {
    id: 27,
    code: "VW",
    name: "Aeromar",
  },
  {
    id: 28,
    code: "4O",
    name: "Interjet Airlines",
  },
  {
    id: 29,
    code: "LA",
    name: "LATAM Chile Airlines",
  },
  {
    id: 30,
    code: "KX",
    name: "Cayman Airways",
  },
  {
    id: 31,
    code: "9K",
    name: "Cape Air",
  },
  {
    id: 32,
    code: "EK",
    name: "Emirates Airline",
  },
  {
    id: 33,
    code: "CZ",
    name: "China Southern Airlines",
  },
  {
    id: 34,
    code: "QR",
    name: "Qatar Airways",
  },
  {
    id: 35,
    code: "SQ",
    name: "Singapore Airlines",
  },
  {
    id: 36,
    code: "AF",
    name: "Air France",
  },
  {
    id: 37,
    code: "9X",
    name: "Southern Airways Express",
  },
  {
    id: 38,
    code: "AD",
    name: "Azul Airlines",
  },
  {
    id: 39,
    code: "OS",
    name: "Austrian Airlines",
  },
];

export const gatewaysMockData: Gateway[] = [
  {
    gateway: "ABE",
    city: "ALLENTOWN",
    state: "PA",
    country: "USA",
    airportName: "Lehigh Valley Intl Arpt",
    stateName: "PENNSYLVANIA",
  },
  {
    gateway: "ABI",
    city: "ABILENE",
    state: "TX",
    country: "USA",
    airportName: "Abilene Municipal Arpt",
    stateName: "TEXAS",
  },
  {
    gateway: "ABQ",
    city: "ALBUQUERQUE",
    state: "NM",
    country: "USA",
    airportName: "Albuquerque Intl Sunport",
    stateName: "NEW MEXICO",
  },
  {
    gateway: "ABR",
    city: "ABERDEEN",
    state: "SD",
    country: "USA",
    airportName: "ABERDEEN REGIONAL AIRPORT",
    stateName: "SOUTH DAKOTA",
  },
  {
    gateway: "ACA",
    city: "ACAPULCO",
    state: "GUERRERO",
    country: "MEXICO",
    airportName: "Alvarez Intl Arpt",
    stateName: "GUERRERO",
  },
  {
    gateway: "ACK",
    city: "NANTUCKET",
    state: "MA",
    country: "USA",
    airportName: "Nantucket Memorial",
    stateName: "MASSACHUSETTS",
  },
  {
    gateway: "ACT",
    city: "WACO",
    state: "TX",
    country: "USA",
    airportName: "Waco Regional Arpt",
    stateName: "TEXAS",
  },
  {
    gateway: "ACY",
    city: "ATLANTIC CITY",
    state: "NJ",
    country: "USA",
    airportName: "Atlantic City Intl Arpt",
    stateName: "NEW JERSEY",
  },
  {
    gateway: "ADL",
    city: "ADELAIDE",
    state: "SOUTH AUSTRALIA",
    country: "AUSTRALIA",
    airportName: "Adelaide Arpt",
    stateName: "SOUTH AUSTRALIA",
  },
  {
    gateway: "ADZ",
    city: "SAN ANDRES",
    state: "COLOMBIA",
    country: "COLOMBIA",
    airportName: "AEROPUERTO INTERNACIONAL GUSTAVO ROJAS PINILLA",
    stateName: "COLOMBIA",
  },
  {
    gateway: "AEX",
    city: "ALEXANDRIA",
    state: "LA",
    country: "USA",
    airportName: "Alexandria Intl Arpt",
    stateName: "LOUISIANA",
  },
  {
    gateway: "AGS",
    city: "AUGUSTA",
    state: "GA",
    country: "USA",
    airportName: "Augusta Regional Bush Field Arpt",
    stateName: "GEORGIA",
  },
  {
    gateway: "AHN",
    city: "ATHENS",
    state: "GA",
    country: "USA",
    airportName: "Athens Municipal",
    stateName: "GEORGIA",
  },
  {
    gateway: "ALB",
    city: "ALBANY",
    state: "NY",
    country: "USA",
    airportName: "Albany Cty Arpt",
    stateName: "NEW YORK",
  },
  {
    gateway: "ALO",
    city: "WATERLOO",
    state: "IA",
    country: "USA",
    airportName: "Livingston Betsworth Fld",
    stateName: "IOWA",
  },
  {
    gateway: "ALV",
    city: "ANDORRA LA VELLA",
    state: "ANDORRA",
    country: "ANDORRA",
    airportName: "Andorra La Vella Hlpt",
    stateName: "ANDORRA",
  },
  {
    gateway: "AMA",
    city: "AMARILLO",
    state: "TX",
    country: "USA",
    airportName: "Amarillo Rick Husband Intl Arpt",
    stateName: "TEXAS",
  },
  {
    gateway: "AMS",
    city: "AMSTERDAM",
    state: "AMSTERDAM",
    country: "NETHERLANDS",
    airportName: "Schiphol Arpt",
    stateName: "AMSTERDAM",
  },
  {
    gateway: "ANC",
    city: "ANCHORAGE",
    state: "AK",
    country: "USA",
    airportName: "Anchorage Ted Stevens Intl Arpt",
    stateName: "ALASKA",
  },
  {
    gateway: "ANR",
    city: "ANTWERP",
    state: "ANTWERP",
    country: "BELGIUM",
    airportName: "Antwerp Brussels North",
    stateName: "ANTWERP",
  },
  {
    gateway: "ANU",
    city: "ST. JOHN'S",
    state: "ANTIGUA",
    country: "ANTIGUA",
    airportName: "V C Bird Intl Arpt",
    stateName: "ANTIGUA",
  },
  {
    gateway: "AOO",
    city: "ALTOONA",
    state: "PA",
    country: "USA",
    airportName: "Blair Cty Arpt",
    stateName: "PENNSYLVANIA",
  },
  {
    gateway: "APF",
    city: "NAPLES",
    state: "FL",
    country: "USA",
    airportName: "Naples Municipal",
    stateName: "FLORIDA",
  },
  {
    gateway: "ARN",
    city: "ARLANDA",
    state: "STOCKHOLM",
    country: "SWEDEN",
    airportName: "Arlanda Arpt",
    stateName: "STOCKHOLM",
  },
  {
    gateway: "ART",
    city: "WATERTOWN",
    state: "NY",
    country: "USA",
    airportName: "Watertown Intl Arpt",
    stateName: "NEW YORK",
  },
  {
    gateway: "ASP",
    city: "ALICE SPRINGS",
    state: "NORTHERN TERRITORY",
    country: "AUSTRALIA",
    airportName: "Alice Springs Arpt",
    stateName: "NORTHERN TERRITORY",
  },
  {
    gateway: "ASU",
    city: "ASUNCION",
    state: "ASUNCION",
    country: "PARAGUAY",
    airportName: "Salvio Pettirosse Intl",
    stateName: "ASUNCION",
  },
  {
    gateway: "ATH",
    city: "ATHENS",
    state: "ATHENS",
    country: "GREECE",
    airportName: "Eleftherios Venizelos Intl Arpt",
    stateName: "ATHENS",
  },
  {
    gateway: "ATL",
    city: "ATLANTA",
    state: "GA",
    country: "USA",
    airportName: "Hartsfield Jackson Intl Arpt",
    stateName: "GEORGIA",
  },
  {
    gateway: "ATW",
    city: "APPLETON",
    state: "WI",
    country: "USA",
    airportName: "Outagamie County Regional Arpt",
    stateName: "WISCONSIN",
  },
  {
    gateway: "ATY",
    city: "WATERTOWN",
    state: "SD",
    country: "USA",
    airportName: "Watertown Regional Arpt",
    stateName: "SOUTH DAKOTA",
  },
  {
    gateway: "AUA",
    city: "ARUBA",
    state: "ARUBA",
    country: "ARUBA",
    airportName: "Reina Beatrix Arpt",
    stateName: "ARUBA",
  },
  {
    gateway: "AUS",
    city: "AUSTIN",
    state: "TX",
    country: "USA",
    airportName: "Bergstrom Intl Arpt",
    stateName: "TEXAS",
  },
  {
    gateway: "AVL",
    city: "ASHEVILLE",
    state: "NC",
    country: "USA",
    airportName: "Asheville Regional Arpt",
    stateName: "NORTH CAROLINA",
  },
  {
    gateway: "AVP",
    city: "WILKES-BARRE/SCRANTON",
    state: "PA",
    country: "USA",
    airportName: "Wilkes Barre Scranton Intl Arpt",
    stateName: "PENNSYLVANIA",
  },
  {
    gateway: "AZO",
    city: "KALAMAZOO",
    state: "MI",
    country: "USA",
    airportName: "Kalamazoo Battle Creak Intl Arpt",
    stateName: "MICHIGAN",
  },
  {
    gateway: "AZS",
    city: "SAMANA",
    state: "DOMINICAN REPUBLIC",
    country: "DOMINICAN REPUBLIC",
    airportName: "EL CATEY INTERNATIONAL AIRPORT",
    stateName: "DOMINICAN REPUBLIC",
  },
  {
    gateway: "BCN",
    city: "BARCELONA",
    state: "SPAIN",
    country: "SPAIN",
    airportName: "Barcelona Arpt",
    stateName: "SPAIN",
  },
  {
    gateway: "BDL",
    city: "HARTFORD",
    state: "CT",
    country: "USA",
    airportName: "Bradley Intl Arpt",
    stateName: "CONNECTICUT",
  },
  {
    gateway: "BEL",
    city: "BELEM",
    state: "PARA",
    country: "BRAZIL",
    airportName: "Val De Cans Intl Arpt",
    stateName: "PARA",
  },
  {
    gateway: "BFD",
    city: "BRADFORD",
    state: "PA",
    country: "USA",
    airportName: "Bradford Regional Arpt",
    stateName: "PENNSYLVANIA",
  },
  {
    gateway: "BFL",
    city: "BAKERSFIELD",
    state: "CA",
    country: "USA",
    airportName: "Meadows Field",
    stateName: "CALIFORNIA",
  },
  {
    gateway: "BGI",
    city: "BARBADOS",
    state: "BARBADOS",
    country: "BARBADOS",
    airportName: "Grantley Adams Intl Arpt",
    stateName: "BARBADOS",
  },
  {
    gateway: "BGM",
    city: "BINGHAMPTON",
    state: "NY",
    country: "USA",
    airportName: "Greater Binghampton Arpt",
    stateName: "NEW YORK",
  },
  {
    gateway: "BGO",
    city: "FLESLAND",
    state: "BERGEN",
    country: "NORWAY",
    airportName: "Flesland Airport",
    stateName: "BERGEN",
  },
  {
    gateway: "BGR",
    city: "BANGOR",
    state: "ME",
    country: "USA",
    airportName: "Bangor Intl Arpt",
    stateName: "MAINE",
  },
  {
    gateway: "BHM",
    city: "BIRMINGHAM",
    state: "AL",
    country: "USA",
    airportName: "Shuttlesworth Intl Arpt",
    stateName: "ALABAMA",
  },
  {
    gateway: "BIL",
    city: "BILLINGS",
    state: "MT",
    country: "USA",
    airportName: "Logan Field",
    stateName: "MONTANA",
  },
  {
    gateway: "BIS",
    city: "BISMARK",
    state: "ND",
    country: "USA",
    airportName: "Bismarck Municipal Arpt",
    stateName: "NORTH DAKOTA",
  },
  {
    gateway: "BKW",
    city: "BECKLEY",
    state: "WV",
    country: "USA",
    airportName: "Raleigh Cty Memorial",
    stateName: "WEST VIRGINIA",
  },
  {
    gateway: "BLA",
    city: "BARCELONA",
    state: "BARCELONA",
    country: "VENEZUELA",
    airportName: "Gen J A Anzoategui Arpt",
    stateName: "BARCELONA",
  },
  {
    gateway: "BLF",
    city: "BLUEFIELD",
    state: "WV",
    country: "USA",
    airportName: "Mercer County",
    stateName: "WEST VIRGINIA",
  },
  {
    gateway: "BMI",
    city: "BLOOMINGTON",
    state: "IL",
    country: "USA",
    airportName: "Central Illinois Rgnl Arpt",
    stateName: "ILLINOIS",
  },
  {
    gateway: "BNA",
    city: "NASHVILLE",
    state: "TN",
    country: "USA",
    airportName: "Nashville International Arpt",
    stateName: "TENNESSEE",
  },
  {
    gateway: "BNE",
    city: "BRISBANE",
    state: "QUEENSLAND",
    country: "AUSTRALIA",
    airportName: "Brisbane Arpt",
    stateName: "QUEENSLAND",
  },
  {
    gateway: "BOG",
    city: "BOGOTA",
    state: "CUNDINAMARCA",
    country: "COLOMBIA",
    airportName: "El Dorado International",
    stateName: "CUNDINAMARCA",
  },
];

/**
 * Vacation Summary mock Data
 */
export const vacationData: VacationDetails = {
  rstCode: "SWH",
  categoryCode: "1B",
  checkIn: "2023-09-06",
  checkOut: "2023-09-06",
  airIncluded: true,
  departureGateway: "BOS",
  adults: 2,
  children: 0,
  length: 0,
};

export const selectedRoom: Room = {
  categoryId: 514,
  categoryCode: "1B",
  rstId: 11,
  resortName: "Sandals Montego Bay",
  rstCode: "SMB",
  categoryView: ["Beachfront", "Oceanfront", "Oceanview"],
  name: "Beachfront One Bedroom Butler Villa Suite",
  description:
    "These extraordinary Love Nest Butler Suites are located directly on the beach. The suite's spacious bedroom boasts handcrafted mahogany furnishings and world-class amenities including a king-size, four-poster bed, flat screen TV and a bathroom with a shower and whirlpool. A separate living room area offers a wet bar stocked with premium liquors and access to an extended patio. Butler Elite and 24-hour in-room dining are included. This category also includes round-trip Private BMW Luxury Airport Transfers from Sangster International Airport (MBJ) & Norman Manley International Airport (KIN).",
  maxOccupancy: 2,
  maxAdults: 2,
  transferType: "BMW",
  roomClass: "BUTLER",
  webImgCode: "071",
  thumbnailImgURL:
    "//cdn.sandals.com/sandals/v13/images/EN/resorts/smb/accommodations/large/smb-071.jpg",
  fullImageURL:
    "//cdn.sandals.com/sandals/v13/images/EN/resorts/smb/accommodations/large/smb-071.jpg",
  amenities: [
    {
      amenityId: 211,
      amenityName: "In-Room Bar w/ Premium Liquor",
      amenityType: "Features",
      amenityCategory: "Features",
    },
    {
      amenityId: 38,
      amenityName: "Patio",
      amenityType: "Features",
      amenityCategory: "Features",
    },
    {
      amenityId: 210,
      amenityName: "Private Airport Transfers",
      amenityType: "Features",
      amenityCategory: "Features",
    },
    {
      amenityId: 9,
      amenityName: "Air Conditioning",
      amenityType: "Amenities",
      amenityCategory: "Bedroom & Living Spaces",
    },
    {
      amenityId: 53,
      amenityName: "Ceiling Fan",
      amenityType: "Amenities",
      amenityCategory: "Bedroom & Living Spaces",
    },
    {
      amenityId: 42,
      amenityName: "Flat Screen TV w/ Cable",
      amenityType: "Amenities",
      amenityCategory: "Bedroom & Living Spaces",
    },
    {
      amenityId: 54,
      amenityName: "In-Room Electronic Safe",
      amenityType: "Amenities",
      amenityCategory: "Bedroom & Living Spaces",
    },
    {
      amenityId: 21,
      amenityName: "Iron & Ironing Board",
      amenityType: "Amenities",
      amenityCategory: "Bedroom & Living Spaces",
    },
    {
      amenityId: 44,
      amenityName: "King-Size Bed (Four-Poster)",
      amenityType: "Amenities",
      amenityCategory: "Bedroom & Living Spaces",
    },
    {
      amenityId: 45,
      amenityName: "Living Room",
      amenityType: "Amenities",
      amenityCategory: "Bedroom & Living Spaces",
    },
    {
      amenityId: 128,
      amenityName: "Outlets 110 - 240 Volts",
      amenityType: "Amenities",
      amenityCategory: "Bedroom & Living Spaces",
    },
    {
      amenityId: 24,
      amenityName: "Sitting Area",
      amenityType: "Amenities",
      amenityCategory: "Bedroom & Living Spaces",
    },
    {
      amenityId: 19,
      amenityName: "Telephone",
      amenityType: "Amenities",
      amenityCategory: "Bedroom & Living Spaces",
    },
    {
      amenityId: 41,
      amenityName: "Whirlpool Tub",
      amenityType: "Amenities",
      amenityCategory: "Bedroom & Living Spaces",
    },
    {
      amenityId: 97,
      amenityName: "Bathtub/ Shower combination",
      amenityType: "Amenities",
      amenityCategory: "Bathroom & Laundry",
    },
    {
      amenityId: 13,
      amenityName: "Hair Dryer",
      amenityType: "Amenities",
      amenityCategory: "Bathroom & Laundry",
    },
    {
      amenityId: 71,
      amenityName: "Make-up Mirror",
      amenityType: "Amenities",
      amenityCategory: "Bathroom & Laundry",
    },
    {
      amenityId: 23,
      amenityName: "Plush His & Hers Robes",
      amenityType: "Amenities",
      amenityCategory: "Bathroom & Laundry",
    },
    {
      amenityId: 18,
      amenityName: "Red Lane Spa Amenity Kit",
      amenityType: "Amenities",
      amenityCategory: "Bathroom & Laundry",
    },
    {
      amenityId: 14,
      amenityName: "Coffee and Tea Maker",
      amenityType: "Amenities",
      amenityCategory: "Food & Drink",
    },
    {
      amenityId: 123,
      amenityName: "Refrigerator w/ Water, Juice & Sodas",
      amenityType: "Amenities",
      amenityCategory: "Food & Drink",
    },
    {
      amenityId: 153,
      amenityName: "Stocked w/ beer and wine",
      amenityType: "Amenities",
      amenityCategory: "Food & Drink",
    },
    {
      amenityId: 83,
      amenityName: "Airport Transfers",
      amenityType: "Amenities",
      amenityCategory: "Services",
    },
    {
      amenityId: 11,
      amenityName: "Butler Elite Service",
      amenityType: "Amenities",
      amenityCategory: "Services",
    },
    {
      amenityId: 143,
      amenityName: "Daily Housekeeping",
      amenityType: "Amenities",
      amenityCategory: "Services",
    },
    {
      amenityId: 144,
      amenityName: "Nightly Turndown",
      amenityType: "Amenities",
      amenityCategory: "Services",
    },
    {
      amenityId: 142,
      amenityName: "Room Service",
      amenityType: "Amenities",
      amenityCategory: "Services",
    },
    {
      amenityId: 114,
      amenityName: "WiFi",
      amenityType: "Amenities",
      amenityCategory: "Services",
    },
  ],
  restaurants: [
    {
      id: 15,
      name: "Oleander Room",
      logo: "logo-oleander.gif",
      description: "s",
    },
    {
      id: 155,
      name: "Cricketer's Pint",
      logo: "logo-cricketers_pint.gif",
      description: "s",
    },
    {
      id: 14,
      name: "Bayside",
      logo: "logo-bayside.gif",
      description: "s",
    },
    {
      id: 16,
      name: "Cucina Romana",
      logo: "logo-cucina.gif",
      description: "s",
    },
    {
      id: 17,
      name: "Tokyo Jo's",
      logo: "logo-tokyojoes.gif",
      description: "null",
    },
    {
      id: 18,
      name: "Stewfish",
      logo: "logo-stewfish.gif",
      description: "null",
    },
    {
      id: 198,
      name: "Dino's Pizzeria",
      logo: "logo-dinos.gif",
      description: "null",
    },
    {
      id: 199,
      name: "The Mariner",
      logo: "logo-mariner.gif",
      description: "null",
    },
    {
      id: 255,
      name: "Café de Paris",
      logo: "logo-cafe_paris.png",
      description: "null",
    },
    {
      id: 280,
      name: "Soy Sushi Bar",
      logo: "logo-soy.gif",
      description: "null",
    },
    {
      id: 281,
      name: "Butch's Chophouse",
      logo: "logo-butchs.png",
      description: "null",
    },
    {
      id: 279,
      name: "The Jerk Shack",
      logo: "logo-the_jerk_shack.png",
      description:
        "Discover Authentic Jamaican Jerk. Believed to have originated with Jamaica's Arawak Indians, jerk cookery began as a preservation method. The Maroons of Jamaica, who once sought refuge in the island's",
    },
  ],
  loveNest: true,
  availability: [],
  mapLocation: "",
  bedding: "",
  soldOut: false,
};

export const selectedFlight: Itinerary = {
  airLine: "United Airlines",
  summary: {
    leaving: {
      operatingCarrier: "UA",
      overnight: true,
      departureTime: "06:00",
      departureGateway: "BOS",
      arrivalTime: "11:34",
      arrivalGateway: "MBJ",
      classOfService: "G",
      cabinTypeDescription: "Standard Economy",
      tripFlightDuration: null,
      marketingCarrier: null,
      stops: 1,
      basicEconomy: false,
    },
    returning: {
      operatingCarrier: "UA",
      overnight: false,
      departureTime: "12:40",
      departureGateway: "MBJ",
      arrivalTime: "23:59",
      arrivalGateway: "BOS",
      classOfService: "G",
      cabinTypeDescription: "Standard Economy",
      tripFlightDuration: null,
      marketingCarrier: null,
      stops: 2,
      basicEconomy: false,
    },
    grandTotalAmount: 999.52,
    totalTripFlightTime: 0,
  },
  detail: {
    leaving: [
      {
        operatingCarrier: "UA",
        overnight: false,
        departureTime: "06:00",
        departureGateway: "BOS",
        arrivalTime: "07:26",
        arrivalGateway: "EWR",
        classOfService: "G",
        cabinTypeDescription: "Standard Economy",
        flightNumber: "601",
        departureDate: "Sep 11, 2023",
        departureGatewayName: "Logan Intl Arpt",
        arrivalGatewayName: "Newark Liberty Intl Arpt",
        departureCity: "BOSTON LOGAN",
        arrivalCity: "NEWARK",
        marketingCarrier: "UA",
        basicEconomy: false,
      },
      {
        operatingCarrier: "UA",
        overnight: false,
        departureTime: "08:29",
        departureGateway: "EWR",
        arrivalTime: "11:34",
        arrivalGateway: "MBJ",
        classOfService: "G",
        cabinTypeDescription: "Standard Economy",
        flightNumber: "1462",
        departureDate: "Sep 11, 2023",
        departureGatewayName: "Newark Liberty Intl Arpt",
        arrivalGatewayName: "Sangster Arpt",
        departureCity: "NEWARK",
        arrivalCity: "MONTEGO BAY",
        marketingCarrier: "UA",
        basicEconomy: false,
      },
    ],
    returning: [
      {
        operatingCarrier: "UA",
        overnight: false,
        departureTime: "12:40",
        departureGateway: "MBJ",
        arrivalTime: "17:38",
        arrivalGateway: "EWR",
        classOfService: "G",
        cabinTypeDescription: "Standard Economy",
        flightNumber: "1628",
        departureDate: "Sep 11, 2023",
        departureGatewayName: "Sangster Arpt",
        arrivalGatewayName: "Newark Liberty Intl Arpt",
        departureCity: "MONTEGO BAY",
        arrivalCity: "NEWARK",
        marketingCarrier: "UA",
        basicEconomy: false,
      },
      {
        operatingCarrier: "UA",
        overnight: false,
        departureTime: "19:59",
        departureGateway: "EWR",
        arrivalTime: "21:19",
        arrivalGateway: "IAD",
        classOfService: "G",
        cabinTypeDescription: "Standard Economy",
        flightNumber: "2494",
        departureDate: "Sep 11, 2023",
        departureGatewayName: "Newark Liberty Intl Arpt",
        arrivalGatewayName: "Washington Dulles Intl",
        departureCity: "NEWARK",
        arrivalCity: "DULLES INTERNATIONAL AIRPORT",
        marketingCarrier: "UA",
        basicEconomy: false,
      },
      {
        operatingCarrier: "UA",
        overnight: false,
        departureTime: "22:24",
        departureGateway: "IAD",
        arrivalTime: "23:59",
        arrivalGateway: "BOS",
        classOfService: "G",
        cabinTypeDescription: "Standard Economy",
        flightNumber: "352",
        departureDate: "Sep 11, 2023",
        departureGatewayName: "Washington Dulles Intl",
        arrivalGatewayName: "Logan Intl Arpt",
        departureCity: "DULLES INTERNATIONAL AIRPORT",
        arrivalCity: "BOSTON LOGAN",
        marketingCarrier: "UA",
        basicEconomy: false,
      },
    ],
  },
};

export const guestData: Guests = {
  title: "Mr",
  gender: "Male",
  firstName: "Male FirtName",
  lastName: "Male LastName",
  middleName: "",
  dateOfBirth: "2006-06-06",
  email: "test@test123.com",
  address1: "Mayfield",
  address2: "",
  country: "US",
  state: "FL",
  city: "Miami",
  zipCode: "99999",
  phoneNumber: "411111111111111",
  phoneType: "LAND",
  province: "",
  wedding: true,
  additionalGuests: [
    {
      title: "Ms",
      gender: "Female",
      firstName: "Female FirstName",
      lastName: "Female LastName",
      middleName: "",
      dateOfBirth: "1999-09-09",
      guestType: "ADULT",
      passengerType: "NA",
    },
  ],
  voucherDelivery: "EMAIL",
};

export const ratesData: Rates[] = [
  {
    reservationDate: "2023-09-14",
    roomCategory: "1B",
    afterPromoRate: 3458,
    pricePerNightPerAdult: 580.5,
    promotion: [
      {
        "promotion-id": 57274,
        "promotion-name": "655-55% OFF SMB",
        "promotion-description": "55% Off Rack Rate",
        amount: 4257,
      },
    ],
    discount: [
      {
        id: 13970,
        code: "WEBSPC2015",
        description: "$25 ONLINE INSTANT CREDIT",
        amount: 25,
        type: "Online Credit",
        roomCategory: "1B",
      },
    ],
    ratePerNight: [
      {
        rateDate: "2023-09-14",
        paxRate: 2580,
        afterPromoRate: 1161,
        adultPaxRate: 2580,
        childPaxRate: 0,
        averageBaseRate: 1290,
        averageAfterPromoRate: 580.5,
      },
      {
        rateDate: "2023-09-15",
        paxRate: 2580,
        afterPromoRate: 1161,
        adultPaxRate: 2580,
        childPaxRate: 0,
        averageBaseRate: 1290,
        averageAfterPromoRate: 580.5,
      },
      {
        rateDate: "2023-09-16",
        paxRate: 2580,
        afterPromoRate: 1161,
        adultPaxRate: 2580,
        childPaxRate: 0,
        averageBaseRate: 1290,
        averageAfterPromoRate: 580.5,
      },
    ],
  },
];

export const resortsData: Resort[] = [
  {
    "resort": "BNG",
    "rstCode": "BNG",
    "resortType": "B",
    "country": "JAMAICA",
    "resortShortName": "Beaches Negril",
  },
  {
    "resort": "BBO",
    "rstCode": "BBO",
    "resortType": "B",
    "country": "JAMAICA",
    "resortShortName": "Beaches Ocho Rios",
  },
  {
    "resort": "BTC",
    "rstCode": "BTC",
    "resortType": "B",
    "country": "TURKS & CAICOS",
    "resortShortName": "Beaches Turks & Caicos",
  },
  {
    "resort": "NGA",
    "rstCode": "NGA",
    "resortType": "P",
    "country": "JAMAICA",
    "resortShortName": "Grand Pineapple Beach Negril",
  },
  {
    "resort": "FCR",
    "rstCode": "FCR",
    "resortType": "R",
    "country": "BAHAMAS",
    "resortShortName": "Fowl Cay Resort",
  }
  
];
