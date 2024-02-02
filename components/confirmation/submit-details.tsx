import { SpecialRequest, submitSpecialRequestDetails } from "@/utils/fetch";
import { MMDDYYYY } from "../global/dates/date-mmddyyyy";

type Props = {
  selectedOptions: string[];
  anniversaryDate: MMDDYYYY;
  roomCloser: string;
  message: string;
  bookingNumber: number;
};

const formatDate = (date:string) => {
  const formatedDate = date.length === 1 ? `0${date}` : date;
  return formatedDate;
}

/** The commented code is something that has to be discuss first */
const specialRequestData = (
  selectedOptions: string[],
  anniversaryDate?: MMDDYYYY,
  /*birthday?: MMDD,*/ roomCloser?: string,
  message?: string
) => {
  const formInformation = {} as any;
  const messageKey = "Special Request";
  const { month, day, year } = anniversaryDate
    ? anniversaryDate
    : { month: "", day: "", year: "" };

  selectedOptions.forEach((option) => {
    if (option === "Wedding Anniversary") {
      const formatMonth = formatDate(month);
      const formatDay =  formatDate(day);
      formInformation[option] = `${formatMonth}-${formatDay}-${year}`;
    } else if (option === "Request Room Closer To") {
      formInformation[option] = roomCloser || "";
    } else {
      formInformation[option] = "true";
    }
  });

  if (message) {
    formInformation[messageKey] = message;
  }

  return formInformation;
};

/** */
const submitDetails = (content: SpecialRequest) => {
  submitSpecialRequestDetails(content);
};

export default function SubmitDetails({
  selectedOptions,
  anniversaryDate,
  roomCloser,
  message,
  bookingNumber,
}: Props) {
  const comments = specialRequestData(
    selectedOptions,
    anniversaryDate,
    roomCloser,
    message
  );
  const content = {
    comments: comments,
    bookingNumber: bookingNumber,
  };

  return (
    <div className="h-28 mt-8 mb-4 flex justify-center items-center">
      <button
        onClick={() => submitDetails(content)}
        className="submit-details text-[2rem] sm:text-[3.2rem] w-[29rem] sm:w-[41.8rem] py-4 uppercase text-white bg-blue hover:bg-spiro-disco rounded-lg"
      >
        Submit Details
      </button>
    </div>
  );
}
