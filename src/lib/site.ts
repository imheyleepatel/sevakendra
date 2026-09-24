import type { Metadata } from "next";

export const siteName = "Seva Kendra";

export const siteDescription =
  "Seva Kendra helps individuals and families in Canada, India, and the USA choose life, health, overseas, and general insurance with clear, personal guidance.";

export const faqs = [
  {
    question: "What makes Seva Kendra different?",
    answer:
      "At Seva Kendra, we believe in putting people first. We take the time to understand your needs, explain your options clearly, and guide you through the process so you can make informed decisions with confidence.",
  },
  {
    question: "What services does Seva Kendra provide?",
    answer:
      "Seva Kendra provides personalized insurance and financial protection solutions, helping individuals and families choose suitable coverage based on their needs.",
  },
  {
    question: "How can I get started with Seva Kendra?",
    answer:
      "Simply submit an enquiry through our website or contact our team directly. We’ll understand your requirements and guide you through the next steps.",
  },
  {
    question: "Can Seva Kendra help me compare different insurance options?",
    answer:
      "Yes. We can help you understand different available options and their key features so you can make an informed decision.",
  },
  {
    question: "Can I contact Seva Kendra if I don't know which service I need?",
    answer:
      "Absolutely. You can simply tell us what you're looking for, and our team can help identify the appropriate service or next step.",
  },
] as const;

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (configured) return configured;

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;

  return "http://localhost:3000";
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: Metadata["title"];
  description: string;
  path: string;
}): Metadata {
  const socialTitle =
    typeof title === "string"
      ? `${title} | ${siteName}`
      : title && typeof title === "object" && "absolute" in title
        ? title.absolute
        : undefined;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Seva Kendra — insurance and financial protection in Canada, India, and the USA",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/opengraph-image"],
    },
  };
}
