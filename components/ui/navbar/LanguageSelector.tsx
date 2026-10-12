export default function LanguageSelector() {
    return (
        <button
        aria-label="Change language"
        className="hidden sm:flex items-center gap-1 text-on-surface hover:text-primary transition-colors py-1 px-2 rounded-lg hover:bg-surface-subtle text-xs sm:text-label-sm font-semibold">
            <span className="material-symbols-outlined text-[16px]">language</span>
            <span>EN</span>
            <span className="material-symbols-outlined text-[14px]">expand_more</span>
        </button>
    );
}
