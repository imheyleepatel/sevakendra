"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/about/Reveal";
import GlobalOfficeMap from "./GlobalOfficeMap";
import {
  offices,
  serviceOptions,
  type OfficeId,
} from "./offices";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
        <path
          d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M9.2 8.4c.2-.3.4-.3.7-.3h.4c.2 0 .3.1.4.4l.6 1.4c.1.2 0 .4-.1.6l-.5.6c.6 1.1 1.4 1.8 2.5 2.3l.5-.6c.1-.2.4-.2.6-.1l1.4.7c.2.1.3.3.2.5-.2.8-.8 1.3-1.6 1.4-2.8.2-6.1-3.1-6.2-5.7 0-.5.3-.9.7-1.2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M13.6 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.7v8h3.4Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17.5" cy="6.8" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ContactUs() {
  const [activeOffice, setActiveOffice] = useState<OfficeId | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact-us"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-[#F5F6FA]"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="flex items-center justify-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#DAB875]">
              <span className="h-px w-10 bg-[#DAB875]" aria-hidden />
              Contact Us
              <span className="h-px w-10 bg-[#DAB875]" aria-hidden />
            </p>
            <h2
              id="contact-heading"
              className="mt-5 font-display text-[1.85rem] font-medium leading-[1.16] tracking-[-0.02em] text-[#00022E] sm:text-[2.1rem] lg:text-[2.35rem]"
            >
              We&apos;re Here to Help, Wherever You Are.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#00022E]/70 sm:text-[0.95rem]">
              Connect with our team across Canada, USA and India. Our team is
              here to answer your questions and help you find the right insurance
              solutions.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 lg:mt-14">
            <GlobalOfficeMap
              offices={offices}
              activeId={activeOffice}
              onSelect={setActiveOffice}
            />
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {offices.map((office, index) => {
            const isActive = activeOffice === office.id;

            return (
              <Reveal key={office.id} delay={120 + index * 80}>
                <article
                  className={`group flex h-full flex-col rounded-md border bg-white px-6 py-7 shadow-[0_6px_24px_rgba(0,2,46,0.05)] transition-all duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                    isActive
                      ? "border-[#DAB875] shadow-[0_16px_36px_rgba(0,2,46,0.1)]"
                      : "border-[#00022E]/10 hover:border-[#DAB875]/45"
                  }`}
                  onMouseEnter={() => setActiveOffice(office.id)}
                  onFocus={() => setActiveOffice(office.id)}
                  onClick={() => setActiveOffice(office.id)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl" aria-hidden>{office.flag}</span>
                    <div>
                      <p className="text-[0.68rem] font-medium tracking-[0.18em] text-[#DAB875] uppercase">
                        {office.country}
                      </p>
                      <h3 className="font-display text-[1.1rem] font-medium text-[#00022E]">
                        {office.officeName}
                      </h3>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-4 text-sm text-[#00022E]/75">
                    <li className="flex gap-3">
                      <span aria-hidden>📍</span>
                      <span>{office.address}</span>
                    </li>
                    <li className="flex gap-3">
                      <span aria-hidden>📞</span>
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="transition-colors hover:text-[#DAB875]"
                      >
                        {office.phone}
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <span aria-hidden>✉</span>
                      <a
                        href={`mailto:${office.email}`}
                        className="transition-colors hover:text-[#DAB875]"
                      >
                        {office.email}
                      </a>
                    </li>
                  </ul>

                  <a
                    href={office.directionsUrl}
                    className="mt-7 inline-flex items-center text-sm font-medium text-[#00022E] transition-colors group-hover:text-[#DAB875]"
                  >
                    Get Directions
                    <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20 grid gap-12 lg:mt-24 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="max-w-md">
              <p className="flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#DAB875]">
                <span className="h-px w-10 bg-[#DAB875]" aria-hidden />
                Let&apos;s Connect
              </p>
              <h3 className="mt-5 font-display text-[1.65rem] font-medium text-[#00022E] sm:text-[1.85rem]">
                Have a Question?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#00022E]/70 sm:text-[0.95rem]">
                Whether you&apos;re looking for insurance protection, exploring
                your options, or simply need guidance, our team is ready to help.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    title={social.name}
                    className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-md border border-[#00022E]/8 bg-white px-3 py-4 text-[#00022E] transition-all duration-300 hover:-translate-y-1 hover:border-[#DAB875]/50 hover:text-[#DAB875] hover:shadow-[0_10px_24px_rgba(0,2,46,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    {social.icon}
                    <span className="text-[0.68rem] font-medium tracking-wide">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-md border border-[#00022E]/8 bg-white p-6 shadow-[0_8px_30px_rgba(0,2,46,0.05)] sm:p-8">
              <h3 className="font-display text-[1.35rem] font-medium text-[#00022E] sm:text-[1.5rem]">
                Send Us an Inquiry
              </h3>

              {submitted ? (
                <p className="mt-6 text-sm leading-relaxed text-[#00022E]/75">
                  Thank you for your inquiry. Our team will be in touch shortly.
                </p>
              ) : (
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium tracking-wide text-[#00022E]/70 uppercase">
                        Full Name
                      </span>
                      <input
                        required
                        type="text"
                        name="fullName"
                        className="w-full rounded-md border border-[#00022E]/12 bg-[#F5F6FA] px-3.5 py-2.5 text-sm text-[#00022E] outline-none transition-colors focus:border-[#DAB875] focus:bg-white"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium tracking-wide text-[#00022E]/70 uppercase">
                        Email Address
                      </span>
                      <input
                        required
                        type="email"
                        name="email"
                        className="w-full rounded-md border border-[#00022E]/12 bg-[#F5F6FA] px-3.5 py-2.5 text-sm text-[#00022E] outline-none transition-colors focus:border-[#DAB875] focus:bg-white"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-1.5 block text-xs font-medium tracking-wide text-[#00022E]/70 uppercase">
                      Phone Number
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full rounded-md border border-[#00022E]/12 bg-[#F5F6FA] px-3.5 py-2.5 text-sm text-[#00022E] outline-none transition-colors focus:border-[#DAB875] focus:bg-white"
                    />
                  </label>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium tracking-wide text-[#00022E]/70 uppercase">
                        Country
                      </span>
                      <select
                        name="country"
                        className="w-full rounded-md border border-[#00022E]/12 bg-[#F5F6FA] px-3.5 py-2.5 text-sm text-[#00022E] outline-none transition-colors focus:border-[#DAB875] focus:bg-white"
                        defaultValue="Canada"
                      >
                        <option>Canada</option>
                        <option>USA</option>
                        <option>India</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium tracking-wide text-[#00022E]/70 uppercase">
                        Service Interested In
                      </span>
                      <select
                        name="service"
                        className="w-full rounded-md border border-[#00022E]/12 bg-[#F5F6FA] px-3.5 py-2.5 text-sm text-[#00022E] outline-none transition-colors focus:border-[#DAB875] focus:bg-white"
                        defaultValue={serviceOptions[0]}
                      >
                        {serviceOptions.map((service) => (
                          <option key={service}>{service}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-1.5 block text-xs font-medium tracking-wide text-[#00022E]/70 uppercase">
                      Message
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      className="w-full resize-y rounded-md border border-[#00022E]/12 bg-[#F5F6FA] px-3.5 py-2.5 text-sm text-[#00022E] outline-none transition-colors focus:border-[#DAB875] focus:bg-white"
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex items-center rounded-full bg-[#00022E] px-7 py-3 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#DAB875] hover:text-[#00022E] focus-visible:ring-2 focus-visible:ring-[#DAB875] focus-visible:ring-offset-2 focus-visible:outline-none motion-reduce:transition-none"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
