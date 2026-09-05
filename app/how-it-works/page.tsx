import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";
import StaticPageHeader from "@/components/StaticPageHeader";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <>
      <PublicHeader />
      <main className="pt-16">
        <StaticPageHeader
          title="How It Works"
          subtitle="CodeCave Ads Agency connects billboard owners and advertisers, with every step supervised for your safety."
        />

        <div className="max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop py-unit-2xl grid md:grid-cols-2 gap-unit-2xl">
          <div>
            <h2 className="text-xl font-bold mb-unit-md">For Customers</h2>
            <ol className="space-y-unit-lg">
              {[
                ["Search", "Browse verified billboards nationwide by state, city, type, and budget."],
                ["Book & Pay", "Choose your dates and pay securely — your funds are held in escrow, not sent to the owner yet."],
                ["Campaign Goes Live", "Once the owner confirms your billboard is mounted, your campaign officially starts."],
                ["Funds Released", "Payment is released to the owner only after your campaign is confirmed complete."],
              ].map(([title, desc], i) => (
                <li key={title} className="flex gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-on-surface-variant">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              href="/billboards"
              className="inline-block mt-unit-lg rounded-lg bg-primary text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90"
            >
              Browse Billboards
            </Link>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-unit-md">For Billboard Owners</h2>
            <ol className="space-y-unit-lg">
              {[
                ["List Your Billboard", "Submit your billboard's location, specs, photos, and ownership/permit proof."],
                ["Get Reviewed", "Our admin team reviews every listing — usually within 24-48 hours — before it goes live."],
                ["Receive Bookings", "Once approved, customers can find and book your billboard directly."],
                ["Get Paid", "Once a campaign is confirmed, your payout (minus commission) is released to your account."],
              ].map(([title, desc], i) => (
                <li key={title} className="flex gap-3">
                  <span className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-on-surface-variant">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              href="/owner/listings/new"
              className="inline-block mt-unit-lg rounded-lg bg-secondary-container text-on-secondary-container px-5 py-2.5 text-sm font-semibold hover:opacity-90"
            >
              List Your Billboard
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
