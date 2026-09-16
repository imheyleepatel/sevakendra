import type { ReactNode } from "react";

function CanadaFlag() {
  return (
    <svg
      viewBox="0 0 1200 600"
      className="h-6 w-[2.15rem] shrink-0 overflow-hidden rounded-[2px] shadow-[0_1px_2px_rgba(7,21,79,0.12)] sm:h-7 sm:w-10"
      aria-label="Canada"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Canadian Flag */}
      <rect width="1200" height="600" fill="#FFFFFF" />

      {/* Red panels */}
      <rect width="300" height="600" fill="#FF0000" />
      <rect x="900" width="300" height="600" fill="#FF0000" />

      {/* Detailed Canadian Maple Leaf */}
      <path
        fill="#FF0000"
        d="
          M600 65
          L570.5 165.5
          L512.5 131
          L525.5 199
          L450 185
          L488 240
          L419 265
          L510 287
          L477 357
          L561 329
          L552 430
          L600 408
          L648 430
          L639 329
          L723 357
          L690 287
          L781 265
          L712 240
          L750 185
          L674.5 199
          L687.5 131
          L629.5 165.5
          Z
        "
      />

      {/* Maple leaf inner cuts/details */}
      <path
        fill="#FFFFFF"
        d="
          M600 65
          L600 408
          L552 430
          L561 329
          L477 357
          L510 287
          L419 265
          L488 240
          L450 185
          L525.5 199
          L512.5 131
          L570.5 165.5
          Z
        "
        opacity="0"
      />
    </svg>
  );
}

function IndiaFlag() {
  return (
    <svg
      viewBox="0 0 60 40"
      className="h-6 w-[2.15rem] shrink-0 overflow-hidden rounded-[2px] shadow-[0_1px_2px_rgba(7,21,79,0.12)] sm:h-7 sm:w-10"
      aria-hidden
    >
      <rect width="60" height="13.34" fill="#FF9933" />
      <rect y="13.33" width="60" height="13.34" fill="#FFFFFF" />
      <rect y="26.66" width="60" height="13.34" fill="#138808" />
      <circle
        cx="30"
        cy="20"
        r="4.2"
        fill="none"
        stroke="#000080"
        strokeWidth="0.9"
      />
      <circle cx="30" cy="20" r="0.8" fill="#000080" />
    </svg>
  );
}

function UsaFlag() {
  return (
    <svg
      viewBox="0 0 60 40"
      className="h-6 w-[2.15rem] shrink-0 overflow-hidden rounded-[2px] shadow-[0_1px_2px_rgba(7,21,79,0.12)] sm:h-7 sm:w-10"
      aria-hidden
    >
      <rect width="60" height="40" fill="#BF0A30" />
      <rect y="3.07" width="60" height="3.07" fill="#FFFFFF" />
      <rect y="9.23" width="60" height="3.07" fill="#FFFFFF" />
      <rect y="15.38" width="60" height="3.07" fill="#FFFFFF" />
      <rect y="21.54" width="60" height="3.07" fill="#FFFFFF" />
      <rect y="27.69" width="60" height="3.07" fill="#FFFFFF" />
      <rect y="33.85" width="60" height="3.07" fill="#FFFFFF" />
      <rect width="24" height="21.5" fill="#002868" />
    </svg>
  );
}

function CountryItem({
  name,
  flag,
}: {
  name: string;
  flag: ReactNode;
}) {
  return (
    <div className="group flex shrink-0 items-center gap-1.5 sm:gap-2.5">
      {flag}
      <span className="text-[0.56rem] font-medium tracking-[0.14em] text-[#07154F] uppercase transition-all duration-300 group-hover:scale-[1.02] sm:text-[0.7rem] sm:tracking-[0.18em]">
        {name}
      </span>
    </div>
  );
}

export default function GlobalPresence() {
  return (
    <section
      aria-label="Global presence"
      className="relative z-20 -mt-6 sm:-mt-9"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[980px] items-center justify-center gap-3 rounded-full border border-[#07154F]/10 bg-white/90 px-3 py-3 shadow-[0_22px_38px_rgba(7,21,79,0.10)] backdrop-blur-sm sm:gap-5 sm:px-5 lg:gap-6 lg:px-7">
          <CountryItem name="Canada" flag={<CanadaFlag />} />

          <span className="h-6 w-px shrink-0 bg-[#D8A63A]/60 sm:h-7" aria-hidden />

          <CountryItem name="India" flag={<IndiaFlag />} />

          <span className="h-6 w-px shrink-0 bg-[#D8A63A]/60 sm:h-7" aria-hidden />

          <CountryItem name="USA" flag={<UsaFlag />} />

          <span
            aria-hidden
            className="hidden h-8 w-8 items-center justify-center rounded-full border border-[#D8A63A]/30 bg-[#F9F2DD] text-base font-semibold text-[#07154F] sm:inline-flex"
          >
            →
          </span>

          <span className="hidden text-[0.55rem] font-medium tracking-[0.12em] text-[#07154F]/75 uppercase sm:block sm:text-[0.68rem] sm:tracking-[0.16em]">
            Your Financial Partner Across Borders
          </span>
        </div>
      </div>
    </section>
  );
}