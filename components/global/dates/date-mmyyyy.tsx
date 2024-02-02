import { Dispatch, SetStateAction, useEffect, useState } from "react";
import DateDropdown from "./date-dropdown";
import {
  getArrayOfMonths,
  getArrayOfYears,
  getRemainingMonths,
} from "@/utils/calculate-days";

export type MMYYYY = {
  month: string;
  year: string;
};

function isValidMonth(month: string, year: string) {
  const remainingMonths = getRemainingMonths();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear().toString();
  let validMonth = true;

  if (month !== "MM" && year === currentYear) {
    validMonth = remainingMonths.includes(parseInt(month));
  }

  return validMonth;
}

export default function DateMMYYYY({
  date,
  required,
  onChange,
}: {
  date: MMYYYY;
  required: boolean;
  onChange: Dispatch<SetStateAction<MMYYYY>>;
}) {
  const [month, setMonth] = useState<string>(date.month);
  const [year, setYear] = useState<string>(date.year);
  const currentYear = new Date().getFullYear();
  const remainingMonths = getRemainingMonths();
  const from = remainingMonths[0];
  const to = remainingMonths[remainingMonths.length - 1];
  const isCurrentYear = year === currentYear.toString();
  const listOfMonths = isCurrentYear
    ? getArrayOfMonths(from, to)
    : getArrayOfMonths();
  const listOfYears = getArrayOfYears(currentYear, currentYear + 19);

  useEffect(() => {
    const validMonth = isValidMonth(month, year);

    if (!validMonth) {
      setMonth("MM");
    }

    const newDate = { month: validMonth ? month : "MM", year: year };
    onChange(newDate);
  }, [month, year, onChange]);

  return (
    <div className="flex flex-wrap justify-center">
      <div className="basis-4/12 px-6">
        <DateDropdown
          name="MM"
          content={listOfMonths}
          defaultOption={month}
          setOption={setMonth}
          required={required}
        />
      </div>
      <div className="basis-4/12 px-6">
        <DateDropdown
          name="YYYY"
          content={listOfYears}
          defaultOption={year}
          setOption={setYear}
          required={required}
        />
      </div>
    </div>
  );
}
