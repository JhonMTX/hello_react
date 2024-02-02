import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import Popover from "@/components/global/popover";

const meta = {
  title: "Global/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

const content = <p>This is the information displayed.</p>;

export const Default = {
  args: {
    children: content,
    className: "bg-white flex flex-col z-10 w-full max-w-[68.8rem] mx-auto rounded-lg pt-8 pl-20 pr-6 pb-16",
  },

  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();

    function onChange() {
      updateArgs({ isOpen: !isOpen });
    }

    return (
      <div>
        <button className="bg-onyx text-xl text-white p-6" onClick={onChange}>Open Popover</button>
        {isOpen && 
          <Popover
            {... args}
            onChange={onChange}
          />
        }
      </div>
    );
  },
} satisfies Story;
