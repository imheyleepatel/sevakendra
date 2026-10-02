"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { TeamMember } from "./teamMembers";

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function MemberFacts({ member }: { member: TeamMember }) {
  const facts = [
    member.experience
      ? { label: "Experience", value: member.experience }
      : null,
    member.phone ? { label: "Phone", value: member.phone, href: phoneHref(member.phone) } : null,
    member.email ? { label: "Email", value: member.email, href: `mailto:${member.email}` } : null,
  ].filter((fact) => fact !== null);

  if (facts.length === 0) return null;

  return (
    <dl className="mt-3 grid gap-2 text-sm sm:mt-4 sm:gap-2.5">
      {facts.map((fact) => (
        <div key={fact.label} className="min-w-0">
          <dt className="text-[0.65rem] font-medium tracking-[0.16em] text-[#00022E]/45 uppercase">
            {fact.label}
          </dt>
          <dd className="min-w-0 font-medium text-[#00022E]">
            {fact.href ? (
              <a
                href={fact.href}
                className="break-all text-[#07154F] underline-offset-2 hover:text-[#D8A63A] hover:underline"
              >
                {fact.value}
              </a>
            ) : (
              fact.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function TeamDirectory({
  members,
  className = "relative mt-8 w-full max-w-md sm:mt-10",
}: {
  members: TeamMember[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(members[0]?.id ?? "");
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const selected = members.find((member) => member.id === selectedId) ?? members[0];

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [visible]);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (open || !visible) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setVisible(false), reduced ? 0 : 340);
    return () => window.clearTimeout(timer);
  }, [open, visible]);

  if (!selected) return null;

  return (
    <>
      <div className={className}>
        <span
          aria-hidden
          className="team-glow pointer-events-none absolute -inset-1.5 rounded-full bg-[#D8A63A]/70 blur-lg sm:-inset-2 sm:blur-xl"
        />
        <span
          aria-hidden
          className="team-glow pointer-events-none absolute -inset-px rounded-full bg-[#D8A63A]/80 blur-[2px]"
          style={{ animationDelay: "0.4s" }}
        />
        <button
          type="button"
          onClick={() => {
            setVisible(true);
            setOpen(true);
          }}
          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#07154F] px-5 py-4 text-base font-semibold tracking-wide text-white shadow-[0_0_28px_rgba(216,166,58,0.45)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#D8A63A] hover:text-[#07154F] hover:shadow-[0_0_36px_rgba(216,166,58,0.7)] focus-visible:ring-2 focus-visible:ring-[#D8A63A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FCFBF8] focus-visible:outline-none motion-reduce:transition-none motion-reduce:hover:scale-100 sm:gap-0 sm:px-8 sm:py-6 sm:text-xl"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
          >
            <span className="team-shine absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
          </span>
          <span className="relative">Meet Our Team</span>
          <span className="relative rounded-full bg-white/15 px-2.5 py-0.5 text-xs tracking-[0.08em] text-[#D8A63A] group-hover:bg-[#07154F]/10 group-hover:text-[#07154F] sm:ml-4 sm:px-3 sm:py-1 sm:text-sm">
            {members.length}
          </span>
          <span aria-hidden className="relative inline-block text-lg transition-transform duration-300 group-hover:translate-x-1.5 sm:ml-3 sm:text-xl">
            →
          </span>
        </button>
      </div>

      {visible
        ? createPortal(
        <div className={`fixed inset-0 z-[1100] flex items-end justify-center p-0 sm:items-center sm:p-4 lg:p-8 ${open ? "" : "pointer-events-none"}`}>
          <button
            type="button"
            aria-label="Close team directory"
            className={`${open ? "team-backdrop-in" : "team-backdrop-out"} absolute inset-0 bg-[#07154F]/70 backdrop-blur-sm`}
            onClick={() => setOpen(false)}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={`${open ? "team-dialog-in" : "team-dialog-out"} relative flex max-h-[100dvh] w-full max-w-6xl flex-col overflow-hidden rounded-t-2xl bg-[#FCFBF8] shadow-[0_24px_80px_rgba(0,2,46,0.28)] sm:max-h-[min(900px,92dvh)] sm:rounded-2xl`}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#00022E]/8 px-5 py-4 sm:px-7 sm:py-5">
              <div>
                <p className="text-[0.68rem] font-medium tracking-[0.2em] text-[#DAB875] uppercase">
                  Seva Kendra
                </p>
                <h2
                  id={titleId}
                  className="mt-1 font-display text-[1.45rem] font-medium tracking-[-0.02em] text-[#00022E] sm:text-[1.8rem]"
                >
                  Our Team
                </h2>
                <p className="mt-1 text-sm text-[#00022E]/60">
                  {members.length} people across life, health, overseas, and general insurance.
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#00022E]/10 text-[#07154F] transition-colors hover:border-[#D8A63A] hover:text-[#D8A63A] focus-visible:ring-2 focus-visible:ring-[#D8A63A] focus-visible:outline-none"
                aria-label="Close"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)] overflow-hidden xl:grid-cols-[minmax(280px,340px)_minmax(0,1fr)] xl:grid-rows-1">
              <div className="border-b border-[#00022E]/8 bg-white px-4 py-4 sm:px-7 sm:py-5 xl:overflow-y-auto xl:border-r xl:border-b-0">
                <article className="flex items-start gap-4 sm:gap-5 xl:flex-col">
                  <div className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-md bg-[#00022E]/5 shadow-[0_12px_36px_rgba(0,2,46,0.08)] sm:w-44 xl:w-full">
                    <Image
                      src={selected.image}
                      alt={selected.name}
                      fill
                      sizes="(max-width: 640px) 96px, (max-width: 1280px) 176px, 320px"
                      className="object-cover object-top"
                    />
                    {selected.experience ? (
                      <span className="absolute top-3 left-3 hidden rounded-full bg-[#07154F]/90 px-3 py-1 text-[0.68rem] font-medium tracking-[0.14em] text-[#D8A63A] uppercase sm:inline">
                        {selected.experience}
                      </span>
                    ) : null}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-medium text-[#00022E] sm:text-[1.55rem]">
                      {selected.name}
                    </h3>
                    {selected.role ? (
                      <p className="mt-1 text-sm font-medium text-[#DAB875]">{selected.role}</p>
                    ) : null}
                    <MemberFacts member={selected} />
                  </div>
                </article>
              </div>

              <div className="min-h-0 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-5">
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                  {members.map((member) => {
                    const active = member.id === selected.id;
                    return (
                      <li key={member.id}>
                        <button
                          type="button"
                          onClick={() => setSelectedId(member.id)}
                          aria-pressed={active}
                          className={`flex h-full w-full flex-col overflow-hidden rounded-md border bg-white text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,2,46,0.08)] focus-visible:ring-2 focus-visible:ring-[#D8A63A] focus-visible:outline-none motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                            active
                              ? "border-[#D8A63A] shadow-[0_10px_24px_rgba(216,166,58,0.18)]"
                              : "border-[#00022E]/8"
                          }`}
                        >
                          <span className="relative block aspect-square bg-[#00022E]/5 sm:aspect-[4/5]">
                            <Image
                              src={member.image}
                              alt=""
                              fill
                              sizes="(max-width: 640px) 42vw, 180px"
                              className="object-cover object-top"
                            />
                          </span>
                          <span className="flex flex-1 flex-col px-2.5 py-2.5 sm:px-3">
                            <span className="font-display text-[0.92rem] leading-tight font-medium text-[#00022E]">
                              {member.name}
                            </span>
                            {member.role ? (
                              <span className="mt-1 line-clamp-2 text-[0.68rem] leading-snug text-[#00022E]/55">
                                {member.role}
                              </span>
                            ) : null}
                            {member.experience ? (
                              <span className="mt-2 text-[0.68rem] font-medium tracking-wide text-[#DAB875]">
                                {member.experience}
                              </span>
                            ) : null}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      ) : null}
    </>
  );
}
