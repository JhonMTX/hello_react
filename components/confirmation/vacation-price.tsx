import { TERMS_AND_CONDITIONS_URL } from "@/utils/constants";

type Props = {
  total: string;
  promotions: {
    labels: string[];
    prices: string[];
  } 
  

};

export default function VacationPrice({total, promotions}: Props) {

  const {labels, prices} = promotions;
  
  const triangleStyle =
    "after:border-t-0 after:border-r-0 after:border-b-2 after:border-l-2 after:border-solid after:w-12 after:h-12 sm:after:w-28 sm:after:h-28 after:rotate-[135deg] after:inline-block after:absolute after:left-2/4 after:bottom-0 after:-m-6 after:bg-white after:border-transparent";
  
  return (
    <section
      className={`vacation-price my-0 sm:mx-6 lg:mx-auto max-w-[106rem] bg-white py-9 px-0 sm:p-14 relative ${triangleStyle}`}
    >
      <div className="header px-6">
        <p className="title text-[2.7rem] sm:text-[3.6rem] leading-none font-light">
          Vacation Price & Payment Details
        </p>
        <p className="disclaimer pt-5 text-[1.2rem]">(Prices in US Dollars)</p>
        <hr className="mt-3 mb-7 border-t border-solid border-silver-chalice" />
      </div>
      <div className="prices-discounts-promotions px-6">
        {labels.map((label, index) => (
          <div
            key={"prc" + index}
            className="detail-price text-[1.2rem] sm:text-[1.6rem] flex justify-between"
          >
            <p className="label font-semibold">{label}:</p>
            <p className="price">{prices[index]}</p>
          </div>
        ))}
        <hr className="my-9 border-t border-solid border-silver-chalice" />
      </div>
      <div className="vacation-total-price px-6">
        <div className="total flex justify-between text-[1.2rem] sm:text-[1.6rem] text-blue font-semibold">
          <p className="label">
            TOTAL VACATION PRICE:{" "}
            <span className="font-light block">(PAID IN FULL)</span>{" "}
            {/** this must be dinamic by the payment method */}
          </p>
          <p className="price">{total}</p>
        </div>
        <p className="total-disclaimer text-[1.4rem] text-sandals-gray">
          Includes Room, taxes, tips, fees and airport transfers. All Prices in
          US Dollars.
        </p>
        <hr className="my-9 border-t border-solid border-silver-chalice" />

        <a
          href={TERMS_AND_CONDITIONS_URL}
          target="_blank"
          className="terms-and-conditions font-semibold text-[1.2rem] sm:text-[1.6rem] text-silver-chalice underline hover:text-blue"
        >
          View Terms & Conditions
        </a>
      </div>
    </section>
  );
}
