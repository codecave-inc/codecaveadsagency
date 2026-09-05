import Image from "next/image";
import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";
import { getBillboardById, formatNaira, MOCK_BILLBOARDS } from "@/lib/mock-billboards";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return MOCK_BILLBOARDS.map((b) => ({ id: b.id }));
}

export default function BillboardDetailPage({ params }: { params: { id: string } }) {
  const billboard = getBillboardById(params.id);
  if (!billboard) return notFound();

  return (
    <>
      <PublicHeader />
      <main className="pt-16">
        <div className="max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop py-unit-xl grid lg:grid-cols-3 gap-unit-xl">
          {/* Left: gallery + info */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden mb-unit-lg">
              <div className="relative col-span-2 h-72">
                <Image
                  src={billboard.images[0]}
                  alt={billboard.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {billboard.images.slice(1).map((img) => (
                <div key={img} className="relative h-32">
                  <Image src={img} alt={billboard.title} fill className="object-cover" />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mb-1">
              <span className="badge bg-surface-container text-on-surface">{billboard.type}</span>
              {billboard.verifiedOwner && (
                <span className="badge badge-approved">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  Verified Owner
                </span>
              )}
            </div>
            <h1 className="text-2xl font-bold">{billboard.title}</h1>
            <p className="text-on-surface-variant mb-unit-lg">
              {billboard.landmark}, {billboard.city}, {billboard.state}
            </p>

            {/* Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-unit-md bg-surface-card border border-border-subtle rounded-xl p-unit-lg mb-unit-lg">
              {[
                ["Size", billboard.size],
                ["Illumination", billboard.illumination ? "Yes" : "No"],
                ["Facing", billboard.facing],
                ["Est. Traffic", billboard.trafficEstimate],
                ["Type", billboard.type],
                ["State", billboard.state],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs text-on-surface-variant">{label}</p>
                  <p className="font-medium text-sm">{value}</p>
                </div>
              ))}
            </div>

            <p className="font-semibold mb-2">About this billboard</p>
            <p className="text-on-surface-variant mb-unit-lg">{billboard.description}</p>

            <p className="font-semibold mb-2">
              Reviews ({billboard.reviewCount})
              <span className="ml-2 text-secondary-container">★ {billboard.rating}</span>
            </p>
            <div className="border border-border-subtle rounded-xl p-unit-lg text-sm text-on-surface-variant">
              Reviews will display here once customers complete campaigns on this billboard.
            </div>
          </div>

          {/* Right: pricing / booking */}
          <aside className="lg:sticky lg:top-24 h-fit bg-surface-card border border-border-subtle rounded-xl p-unit-lg">
            <p className="text-2xl font-bold text-primary">
              {formatNaira(billboard.pricePerWeek)}
              <span className="text-sm font-normal text-on-surface-variant"> /week</span>
            </p>

            <label className="block text-sm font-medium mt-unit-md mb-1">Start date</label>
            <input type="date" className="w-full border border-border-subtle rounded-lg px-3 py-2 text-sm mb-unit-sm" />
            <label className="block text-sm font-medium mb-1">End date</label>
            <input type="date" className="w-full border border-border-subtle rounded-lg px-3 py-2 text-sm mb-unit-md" />

            <a
              href="/login"
              className="block text-center rounded-lg bg-secondary-container text-on-secondary-container font-semibold py-3 text-sm hover:opacity-90"
            >
              Log In to Book
            </a>
            <p className="text-xs text-center text-on-surface-variant mt-2">
              🔒 Payment is held securely by CodeCave until your campaign is confirmed.
            </p>

            <div className="mt-unit-lg pt-unit-lg border-t border-border-subtle text-sm">
              <p className="font-medium mb-2">Owner</p>
              <p className="text-on-surface-variant">
                Full contact details are shared with the customer once a booking is confirmed.
              </p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
