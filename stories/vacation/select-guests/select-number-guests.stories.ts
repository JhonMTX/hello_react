import type { Meta, StoryObj } from "@storybook/react";
import {SelectNumberGuests} from "@/components/vacation/select-guests/select-number-guests";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Vacation/Select-Guests/SelectNumberGuests",
  component: SelectNumberGuests,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SelectNumberGuests>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    brand: "beaches",
    childrenAges: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
  },
  
};



