import AboutUs from "@/components/about/AboutUs";
import GlobalPresence from "@/components/GlobalPresence";
import Hero from "@/components/hero/Hero";
import OurTeam from "@/components/team/OurTeam";
import ContactUs from "@/components/contact/ContactUs";
import Reviews from "@/components/reviews/Reviews";
import WhyUs from "@/components/why-us/WhyUs";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata, siteDescription } from "@/lib/site";
import { faqJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: {
    absolute: "Seva Kendra | Insurance & Financial Protection in Canada, India & USA",
  },
  description: siteDescription,
  path: "/",
});

export default function Home() {
  return (
    <main className="flex-1">
      <JsonLd data={faqJsonLd()} />
      <div id="home" className="nav-anchor">
        <Hero />
      </div>
      <GlobalPresence />
      <AboutUs showWorkSections />
      <OurTeam />
      <Reviews />
      <WhyUs />
      <ContactUs />
    </main>
  );
}
