import Link from "next/link";

export default function FooterBackToTop(){
    return(
        <Link href="#" className="block w-full py-2.5 sm:py-3 text-center bg-surface-container-low hover:bg-surface-container text-on-surface-variant text-xs sm:text-sm font-semibold transition-colors">
            Back to top <span className="material-symbols-outlined align-middle ml-1 text-[18px]">arrow_upward</span>
        </Link>
    )
}