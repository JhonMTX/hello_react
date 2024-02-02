import { Dispatch, SetStateAction } from "react";

export default function ItineraryCheckbox({
  name,
  label,
  options,
  checkboxList,
  availableOptions,
  setState,
}: {
  name: string;
  label: string;
  options: string[];
  checkboxList: string[];
  availableOptions: boolean[];
  setState: Dispatch<SetStateAction<string[]>>;
}) {
  const JSXOptions = options.map((option, index) => {
    return (
      <div
        key={name + index}
        className="option my-4 sm:mb-3 sm:mt-0 flex items-center"
      >
        <input
          className={`${name} w-8 h-8 m-0`}
          type="checkbox"
          onChange={() => {
            const newCheckboxList = checkboxList.filter(
              (checkbox) => checkbox !== option
            );
            if (checkboxList.some((checkbox) => checkbox === option)) {
              setState(newCheckboxList);
            } else {
              newCheckboxList.push(option);
              setState(newCheckboxList);
            }
          }}
          checked={checkboxList.some((checkbox) => checkbox === option)}
          disabled={!availableOptions[index]}
        />
        <label className="pl-3">{option}</label>
      </div>
    );
  });

  return (
    <div
      className={`${name}-options basis-full mb-6 sm:basis-6/12 md:basis-3/12 px-6`}
    >
      <h3 className="text-[1.8rem] font-[500] mb-4">{label}</h3>
      <div className="options text-2xl flex flex-col">{JSXOptions}</div>
    </div>
  );
}
