import { useState } from 'react';

export const useCounterPassenger = (initialValue: number) => {
  
  const [passengerCounter, setPassengerCounter] = useState(initialValue);
  const [guestAge, setGuestAge] = useState<GuestAge[]>([]);
  const [guestBirthDay, setGuestBirthDay] = useState<GuestBirthDay[]>([]);

  const addDeletePassenger = (i: number) => {
    setPassengerCounter(passengerCounter + i);
  }

  const addDeleteGuestAge = (record: GuestAge) => {
    setGuestAge([...guestAge, record]);
  }

  const addDeleteGuestBirthDay = (record: GuestBirthDay) => {
    setGuestBirthDay([...guestBirthDay, record]);
  }

  return {
    passengerCounter,
    addDeletePassenger,
    addDeleteGuestAge,
    guestAge,
    addDeleteGuestBirthDay,
    guestBirthDay
  }
}

