import { useState } from 'react';
import DateMMDDYYYY, { MMDDYYYY } from '@/components/global/dates/date-mmddyyyy';

type Props= {
  idPassenger: number;
}

const GuestInfantForm = ({idPassenger} : Props) => {

  const [anniversaryDate, setAnniversary] = useState<MMDDYYYY>({
    month: "MM",
    day: "DD",
    year: "YYYY",
  });

  return (
    <div className='grid grid-cols-1 gap-1 bg-gray-f2 my-2 p-2'>
        <div className='pl-6'>
          <label className='text-[1.8rem] text-black h-6 mb-2'>{`Infant ${idPassenger} birthday `}<p className='relative top-[-0.5rem] pl-[0.5rem] inline-flex text-blue p-0.5 text-[1.35rem]'>*</p></label>
        </div>
        <div className='my-auto pl-4 pr-4 justify-items-stretch'>
          <DateMMDDYYYY date={anniversaryDate} 
                      start={2022} end={2023} 
                      required={false} 
                      className={'bg-white border-solid border border-platinum px-[1.1rem]'}
                      onChange={setAnniversary} />
        </div>
     </div>
  )
}

export default GuestInfantForm