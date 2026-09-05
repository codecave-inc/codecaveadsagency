import DashboardShell, { ADMIN_NAV } from "@/components/DashboardShell";
import StagePlaceholder from "@/components/StagePlaceholder";

export default function Page() {
  return (
    <DashboardShell role="Admin" nav={ADMIN_NAV} title="Booking Detail / Override">
      <StagePlaceholder page="Booking Detail / Override" stage={5} sourceScreen="codecave_ads_agency_admin_dashboard" />
    </DashboardShell>
  );
}
