import ContactUs from "@/components/contact/ContactUs";
import WhyUs from "@/components/why-us/WhyUs";
import JsonLd from "@/components/seo/JsonLd";
import { getSiteUrl, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Seva Kendra in Calgary, Canada or Kalol, India. Tell the team what you need and get guidance on the right insurance next step.",
  path: "/contact-us",
});

export default function ContactUsPage() {
  const siteUrl = getSiteUrl();

  return (
    <main className="flex-1">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Seva Kendra",
          url: `${siteUrl}/contact-us`,
          mainEntity: {
            "@type": "InsuranceAgency",
            name: "Seva Kendra",
            url: siteUrl,
            telephone: "+1-587-878-7087",
            email: "sevakendracanada@gmail.com",
          },
        }}
      />
      <WhyUs />
      <ContactUs headingAs="h1" />
    </main>
  );
}
