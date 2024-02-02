import type { Meta, StoryObj } from "@storybook/react";
import PricePromotions from "../../components/rooms/price-promotions";

const meta = {
  title: "Rooms/PricePromotions",
  component: PricePromotions,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

} satisfies Meta<typeof PricePromotions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    afterPromoRate: 6326.1,
    
    promotion: [
      {
        promotionId: 65035,
        promotionName: "643-50% OFF SMB",
        promotionDescription: "50% OFF RACK RATE",
        amount: 896,
        date: "2024-01-01",
        sessionId: "725",
        roomCategory: "DL",
        reservationDate: "2024-01-01",
        primaryYN: "Y",
        factor: "PER_OCCUPANT",
      },
      {
        promotionId: 65039,
        promotionName: "642-45% OFF SMB",
        promotionDescription: "45% OFF RACK RATE",
        amount: 693,
        date: "2023-12-26",
        sessionId: "725",
        roomCategory: "DL",
        reservationDate: "2023-12-26",
        primaryYN: "Y",
        factor: "PER_OCCUPANT",
      },
      {
        promotionId: 114109,
        promotionName: "641-40% OFF SMB",
        promotionDescription: "40% OFF RACK RATE",
        amount: 772.8,
        date: "2023-12-27",
        sessionId: "725",
        roomCategory: "DL",
        reservationDate: "2023-12-27",
        primaryYN: "Y",
        factor: "PER_OCCUPANT",
      },
      {
        promotionId: 114109,
        promotionName: "641-40% OFF SMB",
        promotionDescription: "40% OFF RACK RATE",
        amount: 772.8,
        date: "2023-12-28",
        sessionId: "725",
        roomCategory: "DL",
        reservationDate: "2023-12-28",
        primaryYN: "Y",
        factor: "PER_OCCUPANT",
      },
      {
        promotionId: 114109,
        promotionName: "641-40% OFF SMB",
        promotionDescription: "40% OFF RACK RATE",
        amount: 772.8,
        date: "2023-12-29",
        sessionId: "725",
        roomCategory: "DL",
        reservationDate: "2023-12-29",
        primaryYN: "Y",
        factor: "PER_OCCUPANT",
      },
      {
        promotionId: 114109,
        promotionName: "641-40% OFF SMB",
        promotionDescription: "40% OFF RACK RATE",
        amount: 772.1,
        date: "2023-12-30",
        sessionId: "725",
        roomCategory: "DL",
        reservationDate: "2023-12-30",
        primaryYN: "Y",
        factor: "PER_OCCUPANT",
      },
      {
        promotionId: 114109,
        promotionName: "641-40% OFF SMB",
        promotionDescription: "40% OFF RACK RATE",
        amount: 772.8,
        date: "2023-12-31",
        sessionId: "725",
        roomCategory: "DL",
        reservationDate: "2023-12-31",
        primaryYN: "Y",
        factor: "PER_OCCUPANT",
      },
    ],
    discount: [
      {
        id: 13970,
        code: "WEBSPC2015",
        description: "$25 ONLINE INSTANT CREDIT",
        amount: 25,
        type: "ONLINE",
        roomCategory: "DL",
      },
      {
        id: 11326,
        code: "SMB605",
        description: "$605 INSTANT CREDIT",
        amount: 605,
        type: "ROOM",
        roomCategory: "DL",
      },
      {
        id: 0,
        code: null,
        description: null,
        amount: 0,
        type: "PRIVATE",
        roomCategory: "DL",
      },
      {
        id: 0,
        code: null,
        description: null,
        amount: 0,
        type: "AIR",
        roomCategory: "DL",
      },
    ],
  },
};
