import OurTeam, { TeamSection } from "@/components/team/OurTeam";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About the Founder",
  description:
    "Meet Sujal Patel, founder of Seva Kendra. A journey that began with LIC in India in 2010, now serving individuals and families across Canada, India, and the USA.",
  path: "/our-team",
});

export default function OurTeamPage() {
  return (
    <main className="flex-1">
      <OurTeam headingAs="h1" />
      <TeamSection />
    </main>
  );
}
