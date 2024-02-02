import { useState } from "react";
import Icons from "../global/icons";

type Props = {
  children: React.ReactNode;
  title: string;
};

const RoomsMoreDetails = ({ children, title }: Props) => {
  const [iconCollapse, setIconCollapse] = useState(true);
  const toggleCollapse = () => {
    setIconCollapse(!iconCollapse);
  };
  return (
    <div>
      <div className="flex flex-row py-8 border-t-2 border-anti-flash-white">
        <div className="grid grid-cols-1">
          <div className="flex flex-row mb-4">
            <div className="pr-4">
              <div className="mt-2">
                <button onClick={toggleCollapse}>
                  <Icons
                    className="w-5 h-5 text-[1.4rem] fill-blue cursor-pointer"
                    name={iconCollapse ? "plus" : "minus"}
                  />
                </button>
              </div>
            </div>
            <div>
              <span className="uppercase text-[1.6rem] font-semibold">{title}</span>
            </div>
          </div>
          {!iconCollapse && children}
        </div>
      </div>
    </div>
  );
};

export default RoomsMoreDetails;
