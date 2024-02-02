import { Dispatch, SetStateAction, useEffect, useState } from "react";
import DateDropdown from "./date-dropdown";
import {
  getArrayOfDays,
  getArrayOfMonths,
  getDaysInMonth,
} from "@/utils/calculate-days";

export type MMDD = {
  month: string;
  day: string;
};

function isValidDay(month: string, day: string) {
  const currentYear = new Date().getFullYear();
  const monthDays = getDaysInMonth(currentYear, parseInt(month));
  const parsedDay = parseInt(day);
  const arrayOfDays = getArrayOfDays(monthDays);
  let validDay = true;

  if (month !== "MM") {
    validDay = arrayOfDays.includes(parsedDay);
  }

  return validDay;
}

export default function DateMMDD({
  date,
  required,
  onChange,
}: {
  date: MMDD;
  required: boolean;
  onChange: Dispatch<SetStateAction<MMDD>>;
}) {
  const [month, setMonth] = useState<string>(date.month);
  const [day, setDay] = useState<string>(date.day);
  let numberOfDays = 31;
  const year = new Date().getFullYear();

  if (month !== "MM") {
    numberOfDays = getDaysInMonth(year, parseInt(month));
  }

  const listOfDays = getArrayOfDays(numberOfDays);
  const listOfMonths = getArrayOfMonths();

  useEffect(() => {
    const validDay = isValidDay(month, day);

    if (!validDay) {
      setDay("DD");
    }
    const newDate = { month: month, day: validDay ? day : "DD" };

    onChange(newDate);
  }, [month, day, onChange]);

  return (
    <div className="flex flex-wrap justify-center">
      <div className="basis-6/12 px-6">
        <DateDropdown
          name="MM"
          content={listOfMonths}
          defaultOption={month}
          setOption={setMonth}
          required={required}
        />
      </div>
      <div className="basis-6/12 px-6">
        <DateDropdown
          name="DD"
          content={listOfDays}
          defaultOption={day}
          setOption={setDay}
          required={required}
        />
      </div>
    </div>
  );
}
