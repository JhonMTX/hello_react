import {  useState } from "react";
import Tooltip from "../../global/tooltip";
import  Icons  from "@/components/global/icons";
import SearchIconFeature from "@/utils/object-icons";
    
    type Props = {
    children?: React.ReactNode; 
    id:number;
    title: string;
    description: string,
    className: string,
    disable: boolean,
    showLabel?: boolean
    };

    export default function FeatureModals({children, id, title, description, className, disable, showLabel}: Props) {
    
      const [isOpen, setIsOpen] = useState(false);

      const handleClick= () => {
        setIsOpen(!isOpen);
      };
      const handleMouseEnter = () => {
        setIsOpen(true);
      };
      const handleMouseLeave = () => {
        setIsOpen(false);
      };
    
      return (
         
            <li className={` ${className}`}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
              <div className={`${disable?'bg-silverlightGray':'bg-anti-flash-white'} p-2 rounded-lg w-[4.4rem] h-[4.4rem] inline-block`}>
                <div className="flex justify-center items-center">
                  <Icons name={`${SearchIconFeature(id)}`} className="fill-lightGray w-full h-full" />
                </div>
              </div>

              {showLabel && (
                    <span className="w-[80%] pl-[1.4rem] text-[1.4rem] font-semibold align-middle">{title}</span>
                  )}
               
                {isOpen &&  (
                  <Tooltip
                    onChange={(value) => setIsOpen(value)}
                    className="bg-white flex flex-col z-10  max-w-[33.3rem] sm:w-[33.3rem] w-[26.1rem]  mx-auto rounded-lg p-10 shadow-guest-shadow">

                  <div className="inline-block">
                    <div className="pb-0 text-onyx font-[400] leading-8">
                    <Icons name={`${SearchIconFeature(id)}`} className="fill-lightGray w-[7.2rem] h-[7.2rem]  align-top hidden sm:inline-block" />
                      
                      <div className="px-8 max-w-[21rem] inline-block">
                        <h4 className="mb-[0.6rem] font-[500] text-[2rem] text-blue text-left leading-[2.5rem]">{title}</h4>
                        <p className="leading-8 text-[1.4rem] font-semibold my-[1.4rem] text-left">{description}</p>
                      </div>
                    </div>
                  </div>

                  </Tooltip>
                )}
            </li>

            
        
          )
}