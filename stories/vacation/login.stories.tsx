import LoginSSG from "@/components/vacation/login-ssg";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Vacation/SSG Login",
  component: LoginSSG,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginSSG>;

export default meta;

type Story = StoryObj<typeof meta>;

const InputUsername = {
  type: "text",
  name: "username",
  require: true,
  placeholder: "Username",
  value: "",
};

const InputEmail = {
  type: "text",
  name: "email",
  require: true,
  placeholder: "Email Address",
  value: "",
};

const InputPassword = {
  type: "password",
  name: "password",
  require: true,
  placeholder: "Password",
  value: "",
};

type Users = {
  FirstName: string;
  LastName: string;
  MemberID: Number;
  AvailablePoints: Number;
  Discount: Number;
  Email: string;
  Address: string;
  State: string;
  City: string;
  ZipCode: string;
  PhoneNumber: string;
};

const defaultsUsers = {
  FirstName: "",
  LastName: "",
  MemberID: 0,
  AvailablePoints: 0,
  Discount: 0,
  Email: "",
  Address: "",
  State: "",
  City: "",
  ZipCode: "",
  PhoneNumber: "",
};

const popupFU = {
  label: "Forgot username",
  text: "Enter the email address registered in your account. We will send you an email with instructions.",
  image: "ssg",
  inputs: [InputEmail],
};

const popupFP = {
  label: "Forgot password",
  text: "Enter the email address registered in your account. We will send you an email with instructions.",
  image: "ssg",
  inputs: [InputUsername, InputEmail],
};

export const Primary = {
  render: function Render(args) {
    const [{ values }, updateArgs] = useArgs();

    function onChange(key: string, value: string) {
      const copyValues = values;
      copyValues[key as keyof Users] = value;
      updateArgs({ ...copyValues });
    }
    return (
      <section className="w-full">
        <div className="mx-auto sm:px-14 w-full max-w-max">
          <div className="flex justify-center w-full">
            <LoginSSG {...args} onChange={onChange} />
          </div>
        </div>
      </section>
    );
  },
  args: {
    brand: "sandals",
    inputs: [InputUsername, InputPassword],
    forgotUsernamePopup: popupFU,
    forgotPasswordPopup: popupFP,
    objectReturn: defaultsUsers,
    endpoint: "",
  },
} satisfies Story;

export const Secondary = {
  render: function Render(args) {
    const [{ values }, updateArgs] = useArgs();

    function onChange(key: string, value: string) {
      const copyValues = values;
      copyValues[key as keyof Users] = value;
      updateArgs({ ...copyValues });
    }
    return (
      <section className="w-full">
        <div className="mx-auto sm:px-14 w-full max-w-max">
          <div className="flex justify-center w-full">
            <LoginSSG {...args} onChange={onChange} />
          </div>
        </div>
      </section>
    );
  },
  args: {
    brand: "sandals",
    inputs: [InputUsername, InputPassword],
    objectReturn: defaultsUsers,
    endpoint: "",
  },
} satisfies Story;
