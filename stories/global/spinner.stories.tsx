import Spinner from "@/components/global/spinner";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

const meta = {
  title: "Global/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    className: 'bg-black opacity-75',
    modalStyles: 'bg-transparent',
    disclaimer: 'Book online and get 25$ credit',
    active: true
  },

  render: function Render(args) {
    const [{ active }, updateArgs] = useArgs();

    return (
      <div>
        {active && 
          <Spinner
            {... args}
          />
        }
      </div>
    );
  },
} satisfies Story;
