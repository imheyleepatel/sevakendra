import OurTeam from "@/components/team/OurTeam";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About the Founder",
  description:
    "Meet Sujal Patel, founder and insurance advisor at Seva Kendra, guiding individuals and families across India, Canada, and the USA.",
  path: "/our-team",
});

export default function OurTeamPage() {
  return (
    <main className="flex-1">
      <OurTeam headingAs="h1" />
    </main>
  );
}
