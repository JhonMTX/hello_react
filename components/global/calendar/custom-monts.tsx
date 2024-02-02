import { Months, MonthsProps, useNavigation } from "react-day-picker";
import Icons from "../icons";

export default function CustomMonths(props: MonthsProps) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();
  const prev = () => previousMonth && goToMonth(previousMonth);
  const next = () => nextMonth && goToMonth(nextMonth);

  return (
    <div className={`custom-months flex justify-center`}>
      <div className="mt-44 hidden sm:block">
        <button
          className="prev-month"
          onClick={prev}
          disabled={!previousMonth}
        >
          <Icons className={`w-[2.3rem] h-[4.2rem] mr-8 ${!previousMonth ? 'fill-transparent': 'fill-dark-blue'}`} name="prevArrow"/>
        </button>
      </div>
      
      <Months {...props} />
      <div className="mt-44 hidden sm:block">
        <button
          className="next-month"
          onClick={next}
          disabled={!nextMonth}
        >
          <Icons className={`w-[2.3rem] h-[4.2rem] ml-8 ${!nextMonth ? 'fill-transparent': 'fill-dark-blue'}`} name="nextArrow"/>
        </button>
      </div>
    </div>
  );
}