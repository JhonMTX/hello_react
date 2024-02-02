import { CDN_ICONS_URL } from "@/utils/constants";
import { Gateway } from "@/utils/fetch";
import { Icon } from "@sanservices/brands-ui";
import { ChangeEvent, Dispatch, LegacyRef, SetStateAction, useState } from "react";
import OutsideClick from "../wrapper";
import clsx from "clsx";
import { error } from "console";

function searchMatch(
  value: string,
  gateways: Gateway[],
  setMatch: Dispatch<SetStateAction<Gateway[]>>,
  setOption: Dispatch<SetStateAction<string>>
) {
  const airportName = value.toLowerCase();
  const matchedAirports = gateways.filter((gateway) =>
    gateway.airportName.toLowerCase().includes(airportName)
  );
  
  setOption(value);
  setMatch(matchedAirports);
}

export type ItineraryInput = {
  name?: string;
  refInput?: LegacyRef<HTMLInputElement>;
  onChange?: (value: ChangeEvent<Element>) => void;
  error?: string;
};

export type Props = { 
  gateways: Gateway[],
  setState: Dispatch<SetStateAction<string>>,
  brand: string;
} & ItineraryInput;
  

export default function ItinerarySearch({ 
  gateways,
  setState,
  brand,
  onChange,
  name,
  refInput,
  error,
}: Props) {
  const [matched, setMacth] = useState<Gateway[]>([]);
  const [option, setOption] = useState<string>(''); // change the "" with the option selected in step 1 or in step 3 search flights.
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const ref = OutsideClick(() => {
    setShowOptions(false);
  });

  return (
    <div className="options text-2xl flex flex-col relative">
      <div className="search relative ">
        <input
          className={clsx(
            "bg-sandals-light-gray font-[500] search-input border-solid border-[1px] border-platinum text-2xl w-full text-ellipsis h-20 pl-4 pr-16 focus:outline-none rounded-md focus:ring-blue focus:ring-2 placeholder:text-black",
            error && "border-red10 focus:ring-red10 !placeholder-red10"
          )}
          type="text"
          onChange={(e) =>
            {
              searchMatch(e.target.value, gateways, setMacth, setOption)
              onChange && onChange(e);
            }
          }
          value={option}
          placeholder="Enter City or Airport"
          name={name}
          onClick={() => setShowOptions(true)}
          ref={refInput}
        />
        <Icon
          src={CDN_ICONS_URL + "location.svg"}
          className={clsx(
            `w-8 h-12 mx-4 top-1/2 -translate-y-2/4 right-0 absolute bg-blue10`,
            {
              '!bg-blue10': brand==='beaches' && !error,
              'bg-red10': error,
            }
          )}
        />
      </div>
      {showOptions && (
        <div
          className="absolute top-[5.5rem] z-10 w-full max-h-72 shadow-lg overflow-y-scroll"
          ref={ref}
        >
          <ul className="matched text-[1.3rem] rounded-md bg-white">
            {matched.map((match, index) => (
                <li
                  className="w-full relative flex items-center text-onyx hover:bg-anti-flash-white text-ellipsis whitespace-nowrap overflow-hidden bg-white pt-[0.219rem] pb-[0.219rem]"
                  key={index}
                  onClick={() => {
                    setOption(match.airportName.toUpperCase());
                    setShowOptions(false);
                    setState(match.gateway);
                  }}
                >
                  <Icon
                    src={CDN_ICONS_URL + "plus.svg"}
                    className="w-5 h-5 ml-4 bg-blue"
                  />
                  <label className="px-4 grow">{match.airportName.toUpperCase()}</label>
                </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
