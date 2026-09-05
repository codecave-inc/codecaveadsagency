import Link from "next/link";
import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <PublicHeader />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative bg-primary text-white">
          <div className="max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop py-unit-3xl md:py-[6rem]">
            <h1 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
              Find the perfect billboard for your next campaign, anywhere in Nigeria.
            </h1>
            <p className="mt-unit-md text-white/80 max-w-xl">
              Verified owners. Admin-reviewed listings. Payments held securely in
              escrow until your campaign is confirmed live.
            </p>

            {/* Search bar */}
            <form className="mt-unit-xl bg-white rounded-xl p-2 flex flex-col sm:flex-row gap-2 max-w-2xl shadow-lg">
              <select className="flex-1 rounded-lg px-3 py-3 text-on-surface text-sm outline-none">
                <option>Select a state</option>
                <option>Lagos</option>
                <option>Abuja (FCT)</option>
                <option>Rivers</option>
                <option>Oyo</option>
              </select>
              <button
                type="submit"
                className="rounded-lg bg-secondary-container text-on-secondary-container font-semibold px-6 py-3 text-sm hover:opacity-90"
              >
                Search Billboards
              </button>
            </form>
          </div>
        </section>

        {/* Owner CTA banner */}
        <section className="bg-secondary-container/20 border-y border-border-subtle">
          <div className="max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop py-unit-lg flex flex-col sm:flex-row items-center justify-between gap-unit-md">
            <p className="font-semibold text-on-surface">
              Own a billboard? List it and start earning.
            </p>
            <Link
              href="/owner/listings/new"
              className="rounded-lg bg-primary text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90"
            >
              List Your Billboard
            </Link>
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop py-unit-3xl">
          <h2 className="text-2xl font-bold text-center mb-unit-xl">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-unit-2xl">
            <div>
              <p className="text-sm font-semibold text-secondary uppercase mb-unit-md">
                For Customers
              </p>
              <ol className="space-y-unit-md">
                {["Search billboards by state and budget", "Book & pay securely into escrow", "Launch your campaign with confidence"].map(
                  (step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="pt-1 text-on-surface-variant">{step}</span>
                    </li>
                  )
                )}
              </ol>
            </div>
            <div>
              <p className="text-sm font-semibold text-secondary uppercase mb-unit-md">
                For Owners
              </p>
              <ol className="space-y-unit-md">
                {["List your billboard with photos & specs", "Get reviewed & approved by our team", "Earn — funds released after confirmation"].map(
                  (step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-sm font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="pt-1 text-on-surface-variant">{step}</span>
                    </li>
                  )
                )}
              </ol>
            </div>
          </div>
        </section>

        {/* Featured billboards — empty state (platform launches with no listings) */}
        <section className="bg-surface-container-low py-unit-3xl">
          <div className="max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop text-center">
            <h2 className="text-2xl font-bold mb-2">Featured Billboards</h2>
            <p className="text-on-surface-variant mb-unit-lg">
              New billboards are added daily — check back soon.
            </p>
            <div className="border-2 border-dashed border-border-subtle rounded-xl py-unit-2xl px-unit-md max-w-md mx-auto bg-white">
              <span className="material-symbols-outlined text-4xl text-outline">
                campaign
              </span>
              <p className="mt-2 font-semibold">No billboards listed yet</p>
              <p className="text-sm text-on-surface-variant mt-1">
                Be among the first to list one and reach advertisers nationwide.
              </p>
              <Link
                href="/owner/listings/new"
                className="inline-block mt-unit-md rounded-lg bg-primary text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90"
              >
                List Your Billboard
              </Link>
            </div>
          </div>
        </section>

        {/* Trust section */}
        <section className="max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop py-unit-3xl grid grid-cols-1 sm:grid-cols-3 gap-unit-lg text-center">
          {[
            { icon: "verified_user", label: "Verified Owners" },
            { icon: "lock", label: "Secure Escrow Payments" },
            { icon: "fact_check", label: "Admin-Reviewed Listings" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-3xl text-primary">
                {item.icon}
              </span>
              <p className="font-semibold">{item.label}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
