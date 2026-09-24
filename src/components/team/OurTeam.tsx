import Image from "next/image";
import Reveal from "@/components/about/Reveal";

const leader = {
  name: "Sujal Patel",
  role: "Founder & Insurance Advisor",
  image: "/team-1.jpg",
};

const highlights = [
  "Insurance & Financial Services",
  "Personalized Client Guidance",
  "Serving India, Canada & USA",
  "Building Long-Term Client Relationships",
];

export default function OurTeam({
  headingAs = "h2",
}: {
  headingAs?: "h1" | "h2";
}) {
  const Heading = headingAs;
  return (
    <section
      id="our-team"
      aria-labelledby="team-heading"
      className="nav-anchor bg-[#FCFBF8]"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#DAB875]">
              <span className="h-px w-10 bg-[#DAB875]" aria-hidden />
              About Founder
              <span className="h-px w-10 bg-[#DAB875]" aria-hidden />
            </p>
            <Heading
              id="team-heading"
              className="mt-5 font-display text-[1.75rem] font-medium leading-[1.18] tracking-[-0.02em] text-[#00022E] sm:text-[2rem] lg:text-[2.25rem]"
            >
              Leadership You Can Trust
            </Heading>
            <p className="mt-4 text-sm leading-relaxed text-[#00022E]/65 sm:text-[0.95rem]">
              Experienced professionals guiding Seva Kendra with integrity,
              clarity, and a long-term commitment to client success.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 items-center gap-10 lg:mt-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-md bg-[#00022E]/5 shadow-[0_12px_36px_rgba(0,2,46,0.08)]">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                sizes="(max-width: 1024px) 100vw, 440px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <article className="max-w-xl lg:py-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#DAB875]">
                Leadership
              </p>
              <h3 className="mt-4 font-display text-[2rem] font-medium leading-tight tracking-[-0.02em] text-[#00022E] sm:text-[2.35rem]">
                {leader.name}
              </h3>
              <p className="mt-2 text-sm font-medium tracking-wide text-[#DAB875] sm:text-base">
                {leader.role}
              </p>

              <div className="mt-8 border-t border-[#DAB875]/35 pt-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#00022E]/55">
                  Profile
                </p>
                <p className="mt-4 text-sm leading-8 text-[#00022E]/70 sm:text-[0.95rem]">
                  For Sujal Patel, Seva Kendra is more than a business — it is a commitment to people and their future.
                  Built on experience in insurance and financial services, Seva Kendra was founded with the belief that everyone deserves clear guidance, dependable protection, and someone they can trust when making important financial decisions.

Today, Sujal continues to build that vision by creating lasting relationships and helping individuals and families plan with greater confidence across India, Canada, and the USA.
                </p>
              </div>

              <ul className="mt-7 grid gap-3 border-t border-[#00022E]/10 pt-6 sm:grid-cols-2 sm:gap-x-8">
                {highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-6 text-[#00022E]/75"
                  >
                    <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#DAB875]" aria-hidden />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
