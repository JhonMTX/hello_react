import type { Meta, StoryObj } from "@storybook/react";
import { RoomToggler } from "@/components/rooms/rooms-toggler";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Rooms/RoomsToggler",
  component: RoomToggler,
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
} satisfies Meta<typeof RoomToggler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    resortName: "Ocho Rios",
    roomDescriptionTitle: "Room Description",
    roomDescription:
      "These cozy deluxe accommodations have refined interior comforts with British Colonial-inspired mahogany furnishings, a four-poster, king-size bed, flat screen TV, and a full bath. Make your way to the finest white-sand beach on Jamaica's North Coast and bask in the sunshine on Montego Bay's secluded coastline. Located on the ground floor of Cottage 8, with a limited amount on the second floor of the Oleander building. For your refreshment, your room includes Robert Mondavi varietal wines and a refrigerator stocked with bottled water, juice, soda and local beer.",
    categoryView: ["Pool", "Tropical Garden"],
    roomFeaturesTitle: "Room Features",
    icons: [
      {
        iconId: 1,
        iconName: "Rolls Royce Transfer",
      },
      {
        iconId: 2,
        iconName: "Butler Service",
      },
      {
        iconId: 3,
        iconName: "Private Car Transfer",
      },
      {
        iconId: 4,
        iconName: "BMW Transfer",
      },
      {
        iconId: 5,
        iconName: "Airport Transfer",
      },
      {
        iconId: 6,
        iconName: "Vp Arrival Service",
      },
      {
        iconId: 7,
        iconName: "Club Sandals Lounge",
      },
    ],
    roomHighlightsTitle: "What's Included at",
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
        amenityId: 44,
        amenityName: "King-Size Bed (Four-Poster)",
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
        amenityId: 24,
        amenityName: "Sitting Area",
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
        amenityId: 69,
        amenityName: "Bathtub",
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
        amenityId: 18,
        amenityName: "Red Lane Spa Amenity Kit",
        amenityType: "Amenities",
        amenityCategory: "Bathroom & Laundry",
      },
      {
        amenityId: 111,
        amenityName: "Shower",
        amenityType: "Amenities",
        amenityCategory: "Bathroom & Laundry",
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
        amenityId: 114,
        amenityName: "WiFi",
        amenityType: "Amenities",
        amenityCategory: "Services",
      },
    ],
  },
};
