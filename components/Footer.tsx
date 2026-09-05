import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-unit-3xl">
      <div className="max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop py-unit-2xl grid grid-cols-2 md:grid-cols-4 gap-unit-lg text-sm">
        <div className="col-span-2 md:col-span-1">
          <p className="font-bold text-lg mb-2">CodeCave Ads Agency</p>
          <p className="text-white/70">
            Nigeria&apos;s marketplace for verified billboard advertising space.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-2">Company</p>
          <ul className="space-y-1 text-white/70">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Support</p>
          <ul className="space-y-1 text-white/70">
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">For Owners</p>
          <ul className="space-y-1 text-white/70">
            <li><Link href="/owner/listings/new" className="hover:text-white">List a Billboard</Link></li>
            <li><Link href="/login" className="hover:text-white">Owner Login</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-white/50 py-unit-md">
        © {new Date().getFullYear()} CodeCave Ads Agency. All rights reserved.
      </div>
    </footer>
  );
}
