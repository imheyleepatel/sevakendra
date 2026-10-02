import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "@/components/about/Reveal";
import { getTeamMembers } from "./getTeamMembers";
import TeamDirectory from "./TeamDirectory";

const founder = {
  name: "Sujal Patel",
  title: "Founder & Visionary",
  image: "/founder.png?v=446B0FCCBE62",
};

const pillars = [
  {
    title: "Protect",
    line: "Protect what matters most.",
    body: "Helping individuals and families think about financial protection and security.",
    icon: (
      <path
        d="M12 3.5 19 6.2v5.3c0 4.2-2.9 7.2-7 8.5-4.1-1.3-7-4.3-7-8.5V6.2L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Plan",
    line: "Plan with clarity and purpose.",
    body: "Creating thoughtful strategies around goals, responsibilities, and the future.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 8.2V12l2.6 1.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Grow",
    line: "Build for tomorrow.",
    body: "Helping clients think about long-term financial growth and opportunities.",
    icon: (
      <path
        d="M4.5 16.5 9 12l3 2.5 7.5-8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Transfer",
    line: "Think beyond today.",
    body: "Planning for the next generation and the future of what you build.",
    icon: (
      <path
        d="M5 16.5c2.2-4.2 4.2-6.2 7-6.2h7M15.5 7.2 19 10.3l-3.5 3.1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

const journey = [
  {
    when: "2010",
    place: "India",
    title: "The Beginning",
    body: "Started the professional journey in financial services with LIC in India.",
  },
  {
    when: "Experience",
    place: "Learn",
    title: "Building Experience & Relationships",
    body: "Years of experience shaped a people-first approach to financial services.",
  },
  {
    when: "Today",
    place: "Canada",
    title: "A New Chapter",
    body: "Based in Canada, bringing the experience and values developed in India into a broader vision.",
  },
  {
    when: "",
    place: "Canada · India · USA",
    title: "A Growing Vision",
    body: "Building Seva Kendra as a modern financial-services brand serving individuals and families across communities and borders.",
  },
];

const values = [
  {
    title: "Honesty",
    body: "Straightforward conversations and genuine guidance.",
  },
  {
    title: "Transparency",
    body: "Clear communication and understandable options.",
  },
  {
    title: "Trust",
    body: "Relationships built over time, not transactions.",
  },
  {
    title: "Service",
    body: "Putting people and their long-term needs first.",
  },
];

const places = [
  "A place where people could ask questions without hesitation.",
  "A place where options were explained clearly.",
  "A place where guidance was built around individual circumstances and long-term goals.",
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.68rem] font-medium tracking-[0.22em] text-[#DAB875] uppercase">
      {children}
    </p>
  );
}

export default function OurTeam({
  headingAs = "h2",
}: {
  headingAs?: "h1" | "h2";
}) {
  const Heading = headingAs;
  const BlockTitle = headingAs === "h1" ? "h2" : "h3";
  const ItemTitle = headingAs === "h1" ? "h3" : "h4";

  return (
    <section
      id="about-founder"
      aria-labelledby="team-heading"
      className="nav-anchor bg-[#FCFBF8]"
    >
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-28">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="flex items-center justify-center gap-3 text-[0.68rem] font-medium tracking-[0.22em] text-[#DAB875] uppercase">
              <span className="h-px w-8 bg-[#DAB875] sm:w-10" aria-hidden />
              Meet the Founder
              <span className="h-px w-8 bg-[#DAB875] sm:w-10" aria-hidden />
            </p>
            <Heading
              id="team-heading"
              className="mt-5 font-display text-[1.85rem] leading-[1.15] font-medium tracking-[-0.02em] text-[#00022E] sm:text-[2.35rem] lg:text-[2.85rem]"
            >
              Experience That Started in India. A Vision Built for the Future.
            </Heading>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#00022E]/68 sm:text-[1.02rem] sm:leading-8">
              Seva Kendra was built on years of experience, a commitment to service, and a simple belief — financial guidance should begin with trust.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:mt-20 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-20">
          <Reveal>
            <figure className="relative mx-auto w-full max-w-[26rem] pb-5 pl-5 lg:mx-0">
              <div
                aria-hidden
                className="absolute bottom-0 left-0 h-[calc(100%-1.25rem)] w-[calc(100%-1.25rem)] border border-[#DAB875]/75"
              />
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E8E4DA]">
                <Image
                  src={founder.image}
                  alt="Sujal Patel, founder of Seva Kendra"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover object-top"
                />
                <figcaption className="absolute bottom-4 left-4 bg-[#07154F]/92 px-4 py-3 text-white backdrop-blur-[2px]">
                  <span className="block text-[0.62rem] font-medium tracking-[0.22em] text-[#DAB875] uppercase">
                    Founder
                  </span>
                  <span className="mt-1 block font-display text-lg leading-none">Seva Kendra</span>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <article className="max-w-xl">
              <Eyebrow>Founder & Visionary</Eyebrow>
              <BlockTitle className="mt-4 font-display text-[1.85rem] leading-tight font-medium tracking-[-0.02em] text-[#00022E] sm:text-[2.2rem]">
                From Experience to Purpose
              </BlockTitle>
              <div className="mt-6 space-y-4 text-sm leading-7 text-[#00022E]/72 sm:text-[0.98rem] sm:leading-8">
                <p>
                  My journey in financial services began in June 2010 in India with Life Insurance Corporation of India (LIC).
                </p>
                <p>
                  Starting from the ground up, I learned lessons that have remained at the heart of my work — the importance of hard work, discipline, relationships, and most importantly, earning people&apos;s trust.
                </p>
                <p>
                  Over the years, working with individuals, families, and organizations gave me a deeper understanding of an important truth:
                </p>
                <p className="font-medium text-[#00022E]">
                  Financial decisions are not simply about numbers. They are about people, families, aspirations, responsibilities, and the future.
                </p>
                <p>That understanding became the foundation of my approach to financial services.</p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <figure className="mt-16 bg-[#07154F] px-5 py-16 text-center sm:mt-20 sm:px-8 sm:py-20 lg:mt-28 lg:py-24">
          <blockquote className="mx-auto max-w-4xl font-display text-[1.45rem] leading-[1.35] font-medium tracking-[-0.02em] text-white sm:text-[1.85rem] lg:text-[2.2rem]">
            <span className="mb-3 block font-serif text-4xl leading-none text-[#DAB875] sm:text-5xl" aria-hidden>
              “
            </span>
            Financial services are not just about numbers. They are about people, families, aspirations, and the future.
          </blockquote>
          <figcaption className="mt-8 text-[0.72rem] font-medium tracking-[0.2em] text-[#DAB875] uppercase">
            — Founder, Seva Kendra
          </figcaption>
        </figure>
      </Reveal>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl py-16 sm:py-20 lg:py-28">
            <BlockTitle className="font-display text-[1.75rem] leading-tight font-medium tracking-[-0.02em] text-[#00022E] sm:text-[2.15rem]">
              Why Seva Kendra?
            </BlockTitle>
            <p className="mt-5 text-sm leading-7 text-[#00022E]/70 sm:text-[0.98rem] sm:leading-8">
              As my experience grew, one question became increasingly important:
            </p>
            <p className="mt-5 font-display text-[1.35rem] leading-snug font-medium tracking-[-0.02em] text-[#07154F] sm:text-[1.65rem]">
              What if financial services could feel more personal, transparent, and easier to understand?
            </p>
            <ul className="mt-8 space-y-3">
              {places.map((place) => (
                <li key={place} className="flex gap-3 text-sm leading-7 text-[#00022E]/72 sm:text-[0.98rem]">
                  <span className="mt-3 h-px w-5 shrink-0 bg-[#DAB875]" aria-hidden />
                  {place}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-[#00022E]/72 sm:text-[0.98rem] sm:leading-8">
              And most importantly, a place where <span className="font-medium text-[#00022E]">relationships came before transactions.</span>
            </p>
            <p className="mt-6 text-sm leading-7 text-[#00022E]/72 sm:text-[0.98rem] sm:leading-8">
              That idea became the inspiration behind <span className="font-medium text-[#00022E]">Seva Kendra</span>.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#00022E]/72 sm:text-[0.98rem] sm:leading-8">
              Our purpose is to create meaningful conversations around the things that matter most — protecting what you have, planning for what lies ahead, growing your financial resources, and creating a thoughtful path for the next generation.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {pillars.map((pillar) => (
              <li key={pillar.title} className="bg-white px-5 py-6 sm:px-6 sm:py-7">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden className="text-[#07154F]">
                  {pillar.icon}
                </svg>
                <ItemTitle className="mt-5 text-[0.68rem] font-semibold tracking-[0.18em] text-[#DAB875] uppercase">
                  {pillar.title}
                </ItemTitle>
                <p className="mt-3 font-display text-lg leading-snug text-[#00022E]">{pillar.line}</p>
                <p className="mt-2 text-sm leading-6 text-[#00022E]/62">{pillar.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mt-16 bg-white sm:mt-20 lg:mt-28">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal>
            <BlockTitle className="font-display text-[1.75rem] leading-tight font-medium tracking-[-0.02em] text-[#00022E] sm:text-[2.15rem]">
              From India to a Global Vision
            </BlockTitle>
            <ol className="relative mt-12 grid gap-10 lg:mt-16 lg:grid-cols-4 lg:gap-8">
              <span
                aria-hidden
                className="absolute top-2 bottom-2 left-[5px] w-px bg-[#DAB875]/55 lg:inset-x-0 lg:top-[7px] lg:bottom-auto lg:h-px lg:w-full"
              />
              {journey.map((step) => (
                <li key={step.place} className="relative pl-8 lg:pl-0 lg:pt-10">
                  <span
                    aria-hidden
                    className="absolute top-1 left-0 h-[11px] w-[11px] rounded-full bg-[#DAB875] ring-4 ring-white lg:top-0"
                  />
                  <p className="min-h-[1.1em] text-[0.68rem] font-medium tracking-[0.18em] text-[#DAB875] uppercase">
                    {step.when}
                  </p>
                  <ItemTitle className="mt-3 font-display text-[1.35rem] leading-tight font-medium text-[#00022E]">
                    {step.place}
                  </ItemTitle>
                  <p className="mt-1 text-sm font-medium text-[#07154F]">{step.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#00022E]/65">{step.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <Reveal>
          <BlockTitle className="font-display text-[1.75rem] leading-tight font-medium tracking-[-0.02em] text-[#00022E] sm:text-[2.15rem]">
            The Principles Behind Our Work
          </BlockTitle>
          <ul className="mt-10 grid gap-px bg-[#00022E]/8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {values.map((value, index) => (
              <li key={value.title} className="bg-[#FCFBF8] px-1 py-7 sm:px-6 sm:py-8">
                <p className="text-[0.68rem] font-medium tracking-[0.18em] text-[#DAB875]">
                  0{index + 1}
                </p>
                <ItemTitle className="mt-4 font-display text-[1.45rem] font-medium text-[#00022E]">
                  {value.title}
                </ItemTitle>
                <p className="mt-3 max-w-xs text-sm leading-6 text-[#00022E]/65">{value.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <div className="mt-16 max-w-3xl border-l border-[#DAB875] pl-6 sm:mt-20 sm:pl-8 lg:mt-24">
            <BlockTitle className="font-display text-[1.65rem] leading-tight font-medium tracking-[-0.02em] text-[#00022E] sm:text-[2rem]">
              A Message From Our Founder
            </BlockTitle>
            <p className="mt-5 font-display text-[1.2rem] leading-snug text-[#07154F] sm:text-[1.4rem]">
              “I believe trust is not created in a single meeting. It is built one conversation, one relationship, and one commitment at a time.”
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[#00022E]/72 sm:text-[0.98rem] sm:leading-8">
              <p>
                The journey that began in India continues today with a global vision — bringing together years of experience, a strong service mindset, and a commitment to putting people first.
              </p>
              <p>My goal is simple:</p>
              <p className="font-medium text-[#00022E]">
                To build a financial-services organization that people can approach with confidence, clarity, and trust.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-16 max-w-3xl text-center sm:mt-20 lg:mt-28">
            <p className="text-sm leading-7 text-[#00022E]/70 sm:text-base sm:leading-8">
              From India, with experience.
              <br />
              To Canada and the USA, with a vision for the future.
            </p>
            <p className="mt-8 font-display text-[1.85rem] leading-[1.15] font-medium tracking-[-0.02em] text-[#00022E] sm:text-[2.4rem] lg:text-[2.75rem]">
              Your Trust. Our Responsibility.
            </p>
            <p className="mt-6 font-display text-xl text-[#00022E]">{founder.name}</p>
            <p className="mt-1 text-[0.72rem] font-medium tracking-[0.18em] text-[#DAB875] uppercase">
              {founder.title}
            </p>
          </div>
        </Reveal>
      </div>

    </section>
  );
}

export function TeamSection({
  headingAs = "h2",
}: {
  headingAs?: "h2" | "h3";
}) {
  const Heading = headingAs;
  const members = getTeamMembers();

  return (
    <section
      id="our-team"
      aria-labelledby="our-team-heading"
      className="nav-anchor border-t border-[#00022E]/8 bg-[#FCFBF8]"
    >
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
        <Reveal>
          <p className="flex items-center justify-center gap-3 text-[0.68rem] font-medium tracking-[0.22em] text-[#DAB875] uppercase">
            <span className="h-px w-8 bg-[#DAB875] sm:w-10" aria-hidden />
            Our Team
            <span className="h-px w-8 bg-[#DAB875] sm:w-10" aria-hidden />
          </p>
          <Heading
            id="our-team-heading"
            className="mt-5 font-display text-[1.7rem] leading-tight font-medium tracking-[-0.02em] text-[#00022E] sm:text-[2.1rem]"
          >
            Behind Every Conversation Is a Team That Cares.
          </Heading>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#00022E]/68 sm:text-[0.98rem] sm:leading-8">
            Meet the people who bring the Seva Kendra vision to life — combining experience, knowledge, and a commitment to serving individuals and families.
          </p>
          <TeamDirectory members={members} className="relative mx-auto mt-8 w-full max-w-md sm:mt-10" />
        </Reveal>
      </div>
    </section>
  );
}
