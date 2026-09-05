import DashboardShell, { OWNER_NAV } from "@/components/DashboardShell";
import StagePlaceholder from "@/components/StagePlaceholder";

export default function Page() {
  return (
    <DashboardShell role="Owner" nav={OWNER_NAV} title="Bookings Received">
      <StagePlaceholder page="Bookings Received" stage={4} sourceScreen="codecave_ads_agency_owner_listings_bookings" />
    </DashboardShell>
  );
}
