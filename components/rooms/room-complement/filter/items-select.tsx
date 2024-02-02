import { Dispatch, SetStateAction } from "react";
import Icons from "@/components/global/icons";

export function ItemSelect(
  key: number,
  name: string,
  deleteFilter: Dispatch<string>,
) {
  return (
    <div
      className="bg-white rounded-[0.5rem] text-blue flex flex-shrink-0 text-[1.5rem] text-[600] m-[0.5rem] px-6 capitalize h-[5rem]"
      key={key}
    >
      <p className="flex content-center items-center text-[600]">{name}</p>
      <button className="ml-4 cursor-pointer " onClick={() => deleteFilter(name)}>
        <Icons name="lightCross" className={`inline  relative w-[1.5rem] h-[1.5rem] fill-blue `} />
      </button>
    </div>
  );
}
