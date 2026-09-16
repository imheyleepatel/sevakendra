import AboutUs from "@/components/about/AboutUs";

export default function OurWorkPage() {
  return (
    <main className="flex-1">
      <AboutUs showIntro={false} showWorkSections />
    </main>
  );
}
