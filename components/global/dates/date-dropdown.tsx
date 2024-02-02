import { Dispatch, SetStateAction } from "react";

export default function DateDropdown({
  name,
  content,
  defaultOption,
  required = false,
  className,
  setOption,
}: {
  name: string;
  content: number[];
  defaultOption: string;
  required: boolean;
  className?: string;
  setOption: Dispatch<SetStateAction<string>>;
}) {
  const inputColor = required ? "red10" : "blue";
  const topArrow = required
    ? "before:absolute before:z-10 before:block before:border-solid before:border-x-[0.8rem] before:border-b-[0.8rem] before:border-b-red10 before:border-x-transparent"
    : "before:absolute before:z-10 before:block before:border-solid before:border-x-[0.8rem] before:border-b-[0.8rem] before:border-b-blue before:border-x-transparent";
  const bottomArrow = required
    ? "after:absolute after:z-10 after:block after:border-solid after:border-x-[0.8rem] after:border-t-[0.8rem] after:border-t-red10 after:border-x-transparent"
    : "after:absolute after:z-10 after:block after:border-solid after:border-x-[0.8rem] after:border-t-[0.8rem] after:border-t-blue after:border-x-transparent";
  const requiredClass = required
    ? "border-solid border border-red text-red10"
    : "px-6";
  const focus = `focus:ring-${inputColor} focus:ring-2`;

  return (
    <div className="relative text-[1.6rem]">
      <div
        className={`option mb-3 ${topArrow} ${bottomArrow} before:top-[1.4rem] after:top-[2.6rem] before:right-4 after:right-4`}
      >
        <select
          className={` ${className}  w-full h-[4.8rem]  appearance-none focus:outline-none font-semibold rounded-md ${focus} ${requiredClass}`}
          value={defaultOption}
          onChange={(e) => setOption(e.target.value)}
        >
          <option key={`${name}-0`} value={name}>
            {name}
          </option>
          {content.map((option, index) => (
            <option key={`${name}-${index + 1}`} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
