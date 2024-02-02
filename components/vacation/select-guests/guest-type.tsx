import { useState } from "react";
import { ADULTS, CHILDREN, INFANTS } from '@/utils/constants';
import Icons from "@/components/global/icons";
import GuestChildrenForm from "./guest-children-form";
import GuestInfantForm from "./guest-infant-form";

export const GuestType = ({ brand, title, label, passengersCount, 
                            currentTotalCount, maxPassengers, 
                            comment, guestAge, guestBirthDay, childrenAges,
                            addDeletePassenger, addDeleteGuestAge, addDeleteGuestBirthDay }: GuestTypeProps) => {

  const [passengerAges, setPassengerAges] = useState<GuestAge[]>(guestAge || []);
  const [passengerInfantsAges, setPassengerInfantsAges] = useState<GuestBirthDay[]>(guestBirthDay || []);

  const increment = () => {
    if (brand!=='' && currentTotalCount <= maxPassengers) {
      addDeletePassenger(1);
      if (title === CHILDREN) {
        setPassengerAges([...passengerAges, { index: (passengerAges.length + 1), age: 0 }]);
        if (addDeleteGuestAge) {
          addDeleteGuestAge({ index: (passengerAges.length + 1), age: 0 });
        }
      } else if (title === INFANTS) {
        if (addDeleteGuestBirthDay) {
          addDeleteGuestBirthDay({ index: (passengerInfantsAges.length + 1), year: '', month: '', day: '' });
        }
        setPassengerInfantsAges([...passengerInfantsAges, { index: (passengerInfantsAges.length + 1), year: '', month: '', day: '' }]);
      }
    }
  }

  const decrement = () => {
    if ((passengersCount == 1 && title === ADULTS) || passengersCount == 0 || currentTotalCount == 0 || brand==='') return;
    if (currentTotalCount <= (maxPassengers + 1)) {
      addDeletePassenger(-1);
      let passengerMinus = passengerAges.slice(0, -1);
      setPassengerAges(passengerMinus);
    }
  }

  return (
    <div className="mx-auto">
      <div className="">
        <div className="flex place-content-between">
          <div className="grid grid-cols-1">
            <label className="text-[2.2rem] sm:text-[2.2rem] font-[500]">{title}</label>
            <label className="text-[1.8rem] sm:text-[1.8rem] font-[200]">{label}</label>
          </div>
          <div className="grid grid-cols-3 place-content-start">
            <button onClick={decrement}>
              <Icons className="w-[3rem] h-[3rem] fill-blue" name={"minusCircle"} />
            </button>
            <label className="text-[2.2rem] sm:text-[2.2rem] font-[500] text-center ">{passengersCount}</label>
            <button onClick={increment}>
              <Icons className="w-[3rem] h-[3rem] fill-blue" name={"plusCicle"} />
            </button>
          </div>
        </div>
      </div>
      {title === CHILDREN && passengersCount > 0 && (
        <div className="grid grid-rows-1">
          <div>
            <label className='text-[1.4rem]'>Provide ages at time of travel.</label>
          </div>
          <div>
            {passengerAges.map((item) => (
              <GuestChildrenForm brand={brand} key={item.index} idPassenger={item.index} childrenAges={childrenAges} />
            ))}
          </div>
        </div>
      )}
      {title === INFANTS && (
        <div className="grid grid-rows-1">
          <div>
            {passengerInfantsAges.map((item) => (
              <GuestInfantForm key={item.index} idPassenger={item.index} />
            ))}
          </div>
        </div>
      )}
      {comment && (
        <div className="">
          <div className='text-justify'>
            <div>
              <label className='text-left text-[1.2rem] font-[200] '><sup className="text-blue">*</sup> {comment}</label>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GuestType;