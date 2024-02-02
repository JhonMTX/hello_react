import { Resort } from "@/utils/fetch";
import { getDevice } from "@/utils/utils";
import { DESKTOP, SANDALS, BEACHES } from "@/utils/constants";
import OutsideClick from "../wrapper";
import { Fragment, useEffect, useState } from "react";
import Icons from "../global/icons";
import clsx from "clsx";

type Props = {
  resorts: Resort[];
  brand?: string;
  //openingDates: string[];
  name: string;
  value: string;
  placeholder?: string;
  error?: string;
  onChange: (value: string) => void;
};

const SelectResort = ({ resorts, brand, name, value, placeholder, error, onChange }: Props) => {
  const countries = (resorts: Resort[]) => {
    const resortsByCountry = resorts.map((resort) => resort.country.toLocaleUpperCase());
    const uniqueResort = [...new Set(resortsByCountry)];

    return uniqueResort;
  };

  const resortSelected = placeholder + "...";
  const resortTypeName = placeholder + ":";
  const [selected, setSelected] = useState(resortSelected);
  const [open, setOpen] = useState(false);
  const countryList = countries(resorts);

  const ref = OutsideClick(() => {
    setOpen(false);
  });
  const [deviceType, setDeviceType] = useState("Mobile");

  useEffect(() => {
    setDeviceType(getDevice());
  }, []);

  const inputColor = error ? "red10" : "blue";
  const topArrow =
    error && !value
      ? "before:absolute before:z-10 before:block before:border-solid before:border-x-[0.8rem] before:border-b-[0.8rem] before:border-b-red10 before:border-x-transparent"
      : `before:absolute before:z-10 before:block before:border-solid before:border-x-[0.8rem] before:border-b-[0.8rem] ${
          brand === BEACHES ? "before:border-b-blue" : "before:border-b-blue10"
        } before:border-x-transparent`;
  const bottomArrow =
    error && !value
      ? "after:absolute after:z-10 after:block after:border-solid after:border-x-[0.8rem] after:border-t-[0.8rem] after:border-t-red10 after:border-x-transparent"
      : `after:absolute after:z-10 after:block after:border-solid after:border-x-[0.8rem] after:border-t-[0.8rem] ${
          brand === BEACHES ? "after:border-t-blue" : "after:border-t-blue10"
        } after:border-x-transparent`;
  const requiredClass =
    error && !value ? "border-solid border border-red10" : "border-solid border border-gray";
  const focus = `focus:ring-${inputColor} focus:ring-2`;

  return (
    <section className="resorts-section">
      <div className="resorts-label col-span-6">
        <h3 className="text-[1.4rem] mt-2 mb-5 sm:text-[1.8rem] font-[500]">{resortTypeName}</h3>
      </div>
      <div className="resort-dropdown col-span-6 relative text-[1.6rem]">
        {deviceType !== DESKTOP && (
          <div
            className={`option mb-3 ${topArrow} ${bottomArrow} before:top-[1.4rem] after:top-[2.6rem] before:right-4 after:right-4`}
          >
            <select
              className={clsx(
                "text-[1.5rem] [&>*]:text-[1.5rem] bg-sandals-light-gray w-full h-[4.8rem] px-6 appearance-none focus:outline-none rounded-md font-[500] border-radius-[1.5rem] border-solid border border-[#ddd]",
                focus,
                requiredClass,
                error && "text-red10"
              )}
              onChange={(e) => onChange(e.target.value)}
              value={value}
            >
              {placeholder && (
                <option key={`${name}-0`} value={''} className="bg-white">
                  {placeholder}
                </option>
              )}
              {resorts.map((resort, index) => (
                <option
                  key={`${name}-${index + 1}`}
                  value={resort.rstCode}
                  className={`${name}-opt bg-white`}
                >
                  {resort.resortShortName}
                </option>
              ))}
            </select>
          </div>
        )}
        {deviceType === DESKTOP && (
          <div
            ref={ref}
            onClick={() => setOpen(!open)}
            className={`bg-sandals-light-gray w-full relative h-[4.8rem] px-6 appearance-none focus:outline-none rounded-md font-[500] ${focus} ${requiredClass} border-solid border-2 border-[#ddd] border-radius-[1.5rem] ${topArrow} ${bottomArrow} before:top-[1.4rem] after:top-[2.6rem] before:right-4 after:right-4`}
          >
            <div
              className={clsx(
                "w-full mt-4 flex justify-between rounded",
                !selected && "text-gray-700",
                error && "text-red10"
              )}
            >
              {!selected ? resortSelected : selected}
            </div>
            <ul
              onClick={() => setOpen(!open)}
              className={`bg-white relative z-10 mt-5 overflow-y-auto border-[0.2rem] border-solid border-[#ddd] shadow-md ${
                open ? "max-h-[32rem] pb-4" : "max-h-0 border-none"
              } option mb-3`}
            >
              {countryList.map((country: string) => (
                <Fragment key={country}>
                  <li className="p-2 font-[200] text-light-gray hover:bg-white">
                    <div className="flex justify-start items-center">
                      <div>
                        <Icons className="w-5 h-5 fill-transparent" name="check" />
                      </div>
                      <div>{country}</div>
                    </div>
                  </li>
                  {resorts.map((resort, index) => {
                    if (resort.country.toUpperCase() === country) {
                      return (
                        <li
                          key={resort.resortShortName}
                          className={`px-2 font-[500] hover:bg-white hover:text-blue cursor-pointer
                                              ${
                                                resort.resortShortName?.toLowerCase() ===
                                                  selected?.toLowerCase() && "bg-sky-600 text-blue"
                                              }`}
                          onClick={() => {
                            if (resort?.resortShortName?.toLowerCase() !== selected.toLowerCase()) {
                              setSelected(resort.resortShortName);
                              setOpen(false);
                              onChange(resort.rstCode);
                            }
                          }}
                        >
                          {selected?.toLowerCase() === resort.resortShortName?.toLowerCase() && (
                            <div className="flex justify-start items-center">
                              <div>
                                <Icons className="w-5 h-5 fill-blue" name="check" />
                              </div>
                              <div>{resort?.resortShortName}</div>
                            </div>
                          )}
                          {selected?.toLowerCase() !== resort.resortShortName.toLowerCase() && (
                            <div className="flex justify-start items-center">
                              <div>
                                <Icons className="w-5 h-5 fill-transparent" name="check" />
                              </div>
                              <div>{resort.resortShortName}</div>
                            </div>
                          )}
                        </li>
                      );
                    }
                  })}
                </Fragment>
              ))}
            </ul>
          </div>
        )}
      </div>
      {error && <p className="text-red10 text-2xl mt-6 mb-4 pt-2">{error}</p>}
    </section>
  );
};

export default SelectResort;
