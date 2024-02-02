import type { Meta, StoryObj } from "@storybook/react";
import AdjoiningRooms from "@/components/vacation/adjoining-rooms";


const meta = {
  title: "Vacation/Adjoining Rooms",
  component: AdjoiningRooms,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AdjoiningRooms>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        nameInput: 'adjoiningRoom',
        label: 'I would like to request adjoining rooms',
        icon:'arrow-right.svg',
        brand:"sandals"
       
    }
}; 

export const Secundary: Story = {
  args: {
      nameInput: 'adjoiningRoom',
      label: 'I would like to request adjoining rooms',
      icon:'arrow-right.svg',
      brand:"beaches"
     
  }
};