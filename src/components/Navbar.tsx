"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#our-work", label: "Our Work" },
  { href: "#our-team", label: "About Founder" },
  { href: "#reviews", label: "Reviews" },
  { href: "#why-us", label: "Why Us" },
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
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const pendingScroll = useRef<string | null>(null);

  useLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const updateNavbarHeight = () => {
      // Bar only, plus the header border. The open mobile menu must not inflate this.
      const border = navbarRef.current
        ? parseFloat(getComputedStyle(navbarRef.current).borderBottomWidth) || 0
        : 0;
      const height = Math.ceil(bar.getBoundingClientRect().height + border);
      setNavbarHeight(height);
      document.documentElement.style.setProperty("--navbar-height", `${height}px`);
    };

    updateNavbarHeight();
    const observer = new ResizeObserver(updateNavbarHeight);
    observer.observe(bar);

    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--navbar-height");
    };
  }, []);

  useEffect(() => {
    const ids = links.map((link) => link.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const visibleIds = new Set<string>();
    const effectiveNavbarHeight = navbarHeight || 80;

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

      const activeId = ids.filter((id) => visibleIds.has(id)).pop();
      if (activeId) {
        setActiveHref(`#${activeId}`);
        return;
      }

      const passedIds = elements.filter(
        (element) => element.getBoundingClientRect().top <= effectiveNavbarHeight,
      );
      const lastPassedId = passedIds[passedIds.length - 1]?.id;
      setActiveHref(`#${lastPassedId || "home"}`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleIds.add(entry.target.id);
          } else {
            visibleIds.delete(entry.target.id);
          }
        }
        updateActive();
      },
      {
        root: null,
        rootMargin: `-${effectiveNavbarHeight}px 0px -55% 0px`,
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActive);
    };
  }, [navbarHeight]);

  const scrollToSection = useCallback((href: string) => {
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    if (open || !pendingScroll.current) return;
    const href = pendingScroll.current;
    pendingScroll.current = null;
    scrollToSection(href);
  }, [open, scrollToSection]);

  const handleNavClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      setActiveHref(href);
      window.history.replaceState(null, "", href);

      if (open) {
        pendingScroll.current = href;
        setOpen(false);
        return;
      }

      scrollToSection(href);
    },
    [open, scrollToSection],
  );

  return (
    <header ref={navbarRef} className="fixed top-0 right-0 left-0 z-[1000] w-full border-b border-[#07154F]/10 bg-[#FCFBF8]/95 shadow-[0_4px_18px_rgba(7,21,79,0.06)] backdrop-blur-md">
      <div ref={barRef} className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
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
