import type { Meta, StoryObj } from "@storybook/react";
import RoomDescription from "@/components/rooms/room-description";

const meta = {
  title: "Rooms/Room Description",
  component: RoomDescription,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RoomDescription>;

export default meta;

type Story = StoryObj<typeof meta>;

const Attributes = [
  {
    attributesId: 9,
    attributesName: "In-Room Local Beer & Wine",
    attributesDescription: "This suite features a fully stocked bar with juices, sodas, water, beer, and your selection of premium spirits and Robert Mondavi Twin Oaks"
  },
  {
    attributesId: 5,
    attributesName: "Butler Service",
    attributesDescription: "This room category includes the uniquely attentive services of a professionally trained personal butler who will pamper you in extraordinary ways throughout your stay."
  },
  {
    attributesId: 3,
    attributesName: "Room Service",
    attributesDescription: "Whether it is a simple continental breakfast delivered to your room or a more elaborate dinner affair, room service is another ultra all inclusive exclusive."
  },
  {
    attributesId: 13,
    attributesName: "Soaking Tubs",
    attributesDescription: "A whole new way to celebrate romance al fresco. Learn More"
  },
  {
    attributesId: 11,
    attributesName: "Roundtrip Airport Transfers",
    attributesDescription: "Relax and enjoy your stress–free ride with non–stop resort transfers to and from the airport, featuring air–conditioning and comfortable, spacious seating."
  },
  {
    attributesId: 12,
    attributesName: "Free Wifi",
    attributesDescription: "Free Wi-Fi is included."
  }
];

export const Primary: Story = {
  args: {
    brand: "beaches",
    name: "Caribbean Oceanview Luxury Suite Double",
    description: "These enormous, two-level suites combine the beauty of the ocean with stylish contemporary interiors. Located in the center of the resort's main building, each accommodation features exquisite mahogany furniture including a king-size bed or two double beds, flat screen television and a well-appointed en-suite bathroom. A living space boasts a spacious area featuring a French-style balcony, providing sensational views of the Caribbean Sea and the resort's grounds. These suites are ideal for larger families with ample space for another roll-away bed and can connect to adjacent suites if required (based on availability).",
    categoryCode: "GLD",
    availability: {
      reservationDate: "2024-01-01",
      availableRooms: 2
    },
    maxOccupancy: 2,
    bedding: "2 Double Beds and 1 Double Pull-out Sofa",
    categoryView:  ["Pool", "Tropical Garden"],
    attributes:Attributes,
  },
};

