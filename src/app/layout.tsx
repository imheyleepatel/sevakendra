import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seva Kendra | Global Financial Solution",
  description: "Your Trust, Our Responsibility — Canada, India, and USA.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-[#FCFBF8] font-sans text-[#18213F]">
        <Navbar />
        <div className="pt-[4.75rem] sm:pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
