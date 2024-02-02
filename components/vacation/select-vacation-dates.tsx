import { useEffect, useState } from "react";
import Calendar from "../global/calendar/calendar";
import Popover from "../global/popover";
import { differenceInDays, format } from "date-fns";
import MobileModal from "../global/calendar/mobile-modal";
import CalendarInput from "../global/calendar/calendar-input";
import { object, string } from "zod";
import clsx from "clsx";

type OpeningDays = {
  [key: string]: string;
};

type Props = {
  brand: string;
  label: string;
  rstCode: string;
  selectedDays: {
    from: string;
    to: string;
  };
  minNights: number;
  maxNights: number;
  yearLimit: number;
  openingDays: OpeningDays;
  warningMessage: {
    minNights: string;
    maxNights: string;
  };
  error?: string;
  onSelect: (values: { from: Date; to: Date }) => void;
};

export default function SelectVacationDates({
  brand,
  label,
  rstCode,
  selectedDays,
  minNights,
  maxNights,
  yearLimit,
  openingDays,
  warningMessage,
  error,
  onSelect,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [focusFrom, setFocusFrom] = useState(true);
  const [focusTo, setFocusTo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { from, to } = selectedDays;
  const fromDate = new Date(from);
  const toDate = new Date(to);
  const getDiffDays = differenceInDays(toDate, fromDate);
  const vacationLength = `Vacation Length: ${getDiffDays} ${getDiffDays > 1 ? "nights" : "night"}`;
  const showMaxMessage = getDiffDays > minNights;
  const showVacationLength = from && to;
  const fromDateFormat = from ? format(from, "eeee',' MMMM dd',' yyyy") : "";
  const toDateFormat = to ? format(to, "eeee',' MMMM dd',' yyyy") : "";
  const dateInputStyles =
    "bg-sandals-light-gray w-full h-[4.8rem] px-6 appearance-none focus:outline-none rounded-md font-[500] border-solid border pr-16";

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const openPopup = (value: boolean) => {
    setIsOpen(value);
  };

  const onChange = (from: boolean, to: boolean) => {
    setFocusFrom(from);
    setFocusTo(to);
  };

  const setValidation = (value: boolean) => {
    setIsValid(value);

    if (value) {
      setIsOpen(false);
      document.body.classList.remove("overflow-hidden");
    }
  };

  const opening = rstCode && Object.keys(openingDays).length > 0 ? openingDays[rstCode] : "";

  return (
    <div className="vacation-dates w-full md:relative">
      <p className="dates-label text-[1.4rem] sm:text-[1.8rem] text-onyx font-[500] my-2">
        {label}
      </p>
      <div className="dates-selection flex flex-wrap w-full">
        <div className="check-in w-full basis-full sm:basis-1/2 sm:max-w-[50%] sm:pr-6">
          <CalendarInput
            brand={brand}
            className={`check-in ${dateInputStyles}`}
            placeholder="Check-In Date"
            value={fromDateFormat}
            onClick={() => {
              onChange(true, false);
              openPopup(true);
            }}
            icon="calendar"
            error={error}
          />
        </div>
        <div className="check-out w-full basis-full sm:basis-1/2 sm:max-w-[50%] sm:pl-6">
          <CalendarInput
            brand={brand}
            className={`check-out ${dateInputStyles}`}
            placeholder="Check-Out Date"
            value={toDateFormat}
            onClick={() => {
              onChange(false, true);
              openPopup(true);
            }}
            icon="calendar"
            error={error}
          />
        </div>
      </div>
      {isOpen && !isMobile && (
        <Popover
          className="calendar w-auto left-0 md:left-auto bg-white sm:w-full md:w-auto"
          onChange={openPopup}
        >
          <Calendar
            brand={brand}
            selectedDays={selectedDays}
            yearLimit={yearLimit}
            minNights={minNights}
            maxNights={maxNights}
            warningMessage={warningMessage}
            focusFrom={focusFrom}
            focusTo={focusTo}
            validDates={Boolean(error)}
            showMaxMessage={showMaxMessage}
            opening={opening}
            onChange={onSelect}
            setValidation={setValidation}
          />
        </Popover>
      )}
      {isOpen && isMobile && (
        <MobileModal
          className="bg-white flex flex-col z-10 w-full h-full relative mx-auto rounded-lg py-10"
          isOpen={isOpen}
          focusFrom={focusFrom}
          onChange={openPopup}
        >
          <Calendar
            brand={brand}
            selectedDays={selectedDays}
            yearLimit={yearLimit}
            minNights={minNights}
            maxNights={maxNights}
            warningMessage={warningMessage}
            focusFrom={focusFrom}
            focusTo={focusTo}
            validDates={Boolean(error)}
            showMaxMessage={showMaxMessage}
            opening={opening}
            onChange={onSelect}
            setValidation={setValidation}
          />
        </MobileModal>
      )}
      {showVacationLength && (
        <div className="vacation-length text-[1.4rem] basis-full sm:text-[1.6rem] pt-1 sm:pt-3">
          <p className={clsx(!isValid && "text-red10")}>{vacationLength}</p>
        </div>
      )}
    </div>
  );
}
