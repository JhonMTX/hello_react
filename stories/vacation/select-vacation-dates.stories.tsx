import SelectVacationDates from "@/components/vacation/select-vacation-dates";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { format } from "date-fns";

const meta = {
  title: "Vacation/Select Vacation Dates",
  component: SelectVacationDates,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SelectVacationDates>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    brand: "sandals",
    label: "Select Vacation Dates",
    rstCode: "SSV",
    selectedDays: { from: "", to: "" },
    minNights: 3,
    yearLimit: 2025,
    maxNights: 21,
    openingDays: {
      SSV: "2024-03-27",
    },
    warningMessage: {
      minNights:
        "Minimum 3-night stay is required to book online. For shorter stays call",
      maxNights:
        "Maximum 21-night stay when you book online. For longer stays call",
    },
  },
  render: function Render(args) {
    const [{ selectedDays }, updateArgs] = useArgs();

    function onChange(value: { from: Date; to: Date }) {
      const { from, to } = value;
      const formatFrom = format(from, "MM-dd-yyy");
      const formatTo = format(to, "MM-dd-yyyy");
      const result = { from: formatFrom, to: formatTo }; 
      updateArgs({selectedDays: result});
    }

    return (
      <section className="w-full flex bg-white">
        <SelectVacationDates {...args} selectedDays={selectedDays} onSelect={onChange} />
      </section>
    );
  },
} satisfies Story;

export const DaysSelected = {
  args: {
    brand: "sandals",
    label: "Select Vacation Dates",
    rstCode: "SSV",
    selectedDays: { from: "11-02-2024", to: "11-06-2024" },
    minNights: 3,
    yearLimit: 2025,
    maxNights: 21,
    openingDays: {
      SSV: "2024-03-27",
    },
    warningMessage: {
      minNights:
        "Minimum 3-night stay is required to book online. For shorter stays call ",
      maxNights:
        "Maximum 21-night stay when you book online. For longer stays call ",
    },
  },
  render: function Render(args) {
    const [{ selectedDays }, updateArgs] = useArgs();

    function onChange(value: { from: Date; to: Date }) {
      const { from, to } = value;
      const formatFrom = format(from, "MM-dd-yyy");
      const formatTo = format(to, "MM-dd-yyyy");
      const result = { from: formatFrom, to: formatTo }; 
      updateArgs({selectedDays: result});
    }

    return (
      <section className="w-full flex bg-white">
        <SelectVacationDates {...args} selectedDays={selectedDays} onSelect={onChange} />
      </section>
    );
  },
} satisfies Story;
