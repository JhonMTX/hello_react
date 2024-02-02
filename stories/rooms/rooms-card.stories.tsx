import RoomsCard from "@/components/rooms/rooms-card";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Rooms/Room card",
  component: RoomsCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RoomsCard>;

export default meta;

type Story = StoryObj<typeof meta>;


const Availability = [{
  'reservation-date': "2024-01-24",
  'available-rooms': 2
}]

const Amenities = [
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
  }
]

const Restaurants = [{
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
  
}]

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
  

  


export const Primary = {
  render: function Render(args) {
    const [{ values }, updateArgs] = useArgs();

   
    return (
            <div className="w-full">
            <RoomsCard {...args}  />
            <RoomsCard {...args} soldOut={false}   />
            </div>
    );
  },
  args: {
    brand:"sandals",
    categoryId: 11,
    amenities: Amenities,
    availability: Availability,
    attributes:Attributes,
    categoryCode: "LX",
    roomClass: "BUTLER",
    rstId: 11,
    resortName: "Sandals Montego Bay",
    rstCode: "SMB",
    categoryView: ["Pool", "Tropical Garden"],
    mapLocation: ["4", "8"],
    name: "Beachfront Butler Villa Suite with Private Pool",
    description:
      "These cozy deluxe accommodations have refined interior comforts with British Colonial-inspired mahogany furnishings, a four-poster, king-size bed, flat screen TV, and a full bath. Make your way to the finest white-sand beach on Jamaica's North Coast and bask in the sunshine on Montego Bay's secluded coastline. Located on the ground floor of Cottage 8, with a limited amount on the second floor of the Oleander building. For your refreshment, your room includes Robert Mondavi varietal wines and a refrigerator stocked with bottled water, juice, soda and local beer.",
    bedding: '2 Double Beds and 1 Double Pull-out Sofa',
    maxOccupancy: 2,
    maxAdults: 2,
    transferType: "Airport",
    webImgCode: "130",
    thumbnailImgURL:
      "http://cdn.sandals.com/sandals/v13/images/EN/resorts/smb/accommodations/large/smb-130.jpg",
    fullImageURL:
      "http://cdn.sandals.com/sandals/v13/images/EN/resorts/smb/accommodations/large/smb-130.jpg",
    restaurants: Restaurants,
    loveNest: false,
    soldOut: true,
    totalPrice: 5620,
    pricePerMonth: 260,
    availableRooms: 4
  },
} satisfies Story;

export const Secundary = {
  render: function Render(args) {
  
    return (
      <div>
            <RoomsCard {...args}  />
            <RoomsCard {...args} soldOut={false}   />
      </div>
    );
  },
  args: {
    brand:"beachs",
    categoryId: 11,
    amenities: Amenities,
    availability: Availability,
    attributes:Attributes,
    categoryCode: "DL",
    roomClass: "LUXURY",
    rstId: 11,
    resortName: "Sandals Montego Bay",
    rstCode: "SMB",
    categoryView: ["Pool", "Tropical Garden"],
    mapLocation: ["4", "8"],
    name: "Caribbean Deluxe",
    description:
      "These cozy deluxe accommodations have refined interior comforts with British Colonial-inspired mahogany furnishings, a four-poster, king-size bed, flat screen TV, and a full bath. Make your way to the finest white-sand beach on Jamaica's North Coast and bask in the sunshine on Montego Bay's secluded coastline. Located on the ground floor of Cottage 8, with a limited amount on the second floor of the Oleander building. For your refreshment, your room includes Robert Mondavi varietal wines and a refrigerator stocked with bottled water, juice, soda and local beer.",
    bedding: '2 Double Beds and 1 Double Pull-out Sofa',
    maxOccupancy: 2,
    maxAdults: 2,
    transferType: "Airport",
    webImgCode: "130",
    thumbnailImgURL:
      "http://cdn.sandals.com/sandals/v13/images/EN/resorts/smb/accommodations/large/smb-130.jpg",
    fullImageURL:
      "http://cdn.sandals.com/sandals/v13/images/EN/resorts/smb/accommodations/large/smb-130.jpg",
    restaurants: Restaurants,
    loveNest: false,
    soldOut: true,
    totalPrice: 5620,
    pricePerMonth: 260,
    availableRooms: 4
  },
} satisfies Story;


