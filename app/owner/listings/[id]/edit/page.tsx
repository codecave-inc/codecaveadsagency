import DashboardShell, { OWNER_NAV } from "@/components/DashboardShell";
import StagePlaceholder from "@/components/StagePlaceholder";

export default function Page() {
  return (
    <DashboardShell role="Owner" nav={OWNER_NAV} title="Edit Listing">
      <StagePlaceholder page="Edit Listing" stage={4} sourceScreen="codecave_ads_agency_add_billboard_listing_wizard" />
    </DashboardShell>
  );
}
