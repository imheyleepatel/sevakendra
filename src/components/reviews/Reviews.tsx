import Reveal from "@/components/about/Reveal";

const reviews = [
  {
    name: "Ketan Patel",
    quote:
      "Very fast and quick service. A perfect place to get insurance and the best advisor.",
    rating: 5,
  },
  {
    name: "Mayank Patel",
    quote:
      "Wonderful and fast service. Always positive, supportive, and easy to work with.",
    rating: 5,
  },
  {
    name: "Nick Patel",
    quote:
      "Excellent work as a LIC premium insurance agent. Helpful nature and a smooth claim process.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${index < count ? "text-[#DAB875]" : "text-[#00022E]/15"}`}
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M10 1.5l2.35 4.76 5.25.77-3.8 3.7.9 5.23L10 13.9l-4.7 2.06.9-5.23-3.8-3.7 5.25-.77L10 1.5Z"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="scroll-mt-24 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#DAB875]">
              <span className="h-px w-10 bg-[#DAB875]" aria-hidden />
              Client Reviews
              <span className="h-px w-10 bg-[#DAB875]" aria-hidden />
            </p>
            <h2
              id="reviews-heading"
              className="mt-5 font-display text-[1.75rem] font-medium leading-[1.18] tracking-[-0.02em] text-[#00022E] sm:text-[2rem] lg:text-[2.25rem]"
            >
              Trusted by Clients Across the Globe
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#00022E]/65 sm:text-[0.95rem]">
              Real feedback from clients who value dependable service, expert
              guidance, and long-term financial protection.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-7 lg:mt-14">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={90 + index * 90}>
              <article
                className="group flex h-full flex-col rounded-md border border-[#00022E]/8 bg-[#FCFBF8] px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#DAB875]/40 hover:shadow-[0_14px_36px_rgba(0,2,46,0.07)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-7 sm:py-8"
              >
                <Stars count={review.rating} />

                <blockquote className="mt-5 flex-1">
                  <p className="text-[0.95rem] leading-[1.75] text-[#00022E]/80">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </blockquote>

                <div className="mt-6 border-t border-[#00022E]/8 pt-5">
                  <p className="font-display text-[1.02rem] font-medium text-[#00022E]">
                    {review.name}
                  </p>
                  <p className="mt-1 text-[0.72rem] tracking-wide text-[#00022E]/50 uppercase">
                    Verified Client
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
