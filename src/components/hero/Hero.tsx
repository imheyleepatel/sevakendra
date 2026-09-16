import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full max-w-[100vw] overflow-x-hidden bg-[linear-gradient(90deg,#FCFBF8_0%,#FCFBF8_48%,#F8F4EA_100%)]"
    >
      <div
        className={`${styles.visual} ${styles.delay4} pointer-events-none absolute inset-y-0 right-0 hidden w-[56%] lg:block`}
      >
        <Image
          src="/family.jpg"
          alt="A family looking ahead with confidence, representing the people Seva Kendra protects"
          fill
          priority
          sizes="56vw"
          className="object-cover object-[70%_16%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#FCFBF8_0%,rgba(252,251,248,0.72)_12%,rgba(252,251,248,0.22)_26%,transparent_46%)]" />
      </div>

      <div className="relative mx-auto grid w-full min-w-0 max-w-7xl items-center px-4 py-10 sm:px-6 lg:min-h-[700px] lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] lg:px-8 lg:py-0">
        <div className="relative z-10 w-full min-w-0 max-w-[520px] py-2 lg:py-20">
          <p
            className={`${styles.reveal} flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.62rem] font-medium tracking-[0.14em] text-[#07154F] uppercase sm:text-[0.68rem] sm:tracking-[0.2em]`}
          >
            <span className="h-px w-9 shrink-0 bg-[#D8A63A] sm:w-10" aria-hidden />
            Global Solutions for a Secure Tomorrow
          </p>

          <h1
            id="hero-heading"
            className={`${styles.reveal} ${styles.delay1} mt-5 font-display text-[2.25rem] leading-[1.14] font-medium tracking-[-0.02em] text-[#07154F] sm:text-[2.6rem] md:text-[2.85rem] lg:text-[3.25rem] xl:text-[3.75rem]`}
          >
            Protecting Your Future.
            <span className="mt-1 block text-[#D8A63A]">
              Nurturing Your
              <br />
              Tomorrow.
            </span>
          </h1>

          <p
            className={`${styles.reveal} ${styles.delay2} mt-6 w-full max-w-[520px] text-[0.95rem] leading-[1.7] text-[#18213F]/80 sm:text-base`}
          >
            From personal protection to financial planning, Seva Kendra
            provides trusted insurance and financial solutions for individuals,
            families and businesses across the globe.
          </p>

          <div className={`${styles.reveal} ${styles.delay3} mt-8`}>
            <Link
              href="/our-work"
              className="group inline-flex items-center rounded-full bg-[#07154F] px-6 py-3 text-sm font-medium tracking-wide text-white shadow-[0_8px_20px_rgba(7,21,79,0.16)] transition-all duration-300 hover:bg-[#D8A63A] hover:text-[#07154F] hover:shadow-[0_10px_24px_rgba(216,166,58,0.28)] focus-visible:ring-2 focus-visible:ring-[#D8A63A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FCFBF8] focus-visible:outline-none motion-reduce:transition-none"
            >
              Explore Our Services
              <span
                aria-hidden
                className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <p className="mt-6 font-display text-sm tracking-wide text-[#07154F]/55 italic">
              Your Trust, Our Responsibility
            </p>
          </div>
        </div>

        <div className={`${styles.visual} ${styles.delay4} relative mt-8 h-[250px] w-full min-w-0 overflow-hidden sm:h-[300px] lg:mt-0 lg:h-full lg:min-h-[700px] lg:overflow-visible`}>
          <div className="absolute inset-0 lg:hidden">
            <Image
              src="/family.jpg"
              alt="A family looking ahead with confidence, representing the people Seva Kendra protects"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[70%_18%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#FCFBF8_0%,rgba(252,251,248,0.28)_18%,transparent_42%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
