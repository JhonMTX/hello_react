import { Dispatch, SetStateAction } from "react";
import { ItemCheckBox } from "./items-check-box";
import { getDisabledValues } from "./functions";

export function CheckBoxGroupLevels(
  brand: string,
  label: string,
  key: string,
  selectedOptions: string[],
  setCheckBoxState: Dispatch<SetStateAction<string[]>>,
  useDisabledLevels: boolean,
  options?: string[],
  matchRoomsOptions?: string[],
) {
  const disabledValues = useDisabledLevels ? getDisabledValues(options, matchRoomsOptions) : [];
  const selectedValues: string[] = [];

  selectedOptions.forEach((option: string, indexT: number) => {
    if (disabledValues.length > 0) {
      if (!disabledValues.find((disabled: string) => option === disabled)) {
        selectedValues.push(option);
      } else {
        selectedOptions.splice(indexT, 1);
      }
    } else {
      selectedValues.push(option);
    }
  });

  return (
    <div
      key={key}
      className="px-[1.5rem]  md:p-[0.5rem] lg:basis-3/12 md:basis-3/12 sm:basis-6/12 basis-full mb-8 sm:m-0 sm:h-[30.98rem] sm:p-[0.5rem] md:h-[29rem]"
    >
      <div className="h-[23.78rem]   px-14 md:px-14 pt-[1.7rem] md:pt-[1.7rem] pb-[2rem] md:pb-[2rem] bg-platinum rounded-[0.8rem] rounded-b-[0.5rem] sm:px-[3.5rem] sm:pb-[8rem] sm:m-0 sm:h-full">
        <h4 className="text-[1.8rem] leading-[1] font-semibold mb-8 mt-2 text-onyx uppercase">
          {label}
        </h4>
        <div className="w-full relative">
          <div className="h-[19rem] overflow-y-auto">
            {options &&
              options.map((nameOption, i) =>
                ItemCheckBox(
                  i,
                  nameOption,
                  "bg-blue",
                  disabledValues,
                  selectedOptions,
                  selectedValues,
                  setCheckBoxState,
                ),
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
