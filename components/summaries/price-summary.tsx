import { Rates, VacationDetails } from "@/utils/fetch";
import { getStepID } from "@/utils/lib";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { DataBlock, HeaderBlock } from "./block-summary";
import { Itinerary } from "../flights/itineraries-container";
import { formatSummaryMoney } from "../flights/itinerary-utils";

function Discounts({
  amount,
  description,
}: {
  amount: number;
  description: string;
}) {
  const priceObject = formatSummaryMoney(amount);
  const amountFormat = `${priceObject.dollar}.${priceObject.cents}`;

  return (
    <div className="amount-detail text-[1.3rem] flex justify-between">
      <p className="font-semibold basis-6/12 capitalize">{description.toLowerCase()}</p>
      <p className="basis-6/12 text-right">{amountFormat}</p>
    </div>
  );
}

export default function PriceSummary({
  name,
  title,
  rates,
  flight,
}: {
  name: string;
  title: string;
  rates: Rates[];
  flight?: Itinerary;
}) {
  const {} = rates;
  const ratesData = rates.length > 0 ? rates[0] : 0;
  const afterPromoRate = ratesData ? ratesData.afterPromoRate : 0;
  const flightPrice = flight ? flight.summary.grandTotalAmount : 0;
  const totalPriceObject = formatSummaryMoney(afterPromoRate + flightPrice);
  const totalVacationPrice = `${totalPriceObject.dollar}.${totalPriceObject.cents}`;
  const discounts = ratesData ? ratesData.discount : [];
  const promotions = ratesData ? ratesData.promotion : [];
  const ratePerNight = ratesData ? ratesData.ratePerNight : [];
  const description = `Room ${flightPrice > 0 ? '+ Roundtrip Flight' : ''}`
  let roomPrice = 0;
  ratePerNight.forEach((rate) => { roomPrice += rate.paxRate});
  

  return (
    <Fragment>
      <HeaderBlock name={name} title={title} />
      <div className={`${name}-details px-6 flex justify-between`}>
        <div className="discounts-promotions basis-full">
          <Discounts amount={roomPrice + flightPrice} description={description}/>
          {discounts.map((discount, index) => (
            <Discounts
              key={"dsp" + index}
              amount={discount.amount}
              description={discount.description}
            />
          ))}
          {promotions.map((promotion, index) => (
            <Discounts
              key={"dsp" + index}
              amount={promotion.amount}
              description={promotion["promotion-description"]}
            />
          ))}
        </div>
      </div>
      <div className="total-price text-[2.3rem] text-blue flex flex-wrap justify-between px-6">
        <hr className="max-w-[75rem] my-3 basis-full border-t border-solid border-platinum"/>
        <h4 className="label">Total Vacation Price:</h4>
        <h4 className="price">{totalVacationPrice}</h4>
      </div>
    </Fragment>
  );
}
