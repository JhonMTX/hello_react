import { Dispatch, SetStateAction, useEffect, useState } from "react";
import DateDropdown from "./date-dropdown";
import {
  getArrayOfDays,
  getArrayOfMonths,
  getArrayOfYears,
  getDaysInMonth,
} from "@/utils/calculate-days";

export type MMDDYYYY = {
  month: string;
  day: string;
  year: string;
};

function isValidDay(month: string, day: string, year: string) {
  const selectedYear = year !== 'YYYY' ? year : new Date().getFullYear().toString();
  const monthDays = getDaysInMonth(parseInt(selectedYear), parseInt(month));
  const parsedDay = parseInt(day);
  const arrayOfDays = getArrayOfDays(monthDays);
  let validDay = true;

  if (month !== "MM") {
    validDay = arrayOfDays.includes(parsedDay);
  }

  return validDay;
}

export default function DateMMDDYYYY({
  date,
  start,
  end,
  required,
  className,
  onChange,
}: {
  date: MMDDYYYY;
  start: number;
  end: number;
  required: boolean;
  className?: string;
  onChange: Dispatch<SetStateAction<MMDDYYYY>>;
}) {
  const [month, setMonth] = useState<string>(date.month);
  const [day, setDay] = useState<string>(date.day);
  const [year, setYear] = useState<string>(date.year);
  const listOfMonths = getArrayOfMonths();
  const listOfYears = getArrayOfYears(start, end);
  let numberOfDays = 31;

  if (year !== "YYYY" && month !== "MM") {
    numberOfDays = getDaysInMonth(parseInt(year, 10), parseInt(month));
  }

  const listOfDays = getArrayOfDays(numberOfDays);

  useEffect(() => {
    const validDay = isValidDay(month, day, year);

    if (!validDay) {
      setDay("DD");
    }

    const newDate = { month: month, day: validDay ? day : "DD", year: year };
    onChange(newDate);
  }, [month, day, year, onChange]);

  return (
    <div className="flex flex-wrap justify-center">
      <div className="basis-4/12 px-1">
        <DateDropdown
          name="MM"
          content={listOfMonths}
          defaultOption={month}
          setOption={setMonth}
          required={required}
          className={className}
        />
      </div>
      <div className="basis-4/12 px-1">
        <DateDropdown
          name="DD"
          content={listOfDays}
          defaultOption={day}
          setOption={setDay}
          required={required}
          className={className}
        />
      </div>
      <div className="basis-4/12 px-1">
        <DateDropdown
          name="YYYY"
          content={listOfYears}
          defaultOption={year}
          setOption={setYear}
          required={required}
          className={className}
        />
      </div>
    </div>
  );
}
