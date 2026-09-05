import DashboardShell, { OWNER_NAV } from "@/components/DashboardShell";
import StagePlaceholder from "@/components/StagePlaceholder";

export default function Page() {
  return (
    <DashboardShell role="Owner" nav={OWNER_NAV} title="Profile">
      <StagePlaceholder page="Profile" stage={4} sourceScreen="N/A — new page" />
    </DashboardShell>
  );
}
