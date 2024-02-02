import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Steps } from "@/components/steps";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  style: 'normal',
});

export const metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>
        <Header />
        <Steps />
        {children}
        <Footer />
      </body>
    </html>
  );
}
