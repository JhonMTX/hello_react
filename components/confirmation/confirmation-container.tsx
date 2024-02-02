"use client";

import SpecialRequest from "./special-request";
import VacationExtras from "./vacation-extras";
import MobileApp from "./mobile-app";
import informationByBrand from "@/utils/vacation-extra-information";
import SocialShare from "./social-share";
import { resortURI } from "@/utils/resort-uri";
import ThankYouHeader from "./thank-you-header";
import BookingNumberBanner from "./booking-number-banner";
import SummaryContainer from "./summary-container";
import VacationPrice from "./vacation-price";

export type ContentBlock = {
  labels: string[];
  details: string[];
};

export default function ConfirmationContainer({}: {}) {
  /* ******************* ALL THE VARIABLES BETWEEN THESE COMMENTS IS TEMPORAL DATA THAT MUST CAME FROM VACATION SUMMARY MANAGMENT********************** */
  /* ******************* WHEN THIS IMPLEMENTATION IS DONE PLEASE REMOVE ALL THESE TEMPORAL DATA ********************** */
  const bookingNumber = "V259512988285574";
  const nights = 3;
  const resortName = "Sandals Negril";
  const location = "Negril, Jamaica";
  const checkIn = "Monday, October 9th, 2023";
  const checkOut = "Monday, October 15th, 2023";
  const stayNights = nights > 1 ? `${nights} Nights` : `${nights} Night`;
  const roomCategory = "Grande Luxe King - GLK";
  const roomFeatures =
    "In Room Local Beer & Wine, Roundtrip Airport Transfer, Free Wifi";
  const roomView = "Tropical Garden";
  const primaryGuest = "Mr. Test Prueba (21)";
  const secondaryGuest = "Mrs. Testa Prueba (21)";

  const vacationDetails = [
    {
      labels: ["Resort Selected", "Location"],
      details: [resortName, location],
    },
    {
      labels: ["Check-In", "Check-Out"],
      details: [checkIn, checkOut],
    },
    {
      labels: ["Lenght Of Stay"],
      details: [stayNights],
    },
  ];

  const roomDetails = [
    {
      labels: ["Room Category"],
      details: [roomCategory],
    },
    {
      labels: ["Room Features"],
      details: [roomFeatures],
    },
    {
      labels: ["Room View"],
      details: [roomView],
    },
  ];

  const guestDetails = [
    {
      labels: ["Primary Guest"],
      details: [primaryGuest],
    },
    {
      labels: ["Additional Guest"],
      details: [secondaryGuest],
    },
  ];

  const hasFlight = false;
  const vacationPriceLabel = `Room${hasFlight ? "+ Rountrip Flight" : ""}`;
  const valuesLabels = [
    vacationPriceLabel,
    "$25 Online Instant Credit",
    "$135 Instant Credit",
    "50% Off Rack Rate",
  ];
  const values = ["$5,544.00", "-$25.00", "-$135.00", "-$2,772.00"];
  const promotions = {
    labels: valuesLabels,
    prices: values,
  };
  const totalPrice = "$2,612.00";
  const brand = "sandals"; 
  const information = informationByBrand[brand]; 
  const mobileApp = {
    sandals: {
      title: "sandals experience",
      subtitle: "mobile app",
      content:
        "Stay connected with the latest offers and promotions on property, browse resort experiences and island excursions, make balance payments, and access your Sandals Select account on the newly upgraded resort app.",
      image: {
        path: "confirmation/sandals-app.png",
        alt: "Sandals Beaches App",
      },
    },
    beaches: {
      title: "beaches experience",
      subtitle: "mobile app",
      content:
        "Stay connected with the latest offers and promotions on property, browse resort experiences and island excursions, make balance payments, and access your Sandals Select account on the newly upgraded resort app.",
      image: {
        path: "confirmation/beaches-app.png",
        alt: "Sandals Beaches App",
      },
    },
  };

  const URIList = resortURI;
  const data = {
    url: "https://www.facebook.com/sharer.php",
    options: {
      s: "100",
      u: `https://www.${brand}.com${URIList["SNG"]}`,
    },
  };

  const details = {
    title: "Thank You!",
    subtitle: "For booking your vacation online.",
    description: "You will receive a confirmation e-mail.",
  };

  /* ******************* ALL THE VARIABLES BETWEEN THESE COMMENTS IS TEMPORAL DATA THAT MUST CAME FROM VACATION SUMMARY MANAGMENT********************** */

  return (
    <section className="confirmation-container w-full">
      <ThankYouHeader details={details} />

      <BookingNumberBanner
        label="Booking Number:"
        bookingNumber={bookingNumber}
      />

      <SummaryContainer
        vacationData={vacationDetails}
        roomData={roomDetails}
        guestData={guestDetails}
      />

      <VacationPrice total={totalPrice} promotions={promotions} />

      <SpecialRequest />

      <VacationExtras brand={brand} information={information} />

      <MobileApp information={mobileApp[brand]} />

      <SocialShare brand="sandals" url={URIList["SNG"]} data={data} />
    </section>
  );
}
