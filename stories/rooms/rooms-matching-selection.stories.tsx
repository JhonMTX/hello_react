import RoomsMatchingSelection from "@/components/rooms/rooms-matching-selection";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: 'Rooms/RoomsMatchingSelection',
  component: RoomsMatchingSelection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default : Story = {
   args: {
     roomsNumber: '26',
     title: " ROOMS "
   },
} ;