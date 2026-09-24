import Reviews from "@/components/reviews/Reviews";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Client Reviews",
  description:
    "Read client reviews of Seva Kendra for fast insurance service, clear advice, and support through coverage and claims.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <main className="flex-1">
      <Reviews headingAs="h1" />
    </main>
  );
}
