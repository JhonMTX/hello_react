import { useEffect, useState } from "react";

export default function CustomHead() {
  const [isMobile, setIsMobile] = useState(false);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return !isMobile ? (
    <thead className="custom-head border-none text-[1.6rem] text-sandals-gray">
      <tr className="custom-head-row h-full">
        {days.map((day, index) => {
          const shortName = day.substring(0, 3);
          return (
            <th
              key={day + index}
              scope="col"
              className="custom-head-cell font-normal pb-6"
              aria-label={day}
            >
              {shortName}
            </th>
          );
        })}
      </tr>
    </thead>
  ) : (
    <thead className="w-full block py-2" />
  );
}
