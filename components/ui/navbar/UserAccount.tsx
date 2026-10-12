import Image from "next/image"
import Link from "next/link"

export default function UserAccount(){
    return (
        <>
        <Link href="/account" className="flex items-center gap-1.5 sm:gap-space-sm py-1 px-1.5 sm:px-2 rounded-lg hover:bg-surface-subtle hover:text-primary transition-colors">
            <Image src="/sameer.png"
            alt="Profile"
            width={32}
            height={32}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover ring-1 ring-border-strong shrink-0"/>
            <div className="text-left hidden md:block">
                <span className="block text-[11px] text-text-secondary leading-none">Namaste, Alex</span>
                <span className="font-label-sm text-xs sm:text-label-sm text-on-surface font-semibold leading-none mt-1">Account &amp; Orders</span>
            </div>
        </Link>
        </>
    )
}