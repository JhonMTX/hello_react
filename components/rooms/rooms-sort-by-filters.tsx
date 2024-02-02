import React, { useState } from "react";
import Dropdown from "../global/dropdown";

type Props = {
  brand: string;
  butlerLevel: boolean;
  conciergeLevel: boolean;
  luxuryLevel: boolean;
  roomFilterOptions: string[];
  onChange: (value: string) => void;
};

const RoomsSortByFilters = ({
  brand,
  butlerLevel,
  conciergeLevel,
  luxuryLevel,
  roomFilterOptions,
  onChange,
}: Props) => {
  const [roomFilter, setRoomFilter] = useState<string>("");
  let roomFilterOptionsLocal: string[] = [];

  const roomChangeFilterOptions = (param: number) => {
    if (param == 1) {
      return roomFilterOptions.filter((option) => option !== "Availability");
    }
    if (param == 2) {
      return roomFilterOptions.filter(
        (option) =>
          option !== "Category Level High to Low" &&
          option !== "Category Level Low to High" &&
          option !== "Availability",
      );
    }
    if (param == 3) {
      return roomFilterOptions.filter(
        (option) => option !== "Price Low to High" && option !== "Price High to Low",
      );
    }
    return roomFilterOptions;
  };

  if (
    (!butlerLevel && !conciergeLevel && !luxuryLevel) ||
    (butlerLevel && conciergeLevel && !luxuryLevel) ||
    (butlerLevel && !conciergeLevel && luxuryLevel) ||
    (!butlerLevel && conciergeLevel && luxuryLevel)
  ) {
    roomChangeFilterOptions(1).map((option) => roomFilterOptionsLocal.push(option));
  }
  if (
    (butlerLevel && !conciergeLevel && !luxuryLevel) ||
    (!butlerLevel && conciergeLevel && !luxuryLevel) ||
    (!butlerLevel && !conciergeLevel && luxuryLevel)
  ) {
    roomChangeFilterOptions(1).map((option) => roomFilterOptionsLocal.push(option));
  }

  return (
    <div className="inline-flex items-center place-content-between mt-[1.5rem] sm:mt-[0] mb-[1.5rem] sm:mb-[1.5rem] sm:w-1/2 gap-[1.5rem]">
      <label className="w-3/12 md:w-2/12 text-left text-[1.6rem] font-semibold">Sort By: </label>
      <div className="options relative text-2xl -z-0 w-9/12 md:w-10/12 mt-2 ">
        <Dropdown
          name={"roomsfilters"}
          options={roomFilterOptionsLocal}
          value={roomFilter}
          brand={brand}
          background={" border border-gray-400 rounded-lg bg-white text-sandals-gray "}
          heightWidthClasses=" w-[29.3rem] h-[3.9rem] "
          topAndBottomArrow={"before:top-[1.2rem] after:top-[2.3rem]"}
          onChangeDropdown={(value) => setRoomFilter(value)}
        />
      </div>
    </div>
  );
};

export default RoomsSortByFilters;
