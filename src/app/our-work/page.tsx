import AboutUs from "@/components/about/AboutUs";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/site";
import { servicesJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Insurance Solutions",
  description:
    "Compare Seva Kendra insurance solutions for life, health, overseas travel, and general coverage, with guidance from established insurance partners.",
  path: "/our-work",
});

export default function OurWorkPage() {
  return (
    <main className="flex-1">
      <JsonLd data={servicesJsonLd()} />
      <AboutUs showIntro={false} showWorkSections workHeadingAs="h1" />
    </main>
  );
}
