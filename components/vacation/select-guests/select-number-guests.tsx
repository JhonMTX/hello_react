import React, { createContext, useEffect, useState } from 'react';
import InputGuest from './input-guest';
import { useCounterPassenger } from '@/components/hooks/user-counter-passenger';

type Props = {
    brand: string;
    childrenAges: string[];
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const  GuestContext = createContext({} as any);

export const SelectNumberGuests = ({ brand, childrenAges }: Props) => {
  const maxPassengers = 8;
  const [inputValue, setInputValue] = useState('1 Adult');
  const [currentTotalCount, setCurrentTotalCount] = useState(0);
  
  const adultsCounter   = useCounterPassenger(1);
  const childrenCounter = useCounterPassenger(0);
  const infantsCounter  = useCounterPassenger(0);

  useEffect(() => {
    setInputValue(`${adultsCounter.passengerCounter} Adult${adultsCounter.passengerCounter > 1 ? 's' : ''}${childrenCounter.passengerCounter > 0 ? `, ${childrenCounter.passengerCounter} Child${childrenCounter.passengerCounter > 1 ? 'ren' : ''}` : ''}${infantsCounter.passengerCounter > 0 ? `, ${infantsCounter.passengerCounter} Infant${infantsCounter.passengerCounter > 1 ? 's' : ''}` : ''}`)
    setCurrentTotalCount(adultsCounter.passengerCounter + childrenCounter.passengerCounter + infantsCounter.passengerCounter);
    return () => {
    }
  }, [adultsCounter, childrenCounter, infantsCounter])
  

  return (
    <GuestContext.Provider value={{ inputValue, setInputValue, currentTotalCount, adultsCounter, childrenCounter, infantsCounter }}>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8" >
          <div className="sm:col-span-2"><h3 className="text-[1.4rem] sm:text-[1.6rem] font-[500] mt-4">Number of Guests</h3></div>
          <div className="sm:col-span-5 place-content-center">
              <InputGuest name={'guests'}
                brand={brand}
                maxPassengers={maxPassengers} 
                childrenAges={childrenAges} 
              />
          </div>
      </div>
    </GuestContext.Provider>
  )
}
