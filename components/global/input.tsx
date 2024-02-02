import { ChangeEvent } from "react";
import Icons from "./icons";
import { InputProps } from "../vacation/vacation.type";

type Props = {
  name?: string;
  value?: string;
  type?: string;
  icon?: string;
  iconColor?: string;
  required?: boolean;
} & InputProps;

export default function Input({
  name,
  value,
  placeholder,
  type,
  icon,
  iconColor,
  onChange,
  elementRef,
  error,
  onChangeInput,
  required,
}: Props) {
  const inputColor = error ? "red10" : "blue";
  const requiredClass = error ? "border-red text-red10" : "border-platinum";
  const focus = `focus:ring-${inputColor} focus:ring-2 focus:ring-opacity-30`;
  const icolor = iconColor ? `fill-${iconColor}` : "fill-sandals-gray";
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    onChangeInput && onChangeInput(e.target.value);
  };

  return (
    <div className="relative text-[1.6rem]">
      <div
        className={`option mb-3 before:top-[1.4rem] after:top-[2.6rem] before:right-4 after:right-4`}
      >
        <input
          type={type ? type : "text"}
          className={`${name} w-full h-[4.8rem] px-6 appearance-none focus:outline-none rounded-md font-[500] border-solid border ${focus} ${requiredClass}`}
          onChange={handleOnChange}
          value={value}
          placeholder={placeholder}
          name={name}
          ref={elementRef}
        />
        {icon && <Icons className={`w-10 h-10 ${icolor} absolute top-4 right-4`} name={icon} />}
      </div>
      {(error || required) && (
        <p className="text-red10 text-[1.2rem]">{error || "This field is required"}</p>
      )}
    </div>
  );
}
