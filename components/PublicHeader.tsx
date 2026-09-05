import Link from "next/link";

const navLinks = [
  { href: "/billboards", label: "Browse Billboards" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/owner/listings/new", label: "List Your Billboard" },
];

export default function PublicHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-card/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="max-w-container-max mx-auto flex items-center justify-between px-gutter-mobile md:px-gutter-desktop h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-primary text-lg">
          <span className="material-symbols-outlined text-secondary-container">
            campaign
          </span>
          CodeCave Ads Agency
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-on-surface-variant">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:inline text-sm font-medium text-primary hover:underline"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-secondary-container text-on-secondary-container px-4 py-2 text-sm font-semibold hover:opacity-90"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
