import DashboardShell, { CUSTOMER_NAV } from "@/components/DashboardShell";
import StagePlaceholder from "@/components/StagePlaceholder";

export default function Page() {
  return (
    <DashboardShell role="Customer" nav={CUSTOMER_NAV} title="Profile">
      <StagePlaceholder page="Profile" stage={3} sourceScreen="N/A — new page" />
    </DashboardShell>
  );
}
