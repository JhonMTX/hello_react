import { BEACHES_NUMBER, SANDALS_NUMBER } from "@/utils/constants";
import { Dispatch, SetStateAction } from "react";

export default function SpecialMessage({
  onChange,
}: {
  onChange: Dispatch<SetStateAction<string>>;
}) {
  const brand = "sandals";
  const phoneNumber = brand === "sandals" ? SANDALS_NUMBER : BEACHES_NUMBER;
  return (
    <>
      <p className="description text-[1.8rem] font-[500] mb-4 text-center">
        Write a Message or a Special request not listed above (Optional)
      </p>
      <textarea
        id="message-or-request"
        className="w-full h-72 text-[1.6rem] p-4 rounded-lg appearance-none focus:border-blue focus:right-1"
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
      <p className="text-[1.6rem] px-4 text-center my-4">
        <span className="font-[500]">Please note:</span> For any special dietary
        requirements or mobility issues please call{" "}
        <a href={`tel:${phoneNumber}`} className="hover:text-blue">
          1-888-{brand.toUpperCase()}
        </a>{" "}
        option 4 ext. 6111 or email{" "}
        <a
          className="email-link hover:text-blue underline"
          href="mailto: specialservices@uvi.sandals.com"
        >
          specialservices@uvi.sandals.com
        </a>
      </p>
    </>
  );
}
