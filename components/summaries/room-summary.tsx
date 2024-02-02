import { Room } from "@/utils/fetch";
import { getStepID } from "@/utils/lib";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { DataBlock, HeaderBlock } from "./block-summary";

export default function RoomSummary({
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
    summary: Room;
    step: number;
  }) {
    const { categoryCode, categoryView, name: roomName, amenities } = summary;
    const pathname = usePathname();
    const showHref = getStepID(pathname) > step;
    const content = [
      {
        name: "room",
        label: "Room Category:",
        information: `${roomName} - ${categoryCode}`,
      },
      {
        name: "features",
        label: "Room Categories:",
        information: amenities
          .filter((amenitie) => amenitie.amenityType === "Features")
          .map((amenitie) => amenitie.amenityName)
          .toString()
          .replace(",", ", "),
      },
      {
        name: "view",
        label: "Room View:",
        information: categoryView.toString().replace(",", ", "),
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