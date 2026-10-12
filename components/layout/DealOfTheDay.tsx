import Image from "next/image";
import Link from "next/link";

export default function DealOfTheDay() {
  return (
    <div className="bg-surface-card rounded-xl shadow-xs p-4 flex flex-col border border-border-subtle">

      <div className="flex items-center justify-between mb-2">

        <span className="text-xs sm:text-sm font-bold text-discount-red flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">
            local_fire_department
          </span>

          Deal of the Day
        </span>

        <span className="bg-discount-badge-bg text-discount-red px-2 py-0.5 rounded text-[11px] font-bold">
          -29% OFF
        </span>

      </div>

      <div className="w-full h-28 sm:h-32 rounded-lg bg-surface-subtle p-2 flex items-center justify-center overflow-hidden mb-2">

        <Image
          width={280}
          height={280}
          src="/products/sony-headphones.jpg"
          alt="Sony Headphones"
          className="w-full h-full object-contain mix-blend-multiply"
        />

      </div>

      <Link
        href="#"
        className="text-sm font-semibold text-text-primary hover:text-primary transition-colors line-clamp-1"
      >
        Sony WH-1000XM5 ANC Headset
      </Link>

      <div className="flex items-baseline gap-2 mt-1">

        <span className="text-base sm:text-lg text-text-primary font-bold">
          Rs. 38,999
        </span>

        <span className="text-xs text-text-tertiary line-through">
          Rs. 54,999
        </span>

      </div>

      <div className="w-full mt-2">

        <div className="flex items-center justify-between text-[11px] text-text-secondary mb-1">
          <span>78% claimed</span>

          <span className="text-status-warning font-semibold">
            14 units in KTM
          </span>
        </div>

        <div className="w-full h-1.5 sm:h-2 bg-surface-container rounded-full overflow-hidden">

          <div
            className="h-full bg-secondary-container rounded-full"
            style={{ width: "78%" }}
          />

        </div>

      </div>

    </div>
  );
}