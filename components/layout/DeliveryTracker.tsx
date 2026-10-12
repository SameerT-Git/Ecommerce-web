"use client";

import { useState } from "react";

export default function DeliveryTracker() {
  const [orderId, setOrderId] = useState("");

  function handleTrack() {
    console.log("Tracking:", orderId);
  }

  return (
    <div className="bg-surface-card rounded-xl shadow-xs p-4 flex flex-col justify-between border border-border-subtle">

      <div>

        <div className="flex items-center gap-2 mb-2">

          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-status-info-bg text-status-info flex items-center justify-center shrink-0">

            <span className="material-symbols-outlined text-[18px]">
              package_2
            </span>

          </span>

          <div>
            <h4 className="text-xs sm:text-sm text-text-primary font-bold">
              Track Your Nepal Delivery
            </h4>

            <p className="text-[11px] text-text-secondary leading-tight">
              Instant courier & SMS update
            </p>
          </div>

        </div>

        <div className="flex items-center gap-1.5 mt-2">

          <input
            value={orderId}
            onChange={(event) => setOrderId(event.target.value)}
            placeholder="Order ID (e.g. NP-98214)"
            type="text"
            className="w-full h-8 sm:h-9 px-2.5 rounded-lg bg-surface-subtle text-text-primary text-xs placeholder:text-text-tertiary focus:outline-none focus:bg-surface-card focus:shadow-xs border border-border-subtle"
          />

          <button
            onClick={handleTrack}
            className="h-8 sm:h-9 px-3 sm:px-3.5 rounded-lg bg-primary text-on-primary text-xs font-semibold hover:bg-primary-container transition-colors shrink-0"
          >
            Track
          </button>

        </div>

      </div>

      <div className="pt-2 sm:pt-3 mt-3 bg-surface-subtle -mx-4 -mb-4 px-4 py-2.5 rounded-b-xl flex items-center justify-between border-t border-border-subtle">

        <div className="flex items-center gap-1 text-status-success text-[11px] font-semibold">

          <span className="material-symbols-outlined text-[15px]">
            verified_user
          </span>

          <span>Cash on Delivery & Escrow</span>

        </div>

        <span className="text-[11px] text-primary font-bold hover:underline cursor-pointer">
          Learn &gt;
        </span>

      </div>

    </div>
  );
}