import Image from "next/image";
import Link from "next/link";

import LanguageSelector from "../ui/navbar/LanguageSelector";
import SearchBar from "../ui/navbar/SearchBar";

export default function Navbar(){
    return (
        <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-0 lg:h-20 flex flex-wrap items-center justify-between gap-y-2.5 lg:gap-x-space-lg">

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
            aria-label="Toggle navigation menu"
            className="lg:hidden p-1.5 rounded-lg text-text-primary hover:bg-surface-subtle transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>

            <Link
            href="/"
            className="flex items-center focus:outline-none">
                <Image
                src="/screen.png"
                alt="ShopTrust Nepal Logo"
                width={150}
                height={40}
                className="h-8 sm:h-9 md:h-10 w-auto object-contain"/>
            </Link>
        </div>

        <div className="order-last lg:order-none w-full lg:w-auto lg:flex-1 min-w-0 flex lg:justify-center">
        <SearchBar/>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-space-lg shrink-0 order-2 lg:order-none">
        <LanguageSelector/>
        <Link
        href="/auth/login"
        className="hidden sm:inline-flex items-center h-9 px-3 rounded-lg font-label-sm text-label-sm text-on-surface border border-border-strong hover:bg-surface-subtle hover:text-primary transition-colors">
            Login
        </Link>
        <Link
        href="/auth/Register"
        className="inline-flex items-center h-9 px-3.5 rounded-lg font-label-sm text-label-sm bg-primary text-on-primary font-semibold hover:bg-primary-container transition-colors">
            Register
        </Link>
        </div>
        </div>
        </>
    )
}