import { useState, useEffect } from "react";
import Icons from "@/components/global/icons";
import Guests from "@/app/guests/page";

type Props = {
  TotalAmount: number;
  depositAmount: number;
  refundable: boolean;
  UpliftAmount: number;
  Nights: number;
  Guest: string;
  freeCancellationDate?: string;
  blackOutDate?: string;
};

export default function TotalPrice({
  TotalAmount,
  UpliftAmount,
  Nights,
  Guest,
  depositAmount,
  refundable,
  freeCancellationDate,
  blackOutDate,
}: Props) {
  let isLessDepositAmount: boolean = false;

  if (depositAmount < 400) {
    isLessDepositAmount = true;
  } else {
    isLessDepositAmount = false;
  }

  return (
    <div className="max-w-[116.4rem] mx-auto px-6 text-onyx">
      <div className="flex flex-row flex-wrap -mx-6">
        <div className="basis-full max-w-full flex-grow-0 flex-shrink-0 px-6">
          <div className="flex flex-row flex-wrap -mx-6">
            <h4 className="basis-full sm:basis-8/12 md:basis-8/12 max-w-full flex-grow-0 flex-shrink-0 px-6 text-blue text-[2.8rem] sm:text-[4.8rem] md:text-[4.8rem]">
              Total Room Price:
            </h4>
            <div className="text-center sm:text-right md:text-right basis-full sm:basis-4/12  md:basis-4/12 max-w-full flex-grow-0 flex-shrink-0 px-6 ">
              <div className="text-blue text-[3.6rem] sm:text-[4.8rem] md:text-[4.8rem]">
                ${TotalAmount.toLocaleString()}
                <div className="text-[1.8rem] leading-4 pb-2">
                  {UpliftAmount && UpliftAmount > 0 && (
                    <span className="inline-block cursor-pointer font-semibold text-onyx">
                      <span className="">or from </span>
                      <span className="text-blue">
                        $<span className="">{UpliftAmount}</span>/mo{" "}
                        <span>
                          <Icons
                            name="information"
                            className={`inline ml-[0.2rem] relative top-[-0.25rem] w-[1.8rem] h-[1.76rem] fill-blue mr-2 `}
                          />
                        </span>
                      </span>
                    </span>
                  )}
                </div>
                <span className="mt-0 font-semibold block text-[1.5rem] sm:text-[1.8rem] md:text-[1.8rem] text-counter">
                  PRICE SHOWN IN USD
                </span>
              </div>
              <div className="w-full text-[1.2rem] text-center sm:text-[1.4rem] sm:text-right md:text-[1.4rem] md:text-right inline-block ">
                <strong className="font-[400]">{Nights} Nights,</strong> {Guest}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-0 sm:-mt-14">
          {isLessDepositAmount && (
            <p className="basis-full max-w-full flex-grow-0 flex-shrink-0 px-6 text-[1.6rem] font-semibold mt-0 mb-[0.7rem] text-onyx">
              Hold room for only ${depositAmount} (USD)
            </p>
          )}
          {!isLessDepositAmount && (
            <p className="basis-full max-w-full flex-grow-0 flex-shrink-0 px-6 text-[1.6rem] font-semibold mt-0 mb-[0.7rem] text-onyx">
              Full Amount is non-refundable
            </p>
          )}
          {refundable && (
            <p className="basis-full max-w-full flex-grow-0 flex-shrink-0 px-6 text-[1.6rem] font-semibold mt-0 mb-[0.7rem] text-onyx">
              Deposit Amount is non-refundable
            </p>
          )}
          {freeCancellationDate && (
            <p className="basis-full max-w-full flex-grow-0 flex-shrink-0 px-6 text-[1.6rem] font-semibold mt-0 mb-[0.7rem] text-onyx">
              Free Room Cancellation before {freeCancellationDate}{" "}
              <Icons
                name="questionMark"
                className={`inline ml-[0.2rem] relative top-[-0.25rem] w-[1.8rem] h-[1.76rem] fill-blue mr-2 `}
              />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
