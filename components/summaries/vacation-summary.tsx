import { VacationDetails } from "@/utils/fetch";
import { getStepID } from "@/utils/lib";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { DataBlock, HeaderBlock } from "./block-summary";

export default function VacationSummary({
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
  summary: VacationDetails;
  step: number;
}) {
  const { rstCode, checkIn, checkOut, adults, children } = summary;
  const pathname = usePathname();
  const showHref = getStepID(pathname) > step;
  const content = [
    {
      name: "resort",
      label: "Resort Selected:",
      information: rstCode,
    },
    {
      name: "check-in",
      label: "Check-in:",
      information: checkIn,
    },
    {
      name: "check-out",
      label: "Check-out:",
      information: checkOut,
    },
    {
      name: "guests",
      label: "Guests:",
      information: `${adults && adults + " Adults"} ${
        children > 0 ? `"," + ${children} + Children` : ""
      }`,
    },
  ];

  return (
    <Fragment>
      <HeaderBlock
        name={name}
        title={title}
        href={showHref ? href : ""}
        hrefLabel={showHref ? hrefLabel : ""}
      />
      {content.map((data, index) => {
        if (typeof data.information === "string") {
          return (
            <DataBlock
              key={`${name}-db-${index}`}
              name={data.name}
              label={data.label}
              information={data.information}
            />
          );
        }
      })}
    </Fragment>
  );
}
