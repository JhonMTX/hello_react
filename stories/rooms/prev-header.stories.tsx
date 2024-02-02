import type { Meta, StoryObj } from "@storybook/react";
import { PrevHeader } from "../../components/rooms/prev-header";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Rooms/PrevHeader",
  component: PrevHeader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*   argTypes: {
    backgroundColor: { control: "color" },
  }, */
} satisfies Meta<typeof PrevHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    rstCode: "SWH",
    categoryCode: "1B",
    checkIn: "09/25/2023",
    checkOut: "10/06/2023",
    airIncluded: true,
    departureGateway: "BOS",
    adults: 2,
    children: 0,
    length: 0,
  },
};

export const Secondary: Story = {
  args: {
    rstCode: "SDR",
    categoryCode: "1B",
    checkIn: "09/25/2023",
    checkOut: "10/06/2023",
    airIncluded: true,
    departureGateway: "BOS",
    adults: 4,
    children: 0,
    length: 0,
  },
};
