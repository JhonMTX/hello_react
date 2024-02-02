import SubscribeTo from "@/components/vacation/subscribe-to";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta = {
  title: "Vacation/Subscribe To Sandals & Beaches Email",
  component: SubscribeTo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SubscribeTo>;

export default meta;

type Story = StoryObj<typeof meta>;

type Values = {
  name: string;
  email: string;
  country: string;
};

const countries = ["USA", "Canada", "UK", "Other"];
const placeholders = {
  name: "First Name",
  email: "Email Address",
  country: "Select a country...",
};

const defaults = {
  name: "",
  email: "",
  country: "",
};

const popup = {
  title: "PRIVACY STATEMENT",
  content: [
    {
      title: "Information Collection",
      description:
        "Unique Vacations, Inc. is the sole owner of the information collected on this website. Unique Vacations, Inc., as the worldwide representative for Sandals, and Beaches Resorts, collects information from our users at several different points on our Website.",
    },
    {
      title: "Brochure Request and Booking Engine",
      description:
        "We request information from the user on our brochure request forms and in our booking engines. A user must provide contact information (such as name, email, and mailing address) and financial information (such as credit card number, expiration date). This information is used for billing purposes. If we have trouble processing an order, the information is used to contact the user.",
    },
    {
      title: "Profile",
      description:
        "We store information that we collect through cookies and log files to create a profile of our users. A profile is stored information that we keep on individual users that detail their viewing preferences. Consequently, collected information is tied to the users' personally identifiable information to provide offers and improve the content of the site for the user. This profile is used to tailor a user's visit to our Web site and to direct pertinent marketing promotions to them. We do not share, under any circumstances, your profile with other third parties",
    },
    {
      title: "Cookies",
      description:
        "A cookie is a piece of data stored on the user's computer tied to information about the user. Usage of a cookie is in no way linked to any personally identifiable information while on our site. We use both session ID cookies and persistent cookies. For the session ID cookie, once users close the browser, the cookie simply terminates. A persistent cookie is a small text file stored on the user's hard drive for an extended period of time. Persistent cookies can be removed by following Internet browser help file directions.",
    },
    {
      title: "Customer Service",
      description:
        "We communicate with users on a regular basis to provide requested services and in regards to issues relating to their account we reply via email or phone, in accordance with the user's wishes.",
    },
  ],
};

export const Default = {
  render: function Render(args) {
    const [{ values }, updateArgs] = useArgs();

    function onChange(key: string, value: string) {
      const copyValues = values;
      copyValues[key as keyof Values] = value;
      updateArgs({ ...copyValues });
    }
    return (
      <section className="w-full">
        <div className="mx-auto sm:px-14 w-full max-w-6xl">
          <div className="pt-8 px-16 pb-24 flex justify-center w-full">
            <SubscribeTo {...args} values={values} onChange={onChange} />
          </div>
        </div>
      </section>
    );
  },
  args: {
    brand: "sandals",
    placeholders: placeholders,
    values: defaults,
    countries: countries,
    popup: popup,
  },
} satisfies Story;
