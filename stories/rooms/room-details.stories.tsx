import type { Meta, StoryObj } from "@storybook/react";
import { RoomDetails } from "@/components/rooms/room-details";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Rooms/RoomDetails",
  component: RoomDetails,
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
} satisfies Meta<typeof RoomDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    categoryId: 11,
    categoryCode: "DL",
    rstId: 11,
    resortName: "Sandals Montego Bay",
    rstCode: "SMB",
    categoryView: ["Pool", "Tropical Garden"],
    mapLocation: ["4", "8"],
    imageCodes: ["132", "133"],
    name: "Caribbean Deluxe",
    description:
      "These cozy deluxe accommodations have refined interior comforts with British Colonial-inspired mahogany furnishings, a four-poster, king-size bed, flat screen TV, and a full bath. Make your way to the finest white-sand beach on Jamaica's North Coast and bask in the sunshine on Montego Bay's secluded coastline. Located on the ground floor of Cottage 8, with a limited amount on the second floor of the Oleander building. For your refreshment, your room includes Robert Mondavi varietal wines and a refrigerator stocked with bottled water, juice, soda and local beer.",
    bedding: null,
    maxOccupancy: 2,
    maxAdults: 2,
    transferType: "Airport",
    roomClass: "LUXURY",
    webImgCode: "130",
    thumbnailImgURL:
      "//cdn.sandals.com/sandals/v13/images/EN/resorts/smb/accommodations/large/smb-130.jpg",
    fullImageURL:
      "//cdn.sandals.com/sandals/v13/images/EN/resorts/smb/accommodations/large/smb-130.jpg",
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
    restaurants: [
      {
        id: 15,
        name: "Oleander Room",
        logo: "logo-oleander.gif",
        description: null,
      },
      {
        id: 155,
        name: "Cricketer's Pint",
        logo: "logo-cricketers_pint.gif",
        description: null,
      },
      {
        id: 14,
        name: "Bayside",
        logo: "logo-bayside.gif",
        description: "s",
      },
      {
        id: 16,
        name: "Cucina Romana",
        logo: "logo-cucina.gif",
        description: null,
      },
      {
        id: 17,
        name: "Tokyo Jo's",
        logo: "logo-tokyojoes.gif",
        description: null,
      },
      {
        id: 18,
        name: "Stewfish",
        logo: "logo-stewfish.gif",
        description: null,
      },
      {
        id: 198,
        name: "Dino's Pizzeria",
        logo: "logo-dinos.gif",
        description: null,
      },
      {
        id: 199,
        name: "The Mariner",
        logo: "logo-mariner.gif",
        description: null,
      },
      {
        id: 255,
        name: "Café de Paris",
        logo: "logo-cafe_paris.png",
        description: null,
      },
      {
        id: 280,
        name: "Soy Sushi Bar",
        logo: "logo-soy.gif",
        description: null,
      },
      {
        id: 281,
        name: "Butch's Chophouse",
        logo: "logo-butchs.png",
        description: null,
      },
      {
        id: 279,
        name: "The Jerk Shack",
        logo: "logo-the_jerk_shack.png",
        description:
          "Discover Authentic Jamaican Jerk. Believed to have originated with Jamaica's Arawak Indians, jerk cookery began as a preservation method. The Maroons of Jamaica, who once sought refuge in the island's",
      },
    ],
    loveNest: false,
  },
};

/* export const Secondary: Story = {
  args: {

  },
}; */
