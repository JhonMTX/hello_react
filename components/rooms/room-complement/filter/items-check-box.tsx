import { Dispatch, SetStateAction } from "react";
import Icons from "@/components/global/icons";

export function ItemCheckBox(
  key: number,
  option: string,
  checkboxBg: string,
  disabledValues: string[],
  selectedOptions: string[],
  selectedValues: string[],
  setCheckBoxState: Dispatch<SetStateAction<string[]>>,
) {
  const handleCheckboxChange = (option: string) => {
    const indexT = selectedValues.indexOf(option);
    if (indexT !== -1) {
      selectedValues.splice(indexT, 1);
    } else {
      selectedValues.push(option);
    }
    setCheckBoxState(selectedValues);
  };

  return (
    <div
      className="option my-4 sm:mb-3 sm:mt-0 flex items-center"
      key={`${key.toString()}-${option.replaceAll(" ", "-")}`}
    >
      <label className="flex items-center">
        <input
          id={option}
          name={option}
          className={` w-[2.3rem] h-[2.3rem] m-0 relative p-3 sm:p-0 appearance-none  border border-platinum rounded-md   ${
            disabledValues.includes(option)
              ? "border-sandals-gray border-solid border-[0.1rem] !bg-transparent opacity-[0.3]"
              : ""
          }
        ${selectedOptions.includes(option) ? checkboxBg : "bg-white"}`}
          type="checkbox"
          onChange={() => handleCheckboxChange(option)}
          checked={selectedOptions.includes(option)}
          value={option}
          {...(disabledValues.includes(option) ? { disabled: true } : {})}
        />
        <span
          className={`pl-3 fz-3 text-[1.2rem] text-onyx ${
            disabledValues.includes(option) ? "opacity-[0.3]" : ""
          } font-semibold`}
        >
          {" "}
          {option}{" "}
        </span>
        {selectedOptions.includes(option) && (
        <Icons name="check"  className="w-6 h-6 my-3 mx-2 absolute fill-white"></Icons>
      )}
      </label>
     
    </div>
  );
}
