import DashboardShell, { CUSTOMER_NAV } from "@/components/DashboardShell";
import StagePlaceholder from "@/components/StagePlaceholder";

export default function Page() {
  return (
    <DashboardShell role="Customer" nav={CUSTOMER_NAV} title="Booking Detail">
      <StagePlaceholder page="Booking Detail" stage={3} sourceScreen="codecave_ads_agency_booking_escrow_checkout" />
    </DashboardShell>
  );
}
