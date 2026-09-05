import Link from "next/link";
import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";

export default function ForgotPasswordPage() {
  return (
    <>
      <PublicHeader />
      <main className="pt-16 min-h-[80vh] flex items-center justify-center px-gutter-mobile py-unit-2xl">
        <div className="w-full max-w-md bg-surface-card border border-border-subtle rounded-xl p-unit-xl">
          <h1 className="text-xl font-bold text-center mb-1">Reset your password</h1>
          <p className="text-sm text-on-surface-variant text-center mb-unit-lg">
            Enter your email and we&apos;ll send you a link to reset your password.
          </p>

          <form className="space-y-unit-md">
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input type="email" className="w-full border border-border-subtle rounded-lg px-3 py-2.5 text-sm" />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary text-white py-3 text-sm font-semibold hover:opacity-90"
            >
              Send Reset Link
            </button>
          </form>

          <p className="text-xs text-center text-on-surface-variant mt-unit-lg">
            <Link href="/login" className="text-primary hover:underline">
              Back to log in
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
