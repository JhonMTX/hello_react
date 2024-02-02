import { useContext, useEffect, useState } from "react";
import GuestsMain from "./guests-main";
import GuestsModal from "./guests-modal";
import OutsideClick from "@/components/wrapper";
import { GuestContext } from "./select-number-guests";

type Props = {
  name: string;
  brand: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  type?: string;
  maxPassengers: number;
  childrenAges: string[];
};

export default function InputGuest({
  name,
  value,
  required,
  placeholder,
  type,
  brand,
  maxPassengers,
  childrenAges,
}: Props) {

  const { inputValue } = useContext(GuestContext);

  const inputColor = required ? "red10" : "blue";
  const topArrow = required && !value
      ? "before:absolute before:z-10 before:block before:border-solid before:border-x-[0.8rem] before:border-b-[0.8rem] before:border-b-red10 before:border-x-transparent"
      : `before:absolute before:z-10 before:block before:border-solid before:border-x-[0.8rem] before:border-b-[0.8rem] before:border-b-blue before:border-x-transparent`;
  const bottomArrow = required && !value
      ? "after:absolute after:z-10 after:block after:border-solid after:border-x-[0.8rem] after:border-t-[0.8rem] after:border-t-red10 after:border-x-transparent"
      : `after:absolute after:z-10 after:block after:border-solid after:border-x-[0.8rem] after:border-t-[0.8rem] after:border-t-blue after:border-x-transparent`;
  const requiredClass = required && !value
      ? "border-solid border-[0.1rem] border-red text-red10"
      : "border-solid border-[0.1rem] border-gray-dd text-black";
  const focus = `focus:ring-${inputColor} focus:ring-2`;

  const [showModal, setShowModal] = useState(false);

  const ref = OutsideClick(() => {
    setShowModal(false);
  });

  return (
    <div className="place-content-center" ref={ref}>
      <div className="relative text-[1.6rem]">
        <div
          className={`option mb-3 ${topArrow} ${bottomArrow} before:top-[1.4rem] after:top-[2.6rem] before:right-4 after:right-4`}
          onClick={()=>setShowModal(!showModal)}
        >
          <input
              type={type ? type : 'button'}
              className={`${name} bg-sandals-light-gray w-full h-[4.8rem] px-6 appearance-none focus:outline-none rounded-md font-[500] border-solid border-[0.1rem] text-left  ${focus} ${requiredClass}`}
              onClick={()=>setShowModal(!showModal)}
              value={inputValue}
              placeholder={placeholder}
          /> 
        </div>
        <div className={`${showModal?'':'hidden'} absolute min-w[30rem] max-w-[40rem] w-[35.1rem] left-[-4.0rem] md:left-0`}>
          <GuestsModal className={'bg-white flex flex-col z-10 w-full  mx-auto rounded-lg ml-2 pt-9 pl-9 pr-9 pb-9 shadow-guest-shadow'} 
                      isOpen={showModal} 
                      onChange={setShowModal} >
            <GuestsMain 
              brand={brand}
              maxPassengers={maxPassengers}
              childrenAges={childrenAges} />
          </GuestsModal>
        </div>
      </div>
    </div>
  );
}