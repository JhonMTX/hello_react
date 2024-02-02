import Icons from "@/components/global/icons";
import OutsideClick from "@/components/wrapper";
import { Gateway } from "@/utils/fetch";
import clsx from "clsx";
import { ChangeEvent, LegacyRef, useState } from "react";
import { ChangeHandler, RefCallBack } from "react-hook-form";

export type ItineraryInput = {
  name?: string;
  refInput?: RefCallBack;
  onChange?: ChangeHandler;
  error?: string;
};

type Props = {
  brand: string;
  gateways: Gateway[];
  setState: (value: string) => void;
  itineraryInput?: ItineraryInput;
  error?: string;
};

function searchMatch(
  value: string,
  gateways: Gateway[],
  setMatch: (value: Gateway[]) => void,
  setOption: (value: string) => void,
) {
  const airportName = value.toLowerCase();
  const matchedAirports = gateways.filter((gateway) =>
    gateway.airportName.toLowerCase().includes(airportName),
  );

  setOption(value);
  setMatch(matchedAirports);
}

export default function GatewaySearch({ brand, gateways, setState, error, itineraryInput }: Props) {
  const [matched, setMatch] = useState<Gateway[]>([]);
  const [option, setOption] = useState<string>("");
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const ref = OutsideClick(() => {
    setShowOptions(false);
    setOption("");
    setState("");
  });

  return (
    <div className="options text-2xl flex flex-col relative">
      <div className="search relative ">
        <input
          className={clsx(
            "bg-sandals-light-gray font-[500] search-input border-solid border-[1px] border-platinum text-2xl w-full text-ellipsis h-20 pl-4 pr-16 focus:outline-none rounded-md focus:ring-blue focus:ring-2 placeholder-onyx",
            error && "border-red10 focus:ring-red10 focus:ring-opacity-30 !placeholder-red10",
          )}
          type="text"
          onChange={(e) => {
            searchMatch(e.target.value, gateways, setMatch, setOption);
            itineraryInput?.onChange && itineraryInput.onChange(e);
          }}
          value={option}
          placeholder="Enter City or Airport"
          onClick={() => setShowOptions(true)}
          name={itineraryInput?.name}
          ref={itineraryInput?.refInput}
        />
        <Icons
          className={clsx(`w-8 h-12 mx-4 top-1/2 -translate-y-2/4 right-0 absolute fill-blue10`, {
            "!fill-blue10": brand === "beaches" && !error,
            "fill-red10": error,
          })}
          name="fatPin"
        />
      </div>
      {showOptions && (
        <div
          className="absolute top-[5.5rem] z-10 w-full max-h-72 shadow-lg overflow-y-scroll"
          ref={ref}
        >
          <ul className="matched text-[1.3rem] rounded-md bg-white">
            {matched.map((match, index) => {
              const { city, state, country, stateName, gateway } = match;
              const optionLabel = `${city}, ${stateName}${state.length > 3 ? "" : ` (${state})`}, ${country} (${gateway})`;
              return (
                <li
                  className="w-full relative flex items-center text-onyx hover:bg-anti-flash-white text-ellipsis whitespace-nowrap overflow-hidden bg-white pt-[0.219rem] pb-[0.219rem]"
                  key={index}
                  onClick={() => {
                    setOption(optionLabel);
                    setShowOptions(false);
                    setState(gateway);
                  }}
                >
                  <Icons className="w-6 h-6 ml-4 fill-blue" name="plane" />
                  <label className="px-4 grow truncate">{optionLabel}</label>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
