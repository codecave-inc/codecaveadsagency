import Link from "next/link";

export type NavItem = { href: string; label: string; icon: string };

export const CUSTOMER_NAV: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: "space_dashboard" },
  { href: "/dashboard/bookings", label: "My Bookings", icon: "receipt_long" },
  { href: "/dashboard/messages", label: "Messages", icon: "chat" },
  { href: "/dashboard/saved", label: "Saved Billboards", icon: "bookmark" },
  { href: "/dashboard/reviews", label: "Reviews", icon: "star" },
  { href: "/dashboard/profile", label: "Profile", icon: "person" },
  { href: "/dashboard/notifications", label: "Notifications", icon: "notifications" },
];

export const OWNER_NAV: NavItem[] = [
  { href: "/owner/dashboard", label: "Dashboard", icon: "space_dashboard" },
  { href: "/owner/listings", label: "My Listings", icon: "photo_library" },
  { href: "/owner/bookings", label: "Bookings", icon: "event_available" },
  { href: "/owner/earnings", label: "Earnings", icon: "payments" },
  { href: "/owner/kyc", label: "KYC / Verification", icon: "verified_user" },
  { href: "/owner/messages", label: "Messages", icon: "chat" },
  { href: "/owner/profile", label: "Profile", icon: "person" },
];

export const ADMIN_NAV: NavItem[] = [
  { href: "/admin/dashboard", label: "Dashboard", icon: "space_dashboard" },
  { href: "/admin/listings", label: "Listings", icon: "photo_library" },
  { href: "/admin/users", label: "Users", icon: "group" },
  { href: "/admin/bookings", label: "Bookings", icon: "receipt_long" },
  { href: "/admin/payments", label: "Payments / Escrow", icon: "account_balance" },
  { href: "/admin/disputes", label: "Disputes", icon: "gavel" },
  { href: "/admin/reviews", label: "Reviews", icon: "star" },
  { href: "/admin/content", label: "Content", icon: "edit_note" },
  { href: "/admin/settings", label: "Settings", icon: "settings" },
  { href: "/admin/audit-log", label: "Audit Log", icon: "history" },
  { href: "/admin/reports", label: "Reports", icon: "bar_chart" },
];

export default function DashboardShell({
  role,
  nav,
  title,
  children,
}: {
  role: "Customer" | "Owner" | "Admin";
  nav: NavItem[];
  title: string;
  children: React.ReactNode;
}) {
  const isAdmin = role === "Admin";
  return (
    <div className="min-h-screen bg-surface-canvas">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 flex flex-col z-40 ${
          isAdmin ? "bg-primary text-white" : "bg-surface-card border-r border-border-subtle"
        }`}
      >
        <div className="h-16 flex items-center gap-2 px-unit-lg font-bold border-b border-white/10">
          <span
            className={`material-symbols-outlined ${
              isAdmin ? "text-secondary-container" : "text-primary"
            }`}
          >
            campaign
          </span>
          CodeCave {isAdmin ? "Admin" : ""}
        </div>
        <nav className="flex-1 overflow-y-auto py-unit-md">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-unit-lg py-unit-sm text-sm font-medium ${
                isAdmin
                  ? "text-white/80 hover:bg-white/10 hover:text-white"
                  : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div
          className={`p-unit-lg text-sm border-t ${
            isAdmin ? "border-white/10 text-white/70" : "border-border-subtle text-on-surface-variant"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 hover:opacity-80">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            Log Out
          </Link>
        </div>
      </aside>

      {/* Top bar */}
      <header className="fixed top-0 left-64 right-0 h-16 bg-surface-card/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-30 flex items-center justify-between px-gutter-desktop">
        <h1 className="text-lg font-semibold text-on-surface">{title}</h1>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
          <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-sm font-semibold text-primary">
            {role[0]}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pl-64 pt-16">
        <div className="p-gutter-desktop">{children}</div>
      </main>
    </div>
  );
}
