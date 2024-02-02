type Props = {
  bookingNumber: string;
  label: string;
}

export default function BookingNumberBanner({bookingNumber, label}:Props) {
  return (
    <section className="booking-number-container w-full bg-blue left-0 flex justify-center py-[1.6rem] sm:py-16">
      <p className="number text-white text-[2.4rem] uppercase font-light text-center leading-none">
        <span className="font-semibold">{label}</span>
        {bookingNumber}
      </p>
    </section>
  );
}
