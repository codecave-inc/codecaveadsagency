import Link from "next/link";
import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";

export default function LoginPage() {
  return (
    <>
      <PublicHeader />
      <main className="pt-16 min-h-[80vh] flex items-center justify-center px-gutter-mobile py-unit-2xl">
        <div className="w-full max-w-md bg-surface-card border border-border-subtle rounded-xl p-unit-xl">
          <h1 className="text-xl font-bold text-center mb-1">Log in</h1>
          <p className="text-sm text-on-surface-variant text-center mb-unit-lg">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary font-medium hover:underline">
              Sign up
            </Link>
          </p>

          <form className="space-y-unit-md">
            <div>
              <label className="block text-sm font-medium mb-1">Email or Phone Number</label>
              <input className="w-full border border-border-subtle rounded-lg px-3 py-2.5 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input type="password" className="w-full border border-border-subtle rounded-lg px-3 py-2.5 text-sm" />
              <div className="text-right mt-1">
                <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary text-white py-3 text-sm font-semibold hover:opacity-90"
            >
              Log In
            </button>
          </form>

          <p className="text-xs text-center text-on-surface-variant mt-unit-lg">
            Admins also log in here — your dashboard is shown automatically
            based on your account role.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
