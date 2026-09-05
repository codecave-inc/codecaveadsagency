import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";
import StaticPageHeader from "@/components/StaticPageHeader";

export default function TermsPage() {
  return (
    <>
      <PublicHeader />
      <main className="pt-16">
        <StaticPageHeader title="Terms of Service" />
        <div className="max-w-2xl mx-auto px-gutter-mobile py-unit-2xl space-y-unit-lg text-on-surface-variant text-sm">
          <div className="bg-orange-50 border border-orange-200 text-status-warning rounded-lg p-unit-md text-sm">
            <strong>Draft placeholder:</strong> this is a starting outline only.
            Please have a Nigerian-qualified lawyer review and finalize these
            terms — covering commission %, cancellation/refund rules, and
            liability — before the site goes live to real users.
          </div>
          <p><strong>1. Acceptance of Terms.</strong> By using CodeCave Ads Agency, you agree to these Terms of Service.</p>
          <p><strong>2. The Role of CodeCave.</strong> CodeCave acts as an intermediary between Billboard Owners and Customers. All bookings, payments, and communications on the platform are subject to admin review and approval.</p>
          <p><strong>3. Listings.</strong> Billboard Owners are responsible for the accuracy of listing information and for holding valid ownership/permit documentation. CodeCave reserves the right to approve, reject, or suspend any listing.</p>
          <p><strong>4. Payments & Escrow.</strong> Customer payments are held by CodeCave until campaign confirmation conditions are met, at which point funds (minus commission) are released to the Owner.</p>
          <p><strong>5. Cancellations & Refunds.</strong> Cancellation and refund terms are shown at checkout and may vary based on notice given.</p>
          <p><strong>6. Disputes.</strong> Disputes may be raised through the platform and are reviewed and resolved by CodeCave's admin team.</p>
          <p><strong>7. Limitation of Liability.</strong> CodeCave is not liable for the physical condition of billboards, third-party permits, or events outside its reasonable control.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
