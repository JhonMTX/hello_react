import type { Meta,  StoryObj } from "@storybook/react";
import { useArgs, useEffect, useCallback, useState } from "@storybook/preview-api";
import InactivityModa from "@/components/rooms/inactivity-moda";

const meta = {
  title: "Rooms/Inactivity Modal",
  component: InactivityModa,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InactivityModa>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Secundary: Story = {
  args: {
    title: "YOUR SESSION HAS EXPIRED",
    description:
      "To protect your security and personal data, we automatically ended your session, due to inactivity with the site.",
    inactivityLimit: 0,
    counter: 0,
  },
};

export const Primary = {
  render: function Render(args) {   
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [inactivityLimit, setinactivityLimit] = useState(0);
    const [sessionEnd, setSessionEnd] = useState(false);

    const handleSessionEndChange = (object: any) => {
      setSessionEnd(object)
    };

    useEffect(() => {
      settitle("YOUR SESSION IS ABOUT TO EXPIRE")
      setdescription(args.description)
      setinactivityLimit(args.inactivityLimit)
    }, []);

    useEffect(() => {
      if(sessionEnd){
      settitle("YOUR SESSION HAS EXPIRED")
      setdescription("To protect your security and personal data, we automatically ended your session, due to inactivity with the site.")
      setinactivityLimit(0)
      }
    }, [sessionEnd]);

    console.log("exe");

    return (
      <div className="flex flex-row flex-wrap">
        <InactivityModa
          title = {title}
          description = {description}
          inactivityLimit = {inactivityLimit}
          counter = {args.counter}
          setSessionEnd = {handleSessionEndChange}

        />
      </div>
    );
  },
  args: {
    title: "YOUR SESSION IS ABOUT TO EXPIRE",
    description:
      "To protect your security and personal data, we automatically end your session when you haven't interacted with the site in the next:",
    inactivityLimit: 1,
    counter: 1,
  },
} satisfies Story;