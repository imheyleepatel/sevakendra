import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { getSiteUrl, siteDescription, siteName } from "@/lib/site";
import { organizationJsonLd } from "@/lib/structured-data";
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

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Insurance & Financial Protection in Canada, India & USA`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  keywords: [
    "Seva Kendra",
    "insurance advisor",
    "life insurance",
    "health insurance",
    "overseas insurance",
    "general insurance",
    "Calgary insurance",
    "Kalol insurance",
    "Ahmedabad insurance",
    "Canada India USA insurance",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName,
    title: `${siteName} | Insurance & Financial Protection in Canada, India & USA`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Insurance & Financial Protection in Canada, India & USA`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-[#FCFBF8] font-sans text-[#18213F]">
        <JsonLd data={organizationJsonLd()} />
        <Navbar />
        <div className="pt-[4.75rem] sm:pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
