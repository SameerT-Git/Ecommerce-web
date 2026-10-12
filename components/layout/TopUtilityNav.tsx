import Link from "next/link";

export default function TopUtilityNav() {
  return (
    <div className="bg-surface-container-low text-on-surface-variant border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8 sm:h-9 text-xs sm:text-label-sm font-label-sm">

        <div className="flex items-center gap-1 sm:gap-space-sm truncate">
          <span className="material-symbols-outlined text-[15px] sm:text-[16px] text-primary shrink-0">location_on</span>
          <span className="text-text-secondary hidden xs:inline">Deliver to</span>
          <span className="font-label-sm text-on-surface cursor-pointer hover:underline flex items-center gap-1 font-semibold truncate">
            Kathmandu
            <span className="hidden md:inline text-text-tertiary font-normal">(44600 / Bagmati)</span>
            <span className="material-symbols-outlined text-[14px] text-text-tertiary">arrow_drop_down</span>
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-space-lg text-xs sm:text-label-sm font-label-sm">
            <Link className="hover:text-primary transition-colors flex items-center gap-1" href="tel:9821968993">
              <span className="material-symbols-outlined text-[14px] sm:text-[15px]">support_agent</span>
              <span className="hidden sm:inline">24/7 Helpline:</span>
              9821968993
            </Link>
            <Link className="hover:text-primary transition-colors hidden lg:inline" href="#">Sell on ShopTrust Nepal</Link>
            <Link className="hover:text-primary transition-colors hidden md:inline" href="#">Track Order</Link>
            <Link className="hover:text-primary transition-colors hidden sm:inline" href="#">Help &amp; Support</Link>
        </div>

      </div>
    </div>
  );
}