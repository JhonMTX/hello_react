import { useEffect, useState } from "react";
import {
  DateRange,
  DayPicker,
  SelectRangeEventHandler,
  ClassNames,
} from "react-day-picker";
import "react-day-picker/dist/style.css";
import CustomCaption from "./custom-caption";
import CustomHead from "./custom-head";
import Icons from "../icons";
import { getTotalMonths } from "@/utils/calculate-days";
import CustomMonths from "./custom-monts";
import { differenceInDays } from "date-fns";

type Props = {
  brand: string;
  selectedDays: {
    from: string;
    to: string;
  };
  yearLimit: number;
  minNights: number;
  maxNights: number;
  warningMessage: {
    minNights: string;
    maxNights: string;
  };
  focusFrom: boolean;
  focusTo: boolean;
  validDates: boolean;
  showMaxMessage: boolean;
  opening?: string;
  onChange: (values: { from: Date; to: Date }) => void;
  setValidation: (value: boolean) => void;
};

export default function Calendar({
  brand,
  selectedDays,
  yearLimit,
  minNights,
  maxNights,
  warningMessage,
  focusFrom,
  focusTo,
  validDates,
  showMaxMessage,
  opening,
  onChange,
  setValidation,
}: Props) {
  const defaultSelected: DateRange = {
    from: selectedDays.from ? new Date(selectedDays.from) : undefined,
    to: selectedDays.to ? new Date(selectedDays.to) : undefined,
  };

  const selectedBackground = "bg-blue text-white relative rounded-full";
  const seletedHover =
    "after:-z-10 after:top-0 after:w-2/5 after:h-full after:absolute after:bg-winter-wizard";

  const middleSelectedStyles =
    "[&>*:nth-child(1)>.c-custom-middle]:rounded-l-full [&>*:nth-child(7)>.c-custom-middle]:rounded-r-full";
  const classNames: ClassNames = {
    months: "c-custom-months flex flex-col sm:flex-row pt-32 sm:pt-0",
    month: "c-custom-month mx-4 my-6 sm:mt-0",
    row: `c-custom-row h-full text-[2rem] text-outer-space font-normal ${middleSelectedStyles}`,
    day_range_start: `${selectedBackground} ${seletedHover} after:left-[65%] hover:!bg-blue`,
    day_range_end: `${selectedBackground} ${seletedHover} after:right-[65%] hover:!bg-blue`,
    day_range_middle: "c-custom-middle hover:!bg-winter-wizard bg-winter-wizard after:bg-transparent",
    day_disabled: "text-chinese-silver hover:!bg-transparent",
    caption_dropdowns: "flex justify-center mb-2",
    day: "flex items-center justify-center m-0 w-full h-full hover:bg-platinum-soft",
    cell: "c-custom-cell p-0 text-center w-16 h-16",
    //NOTE: These varibales are empty to remove the default styles of the calendar.
    day_selected: "",
    day_outside: "",
    button_reset: "",
    button: "",
  };

  const disabledDays = [{ from: new Date("12-01-2023"), to: opening ? new Date(opening) : new Date() }];
  const currentMonth = opening ? new Date(opening) : new Date;
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>(
    defaultSelected
  );

  const [validSelection, setValidSelection] = useState(true); // TODO: This value need to changed when you receive default values (validDates)
  const [isMinWarning, setIsMinWarning] = useState(true);
  const isSandals = brand === "sandals";
  const [focusInFrom, setFocusInFrom] = useState(focusFrom);
  const [focusInTo, setFocusInTo] = useState(focusTo);
  const [isMobile, setIsMobile] = useState(false);
  // ****************** START PENDING IMPLEMENTATION MOBILE
  const totalMonths = getTotalMonths(yearLimit);
  // ****************** END PENDING IMPLEMENTATION MOBILE

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const {from, to} = selectedDays;
    if(from && to) {
      const getDiffDays = differenceInDays(to, from);
      const isValid = getDiffDays >= minNights && getDiffDays <= maxNights;
      setValidSelection(isValid);
    }
  }, [selectedDays, maxNights, minNights]);

  const validationCheck = (from: Date, to: Date) => {
    onChange({ from: from, to: to });
    const getDiffDays = differenceInDays(to, from);
    const isValid = getDiffDays >= minNights && getDiffDays <= maxNights;
    const isMin = getDiffDays < minNights;
    setValidSelection(isValid);
    setIsMinWarning(isMin);
    setValidation(isValid);
  };

  const handleRangeSelect: SelectRangeEventHandler = (range?: DateRange) => {
    if (selectedRange?.from && selectedRange?.to) {
      // click on check-in scenario
      if (focusInFrom && range?.from && range.to) {
        const diffFrom = differenceInDays(range.from, selectedDays.from);
        const diffTo = differenceInDays(range.to, selectedDays.to);

        if (diffFrom === 0 && diffTo > 0) {
          setSelectedRange({ from: range.to, to: undefined });
          setFocusInFrom(false);
        } else if (diffFrom === 0 && diffTo < 0) {
          setSelectedRange({ from: range.to, to: selectedRange.to });
          validationCheck(range.to, selectedRange.to);
          setFocusInFrom(false);
        } else {
          setSelectedRange({ from: range.from, to: range.to });
          validationCheck(range.from, range.to);
          setFocusInFrom(false);
        }
      }
      // click on check-out scenario
      else if (focusInTo && range?.from && range.to) {
        const diffFrom = differenceInDays(range.from, selectedDays.from);
        const diffTo = differenceInDays(range.to, selectedDays.to);

        if (diffTo === 0 && diffFrom < 0) {
          setSelectedRange({ from: range.from, to: undefined });
          setFocusInTo(false);
        } else {
          setSelectedRange({ from: range.from, to: range.to });
          validationCheck(range.from, range.to);
          setFocusInTo(false);
        }
      } else {
        setSelectedRange(range);
        setFocusInFrom(false);
        setFocusInTo(false);

        if (range?.from && range.to) {
          validationCheck(range.from, range.to);
        } else {
          setValidation(false);
        }
      }
    } else {
      setSelectedRange(range);
      setFocusInFrom(false);
      setFocusInTo(false);

      if (range?.from && range.to) {
        validationCheck(range.from, range.to);
      } else {
        setValidation(false);
      }
    }
  };

  const warningMsg = isMinWarning && !showMaxMessage
    ? warningMessage.minNights
    : warningMessage.maxNights;

  return (
    <div>
      <div className="flex flex-col items-center justify-between sm:pt-10 sm:pb-6 sm:px-8 md:px-24 relative z-0">
        <DayPicker
          mode="range"
          numberOfMonths={isMobile ? 5 : 2}
          classNames={classNames}
          selected={selectedRange}
          onSelect={handleRangeSelect}
          disabled={disabledDays}
          defaultMonth={selectedRange?.from}
          fromMonth={currentMonth}
          toYear={yearLimit}
          captionLayout="dropdown"
          components={{
            Months: CustomMonths,
            Dropdown: CustomCaption,
            Head: CustomHead,
          }}
        />
        <div
          className={`custom-footer py-8 px-12 sm:p-0 fixed bottom-0 left-0 bg-anti-flash-white sm:bg-transparent sm:bottom-auto sm:left-auto sm:relative flex sm:max-w-[57rem] ${
            validSelection ? "hidden" : ""
          }`}
        >
          <Icons
            className="h-12 w-24 sm:w-6 sm:h-6 mt-1 sm:mt-2 fill-red10"
            name="alert"
          />
          <p className="warning-message text-[1.2rem] sm:text-[1.4rem] ml-3 sm:ml-2">
            {warningMsg}{" "}
            <a
              href="tel:18887263257"
              className={`uppercase hover:text-spiro-disco ${
                isSandals ? "text-dark-blue" : "text-blue"
              }`}
            >
              1-888-{brand}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
