import DashboardShell, { ADMIN_NAV } from "@/components/DashboardShell";
import StagePlaceholder from "@/components/StagePlaceholder";

export default function Page() {
  return (
    <DashboardShell role="Admin" nav={ADMIN_NAV} title="Review Listing">
      <StagePlaceholder page="Review Listing" stage={5} sourceScreen="codecave_ads_agency_admin_listing_approval_queue" />
    </DashboardShell>
  );
}
