import Dropdown from "@/components/global/dropdown";
import { useState } from "react";

type Props = {
  brand: string;
  idPassenger: number;
  childrenAges: string[];
};

const GuestChildrenForm = ({ brand, idPassenger, childrenAges }: Props) => {
  const [childrenAge, setChildrenAge] = useState("");
  const onChangeAge = (age: string) => {
    setChildrenAge(age);
  };
  return (
    <div className="grid grid-cols-2 gap-1 bg-anti-flash-white mt-4">
      <div className="mx-auto my-auto pt-4 pb-4 mt-4 mb-4">
        <label className="text-[1.8rem] text-black h-6">
          {`Child ${idPassenger} Age`}
          <p className="relative top-[-0.5rem] pl-[0.5rem] inline-flex text-blue p-0.5 text-[1.35rem]">
            *
          </p>
        </label>
      </div>
      <div className="my-auto pt-4 pl-4 pr-4">
        <Dropdown
          name="children"
          brand={brand}
          options={childrenAges}
          value={childrenAge}
          placeholder={"Select age"}
          background={"bg-white"}
          onChangeDropdown={(value) => onChangeAge(value)}
        />
      </div>
    </div>
  );
};

export default GuestChildrenForm;
