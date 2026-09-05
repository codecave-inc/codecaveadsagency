import DashboardShell, { CUSTOMER_NAV } from "@/components/DashboardShell";
import StagePlaceholder from "@/components/StagePlaceholder";

export default function Page() {
  return (
    <DashboardShell role="Customer" nav={CUSTOMER_NAV} title="Customer Dashboard">
      <StagePlaceholder page="Customer Dashboard" stage={3} sourceScreen="codecave_ads_agency_customer_dashboard" />
    </DashboardShell>
  );
}
