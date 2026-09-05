"use client";

import { useState } from "react";
import Link from "next/link";
import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";

export default function SignupPage() {
  const [role, setRole] = useState<"customer" | "owner">("customer");

  return (
    <>
      <PublicHeader />
      <main className="pt-16 min-h-[80vh] flex items-center justify-center px-gutter-mobile py-unit-2xl">
        <div className="w-full max-w-md bg-surface-card border border-border-subtle rounded-xl p-unit-xl">
          <h1 className="text-xl font-bold text-center mb-1">Create your account</h1>
          <p className="text-sm text-on-surface-variant text-center mb-unit-lg">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-medium hover:underline">
              Log in
            </Link>
          </p>

          <div className="grid grid-cols-2 gap-2 mb-unit-lg">
            <button
              onClick={() => setRole("customer")}
              className={`rounded-lg border py-3 text-sm font-semibold flex flex-col items-center gap-1 ${
                role === "customer"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border-subtle text-on-surface-variant"
              }`}
            >
              <span className="material-symbols-outlined">campaign</span>
              I want to advertise
            </button>
            <button
              onClick={() => setRole("owner")}
              className={`rounded-lg border py-3 text-sm font-semibold flex flex-col items-center gap-1 ${
                role === "owner"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border-subtle text-on-surface-variant"
              }`}
            >
              <span className="material-symbols-outlined">location_city</span>
              I own a billboard
            </button>
          </div>

          <form className="space-y-unit-md">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input className="w-full border border-border-subtle rounded-lg px-3 py-2.5 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input type="email" className="w-full border border-border-subtle rounded-lg px-3 py-2.5 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input type="tel" className="w-full border border-border-subtle rounded-lg px-3 py-2.5 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Business Name <span className="text-on-surface-variant font-normal">(optional)</span>
              </label>
              <input className="w-full border border-border-subtle rounded-lg px-3 py-2.5 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input type="password" className="w-full border border-border-subtle rounded-lg px-3 py-2.5 text-sm" />
            </div>

            {role === "owner" && (
              <p className="text-xs text-on-surface-variant bg-surface-container rounded-lg p-unit-sm">
                After signing up, you'll be asked to verify your identity and
                provide proof of billboard ownership/permit before your first
                listing can go live.
              </p>
            )}

            <label className="flex items-start gap-2 text-xs text-on-surface-variant">
              <input type="checkbox" className="mt-0.5" />
              I agree to the{" "}
              <Link href="/terms-of-service" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </label>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary text-white py-3 text-sm font-semibold hover:opacity-90"
            >
              Create Account
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
