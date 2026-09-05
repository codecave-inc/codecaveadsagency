import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";
import BillboardCard from "@/components/BillboardCard";
import { MOCK_BILLBOARDS } from "@/lib/mock-billboards";

export default function BrowseBillboardsPage() {
  return (
    <>
      <PublicHeader />
      <main className="pt-16">
        <div className="max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop py-unit-xl">
          <h1 className="text-2xl font-bold mb-1">Browse Billboards</h1>
          <p className="text-on-surface-variant mb-unit-xl">
            {MOCK_BILLBOARDS.length} billboards available across Nigeria
          </p>

          <div className="flex flex-col md:flex-row gap-unit-xl">
            {/* Filters */}
            <aside className="md:w-64 shrink-0 bg-surface-card border border-border-subtle rounded-xl p-unit-lg h-fit">
              <p className="font-semibold mb-unit-md">Filters</p>

              <label className="block text-sm font-medium mb-1">State</label>
              <select className="w-full border border-border-subtle rounded-lg px-3 py-2 text-sm mb-unit-md">
                <option>All states</option>
                <option>Lagos</option>
                <option>Abuja (FCT)</option>
                <option>Rivers</option>
                <option>Oyo</option>
              </select>

              <label className="block text-sm font-medium mb-1">Billboard Type</label>
              <div className="space-y-1 mb-unit-md text-sm">
                {["Static", "Digital/LED", "Transit", "Street Furniture"].map((t) => (
                  <label key={t} className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-border-subtle" />
                    {t}
                  </label>
                ))}
              </div>

              <label className="block text-sm font-medium mb-1">Price Range (per week)</label>
              <div className="flex items-center gap-2 mb-unit-md text-sm">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full border border-border-subtle rounded-lg px-2 py-2"
                />
                <span>–</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full border border-border-subtle rounded-lg px-2 py-2"
                />
              </div>

              <label className="block text-sm font-medium mb-1">Availability</label>
              <input
                type="date"
                className="w-full border border-border-subtle rounded-lg px-3 py-2 text-sm mb-unit-md"
              />

              <button className="w-full rounded-lg bg-primary text-white py-2.5 text-sm font-semibold hover:opacity-90">
                Apply Filters
              </button>
            </aside>

            {/* Results */}
            <section className="flex-1">
              <div className="flex items-center justify-between mb-unit-md">
                <div className="inline-flex rounded-lg border border-border-subtle overflow-hidden text-sm">
                  <button className="px-4 py-2 bg-primary text-white font-medium">List</button>
                  <button className="px-4 py-2 bg-white text-on-surface-variant font-medium">
                    Map
                  </button>
                </div>
                <select className="border border-border-subtle rounded-lg px-3 py-2 text-sm">
                  <option>Sort: Newest</option>
                  <option>Sort: Price (Low to High)</option>
                  <option>Sort: Price (High to Low)</option>
                  <option>Sort: Most Popular</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-unit-lg">
                {MOCK_BILLBOARDS.map((b) => (
                  <BillboardCard key={b.id} billboard={b} />
                ))}
              </div>

              <p className="text-center text-sm text-on-surface-variant mt-unit-xl">
                New listings are added regularly — check back soon for more.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
