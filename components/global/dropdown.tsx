import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { RefCallBack } from "react-hook-form";
import { DropdownProps } from "../vacation/vacation.type";

type Props = {
  options: string[];
  value?: string;
  placeholder?: string;
  required?: boolean;
  background?: string;
  topAndBottomArrow?: string;
  brand?: string;
  heightWidthClasses?: string;
} & DropdownProps;

export default function Dropdown({
  name,
  options,
  value,
  placeholder,
  background,
  topAndBottomArrow,
  brand,
  heightWidthClasses,
  onChangeDropdown,
  onChange,
  error,
  elementRef,
}: Props) {
  const inputColor = error ? "red10" : "blue";
  const topArrow = error
    ? "before:absolute before:z-10 before:block before:border-solid before:border-x-[0.8rem] before:border-b-[0.8rem] before:border-b-red10 before:border-x-transparent"
    : `before:absolute before:z-10 before:block before:border-solid before:border-x-[0.8rem] before:border-b-[0.8rem] ${brand === "beaches" ? "before:border-b-blue" : "before:border-b-blue10"} before:border-x-transparent`;
  const bottomArrow = error
    ? "after:absolute after:z-10 after:block after:border-solid after:border-x-[0.8rem] after:border-t-[0.8rem] after:border-t-red10 after:border-x-transparent"
    : `after:absolute after:z-10 after:block after:border-solid after:border-x-[0.8rem] after:border-t-[0.8rem] ${brand === "beaches" ? "after:border-t-blue" : "after:border-t-blue10"} after:border-x-transparent`;
  const requiredClass = error ? "border-red10 text-red10" : "border-platinum";
  const focus = `focus:ring-${inputColor} focus:ring-2 focus:ring-opacity-30`;
  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e);
    onChangeDropdown && onChangeDropdown(e.target.value);
  };

  return (
    <div className="relative text-[1.6rem]">
      <div
        className={`option mb-3 ${topArrow} ${bottomArrow} ${topAndBottomArrow ? topAndBottomArrow : " before:top-[1.4rem] after:top-[2.6rem]"} before:right-4 after:right-4`}
      >
        <select
          className={`${!heightWidthClasses ? "w-full h-[4.8rem]" : heightWidthClasses} px-6 appearance-none focus:outline-none rounded-md font-[500] border-solid border ${background} ${focus} ${requiredClass}`}
          onChange={handleOnChange}
          name={name}
          defaultValue={value || ""}
          ref={elementRef}
        >
          {placeholder && (
            <option key={`${name}-0`} value={""}>
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option key={`${name}-${index + 1}`} className={`${name}-opt`} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="text-red10 text-[1.2rem]">{error}</p>}
    </div>
  );
}
