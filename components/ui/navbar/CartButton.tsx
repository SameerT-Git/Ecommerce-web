import Link from "next/link"

export default function CartButton(){
    return(
        <>
        <Link
        href="/cart"
        className="flex items-center gap-1.5 sm:gap-space-sm bg-surface-subtle hover:bg-surface-container px-2.5 sm:px-space-md py-1.5 sm:py-2 rounded-lg transition-colors border border-border-subtle"
        >
        <div className="relative flex items-center">
            <span className="material-symbols-outlined text-primary text-[22px] sm:text-[24px]">shopping_cart</span>
            <span className="absolute -top-2 -right-2 bg-secondary-container text-on-secondary text-[10px] sm:text-[11px] rounded-full px-1 min-w-[16px] sm:min-w-[18px] text-center font-bold shadow-sm">3</span>
        </div>

        <div className="flex flex-col text-left hidden sm:flex">
            <span className="text-[10px] sm:text-caption text-text-secondary leading-none">
                Cart
            </span>

            <span className="font-label-md text-xs sm:text-label-md text-on-surface font-bold leading-tight">
                रू 14,850
            </span>
        </div>
        </Link>
        </>
    );
};