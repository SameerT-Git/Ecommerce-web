"use client";

import { FormEvent, useState } from "react";

export default function NewsletterBanner() {
  const [contact, setContact] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Submitted:", contact);

    // Later:
    // Send contact information to your API
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5 mb-6 sm:mb-8">
      <div className="bg-primary text-on-primary rounded-2xl p-5 sm:p-8 relative overflow-hidden shadow-sm">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center relative z-10">

          {/* Left Content */}
          <div className="lg:col-span-7">

            {/* Voucher Badge */}
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-card/20 text-surface-card text-[11px] font-bold mb-2">
              EXCLUSIVE NEPAL VOUCHER
            </span>

            {/* Heading */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight">
              Get Rs. 500 off your first marketplace order
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-on-primary-container max-w-lg mt-1.5 leading-relaxed">
              Join over 2.4 million happy Nepali shoppers. Receive weekly
              price-drop alerts, flash vouchers, and early access to festival
              sales.
            </p>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-5 flex flex-col gap-2">

            <form
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
              onSubmit={handleSubmit}
            >
              {/* Input */}
              <input
                value={contact}
                onChange={(event) => setContact(event.target.value)}
                className="h-10 sm:h-11 px-3 sm:px-4 flex-1 rounded-lg bg-surface-card text-text-primary text-xs sm:text-sm placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-secondary-container"
                placeholder="Enter mobile or email"
                type="text"
              />

              {/* Button */}
              <button
                className="h-10 sm:h-11 px-4 sm:px-6 rounded-lg bg-secondary-container hover:bg-secondary text-on-secondary text-xs sm:text-sm font-bold transition-colors shrink-0 shadow-sm"
                type="submit"
              >
                Claim Rs. 500
              </button>
            </form>

            {/* Disclaimer */}
            <span className="text-[11px] text-on-primary-container leading-tight">
              Applicable on orders above Rs. 2,000. Instant SMS coupon sent to
              you.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}