import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";
import StaticPageHeader from "@/components/StaticPageHeader";

export default function PricingPage() {
  return (
    <>
      <PublicHeader />
      <main className="pt-16">
        <StaticPageHeader
          title="Pricing"
          subtitle="Simple, transparent pricing — no surprise fees at checkout."
        />
        <div className="max-w-2xl mx-auto px-gutter-mobile py-unit-2xl space-y-unit-lg">
          <div className="bg-surface-card border border-border-subtle rounded-xl p-unit-lg">
            <h2 className="font-bold mb-2">For Customers</h2>
            <p className="text-sm text-on-surface-variant">
              The price you see on a listing is the full price you pay — our
              commission is already factored in, so there are no hidden fees
              added at checkout.
            </p>
          </div>
          <div className="bg-surface-card border border-border-subtle rounded-xl p-unit-lg">
            <h2 className="font-bold mb-2">For Billboard Owners</h2>
            <p className="text-sm text-on-surface-variant">
              CodeCave takes a commission from each completed booking, which
              covers listing review, escrow payment protection, customer
              support, and dispute resolution. Your exact commission rate is
              shown when you set your billboard's price, and may vary
              depending on billboard type and demand tier.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
