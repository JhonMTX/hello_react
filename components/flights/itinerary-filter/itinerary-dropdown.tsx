import { Dispatch, SetStateAction, useContext } from "react";
import { Airlines, ItinerariesContext } from "../itineraries-container";

export default function ItineraryDropdown({
  name,
  label,
  options,
  selected,
  setState,
}: {
  name: string;
  label: string;
  options: string[];
  selected: string;
  setState: Dispatch<SetStateAction<string>>;
}) {
  const {airlines} = useContext(ItinerariesContext); 
  const JSXOptions = options.map((option, index) => {
    const airlineData = airlines.find((airline) => airline.code === option);

    return (
      <option
        key={option + index}
        value={option}
      >
        {airlineData?.name}
      </option>
    );
  });

  const topArrow =
    "before:absolute before:z-10 before:block before:border-solid before:border-x-[0.8rem] before:border-b-[0.8rem] before:border-b-blue before:border-x-transparent";
  const bottomArrow =
    "after:absolute after:z-10 after:block after:border-solid after:border-x-[0.8rem] after:border-t-[0.8rem] after:border-t-blue after:border-x-transparent";

  return (
    <div
      className={`${name}-options basis-full mb-6 sm:basis-6/12 md:basis-3/12 px-6`}
    >
      <h3 className="text-[1.8rem] font-[500] mb-4">{label}</h3>
      <div className="options relative text-2xl flex flex-col">
        <div
          className={`option mb-3 ${topArrow} ${bottomArrow} before:top-[1.4rem] after:top-[2.6rem] before:right-4 after:right-4`}
        >
          <select
            className="w-full h-20 px-6 appearance-none focus:outline-none rounded-md focus:ring-blue focus:ring-2"
            onChange={(e) => setState(e.target.value)}
            value={selected}
          >
            <option key="default0" value="ALL">
              Select Airline
            </option>
            {JSXOptions}
          </select>
        </div>
      </div>
    </div>
  );
}
