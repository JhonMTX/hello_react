import React from "react";
import { PromotionDiscountRow } from "./room-complement/promotion-discount-row";
import { capitalizeString, toFixedCurrency } from "@/utils/utils";

type Promotion = {
  promotionId: number;
  promotionName: string;
  promotionDescription: string;
  amount: number;
  date: string;
  sessionId: string;
  roomCategory: string;
  reservationDate: string;
  primaryYN: string;
  factor: string;
};

type Discounts = {
  id: number | null;
  code: string | null;
  description: string | null;
  amount: number | null;
  type: string | null;
  roomCategory: string | null;
};

interface PricePromotionsProps {
  afterPromoRate: number;
  promotion: Array<Promotion>;
  discount: Array<Discounts>;
}

export default function PricePromotions(args: PricePromotionsProps) {
  const { afterPromoRate, promotion, discount } = args;

  const promoGroups = promotion.reduce((acc: { [key: number]: Promotion[] }, promo: Promotion) => {
    (acc[promo.promotionId] = acc[promo.promotionId] || []).push(promo);
    return acc;
  }, {});

  const groupedPromotions = Object.values(promoGroups).map((group: Promotion[]) => {
    const totalAmount = group.reduce((sum: number, promo: Promotion) => sum + promo.amount, 0);
    const roundedAmount = totalAmount;
    return { ...group[0], amount: roundedAmount };
  });

  return (
    <div className="max-w-[116.4rem] mx-auto px-6 text-onyx leading-[1.35]">
      <div className="flex flex-row flex-wrap -mx-6">
        <header className="basis-full max-w-full flex-grow-0 flex-shrink-0 px-6">
          <h3 className="text-[3.2rem] sm:text-[4.2rem] font-light my-2 text-onyx h-[8.8rem] sm:h-[5.68rem]">
            Room Price & Applied Promotions
          </h3>
          <p className="text-[1.2rem] sm:text-[1.6rem] mb-[1.6rem] text-onyx h-[3.2rem] sm:h-[2.16rem]">
            All possible discounts are automatically applied. All Prices in US dollars.
          </p>
        </header>
        <div className="basis-full max-w-full flex-grow-0 flex-shrink-0 px-6">
          <table className="relative  mb-20 text-[1.2rem] sm:text-[1.6rem] text-onyx w-full border-separate text-indent-initial border-spacing-[0.2rem]">
            <tbody className="leading-8">
              <tr className="h-[2.36rem] mb-[0.2rem]">
                <th className="font-bold text-left">Original Room Price:</th>
                <td className="text-right">${toFixedCurrency(afterPromoRate,2)}</td>
              </tr>
              {discount.map((discountItem, index) => (
                <PromotionDiscountRow
                  key={index}
                  promotionOrDiscount={discountItem}
                  index={index}
                  descriptionKey="description"
                />
              ))}
              {groupedPromotions.map((promotion, index) => (
                <PromotionDiscountRow
                  key={index}
                  promotionOrDiscount={promotion}
                  index={index}
                  descriptionKey="promotionDescription"
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
