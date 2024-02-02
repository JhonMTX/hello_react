import { fetchResorts } from "../../utils/fetch";
import { useEffect, useState } from "react";

interface Args {
  rstCode: string;
  categoryCode: string;
  adults: number;
  checkIn: string;
  checkOut: string;
  airIncluded: boolean;
  departureGateway: string;
  children: number;
  length: number;
}

export const PrevHeader = (args: Args) => {
  const [resort, setResort] = useState("Beaches Grill");
  const { rstCode, adults, checkIn, checkOut } = args;

  useEffect(() => {
    const resortCode = rstCode;
    fetchResorts().then((fetchedResorts) => {
      const resortName = fetchedResorts.find((resort) => {
        if (resortCode === resort.rstCode) {
          setResort(resort.resortShortName);
        }
      });
    });
  }, [rstCode]);

  return (
    <div className="row pt-12 sm:pt-16">
      <div className="grid grid-cols-1 text-center">
        <span className="uppercase text-onyx sm:font-normal mb:font-normal sm:text-[2.7rem] md:text-[4rem] lg:font-normal lg:text-[4.1rem]">
          Select Your Room
        </span>
      </div>
      {resort && (
        <div className="grid grid-cols-1 text-center pb-4 text-onyx">
          <span className="font-semibold text-[1.25rem] md:font-normal md:text-[2rem] lg:text-[2rem] lg:font-semibold">
            at {resort}
          </span>
        </div>
      )}
      <div className="">
        <div className="border-t md:border-t-[0.2rem] border-customGray text-center sm:max-w-3xl md:max-w-[52.4rem] lg:max-w-[70.1rem] mx-auto">
          <div className="pt-4">
            <span className="text-base md:font-light md:text-[1.4rem] text-onyx">
              Check-In:{checkIn} - Check-Out:{checkOut}. Prices for {adults} Adults
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
