import ProductCard from "./ProductCard"
import { bestSellers } from "@/data/homedata";

const tabs = [
    "Best Sellers",
    "Trending Nepal",
    "Top Tech",
    "Home Faves",
];

export default function BestSellers() {
    return(
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 sm:pb-4 border-b border-border-subtle gap-3 mb-4 sm:mb-6">
                <div>
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight text-text-primary">
                        Verified Best Sellers in Nepal
                    </h2>
                    <p className="text-xs sm:text-sm text-text-secondary">
                        Over 500,000+ orders fulfilled with cash on delivery & official warranty
                    </p>
                </div>

                <div className="flex items-center gap-1 bg-surface-subtle p-1 rounded-xl border border-border-subtle overflow-x-auto no-scrollbar shrink-0">
                    {tabs.map((tab, index) => (
                        <button
                        key={tab}
                        className={
                            index === 0
                            ? "px-2.5 sm:px-3 rounded-lg bg-surface-card text-primary text-xs font-bold shadow-xs whitespace-nowrap cursor-pointer"
                            : "px-2.5 sm:px-3 py-1 rounded-lg text-text-secondary hover:text-text-primary text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer"
                        }>{tab}</button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {bestSellers.map((product) => (
                    <ProductCard
                    key={product.id}
                    product={product}/>
                ))}
            </div>
        </section>
    )
}
