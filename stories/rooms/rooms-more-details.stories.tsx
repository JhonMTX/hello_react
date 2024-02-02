import RoomsMoreDetails from "@/components/rooms/rooms-more-details";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Rooms/RoomsMoreDetails",
  component: RoomsMoreDetails,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Included Rooms Amenities",
  },
  render: function Render(args) {
    return (
      <RoomsMoreDetails title={args.title}>
        <div className="ml-10 border border-sandals-gray p-6"> PRUEBA DE MORE DETAILS </div>
      </RoomsMoreDetails>
    );
  },
};
