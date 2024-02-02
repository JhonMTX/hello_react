import { useState } from "react";
import Modal from "../global/modal";
import Icons from "../global/icons";

type Props = {
    nameInput: string;
    label: string;
    icon: string;
    brand: string;
};

export default function AdjoiningRooms({nameInput, label, icon, brand }: Props) {
   
    const [isChecked, setIsChecked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const isSandals = brand.toLowerCase() === "sandals";
    const checkboxBg = isSandals ? "bg-dark-blue" : "bg-blue";
    const TextBrandClass = isSandals ? "fill-dark-blue" : "fill-blue";
    const checkedClass = isChecked ? checkboxBg : "bg-white";
    
    function handleClickModal() {
        setIsOpen(!isOpen);
    }

    function handleClickModalNo() {
        setIsOpen(!isOpen);
        setIsChecked(false);
    }

    function handleClickModalYes() {
        setIsOpen(!isOpen);
        setIsChecked(true);
    }

    const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setIsChecked(event.target.checked);
      };

    return (
        <div className="flex items-center option my-4 sm:mb-3 sm:mt-0">
            <div className="option my-4 sm:mb-3 sm:mt-0 flex items-center">
                <label className="flex items-center">
                    <input
                className={`${nameInput} w-8 h-8 m-0 relative p-3 sm:p-0 appearance-none  border border-platinum rounded-md ${checkedClass}`}
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={isChecked}
                />
               <span className="pl-3 fz-3 text-[1.1rem] sm:text-[1.4rem]"> {label} </span>
            </label>
            {isChecked && (
          <svg
            className="w-4 h-4 my-3 mx-2 absolute fill-white"
            version="1.1"
            viewBox="0 0 1169 1024"
          >
            <g id="icomoon-ignore" />
            <path d="M0 468.71s125.651 441.481 296.755 545.221 396.453-624.001 862.398-856.654c0 0 82.964-294.415-222.584-78-237.932 169.58-447.008 348.573-639.108 544.287l-0.706 0.721c-43.042 54.104-173.089-245.346-296.755-155.575z" />
          </svg>
        )}
        </div>
        <span onClick={handleClickModal} className="items-center pb-2">
        <Icons name="questionMark" className={`w-[1.6rem] h-[1.6rem] ml-2 ${TextBrandClass} `}  />
        </span>

        {isOpen && (
          <Modal
            className="bg-white flex flex-col z-10 w-full max-w-[40.3rem] h-[42.5rem] top-80 relative mx-auto rounded-lg p-10"
            isOpen={isOpen}
            onChange={handleClickModal}
          >
            <div className="py-4 px-8">
            <h3 className="text-[2rem] font-normal leading-[2.5rem] sm:leading-[2rem] md:leading-[3.5rem] mx-0 mt-[0.5rem] mb-[1rem] text-onyx">
                How To Request Adjoining Rooms?
            </h3>
            <div className="flex flex-wrap">
                <p className="text-[1.6rem] basis-full  my-4 font-light text-onyx">
                    Make two or more separate bookings and you will be contacted
                    by an agent after all your bookings are complete.
                    Adjoining rooms are not guaranteed as
                    they may be subject to availability.
                </p>
             
                <p className="description text-[1.6rem]  basis-full  mb-2 text-onyx">
                    Do you still want to request adjoining rooms for multiple bookings?
                </p>

                <div className="flex flex-wrap md:pt-5 basis-full flex-auto">

                <div className="basis-full sm:basis-full md:basis-6/12 md:pr-4">
                <button
                    className="hover:bg-platinum rounded-lg py-2  my-4 md:my-0 text-[1.6rem] w-full text-white bg-gray-c4 md:mr-4  md:py-8 h-[3.4rem] flex justify-center items-center"
                    onClick={handleClickModalNo}
                    >
                    No, thank you
                    </button>
                </div>
                <div className="basis-full sm:basis-full md:basis-6/12 md:pl-4">
                    <button
                    className="hover:bg-spiro-disco rounded-lg py-2 text-[1.6rem] w-full text-white bg-blue  md:py-8 h-[3.4rem] flex justify-center items-center"
                    onClick={handleClickModalYes}
                    >
                    Yes, please
                    </button>
                </div>
                </div>
             
            </div>
            </div>
          </Modal>
        )}


      </div>
    )
}