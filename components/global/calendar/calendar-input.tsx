import { Dispatch, SetStateAction } from "react";
import Icons from "../icons";
import clsx from "clsx";

type Props = {
  brand: string;
  className: string;
  value: string;
  icon?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  onClick: () => void;
};

export default function CalendarInput({
  brand,
  className,
  value,
  error,
  placeholder,
  icon,
  onClick,
}: Props) {
  const brandColor = brand === "sandals" ? "dark-blue" : "blue";

  return (
    <div className="text-[1.5rem] sm:text-[1.6rem]">
      <div className="input mb-3 flex relative" onClick={() => onClick()}>
        <input
          type="text"
          className={clsx(
            className,
            brandColor,
            "border-platinum text-onyx placeholder-onyx",
            error && "placeholder-red10 border-red10 text-red10"
          )}
          value={value}
          placeholder={placeholder}
          readOnly
        />
        {icon && (
          <Icons
            className={clsx(
              "w-[3.4rem] h-[3.3rem] sm:w-10 sm:h-10 absolute top-3 sm:top-4 right-4",
              `fill-${brandColor}`,
              error && "fill-red10"
            )}
            name={icon}
          />
        )}
      </div>
    </div>
  );
}
