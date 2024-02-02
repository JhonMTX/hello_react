import Modal from "@/components/global/modal";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

const meta = {
  title: "Global/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const content = <p>This is the information displayed.</p>;

export const Default = {
  args: {
    children: content,
    className: "bg-white flex flex-col z-10 w-full max-w-[68.8rem] top-80 relative mx-auto rounded-lg pt-8 pl-20 pr-6 pb-16",
    isOpen: false,
  },

  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();

    function onChange() {
      updateArgs({ isOpen: !isOpen });
    }

    return (
      <div>
        <button className="bg-onyx text-xl text-white p-6" onClick={onChange}>Open Modal</button>
        {isOpen && 
          <Modal
            {... args}
            onChange={onChange}
          />
        }
      </div>
    );
  },
} satisfies Story;
