import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about-us" },
  { label: "Our Work / Services", href: "#our-work" },
  { label: "About Founder", href: "#our-team" },
];

const insuranceLinks = [
  "Life Insurance",
  "Health Insurance",
  "Overseas Insurance",
  "General Insurance",
];

const countries = [
  { code: "IN", name: "India" },
  { code: "CA", name: "Canada" },
  { code: "US", name: "USA" },
];

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[0.68rem] font-semibold tracking-[0.2em] text-white/85 uppercase">
      {children}
    </h2>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(115deg,#07154F_0%,#101D63_52%,#18213F_100%)] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-[#D8A63A]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 left-1/3 h-80 w-80 rounded-full bg-white/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-[3.75rem]">
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-[1.45fr_0.8fr_0.95fr_0.7fr] lg:gap-12">
          <div className="max-w-sm">
            <Link href="#home" className="inline-flex items-center gap-3">
              <Image
                src="/logo-mark.png"
                alt="Seva Kendra"
                width={56}
                height={46}
                className="h-11 w-auto object-contain brightness-0 invert"
              />
              <span className="font-display text-[1.45rem] font-semibold tracking-[0.04em] text-white">
                SEVA KENDRA
              </span>
            </Link>
            <p className="mt-3 text-[0.68rem] font-medium tracking-[0.22em] text-[#D8A63A] uppercase">
              Global Financial Solutions
            </p>
            <p className="mt-5 max-w-xs text-sm leading-[1.75] text-white/65">
              Your trusted partner for global financial protection and personalized
              insurance solutions since 2010.
            </p>
          </div>

          <nav aria-label="Footer quick links">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#D8A63A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Insurance links">
            <FooterHeading>Insurance</FooterHeading>
            <ul className="mt-5 space-y-3">
              {insuranceLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#our-work"
                    className="text-sm text-white/60 transition-colors hover:text-[#D8A63A]"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <FooterHeading>Countries</FooterHeading>
            <ul className="mt-5 space-y-3">
              {countries.map((country) => (
                <li key={country.code}>
                  <Link
                    href="#contact-us"
                    className="inline-flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-[#D8A63A]"
                  >
                    <span className="w-5 text-[0.65rem] font-semibold tracking-[0.12em] text-[#D8A63A]">
                      {country.code}
                    </span>
                    {country.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/12 pt-5 text-[0.72rem] text-white/45 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Seva Kendra. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#privacy-policy" className="transition-colors hover:text-white/80">
              Privacy Policy
            </a>
            <a href="#terms-conditions" className="transition-colors hover:text-white/80">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
