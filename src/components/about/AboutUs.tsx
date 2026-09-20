import Image from "next/image";
import Reveal from "./Reveal";

const services = [
  {
    title: "Life Insurance",
    description:
      "Protect your loved ones and secure their financial future.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-7 w-7"
        aria-hidden
      >
        <circle
          cx="16"
          cy="9"
          r="3.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M8 24c0-4.4 3.6-7 8-7s8 2.6 8 7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle
          cx="24"
          cy="11"
          r="2.2"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M21 22c0-2.8 1.8-4.5 3.8-4.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Health Insurance",
    description:
      "Support yourself and your family with dependable health protection.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-7 w-7"
        aria-hidden
      >
        <path
          d="M16 26s-9-5.6-9-12.2c0-3.4 2.4-5.8 5.4-5.8 2 0 3.6 1.1 4.6 2.7 1-1.6 2.6-2.7 4.6-2.7 3 0 5.4 2.4 5.4 5.8C25 20.4 16 26 16 26Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Overseas Insurance",
    description:
      "Protection for your journeys, travels, and international needs.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-7 w-7"
        aria-hidden
      >
        <path
          d="M16 6 13 14h6L16 6ZM6 18l10-2 10 2-4 2H10l-4-2Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M10 20h12"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "General Insurance",
    description:
      "Coverage solutions for vehicles, assets, businesses, and more.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-7 w-7"
        aria-hidden
      >
        <rect
          x="5"
          y="12"
          width="22"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M9 12l2.5-4h9l2.5 4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="10"
          cy="22.5"
          r="2"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <circle
          cx="22"
          cy="22.5"
          r="2"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    ),
  },
];

const partners = [
  {
    name: "Life Insurance Corporation (LIC)",
    shortName: "LIC",
    image: "/LIC-Logo.png",
    imageClass: "max-h-[3.1rem] w-auto max-w-[10.5rem] sm:max-h-[3.35rem] sm:max-w-[11.5rem]",
    wellClass: "bg-[#FCFBF8]",
  },
  {
    name: "Tata AIA Life Insurance",
    shortName: "Tata AIA",
    image: "/tata-alia-Logo.png",
    imageClass: "max-h-[3.75rem] w-auto max-w-[9.5rem] sm:max-h-[4rem] sm:max-w-[10.5rem]",
    wellClass: "bg-[#FCFBF8]",
  },
  {
    name: "Care Health Insurance",
    shortName: "Care Health",
    image: "/care-health-logo.png",
    imageClass: "max-h-[2.85rem] w-auto max-w-[11rem] sm:max-h-[3.1rem] sm:max-w-[12rem]",
    wellClass: "bg-[#FCFBF8]",
  },
];

function AboutVisual() {
  return (
    <div className="relative flex h-full min-h-[300px] w-full items-center justify-center sm:min-h-[360px] lg:min-h-[420px]">
      {/* Soft gold glow */}
      {/* <div
        aria-hidden
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(218,184,117,0.12)_0%,transparent_65%)]"
      /> */}

      {/* Main logo */}
      <div className="relative z-10 flex w-full items-center justify-center px-4 sm:px-6 lg:px-2">
        <Image
          src="/logo.png"
          alt="Seva Kendra Global Financial Solution"
          width={1280}
          height={853}
          priority
          className="h-auto w-full max-w-[520px] object-contain mix-blend-multiply"
        />
      </div>


    </div>
  );
}

type AboutUsProps = {
  showIntro?: boolean;
  showWorkSections?: boolean;
};

export default function AboutUs({
  showIntro = true,
  showWorkSections = false,
}: AboutUsProps) {
  return (
    <section
      id="about-us"
      aria-labelledby="about-heading"
      className="nav-anchor bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {showIntro ? <>
        {/* =========================
            ABOUT INTRO
        ========================== */}

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left - Content */}
          <Reveal>
            <div className="max-w-xl">
              {/* Eyebrow */}
              <p className="flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#DAB875]">
                <span
                  className="h-px w-10 bg-[#DAB875]"
                  aria-hidden
                />

                About Seva Kendra
              </p>

              {/* Heading */}
              <h2
                id="about-heading"
                className="mt-5 font-display text-[1.85rem] font-medium leading-[1.18] tracking-[-0.02em] text-[#00022E] sm:text-[2.15rem] lg:text-[2.45rem]"
              >
                Global Financial Solutions, Built Around Your Needs.
              </h2>

              {/* Subheading */}
              <p className="mt-3 font-display text-[1.05rem] italic text-[#DAB875] sm:text-[1.15rem]">
                Serving Communities Since 2010
              </p>

              {/* Description */}
              <div className="mt-6 space-y-5 text-[0.95rem] leading-[1.75] text-[#00022E]/75 sm:text-base">
                <p>
                  At Seva Kendra, we believe that protecting what matters most
                  should be simple, trustworthy, and accessible. Since 2010,
                  we have been helping individuals, families, and businesses
                  find insurance solutions designed around their unique needs
                  and future goals.
                </p>

                <p>
                  With a presence serving communities across India, Canada,
                  and the USA, we provide a range of insurance and financial
                  protection solutions with a focus on trust, personal service,
                  and long-term relationships.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right - Logo */}
          <Reveal
            delay={120}
            className="min-h-[300px] sm:min-h-[360px] lg:min-h-[420px]"
          >
            <AboutVisual />
          </Reveal>
        </div>
        </> : null}

        {showWorkSections ? <>
        {/* =========================
            INSURANCE SOLUTIONS
        ========================== */}

        <div id="our-work" className="nav-anchor mt-20 lg:mt-24">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span
                className="mx-auto block h-px w-12 bg-[#DAB875]/60"
                aria-hidden
              />

              <h3 className="mt-5 font-display text-[1.65rem] font-medium text-[#00022E] sm:text-[1.85rem]">
                Our Insurance Solutions
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#00022E]/60">
                Thoughtfully designed insurance solutions to help protect
                you, your family, your assets, and your future.
              </p>
            </div>
          </Reveal>

          {/* Service Cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={80 + index * 80}
              >
                <article className="group h-full rounded-sm border border-[#00022E]/8 bg-[#FCFBF8] px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#DAB875]/40 hover:shadow-[0_12px_32px_rgba(0,2,46,0.06)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  {/* Icon */}
                  <div className="mb-5 text-[#DAB875] transition-colors duration-300 group-hover:text-[#00022E]">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h4 className="font-display text-[1.1rem] font-medium text-[#00022E]">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-2.5 text-sm leading-relaxed text-[#00022E]/70">
                    {service.description}
                  </p>

                  {/* Gold accent */}
                  <span
                    className="mt-5 block h-px w-8 bg-[#DAB875]/50 transition-all duration-300 group-hover:w-12"
                    aria-hidden
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* =========================
            TRUSTED PARTNERS
        ========================== */}

        <div className="relative mt-20 overflow-hidden lg:mt-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#FCFBF8_0%,#FFFFFF_45%,#FCFBF8_100%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DAB875]/45 to-transparent"
          />

          <div className="relative border-y border-[#00022E]/6 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-18">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#DAB875]">
                  In Partnership With
                </p>
                <h3 className="mt-3 font-display text-[1.5rem] font-medium text-[#00022E] sm:text-[1.65rem]">
                  Trusted Insurance Partners
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#00022E]/65 sm:text-[0.95rem]">
                  Working with established insurance providers to help you find
                  protection suited to your needs.
                </p>
              </div>
            </Reveal>

            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
              {partners.map((partner, index) => (
                <Reveal key={partner.name} delay={100 + index * 90}>
                  <article
                    className="group relative flex h-full flex-col overflow-hidden rounded-md border border-[#00022E]/8 bg-white shadow-[0_4px_24px_rgba(0,2,46,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#DAB875]/45 hover:shadow-[0_16px_40px_rgba(0,2,46,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    <span
                      className="block h-[3px] w-full bg-gradient-to-r from-[#DAB875]/20 via-[#DAB875] to-[#DAB875]/20 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    />

                    <div className="flex flex-1 flex-col items-center justify-center px-6 py-8 sm:px-5 sm:py-9">
                      <div
                        className={`flex h-[4.75rem] w-full items-center justify-center rounded-sm px-4 ring-1 ring-[#00022E]/8 transition-all duration-300 group-hover:ring-[#DAB875]/35 ${partner.wellClass}`}
                      >
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          width={280}
                          height={112}
                          sizes="(max-width: 640px) 90vw, 200px"
                          className={`object-contain object-center ${partner.imageClass}`}
                        />
                      </div>

                      <p className="mt-5 text-center font-display text-[0.95rem] font-medium leading-snug text-[#00022E]">
                        {partner.shortName}
                      </p>
                      <p className="mt-1 text-center text-[0.72rem] leading-relaxed tracking-wide text-[#00022E]/50">
                        {partner.name}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={320}>
              <p className="mx-auto mt-8 max-w-xl text-center text-[0.72rem] leading-relaxed text-[#00022E]/45">
                Partner names and logos are displayed for identification purposes.
              </p>
            </Reveal>
          </div>
        </div>
        </> : null}
      </div>
    </section>
  );
}