import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PUBLIC_PAGE = """import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";
import StagePlaceholder from "@/components/StagePlaceholder";

export default function Page() {{
  return (
    <>
      <PublicHeader />
      <main className="pt-16 min-h-[70vh] flex items-center justify-center px-gutter-mobile">
        <StagePlaceholder page="{page}" stage={{{stage}}} sourceScreen="{source}" />
      </main>
      <Footer />
    </>
  );
}}
"""

DASHBOARD_PAGE = """import DashboardShell, {{ {nav_const} }} from "@/components/DashboardShell";
import StagePlaceholder from "@/components/StagePlaceholder";

export default function Page() {{
  return (
    <DashboardShell role="{role}" nav={{{nav_const}}} title="{title}">
      <StagePlaceholder page="{page}" stage={{{stage}}} sourceScreen="{source}" />
    </DashboardShell>
  );
}}
"""

# (route dir, page label, stage, source stitch screen)
PUBLIC_ROUTES = [
    ("app/billboards", "Browse Billboards", 2, "codecave_ads_agency_browse_billboards"),
    ("app/billboards/[id]", "Billboard Detail", 2, "codecave_ads_agency_billboard_detail"),
    ("app/how-it-works", "How It Works / FAQ / Contact", 2, "codecave_ads_agency_how_it_works_faq_contact_hub"),
    ("app/about", "About Us", 2, "codecave_ads_agency_how_it_works_faq_contact_hub"),
    ("app/contact", "Contact Us", 2, "codecave_ads_agency_how_it_works_faq_contact_hub"),
    ("app/faq", "FAQ", 2, "codecave_ads_agency_how_it_works_faq_contact_hub"),
    ("app/terms-of-service", "Terms of Service", 2, None),
    ("app/privacy-policy", "Privacy Policy", 2, None),
    ("app/pricing", "Pricing / Commission Transparency", 2, None),
    ("app/signup", "Sign Up (Customer / Owner)", 2, "codecave_ads_agency_signup_login_portal"),
    ("app/login", "Log In", 2, "codecave_ads_agency_signup_login_portal"),
    ("app/forgot-password", "Forgot Password", 2, "codecave_ads_agency_signup_login_portal"),
]

CUSTOMER_ROUTES = [
    ("app/dashboard", "Customer Dashboard", 3, "codecave_ads_agency_customer_dashboard"),
    ("app/dashboard/bookings", "My Bookings", 3, "codecave_ads_agency_customer_dashboard"),
    ("app/dashboard/bookings/[id]", "Booking Detail", 3, "codecave_ads_agency_booking_escrow_checkout"),
    ("app/dashboard/checkout/[billboardId]", "Checkout", 3, "codecave_ads_agency_booking_escrow_checkout"),
    ("app/dashboard/messages", "Messages", 3, "codecave_ads_agency_customer_messages_saved_billboards"),
    ("app/dashboard/saved", "Saved Billboards", 3, "codecave_ads_agency_customer_messages_saved_billboards"),
    ("app/dashboard/reviews", "Reviews", 3, "codecave_ads_agency_customer_messages_saved_billboards"),
    ("app/dashboard/profile", "Profile", 3, None),
    ("app/dashboard/notifications", "Notifications", 3, None),
]

OWNER_ROUTES = [
    ("app/owner/dashboard", "Owner Dashboard", 4, "codecave_ads_agency_owner_dashboard"),
    ("app/owner/listings", "My Listings", 4, "codecave_ads_agency_owner_listings_bookings"),
    ("app/owner/listings/new", "Add Billboard Listing", 4, "codecave_ads_agency_add_billboard_listing_wizard"),
    ("app/owner/listings/[id]/edit", "Edit Listing", 4, "codecave_ads_agency_add_billboard_listing_wizard"),
    ("app/owner/bookings", "Bookings Received", 4, "codecave_ads_agency_owner_listings_bookings"),
    ("app/owner/bookings/[id]", "Booking Detail", 4, "codecave_ads_agency_owner_listings_bookings"),
    ("app/owner/earnings", "Earnings & Payouts", 4, "codecave_ads_agency_owner_dashboard"),
    ("app/owner/kyc", "KYC / Verification", 4, "codecave_ads_agency_add_billboard_listing_wizard"),
    ("app/owner/messages", "Messages", 4, None),
    ("app/owner/profile", "Profile", 4, None),
]

ADMIN_ROUTES = [
    ("app/admin/dashboard", "Admin Dashboard", 5, "codecave_ads_agency_admin_dashboard"),
    ("app/admin/listings/pending", "Listing Approval Queue", 5, "codecave_ads_agency_admin_listing_approval_queue"),
    ("app/admin/listings/[id]/review", "Review Listing", 5, "codecave_ads_agency_admin_listing_approval_queue"),
    ("app/admin/users", "Users", 5, "codecave_ads_agency_admin_dashboard"),
    ("app/admin/bookings/[id]", "Booking Detail / Override", 5, "codecave_ads_agency_admin_dashboard"),
    ("app/admin/payments", "Payments / Escrow / Disputes", 5, "codecave_ads_agency_admin_payments_escrow_disputes"),
    ("app/admin/disputes/[id]", "Dispute Detail", 5, "codecave_ads_agency_admin_payments_escrow_disputes"),
    ("app/admin/reviews", "Moderate Reviews", 5, None),
    ("app/admin/content", "Content (CMS-lite)", 5, None),
    ("app/admin/settings", "Platform Settings", 5, None),
    ("app/admin/audit-log", "Audit Log", 5, None),
    ("app/admin/reports", "Reports", 5, None),
]

def write(route_dir, content):
    full_dir = os.path.join(ROOT, route_dir)
    os.makedirs(full_dir, exist_ok=True)
    with open(os.path.join(full_dir, "page.tsx"), "w") as f:
        f.write(content)

for route_dir, page, stage, source in PUBLIC_ROUTES:
    write(route_dir, PUBLIC_PAGE.format(page=page, stage=stage, source=source or "N/A — new page"))

for route_dir, page, stage, source in CUSTOMER_ROUTES:
    write(route_dir, DASHBOARD_PAGE.format(
        nav_const="CUSTOMER_NAV", role="Customer", title=page, page=page, stage=stage,
        source=source or "N/A — new page"))

for route_dir, page, stage, source in OWNER_ROUTES:
    write(route_dir, DASHBOARD_PAGE.format(
        nav_const="OWNER_NAV", role="Owner", title=page, page=page, stage=stage,
        source=source or "N/A — new page"))

for route_dir, page, stage, source in ADMIN_ROUTES:
    write(route_dir, DASHBOARD_PAGE.format(
        nav_const="ADMIN_NAV", role="Admin", title=page, page=page, stage=stage,
        source=source or "N/A — new page"))

print("Stub pages written:", len(PUBLIC_ROUTES) + len(CUSTOMER_ROUTES) + len(OWNER_ROUTES) + len(ADMIN_ROUTES))
