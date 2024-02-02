type GuestTypeProps = {
    brand: string;
    title: string;
    label: string;
    passengersCount: number;
    currentTotalCount: number;
    maxPassengers: number;
    comment: string;
    guestAge?: GuestAge[];
    guestBirthDay?: GuestBirthDay[];
    childrenAges: string[];
    addDeletePassenger: (i: number) => void;
    addDeleteGuestAge?: (record: GuestAge) => void;
    addDeleteGuestBirthDay?: (record: GuestBirthDay) => void;
}

type GuestAge = {
    index: number;
    age: number;
}
  
type GuestBirthDay = {
    index: number;
    year: string;
    month: string;
    day: string;
}