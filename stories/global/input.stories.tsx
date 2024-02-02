import Input from "@/components/global/input";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

const meta = {
  title: "Global/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    name: "default",
    value: "Other",
    placeholder: "First Name",
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs<{ value: string }>();

    function onChange(value: string) {
      updateArgs({ value: value });
    }

    return <Input {...args} value={value} onChangeInput={onChange} />;
  },
} satisfies Story;

export const WithIcon = {
  args: {
    name: "default",
    value: "Other",
    placeholder: "First Name",
    error: "Input is required or invalid.",
    icon: "username",
    iconColor: "sandals-gray",
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs<{ value: string }>();

    function onChange(value: string) {
      updateArgs({ value: value });
    }

    return <Input {...args} value={value} onChangeInput={onChange} />;
  },
} satisfies Story;
