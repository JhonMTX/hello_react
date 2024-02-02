import RoomsSortByFilters from "@/components/rooms/rooms-sort-by-filters";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: 'Rooms/RoomsSortByFilters',
  component: RoomsSortByFilters,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default : Story = {
   args: {
     butlerLevel: false,
     conciergeLevel: false,
     luxuryLevel: false,
     roomFilterOptions: 
     [
        "Price Low to High",
        "Price High to Low",
        "Category Level High to Low",
        "Category Level Low to High",
        "Availability"
     ],
     brand: "beaches",
   },
   render: function Render(args) {
     const [{value}, updateArgs] = useArgs<{value: string}>();

     function onChange(value:string) {
       updateArgs({value: value});
     }

     return (
       <RoomsSortByFilters  brand={args.brand} 
                            butlerLevel={args.butlerLevel} 
                            conciergeLevel={args.conciergeLevel}
                            luxuryLevel={args.luxuryLevel}  
                            roomFilterOptions={args.roomFilterOptions} 
                            onChange={onChange}/>
     );
   },
} ;