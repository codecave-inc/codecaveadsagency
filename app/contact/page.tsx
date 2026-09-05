import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";
import StaticPageHeader from "@/components/StaticPageHeader";

export default function ContactPage() {
  return (
    <>
      <PublicHeader />
      <main className="pt-16">
        <StaticPageHeader
          title="Contact Us"
          subtitle="Questions about listing a billboard, booking a campaign, or anything else — we're here to help."
        />
        <div className="max-w-2xl mx-auto px-gutter-mobile py-unit-2xl">
          <form className="bg-surface-card border border-border-subtle rounded-xl p-unit-xl space-y-unit-md">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input className="w-full border border-border-subtle rounded-lg px-3 py-2.5 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input type="email" className="w-full border border-border-subtle rounded-lg px-3 py-2.5 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <select className="w-full border border-border-subtle rounded-lg px-3 py-2.5 text-sm">
                <option>General inquiry</option>
                <option>I want to list a billboard</option>
                <option>I want to book a billboard</option>
                <option>Report an issue</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea rows={5} className="w-full border border-border-subtle rounded-lg px-3 py-2.5 text-sm" />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary text-white py-3 text-sm font-semibold hover:opacity-90"
            >
              Send Message
            </button>
          </form>

          <div className="mt-unit-xl text-center text-sm text-on-surface-variant">
            <p>Or reach us directly at:</p>
            <p className="font-medium text-on-surface">hello@codecaveadsagency.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
