import Link from "next/link";

export default function SearchBar(){
    return(
        <>
        <div className="w-full lg:max-w-2xl">
            <div className="w-full flex items-center h-10 sm:h-11 bg-surface-card rounded-lg border border-border-strong focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all shadow-xs">
                <button className="hidden md:flex h-full px-space-md bg-surface-subtle text-on-surface font-label-md text-xs sm:text-label-md rounded-l-lg border-r border-border-subtle items-center gap-1 hover:bg-surface-container transition-colors shrink-0">
                    <span>All Categories</span>
                    <span className="material-symbols-outlined text-[16px]">
                        expand_more
                    </span>
                </button>

                <input
                className="w-full h-full px-3 sm:px-space-md bg-transparent text-on-surface placeholder:text-text-tertiary focus:outline-none text-xs sm:text-body-md"
                placeholder="Search 1,000,000+ authentic items, brands, tech in Nepal..."
                type="text"
                />

                <button
                className="h-full px-3 sm:px-space-lg bg-primary text-on-primary font-label-md text-xs sm:text-label-md rounded-r-lg hover:bg-primary-container flex items-center justify-center transition-colors shrink-0 gap-1 sm:gap-1.5 font-semibold">
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]">search</span>
                    <span className="hidden sm:inline">Search</span>
                </button>
            </div>

            <div className="hidden sm:flex items-center gap-2 mt-1 text-[11px] sm:text-caption text-text-tertiary overflow-x-auto no-scrollbar whitespace-nowrap">
                <span className="text-text-secondary font-medium shrink-0">Popular:</span>
                <Link className="hover:text-primary hover:underline transition-colors" href="#">
                iPhone 16 Pro
                </Link>
                <span className="text-border-strong">•</span>

                <Link className="hover:text-primary hover:underline transition-colors" href="#">
                Sony ANC
                </Link>
                <span className="text-border-strong">•</span>

                <Link className="hover:text-primary hover:underline transition-colors" href="#">
                Air Fryer
                </Link>
                <span className="text-border-strong">•</span>

                <Link className="hover:text-primary hover:underline transition-colors" href="#">
                Mechanical Keyboard
                </Link>
                <span className="text-border-strong">•</span>

                <Link className="hover:text-primary hover:underline transition-colors" href="#">
                Winter Jackets
                </Link>
            </div>
        </div>
        </>
    )
}