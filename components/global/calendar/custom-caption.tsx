import { subMonths } from "date-fns";
import { DropdownProps, useNavigation } from "react-day-picker";
import CustomDropdown from "./custom-dropdown";
import { useEffect, useState } from "react";

export default function CustomCaption(props: DropdownProps) {
  const [isMobile, setIsMobile] = useState(false);
  const { currentMonth, goToDate } = useNavigation();
  const { name, value, children, onChange } = props;
  const brand = "sandals";
  const monthIndex = typeof value === "number" ? value : 0;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const onSelect = (value: string) => {
    if (onChange) {
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      currentMonth.setFullYear(parseInt(value));

      if (currentDate > currentMonth) {
        goToDate(currentDate);
      } else {
        const goTo = subMonths(currentMonth, 1);
        goToDate(goTo);
      }
    }
  };

  return (
    <div className="custom-caption font-semibold flex items-center">
      {isMobile ? (
        <>
          {name === "years" ? (
            <h3 className="text-[2.8rem]">{value}</h3>
          ) : (
            <h3 className="text-[2.8rem] pr-4">{months[monthIndex]}</h3>
          )}
        </>
      ) : (
        <>
          {name === "years" ? (
            <CustomDropdown
              name={name}
              value={value}
              brand={brand}
              ariaLabel={props["aria-label"]}
              onChange={onSelect}
            >
              {children}
            </CustomDropdown>
          ) : (
            <h3 className="text-[2.8rem] font-normal">{months[monthIndex]}</h3>
          )}
        </>
      )}
    </div>
  );
}
