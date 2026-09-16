import Image from "next/image";
import Reveal from "@/components/about/Reveal";

const team = [
  {
    name: "Damon Salavtor",
    role: "CEO",
    title: "Chief Executive Officer",
    image: "/team-1.jpg",
  },
  {
    name: "Dean Winchester",
    role: "CFO",
    title: "Chief Financial Officer",
    image: "/team-2.jpg",
  },
];

export default function OurTeam() {
  return (
    <section
      id="our-team"
      aria-labelledby="team-heading"
      className="scroll-mt-24 bg-[#FCFBF8]"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#DAB875]">
              <span className="h-px w-10 bg-[#DAB875]" aria-hidden />
              Our Team
              <span className="h-px w-10 bg-[#DAB875]" aria-hidden />
            </p>
            <h2
              id="team-heading"
              className="mt-5 font-display text-[1.75rem] font-medium leading-[1.18] tracking-[-0.02em] text-[#00022E] sm:text-[2rem] lg:text-[2.25rem]"
            >
              Leadership You Can Trust
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#00022E]/65 sm:text-[0.95rem]">
              Experienced professionals guiding Seva Kendra with integrity,
              clarity, and a long-term commitment to client success.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:mt-14">
          {team.map((member, index) => (
            <Reveal key={member.role} delay={100 + index * 100}>
              <article
                className="group overflow-hidden rounded-md border border-[#00022E]/8 bg-white shadow-[0_8px_30px_rgba(0,2,46,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#DAB875]/40 hover:shadow-[0_18px_40px_rgba(0,2,46,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#00022E]/5">
                  <Image
                    src={member.image}
                    alt={`${member.role} — ${member.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#00022E]/55 via-[#00022E]/10 to-transparent"
                    aria-hidden
                  />
                  <span
                    className="absolute top-4 left-4 rounded-full bg-[#DAB875] px-3 py-1 text-[0.68rem] font-semibold tracking-[0.14em] text-[#00022E] uppercase"
                  >
                    {member.role}
                  </span>
                </div>

                <div className="px-6 py-6 text-center sm:px-7 sm:py-7">
                  <h3 className="font-display text-[1.2rem] font-medium text-[#00022E] sm:text-[1.3rem]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#00022E]/60">
                    {member.title}
                  </p>
                  <span
                    className="mx-auto mt-4 block h-px w-10 bg-[#DAB875]/60 transition-all duration-300 group-hover:w-14"
                    aria-hidden
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
