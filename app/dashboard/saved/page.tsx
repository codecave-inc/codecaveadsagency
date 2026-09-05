import DashboardShell, { CUSTOMER_NAV } from "@/components/DashboardShell";
import StagePlaceholder from "@/components/StagePlaceholder";

export default function Page() {
  return (
    <DashboardShell role="Customer" nav={CUSTOMER_NAV} title="Saved Billboards">
      <StagePlaceholder page="Saved Billboards" stage={3} sourceScreen="codecave_ads_agency_customer_messages_saved_billboards" />
    </DashboardShell>
  );
}
