import { RoomsAmenities } from "@/components/rooms/rooms-amenities";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Rooms/Amenities",
  component: RoomsAmenities,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    amenities: [
      {
        amenityId: 9,
        amenityName: "Air Conditioning",
        amenityType: "Amenities",
        amenityCategory: "Bedroom & Living Spaces",
      },
      {
        amenityId: 53,
        amenityName: "Ceiling Fan",
        amenityType: "Amenities",
        amenityCategory: "Bedroom & Living Spaces",
      },
      {
        amenityId: 42,
        amenityName: "Flat Screen TV w/ Cable",
        amenityType: "Amenities",
        amenityCategory: "Bedroom & Living Spaces",
      },
      {
        amenityId: 120,
        amenityName: "HD Smart TV w/ Cable",
        amenityType: "Amenities",
        amenityCategory: "Bedroom & Living Spaces",
      },
      {
        amenityId: 54,
        amenityName: "In-Room Electronic Safe",
        amenityType: "Amenities",
        amenityCategory: "Bedroom & Living Spaces",
      },
      {
        amenityId: 21,
        amenityName: "Iron & Ironing Board",
        amenityType: "Amenities",
        amenityCategory: "Bedroom & Living Spaces",
      },
      {
        amenityId: 128,
        amenityName: "Outlets 110 - 240 Volts",
        amenityType: "Amenities",
        amenityCategory: "Bedroom & Living Spaces",
      },
      {
        amenityId: 19,
        amenityName: "Telephone",
        amenityType: "Amenities",
        amenityCategory: "Bedroom & Living Spaces",
      },
      {
        amenityId: 97,
        amenityName: "Bathtub/ Shower combination",
        amenityType: "Amenities",
        amenityCategory: "Bathroom & Laundry",
      },
      {
        amenityId: 13,
        amenityName: "Hair Dryer",
        amenityType: "Amenities",
        amenityCategory: "Bathroom & Laundry",
      },
      {
        amenityId: 71,
        amenityName: "Make-up Mirror",
        amenityType: "Amenities",
        amenityCategory: "Bathroom & Laundry",
      },
      {
        amenityId: 18,
        amenityName: "Red Lane Spa Amenity Kit",
        amenityType: "Amenities",
        amenityCategory: "Bathroom & Laundry",
      },
      {
        amenityId: 14,
        amenityName: "Coffee and Tea Maker",
        amenityType: "Amenities",
        amenityCategory: "Food & Drink",
      },
      {
        amenityId: 4,
        amenityName: "In-Room Bar w/ Select Liquor",
        amenityType: "Amenities",
        amenityCategory: "Food & Drink",
      },
      {
        amenityId: 123,
        amenityName: "Refrigerator w/ Water, Juice & Sodas",
        amenityType: "Amenities",
        amenityCategory: "Food & Drink",
      },
      {
        amenityId: 153,
        amenityName: "Stocked w/ beer and wine",
        amenityType: "Amenities",
        amenityCategory: "Food & Drink",
      },
      {
        amenityId: 83,
        amenityName: "Airport Transfers",
        amenityType: "Amenities",
        amenityCategory: "Services",
      },
      {
        amenityId: 143,
        amenityName: "Daily Housekeeping",
        amenityType: "Amenities",
        amenityCategory: "Services",
      },
      {
        amenityId: 144,
        amenityName: "Nightly Turndown",
        amenityType: "Amenities",
        amenityCategory: "Services",
      },
      {
        amenityId: 114,
        amenityName: "WiFi",
        amenityType: "Amenities",
        amenityCategory: "Services",
      },
      {
        amenityId: 38,
        amenityName: "Patio",
        amenityType: "Features",
        amenityCategory: "Features",
      },
    ],
    maxColumns: "4",
  },
  render: function Render(args) {
    return <RoomsAmenities amenities={args.amenities} />;
  },
};
