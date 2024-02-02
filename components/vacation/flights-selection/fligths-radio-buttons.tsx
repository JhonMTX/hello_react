import React, { LegacyRef } from "react";
import { ChangeHandler } from "react-hook-form";

export type RadioButtonProps = {
  onChange: ChangeHandler;
  name: string;
  inputRef: LegacyRef<HTMLInputElement>;
  onBlur: ChangeHandler;
};

type Props = {
  setShowFlights: (value: boolean) => void;
  showFlights: boolean;
  brand: string;
} & Partial<RadioButtonProps>;

const FlightsRadioButtons = ({
  setShowFlights,
  showFlights,
  brand,
  onChange,
  name,
  inputRef,
  onBlur,
}: Props) => {
  const radioStyle = `mr-3 relative appearance-none w-14 h-14 rounded-[50%] -translate-y-3 ${
    brand === "beaches" ? "focus:border-blue" : "focus:border-blue10"
  } border border-solid border-platinum bg-sandals-light-gray`;
  const selectOptionStyle = `after:absolute after:top-1/4 after:left-1/4 after:-rotate-45 after:w-7 after:h-7 after:rounded-full ${
    brand === "beaches" ? "after:bg-blue" : "after:bg-blue10"
  } flex items-center`;

  return (
    <div className="include-roundtrip-radiobuttons text-[1.6rem] flex flex-wrap gap-6 mt-2">
      <div className="flex mr-6">
        <input
          className={`no-option ${radioStyle} ${!showFlights ? selectOptionStyle : ""}`}
          type="radio"
          onChange={(val) => {
            setShowFlights(false);
            onChange && onChange(val);
          }}
          onBlur={onBlur}
          value={"no"}
          name={name}
          ref={inputRef}
        />
        <label>No, thank you</label>
      </div>
      <div className="flex">
        <input
          className={`yes-option ${radioStyle} ${showFlights ? selectOptionStyle : ""}`}
          type="radio"
          onChange={(val) => {
            setShowFlights(!showFlights);
            onChange && onChange(val);
          }}
          onBlur={onBlur}
          value={"yes"}
          name={name}
          id="yes"
          ref={inputRef}
        />
        <label>Yes, please</label>
      </div>
    </div>
  );
};

export default FlightsRadioButtons;
