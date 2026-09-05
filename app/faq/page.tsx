import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";
import StaticPageHeader from "@/components/StaticPageHeader";
import FaqAccordion from "@/components/FaqAccordion";

export default function FaqPage() {
  return (
    <>
      <PublicHeader />
      <main className="pt-16">
        <StaticPageHeader title="Frequently Asked Questions" />
        <div className="max-w-2xl mx-auto px-gutter-mobile py-unit-2xl">
          <FaqAccordion />
        </div>
      </main>
      <Footer />
    </>
  );
}
