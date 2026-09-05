import DashboardShell, { ADMIN_NAV } from "@/components/DashboardShell";
import StagePlaceholder from "@/components/StagePlaceholder";

export default function Page() {
  return (
    <DashboardShell role="Admin" nav={ADMIN_NAV} title="Platform Settings">
      <StagePlaceholder page="Platform Settings" stage={5} sourceScreen="N/A — new page" />
    </DashboardShell>
  );
}
