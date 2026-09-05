import DashboardShell, { ADMIN_NAV } from "@/components/DashboardShell";
import StagePlaceholder from "@/components/StagePlaceholder";

export default function Page() {
  return (
    <DashboardShell role="Admin" nav={ADMIN_NAV} title="Payments / Escrow / Disputes">
      <StagePlaceholder page="Payments / Escrow / Disputes" stage={5} sourceScreen="codecave_ads_agency_admin_payments_escrow_disputes" />
    </DashboardShell>
  );
}
