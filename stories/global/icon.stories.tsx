import type { Meta, StoryObj } from "@storybook/react";
import Icons from "@/components/global/icons";
import { svgCodes } from "@/utils/svg-codes";

const meta = {
  title: "Global/Icons",
  component: Icons,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    name: "fatPin",
    className: "w-10 w-10 fill-blue",
  },
  render: function Render(args) {
    return (
      <div className="text-onyx">
        <h3 className="font-semibold text-2xl pb-16">
          Check the <span className="text-blue italic">svg-codes.ts</span> to
          see all the variables
        </h3>
        <div className="flex w-full items-center flex-col">
          <Icons {...args} />
          <p className="pt-8 font-semibold">{args.name}</p>
        </div>
      </div>
    );
  },
} satisfies Story;

export const AllIcons = {
  args: {
    className: "w-10 w-10 fill-blue",
    name: ""
  },
  render: function Render(args) {
    return (
      <div className="text-onyx">
        <h3 className="font-semibold text-2xl pb-16">
          Showing all variables in the <span className="text-blue italic">svg-codes.ts</span> file
        </h3>
        <div className="grid grid-cols-3">
          {Object.keys(svgCodes).map((iconName) => (
            <div key={iconName} className="mb-8">
              <Icons {...args} name={iconName} />
              <p className="pt-4 font-semibold">{iconName}</p>
            </div>
          ))}
        </div>
      </div>
    );
  },
} satisfies Story;
