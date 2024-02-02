import { useCounterPassenger } from '@/components/hooks/user-counter-passenger';
import GuestType from './guest-type';
import { ADULTS, CHILDREN, INFANTS } from '@/utils/constants';
import { useContext, useState } from 'react';
import { GuestContext } from './select-number-guests';

type Props = {
  brand: string;
  maxPassengers: number;
  childrenAges: string[];
}

const GuestsMain = ({ brand, maxPassengers, childrenAges }: Props) => {

  const { currentTotalCount, adultsCounter, childrenCounter, infantsCounter } = useContext(GuestContext);

  let errorPassengerCounter = false;

  if(currentTotalCount>maxPassengers) errorPassengerCounter = true;

  return (
    
    <div className='min-w-[20rem] max-w-[40rem]'>
      {brand==='' && (
        <span className='grid grid-cols-1 content-center bg-red text-center text-white text-[1.4rem] rounded-lg w-auto h-16'><p>First select a resort</p></span>
      )}
      {errorPassengerCounter && (
        <div>
          <div className='text-red10 font-bold w-auto text-[1.4rem]'><p>{'Important:'}</p></div>
          <div className='text-wrap text-[1.4rem] text-justify'><p>{'Air bookings may only be made for up to 8 passengers. Please correct your request or call '}<span className='text-blue10'>{'1-888-BEACHES'}</span>{' for assistance with the air portion of your booking.'}</p></div>
        </div>
      )}
      <div className='mt-4'>
        <GuestType 
          brand={brand}
          title={'Adults'}
          label={'(16 and older)'}
          comment={'The primary guest must be 18 years old at the time of travel.'}
          passengersCount={adultsCounter.passengerCounter}
          currentTotalCount={currentTotalCount}
          childrenAges={[]}
          maxPassengers={maxPassengers}
          addDeletePassenger={adultsCounter.addDeletePassenger} />
      </div>
      <div className='md:pt-[2.5rem] pt-[1.5rem] mt-[3rem] border-t-[0.1rem] border-solid border-anti-flash-white'>
        <GuestType 
              brand={brand} 
              title={'Children'} 
              label={'(2 to 15)'} 
              comment={''} 
              guestAge={adultsCounter.guestAge}
              passengersCount={childrenCounter.passengerCounter}
              currentTotalCount={currentTotalCount}
              childrenAges={childrenAges}
              maxPassengers={maxPassengers}
              addDeletePassenger={childrenCounter.addDeletePassenger}
              addDeleteGuestAge={childrenCounter.addDeleteGuestAge}/>
      </div>
      <div className='md:pt-[2.5rem] pt-[1.5rem] mt-[3rem] border-t-[0.1rem] border-solid border-anti-flash-white'>
        <GuestType 
          brand={brand}
          title={'Infants'}
          label={'(0 to 2)'}
          comment={'Infants must be less than 2 years old at the time of travel.'}
          guestBirthDay={adultsCounter.guestBirthDay}
          passengersCount={infantsCounter.passengerCounter}
          currentTotalCount={currentTotalCount}
          maxPassengers={maxPassengers}
          childrenAges={[]}
          addDeletePassenger={infantsCounter.addDeletePassenger}
          addDeleteGuestBirthDay={infantsCounter.addDeleteGuestBirthDay} />
      </div>
    </div>
  )
}

export default GuestsMain;