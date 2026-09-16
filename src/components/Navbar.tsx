"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState, type MouseEvent } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#our-work", label: "Our Work" },
  { href: "#our-team", label: "Our Team" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact-us", label: "Contact Us" },
];

function Logo({ onNavigate }: { onNavigate: (event: MouseEvent<HTMLAnchorElement>, href: string) => void }) {
  return (
    <Link
      href="#home"
      onClick={(event) => onNavigate(event, "#home")}
      className="flex min-w-0 flex-1 items-center gap-2 sm:flex-none sm:gap-3"
    >
      <Image
        src="/logo-mark.png"
        alt="Seva Kendra"
        width={72}
        height={58}
        className="h-11 w-auto shrink-0 object-contain object-center sm:h-12"
        priority
      />
      <span className="flex min-w-0 flex-col justify-center leading-tight">
        <span className="font-display text-[1.05rem] font-semibold tracking-[0.03em] text-[#07154F] sm:text-[1.45rem]">
          SEVA KENDRA
        </span>
        <span className="mt-0.5 truncate text-[0.48rem] font-medium tracking-[0.1em] text-[#18213F]/70 uppercase sm:text-[0.62rem] sm:tracking-[0.18em]">
          Global Financial Solution
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const ids = links.map((link) => link.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const ratios = new Map<string, number>();

    const updateActive = () => {
      const nearTop = window.scrollY < 48;
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 24;

      if (nearTop) {
        setActiveHref("#home");
        return;
      }

      if (nearBottom) {
        setActiveHref(links[links.length - 1].href);
        return;
      }

      let bestId = "home";
      let bestRatio = 0;
      for (const [id, ratio] of ratios) {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      }

      setActiveHref(`#${bestId}`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        updateActive();
      },
      {
        root: null,
        rootMargin: "-22% 0px -58% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActive);
    };
  }, []);

  const handleNavClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      setOpen(false);
      setActiveHref(href);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    },
    [],
  );

  return (
    <header className="sticky top-0 z-[100] w-full max-w-[100vw] border-b border-[#07154F]/10 bg-[#FCFBF8]/95 shadow-[0_4px_18px_rgba(7,21,79,0.06)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Logo onNavigate={handleNavClick} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => {
            const active = activeHref === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                aria-current={active ? "page" : undefined}
                className={`relative px-3 py-2 text-[0.9rem] font-medium tracking-wide transition-colors duration-200 ${
                  active ? "text-[#D8A63A]" : "text-[#07154F] hover:text-[#D8A63A]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 bottom-0.5 h-px bg-[#D8A63A] transition-opacity duration-200 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-[#07154F] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-[#07154F]/8 bg-[#FCFBF8] px-4 py-3 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {links.map((link) => {
              const active = activeHref === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    aria-current={active ? "page" : undefined}
                    className={`block border-l-2 px-3 py-3 text-sm font-medium transition-colors duration-200 ${
                      active
                        ? "border-[#D8A63A] text-[#D8A63A]"
                        : "border-transparent text-[#07154F] hover:border-[#D8A63A] hover:text-[#D8A63A]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
