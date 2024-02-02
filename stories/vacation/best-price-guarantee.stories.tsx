import type { Meta, StoryObj } from "@storybook/react";
import BestPriceGuarantee from "@/components/vacation/best-price-guarantee";

const meta = {
  title: "Vacation/Best Price Guarantee",
  component: BestPriceGuarantee,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BestPriceGuarantee>;

export default meta;

type Story = StoryObj<typeof meta>;

function Render(args: any) {
  return (
    <div>
      <BestPriceGuarantee {...args} />
    </div>
  );
}

export const Sandals = {
  args: {
    label: "Best Price Guarantee",
    iconName: "paragraph",
    popup: {
      brand: "sandals",
      tel: "tel:18887263257",
      url: "www.sandals.com",
      image: {
        alt: "Sandals Best Price Guarantee",
        path: "/logos/best-price/best-price-sandals.png",
      },
    },
  },
  render: (args) => <Render {...args} />,
} satisfies Story;

export const Beaches = {
  args: {
    label: "Best Price Guarantee",
    iconName: "arrow-right.svg",
    popup: {
      brand: "beaches",
      tel: "tel:18882322437",
      url: "www.beaches.com",
      image: {
        alt: "Beaches Best Price Guarantee",
        path: "/logos/best-price/best-price-beaches.png",
      },
    },
  },
  render: (args) => <Render {...args} />,
} satisfies Story;
