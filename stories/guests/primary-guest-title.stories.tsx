import type { Meta, StoryObj } from "@storybook/react";
import { GuestTitle } from "@/components/guests/guests-title";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/GuestTitle",
  component: GuestTitle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*   argTypes: {
    backgroundColor: { control: "color" },
  }, */
} satisfies Meta<typeof GuestTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryGuest: Story = {
  args: {
    title: "Primary Guest",
    subtitle: "Must be 18 years old or older",
    description:
      "Please be advised that names entered here must match your proof of citizenship at time of travel. Change or cancellation penalties will apply for misspelled or incorrect names. Please DO NOT enter P.O. BOXES as we do not send travel documents to them.",
    requiredTag: "*Required Field",
  },
};

export const AdditionalGuest: Story = {
  args: {
    title: "Additional Guest",
    subtitle: "",
    description:
      "Please fill out all the necessary information about the additional guest. Please be advised that names entered here must match your proof of citizenship at the time of travel. Change or cancellation penalties will apply for misspelled or incorrect names. There must be two guests registered per room reservation",
    requiredTag: "",
  },
};
