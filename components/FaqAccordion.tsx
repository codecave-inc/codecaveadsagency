"use client";

import { useState } from "react";

const FAQ_GROUPS = [
  {
    group: "For Customers",
    items: [
      ["How do I book a billboard?", "Search by state or city, choose a billboard, select your dates, and pay securely. Your payment is held in escrow until your campaign is confirmed."],
      ["When is my payment released to the owner?", "Funds are only released to the billboard owner once your campaign is confirmed as live and running — not before."],
      ["Can I cancel a booking?", "Cancellation terms depend on how much notice you give before your campaign start date. Full details are shown at checkout."],
    ],
  },
  {
    group: "For Owners",
    items: [
      ["How do I list my billboard?", "Sign up as an owner, then submit your billboard's location, specs, photos, and proof of ownership. Our team reviews every listing before it goes live."],
      ["How long does approval take?", "Most listings are reviewed within 24-48 hours."],
      ["When do I get paid?", "Payouts are released once a customer's campaign is confirmed complete, minus our commission."],
    ],
  },
  {
    group: "Payments",
    items: [
      ["What payment methods are supported?", "We support card payments, bank transfer, and USSD through our payment partners."],
      ["Is my payment safe?", "Yes — all customer payments are held securely by CodeCave in escrow until the campaign is confirmed."],
    ],
  },
  {
    group: "Trust & Safety",
    items: [
      ["Are billboards verified before listing?", "Yes, every listing is reviewed by our admin team, and owners are required to provide proof of ownership or permit."],
      ["What happens if there's a dispute?", "You can raise a dispute directly from your booking page — our admin team reviews evidence from both sides and resolves it."],
    ],
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="space-y-unit-xl">
      {FAQ_GROUPS.map((section) => (
        <div key={section.group}>
          <h2 className="font-bold text-lg mb-unit-sm">{section.group}</h2>
          <div className="border border-border-subtle rounded-xl overflow-hidden bg-surface-card">
            {section.items.map(([q, a]) => {
              const key = `${section.group}-${q}`;
              const isOpen = open === key;
              return (
                <div key={key} className="border-b border-border-subtle last:border-b-0">
                  <button
                    onClick={() => setOpen(isOpen ? null : key)}
                    className="w-full flex items-center justify-between px-unit-lg py-unit-md text-left font-medium"
                  >
                    {q}
                    <span className="material-symbols-outlined text-on-surface-variant">
                      {isOpen ? "remove" : "add"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-unit-lg pb-unit-md text-sm text-on-surface-variant">{a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
