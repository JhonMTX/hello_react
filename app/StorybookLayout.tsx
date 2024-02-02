// StorybookLayout.tsx
import "./globals.css";
import { Open_Sans } from "next/font/google";
import React from "react";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  style: 'normal'
});

export const metadata = {};

const StorybookLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default StorybookLayout;
