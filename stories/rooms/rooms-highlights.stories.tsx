import { RoomsHighlights } from "@/components/rooms/rooms-highlights";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Rooms/HighLights",
  component: RoomsHighlights,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    highlights: [
      "Unlimited gourmet dining at %s restaurants\n",
      "Breakfast, lunch, dinner and anytime snacks\n",
      "Unlimited premium spirits\n",
      "25 bars, including swim-up bars\n",
      "Stocked bars in every room\n",
      "Unlimited Robert Mondavi Twin® Oak wines\n",
      "All tips, taxes and gratuities\n",
      "Non-Stop roundtrip airport transfers\n",
      "Green fees at nearby Sandals Golf Club\n",
      "Round-trip transfers to Sandals Golf Club\n",
      "PADI-Certified SCUBA diving (and all equipment)\n",
      "Snorkeling (and all equipment)\n",
      "Hobie Cats, paddle boards, kayaks\n",
      "Professional instruction for water sports\n",
      "Beach volleyball, basketball, pool tables\n",
      "Day and night tennis\n",
      "Fitness center with state-of-the-art equipment\n",
      "Day and night entertainment including live shows\n",
      "Roundtrip shuttles to Sandals Ochi\n",
      "All amenities and inclusions at Sandals Ochi\n",
      "Free WiFi (in room and all common areas)",
    ],
  },
  render: function Render(args) {
    return (
      <RoomsHighlights
        resortName={""}
        highlights={args.highlights}
        showMoreHighlights={false}
        toggleHighlights={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  },
};
