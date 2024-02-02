import React from "react";
import { capitalizeString, toFixedCurrency } from "@/utils/utils";

export function PromotionDiscountRow({
  promotionOrDiscount,
  index,
  descriptionKey,
}: {
  promotionOrDiscount: any;
  index: number;
  descriptionKey: string;
}) {
  if (!promotionOrDiscount[descriptionKey] && !promotionOrDiscount.amount) {
    return null;
  }

  return (
    <tr className="h-[2.36rem] mb-[0.2rem]">
      <th className="font-bold text-left">{capitalizeString(promotionOrDiscount[descriptionKey])}:</th>
      <td className="text-right">-${toFixedCurrency(promotionOrDiscount.amount,2)}</td>
    </tr>
  );
}
