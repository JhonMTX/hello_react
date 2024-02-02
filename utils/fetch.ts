import { groupBy } from "./lib";

export const API_URL = "https://obe.dev.k8s.sandals.com/api";
export const AVAILABILITY_URL = `${API_URL}/availability/handle/availability`;
const axios = require("axios");

export type Resort = {
  resort: string;
  rstCode: string;
  resortType: string;
  country: string;
  resortShortName: string;
};

export type Amenities = {
  amenityId: number;
  amenityCategory: string;
  amenityName: string;
  amenityType: string;
};

export type Gateway = {
  gateway: string;
  city: string;
  state: string;
  airportName: string;
  stateName: string;
  country: string;
};

export type Availability = {
  reservationDate: string;
  availableRooms: number;
};

export type Restaurants = {
  id: number;
  name: string;
  logo: string;
  description: string | null;
};

export type roomTypes = {
  roomTypeid: number;
  roomTypename: string;
  roomTypecategory: string;
  roomType: string;
  roomCategory: string;
  roomTypeActive: string;
};

export type Levels = {
  LevelId: number;
  LevelName: string;
  LevelRoomCount: number;
};

export type Attributes = {
  attributesId: number;
  attributesName: string;
  attributesDescription: string;
};

export type roomCategoryViews = {
  CategoryViewsid: number;
  CategoryViewsname: string;
};

export type Room = {
  categoryId: number;
  amenities: Amenities[];
  availability: Availability[];
  categoryCode: string;
  rstId: number;
  resortName: string;
  rstCode: string;
  imageCodes?: string[];
  categoryView: string[];
  mapLocation: string[];
  name: string;
  description: string;
  bedding: string;
  maxOccupancy: number;
  maxAdults: number;
  transferType: string;
  roomClass: string;
  webImgCode: string;
  thumbnailImgURL: string;
  fullImageURL: string;
  restaurants?: Restaurants[];
  loveNest: boolean;
  soldOut: boolean;
  afterPromoRate: number;
  pricePerNightPerAdult: number;
  promotion:Promotions[];
  discount: Discount[];
  ratePerNight: RatesPerNight[];
};

export type AvailabilityParams = {
  length: number;
  "reservation-date": string;
  "category-code": string;
  "resort-codes": string[];
};

export type VacationDetails = {
  rstCode: string;
  categoryCode?: string;
  checkIn: string;
  checkOut: string;
  airIncluded: boolean;
  seatType?: string;
  departureGateway?: string;
  adults: number;
  children: number;
  length: number;
};

export type VacationDetailsResponse = {
  key: string;
} & VacationDetails;

export type AvailabilityResponse = {
  "category-code": string;
  availability: Availability[];
};

export type Promotion = {
  "promotion-id": number;
  "promotion-name": string;
  "promotion-description": string;
  amount: number;
};

export type Promotions = {
        promotionId: number;
        promotionName: string;
        promotionDescription: string,
        amount: number,
        date: string,
        sessionId: string,
        roomCategory: string,
        reservationDate: string,
        primaryYN: string,
        factor: string
};

export type Discount = {
  id: number;
  code: string;
  description: string;
  amount: number;
  type: string;
  roomCategory: string;
};

export type RatesPerNight = {
  rateDate: string;
  paxRate: number;
  afterPromoRate: number;
  adultPaxRate: number;
  childPaxRate: number;
  averageBaseRate: number;
  averageAfterPromoRate: number;
};

export type Rates = {
  reservationDate: string;
  roomCategory: string;
  afterPromoRate: number;
  pricePerNightPerAdult: number;
  promotion: Promotion[];
  discount: Discount[];
  ratePerNight: RatesPerNight[];
};

export type SpecialRequest = {
  bookingNumber: number;
  comments: object;
};

export type ResortGateways = {
  resortCode: string;
  country: string;
  city: string;
  gateway: string;
};

async function request<TResponse>(url: string, config?: RequestInit): Promise<TResponse> {
  try {
    const response = await axios(url, config);

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
}

export const fetchResorts = async () => await request<Resort[]>(`${API_URL}/resort`);

export const fetchGateways = async () => await request<Gateway[]>(`${API_URL}/gateway`);

export const fetchResortGateways = async (rstCode: string) =>
  await request<ResortGateways[]>(`${API_URL}/gateway/resortGateways/${rstCode}`);

export const fetchResortsByCountry = async (brand: string) => {
  const resortsData = await fetchResorts();
  const resorts = resortsData.filter((resort) => resort.resortType === brand);

  return resorts;
};

export const saveVacationDetails = async (vacationDetails: VacationDetails) =>
  await request<VacationDetailsResponse>(`${API_URL}/vacation/detail/save`, {
    method: "POST",
    body: JSON.stringify(vacationDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const fetchRoomAvailability = async (args: AvailabilityParams) =>
  await request<AvailabilityResponse>(AVAILABILITY_URL, {
    method: "POST",
    body: JSON.stringify(args),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const fetchRoomDetailsList = async (rstCode = "") => {
  let response = {} as Room[];
  try {
    response = await request<Room[]>(`${API_URL}/room/detail/list/${rstCode}`);
  } catch (error) {
    console.log(`room data for ${rstCode} not found.`, error);
  }
  return response;
};

export const submitSpecialRequestDetails = async (details: SpecialRequest) => {
  await fetch(`${API_URL}/booking/comments`, {
    method: "POST",
    body: JSON.stringify(details),
    headers: {
      "Content-Type": "application/json",
    },
  });
}; //this must be updated after they return the body of the response
