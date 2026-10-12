import { flashDeals } from "@/data/homedata";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function FlashDeals(){
    return(
        <section 
        id="flash-deals"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5">
            <div className="bg-surface-card rounded-xl p-4 sm:p-6 shadow-xs border border-border-subtle">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-border-subtle gap-2 sm:gap-4">
                    <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-discount-red animate-pulse"/>
                        <h2 className="text-base sm:text-xl font-bold tracking-tight text-text-primary">Flash Sale Nepal</h2>
                        </div>

                        <div className="flex items-center gap-1.5 bg-status-error-bg text-discount-red px-2.5 py-1 rounded-md text-xs font-bold">
                            <span className="material-symbols-outlined text-[16px]">timer</span>
                            <span>Ends in</span>
                            <span className="tabular-nums tracking-wider ml-1 text-on-surface">04:32:18</span>
                        </div>
                    </div>

                    <Link
                    href="#"
                    className="text-xs sm:text-sm text-primary font-semibold hover:underline flex items-center gap-1">
                    View All Deals (42)
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                    {flashDeals.map((product) => (
                        <ProductCard
                        key={product.id}
                        product={product}
                        flashDeal
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}