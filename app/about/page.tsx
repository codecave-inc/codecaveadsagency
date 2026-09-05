import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";
import StaticPageHeader from "@/components/StaticPageHeader";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <PublicHeader />
      <main className="pt-16">
        <StaticPageHeader
          title="About CodeCave Ads Agency"
          subtitle="Building a safer, more transparent way to buy and sell outdoor advertising space in Nigeria."
        />
        <div className="max-w-2xl mx-auto px-gutter-mobile py-unit-2xl space-y-unit-lg text-on-surface-variant">
          <p>
            CodeCave Ads Agency is a Nigerian marketplace connecting billboard
            owners with marketers, campaign managers, and individual
            advertisers. We act as the trusted middleman between both sides —
            every listing is reviewed by our team before it goes live, and
            every payment is held securely in escrow until a campaign is
            confirmed.
          </p>
          <p>
            Our goal is simple: make outdoor advertising in Nigeria as easy,
            transparent, and safe to buy as any other form of digital media —
            without sacrificing the reach and impact that physical billboards
            offer.
          </p>
          <div className="relative w-full h-64 rounded-xl overflow-hidden">
            <Image
              src="/images/billboard-hero.jpg"
              alt="Billboard advertising in Nigeria"
              fill
              className="object-cover"
            />
          </div>
          <p>
            We're currently launching nationwide across Nigeria, starting
            with our first verified billboard owners and early advertising
            partners.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
