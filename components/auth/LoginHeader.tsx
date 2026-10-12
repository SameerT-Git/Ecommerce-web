import Link from "next/link";
import Image from "next/image";

export default function LoginHeader(){
    return(
        <>
        <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
            <div className="h-16 max-w-7xl mx-auto px-gutter-desktop flex items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                        <Image
                        src="/screen.png"
                        alt="ShopTrust Nepal"
                        className="h-8 w-auto object-contain"
                        width={100}
                        height={100}
                        />

                    <div className="hidden sm:flex items-center gap-space-xs px-space-sm py-1 rounded bg-status-success-bg text-status-success">
                        <span className="material-symbols-outlined text-base">
                            verified_user
                        </span>
                        <span className="font-label-sm text-label-sm">
                            256-Bit SSL Secured
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-space-lg">
                    <div className="hidden md:flex items-center gap-spac-xs text-text-secondary">
                    <span className="material-symbols-outlined text-primary">
                        support_agent
                    </span>

                    <span className="font-body-sm text-body-sm">
                        Helpline:
                    </span>
                    <Link
                    href="9821968993" 
                     className="font-label-md text-label-md text-primary hover:underline">
                         9821968993
                    </Link>
                    </div>

                    <Link 
                    href="/"
                    className="font-labe-md text-label-md text-on-surface-varient hover:text-on-surface transiton-colors flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-base">
                            arrow_back
                        </span>
                        Return to shop
                    </Link>
                </div>
            </div>
        </header>
        </>
    )
}