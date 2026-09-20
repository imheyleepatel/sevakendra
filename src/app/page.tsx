import AboutUs from "@/components/about/AboutUs";
import GlobalPresence from "@/components/GlobalPresence";
import Hero from "@/components/hero/Hero";
import OurTeam from "@/components/team/OurTeam";
import ContactUs from "@/components/contact/ContactUs";
import Reviews from "@/components/reviews/Reviews";

export default function Home() {
  return (
    <main className="flex-1">
      <div id="home" className="nav-anchor">
        <Hero />
      </div>
      <GlobalPresence />
      <AboutUs showWorkSections />
      <OurTeam />
      <Reviews />
      <ContactUs />
    </main>
  );
}
