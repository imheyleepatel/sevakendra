import { faqs, getSiteUrl, siteDescription, siteName } from "./site";

export function organizationJsonLd() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: siteName,
    alternateName: "Seva Kendra Global Financial Solution",
    description: siteDescription,
    url,
    logo: `${url}/logo-mark.png`,
    image: `${url}/logo.png`,
    email: "sevakendracanada@gmail.com",
    telephone: "+1-587-878-7087",
    foundingDate: "2010",
    areaServed: ["CA", "IN", "US"],
    founder: {
      "@type": "Person",
      name: "Sujal Patel",
      jobTitle: "Founder & Insurance Advisor",
    },
    sameAs: [
      "https://www.instagram.com/seva_kendra",
      "https://www.youtube.com/@seva_kendra_gfs",
      "https://www.linkedin.com/in/sujal-patel-178204382",
    ],
    knowsAbout: [
      "Life Insurance",
      "Health Insurance",
      "Overseas Insurance",
      "General Insurance",
    ],
    location: [
      {
        "@type": "InsuranceAgency",
        name: "Seva Kendra Canada Office",
        telephone: "+1-587-878-7087",
        email: "sevakendracanada@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3740 11a St NE, Unit 201F",
          addressLocality: "Calgary",
          addressRegion: "AB",
          postalCode: "T2E 6M9",
          addressCountry: "CA",
        },
      },
      {
        "@type": "InsuranceAgency",
        name: "Seva Kendra Kalol Office",
        telephone: "+91-98987-77837",
        email: "sevakendrakalol@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "F-11, JP Commercial Centre, Mahendra Mill Road",
          addressLocality: "Kalol",
          postalCode: "382721",
          addressCountry: "IN",
        },
      },
    ],
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function servicesJsonLd() {
  const services = [
    {
      name: "Life Insurance",
      description: "Protect your loved ones and secure their financial future.",
    },
    {
      name: "Health Insurance",
      description:
        "Support yourself and your family with dependable health protection.",
    },
    {
      name: "Overseas Insurance",
      description: "Protection for your journeys, travels, and international needs.",
    },
    {
      name: "General Insurance",
      description: "Coverage solutions for vehicles, assets, businesses, and more.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Seva Kendra insurance solutions",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@type": "InsuranceAgency",
          name: siteName,
          url: getSiteUrl(),
        },
        areaServed: ["CA", "IN", "US"],
      },
    })),
  };
}
