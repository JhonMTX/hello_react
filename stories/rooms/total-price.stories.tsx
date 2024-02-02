import type { Meta, StoryObj } from "@storybook/react";
import TotalPrice from "@/components/rooms/total-price";

const meta = {
  title: "Rooms/Total Price",
  component: TotalPrice,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TotalPrice>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    TotalAmount:2011.55,
    UpliftAmount: 199,
    Guest:"2 Adults, 1 Child",
    Nights: 4,
    depositAmount: 177,
    refundable: true,
    freeCancellationDate: "02/16/2024"
  },
};

export const Secundary: Story = {
  args: {
    TotalAmount:3011.55,
    UpliftAmount: 250,
    Guest:"1 Adult",
    Nights: 3,
    depositAmount: 500,
    refundable: true,
  },
};

export const Third: Story = {
  args: {
    TotalAmount:3011.55,
    UpliftAmount: 250,
    Guest:"1 Adult",
    Nights: 3,
    depositAmount: 500,
    refundable: false,
  },
};


