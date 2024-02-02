import type { Meta, StoryObj } from "@storybook/react";
import BackTo from "@/components/rooms/back-to";

const meta = {
  title: "Room Detail/Back To Button",
  component: BackTo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BackTo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    backto: "/room/?subSessionId=48D4",
    label: "BACK TO ROOMS",
  },
};
