import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";
import StaticPageHeader from "@/components/StaticPageHeader";

export default function PrivacyPage() {
  return (
    <>
      <PublicHeader />
      <main className="pt-16">
        <StaticPageHeader title="Privacy Policy" />
        <div className="max-w-2xl mx-auto px-gutter-mobile py-unit-2xl space-y-unit-lg text-on-surface-variant text-sm">
          <div className="bg-orange-50 border border-orange-200 text-status-warning rounded-lg p-unit-md text-sm">
            <strong>Draft placeholder:</strong> this outline should be reviewed
            by a lawyer for full NDPR (Nigeria Data Protection Regulation)
            compliance before launch — including data retention periods and
            the process for user data export/delete requests.
          </div>
          <p><strong>1. Information We Collect.</strong> Account details (name, email, phone), listing information, payment records, and communications made through the platform.</p>
          <p><strong>2. How We Use It.</strong> To operate bookings, process payments, verify identities/ownership, and provide customer support.</p>
          <p><strong>3. Data Sharing.</strong> We share necessary booking details between Customers and Owners only after a booking is confirmed. Payment details are processed by our licensed payment partners.</p>
          <p><strong>4. Data Security.</strong> We take reasonable technical and organizational measures to protect your data.</p>
          <p><strong>5. Your Rights.</strong> Under NDPR, you may request access to, correction of, or deletion of your personal data by contacting us.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
