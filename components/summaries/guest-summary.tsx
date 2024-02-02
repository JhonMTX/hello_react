import { usePathname } from "next/navigation";
import { GuestContent } from "../edit-vacation";
import { Guests } from "../guests/guests-container";
import { getStepID } from "@/utils/lib";
import { Fragment } from "react";
import { HeaderBlock } from "./block-summary";

function GuestDataBlock({
  name,
  label,
  information,
}: {
  name: string;
  label: string;
  information: GuestContent;
}) {
  const { title, address1, address2, location, additionalGuests } = information;
  return (
    <>
      <div className={`${name}-details px-6 flex justify-between`}>
        <p className="text-[1.3rem] font-semibold basis-6/12">{label}</p>
        <div className="primary-guest basis-6/12">
          <p className="title text-[1.3rem]">{title}</p>
          <p className="address text-[1.3rem]">{address1}</p>
          <p className="address-2 text-[1.3rem]">{address2}</p>
          <p className="location text-[1.3rem]">{location}</p>
        </div>
      </div>
      <div className={`${name}-details px-6 flex justify-between`}>
        <p className="text-[1.3rem] font-semibold basis-6/12">{label}</p>
        <div className="additonal-guests basis-6/12">
          {additionalGuests.map((guest, index) => (
            <p key={"ag-" + index} className={`guest-${index} text-[1.3rem]`}>
              {guest}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

function generateGuests(guestData: Guests) {
  const {
    title,
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    address1,
    address2,
    city,
    state,
    zipCode,
    additionalGuests,
  } = guestData;

  const additionalGuestsInfo = additionalGuests.map(
    (guest) =>
      `${guest.title} ${guest.firstName} ${guest.middleName} ${guest.lastName} (${guest.dateOfBirth})`
  );

  return {
    title: `${title} ${firstName} ${middleName} ${lastName} (${dateOfBirth})`,
    address1: address1,
    address2: address2,
    location: `${city} ${state} ${zipCode}`,
    additionalGuests: additionalGuestsInfo,
  };
}

export default function GuestsSummary({
  name,
  title,
  href,
  hrefLabel,
  summary,
  step,
}: {
  name: string;
  title: string;
  href: string;
  hrefLabel: string;
  summary: Guests;
  step: number;
}) {
  const pathname = usePathname();
  const showHref = getStepID(pathname) > step;
  const information = generateGuests(summary);

  return (
    <Fragment>
      <HeaderBlock
        name={name}
        title={title}
        href={showHref ? href : ""}
        hrefLabel={showHref ? hrefLabel : ""}
      />
      <GuestDataBlock
        name="primary"
        label="Primary Guest:"
        information={information}
      />
    </Fragment>
  );
}
