import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";
import StagePlaceholder from "@/components/StagePlaceholder";

export default function Page() {
  return (
    <>
      <PublicHeader />
      <main className="pt-16 min-h-[70vh] flex items-center justify-center px-gutter-mobile">
        <StagePlaceholder page="Log In" stage={2} sourceScreen="codecave_ads_agency_signup_login_portal" />
      </main>
      <Footer />
    </>
  );
}
