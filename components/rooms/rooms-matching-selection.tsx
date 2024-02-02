type Props = {
  roomsNumber: number;
  title: string;
}

const RoomsMatchingSelection = ({roomsNumber, title}: Props) => {
return (
  <div className='flex flex-col lg:flex-row lg:mt-4 items-baseline pt-1 pb-1'>
      <h4 className='text-blue text-[2.4rem] font-semibold leading-[2.3rem]'>{`${roomsNumber} ${title} `} <span className={'hidden md:inline md:mr-2 sm:pl-1'}>FOUND</span></h4>
      <span className={`text-[1.6rem] font-semibold text-black`}>MATCHING YOUR SELECTIONS</span>
  </div>
)
}

export default RoomsMatchingSelection