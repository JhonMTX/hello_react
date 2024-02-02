import Restaurants from "@/components/rooms/restaurants";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Rooms/Restaurants",
  component: Restaurants,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    restaurants: [
      {
        id: 15,
        name: "Oleander Room",
        logo: "logo-oleander.png",
        description: null,
      },
      {
        id: 155,
        name: "Cricketer's Pint",
        logo: "logo-cricketers-pint.png",
        description: null,
      },
      {
        id: 14,
        name: "Bayside",
        logo: "logo-bayside.png",
        description: "s",
      },
      {
        id: 16,
        name: "Cucina Romana",
        logo: "logo-cucina.png",
        description: null,
      },
      {
        id: 17,
        name: "Tokyo Jo's",
        logo: "logo-tokyojoes.png",
        description: null,
      },
      {
        id: 18,
        name: "Stewfish",
        logo: "logo-stewfish.png",
        description: null,
      },
      {
        id: 198,
        name: "Dino's Pizzeria",
        logo: "logo-dinos.png",
        description: null,
      },
      {
        id: 199,
        name: "The Mariner",
        logo: "logo-mariner.png",
        description: null,
      },
      {
        id: 255,
        name: "Café de Paris",
        logo: "logo-cafe-paris.png",
        description: null,
      },
      {
        id: 280,
        name: "Soy Sushi Bar",
        logo: "logo-soy.png",
        description: null,
      },
      {
        id: 281,
        name: "Butch's Chophouse",
        logo: "logo-butchs.png",
        description: null,
      },
    ],
  },
  render: function Render(args) {
    return <Restaurants restaurants={args.restaurants} />;
  },
};
