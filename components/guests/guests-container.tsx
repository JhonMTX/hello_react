"use client";

export type AdditionalGuest = {
  title: string,
  gender: string,
  firstName: string,
  lastName: string,
  middleName: string | null,
  dateOfBirth: string,
  guestType: string,
  passengerType: string,
}

export type Guests = {
  title: string,
  gender: string,
  firstName: string,
  lastName: string,
  middleName: string | null,
  dateOfBirth: string,
  email: string,
  address1: string,
  address2: string | null,
  country: string,
  state: string | null,
  city: string,
  zipCode: string,
  phoneNumber: string,
  phoneType: string,
  province: string | null,
  wedding: true,
  additionalGuests: AdditionalGuest[],
  voucherDelivery: string,
}

export default function GuestContainer() {
  return <div className="guest-container">Guests</div>;
}
