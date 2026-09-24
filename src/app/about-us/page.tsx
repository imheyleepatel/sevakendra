import AboutUs from "@/components/about/AboutUs";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Since 2010, Seva Kendra has helped families and businesses across India, Canada, and the USA find insurance built on trust, personal service, and long-term relationships.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <main className="flex-1">
      <AboutUs showIntro introHeadingAs="h1" />
    </main>
  );
}
