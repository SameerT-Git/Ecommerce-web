import Image from "next/image";
import Link from "next/link";
import DealOfTheDay from "./DealOfTheDay";
import DeliveryTracker from "./DeliveryTracker";

const marketplaceCategories = [
  {
    name: "Consumer Electronics",
    icon: "devices",
  },
  {
    name: "Computers & Tablets",
    icon: "laptop_mac",
  },
  {
    name: "Home Appliances",
    icon: "kitchen",
  },
  {
    name: "Fashion & Beauty",
    icon: "apparel",
  },
  {
    name: "Health & Wellness",
    icon: "favorite",
  },
  {
    name: "Sports & Fitness",
    icon: "fitness_center",
  },
  {
    name: "Automotive & Tools",
    icon: "directions_car",
  },
];

export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
        <aside className="hidden lg:flex flex-col lg:col-span-3 bg-surface-card rounded-xl shadow-xs p-3 border border-border-subtle">
          <div className="px-3 py-2 mb-1 flex items-center justify-between border-b border-border-subtle">
            <span className="text-xs uppercase tracking-wider text-text-secondary font-bold">Marketplace Categories</span>
            <span className="material-symbols-outlined text-[16px] text-text-tertiary">category</span>
          </div>

          <nav className="flex flex-col space-y-0.5 mt-1">
            {marketplaceCategories.map((category) => (
              <Link
               key={category.name}
               href="#"
                className="flex items-center justify-between px-3 py-2 rounded-lg text-text-primary hover:bg-surface-subtle hover:text-primary transition-colors group text-sm">
                <span className="flex items-center gap-2.5 font-medium">
                  <span className="material-symbols-outlined text-[18px] text-text-secondary group-hover:text-primary transition-colors">{category.icon}</span>
                  {category.name}
                </span>

                <span className="material-symbols-outlined text-[16px] text-text-tertiary">
                    chevron_right
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-3 px-3 bg-surface-container-low rounded-lg p-2.5 flex items-center justify-between border border-border-subtle">
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                    verified
                </span>

                <div>
                    <div className="text-xs text-text-primary font-bold">
                        Official Brands Nepal
                    </div>

                    <div className="text-[10px] text-text-secondary">
                        ShopTrust Verified Mall
                    </div>
                </div>
            </div>

            <span className="text-xs font-bold text-primary hover:underline cursor-pointer">
                Browse
            </span>
          </div>
        </aside>

        <div className="col-span-1 md:col-span-2 lg:col-span-6 flex flex-col justify-between relative rounded-xl sm:rounded-2xl overflow-hidden bg-primary shadow-sm min-h-[320px] sm:min-h-[380px] p-5 sm:p-7 text-on-primary">
          <Image
            alt=""
            fill
            className="object-cover object-center mix-blend-overlay opacity-30"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
            src="/images/hero-festival-sale.jpg"
          />

          <div className="relative z-10 flex flex-col items-start gap-2 sm:gap-3 max-w-md">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-card/25 backdrop-blur text-white text-[11px] sm:text-xs font-bold tracking-wide">
              <span className="material-symbols-outlined text-[14px] text-secondary-fixed">bolt</span>
              NEPAL FESTIVAL SALE • LIMITED TIME
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Mega Tech &amp; Home Festival
            </h1>

            <p className="text-xs sm:text-sm text-on-primary-container max-w-sm leading-relaxed">
              Save up to 45% on verified authentic flagship electronics, workstations, and automated kitchen appliances across Nepal.
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 sm:mt-4">
              <Link
                href="/#flash-deals"
                className="h-10 sm:h-11 px-4 sm:px-6 rounded-lg bg-secondary-container text-on-secondary text-xs sm:text-sm font-bold hover:bg-secondary transition-colors shadow-sm flex items-center gap-1.5"
              >
                <span>Shop Deals Now</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>

              <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-card/15 backdrop-blur text-white text-[11px] sm:text-xs font-semibold">
                <span className="material-symbols-outlined text-status-success text-[16px]">verified_user</span>
                <span>2-Year Nepal Warranty</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between pt-4 mt-auto">
            <div className="flex items-center gap-1.5">
              <span className="w-6 sm:w-7 h-1.5 rounded-full bg-surface-card" />
              <span className="w-2 h-1.5 rounded-full bg-surface-card/40" />
              <span className="w-2 h-1.5 rounded-full bg-surface-card/40" />
            </div>

            <span className="text-xs text-on-primary-container font-medium">Expires Sunday Midnight NPT</span>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <DealOfTheDay />

          <DeliveryTracker />
        </div>
      </div>
    </section>
  );
}
