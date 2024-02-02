import Dropdown from "@/components/global/dropdown";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta = {
  title: "Global/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    name: "default",
    options: ["USA", "Canada", "UK", "Other"],
    value: "",
    placeholder: "Select a country...",
    required: false,
    background: "bg-white",
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs<{ value: string }>();

    function onChange(value: string) {
      updateArgs({ value: value });
    }

    return <Dropdown {...args} value={value} onChangeDropdown={onChange} />;
  },
} satisfies Story;
