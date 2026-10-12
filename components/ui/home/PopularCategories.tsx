import { categories } from "@/data/homedata";
import Link from "next/link";

export default function PopularCatagories(){
    return(
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div>
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight text-text-primary">Explore Popular Categories</h2>
                    <p className="text-xs sm:text-sm text-text-secondary hidden sm:block">Hand-picked collections vetted for high reliability and direct warranty</p>
                </div>

                <Link 
                href="#"
                className="text-xs sm:text-sm text-primary font-semibold hover:underline flex items-center gap-1 shrink-0">
                    <span>All Categories</span>
                    <span className="material-symbols-outlined text-[16px]">east</span>
                </Link>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-2 sm:gap-3.5">
                {categories.map((category) => (
                    <Link
                    key={category.name}
                    href="#"
                    className="flex flex-col items-center text-center p-2 sm:p-3 rounded-xl bg-surface-card hover:shadow-md transition-shadow group border border-border-subtle">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-surface-container-low group-hover:bg-primary-fixed flex items-center justify-center text-primary transition-colors mb-1.5">
                            <span className="material-symbols-outlined text-[22px] sm:text-[26px]">{category.icon}</span>
                        </div>
                            <span className="text-xs font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-1">{category.name}</span>
                            <span className="text-[10px] text-text-tertiary">{category.count}</span>
                    </Link>
                ))}
            </div>
        </section>
    )
}