import "../app/globals.css";
import type { Preview } from "@storybook/react";
import React from "react";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  style: 'normal'
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${openSans.className}`}>
        <Header />
        <div className="min-h-screen">
          <div className="px-0 mt-0 md:px-[1.5rem] md:mt-[3.2rem]">
            <Story />
          </div>
        </div>
        <Footer />
      </div>
    ),
  ],
};

export default preview;
