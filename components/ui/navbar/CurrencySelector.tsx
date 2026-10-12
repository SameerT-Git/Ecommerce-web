export default function  CurrencySelector() {
    return (
        <button className="hidden sm:flex items-center gap-1 text-on-surface hover:text-primary transition-colors py-1 px-2 rounded-lg hover:bg-surface-subtle text-xs sm:text-label-sm font-semibold">
            <span className="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center bg-surface-subtle font-bold text-[10px]">🇳🇵</span>
            <span>NPR</span>
            <span className="material-symbols-outlined text-[14px]">expand_more</span>
        </button>
    );
}