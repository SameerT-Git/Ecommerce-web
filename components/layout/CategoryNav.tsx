import Link from "next/link"

const navItems = [
    {
        name: "Flash Sale",
        href: "#flash-deals",
        icon: "bolt",
        iconColor: "text-discount-red",
        className: "text-discount-red font-bold"
    },
    {
        name: "ShopTrust Mall (100% Authentic)",
        href: "#",
        icon: "verified",
        iconColor: "text-primary",
    },
    {
        name: "Global Collection",
        href: "#",
        icon: "public",
        iconColor: "text-secondary",
    },
    {
        name: "Daily Vouchers",
        href: "#",
        icon: "confirmation_number",
        iconColor: "text-status-warning",
    },
    {
        name: "Electronics",
        href: "#",
    },
    {
        name: "Fashion & Apparel",
        href: "#",
    },
    {
        name: "Home & Living",
        href: "#"
    },
    {
        name: "Customer Care",
        href: "#"
    }
]

export default function CategoryNav(){
    return (
        <div className="bg-surface-card border-t border-border-subtle shadow-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 sm:h-11 flex items-center justify-between gap-4">
                
                <div className="flex items-center gap-2 sm:gap-space-md overflow-x-auto no-scrollbar py-1 w-full xl:w-auto">
                <button type="button" className="hidden lg:flex items-center gap-1 font-label-md text-label-md text-on-surface font-bold pr-space-md border-r border-border-subtle hover:text-primary transition-colors shrink-0 cursor-pointer">
                    <span className="material-symbols-outlined text-[20px] text-primary">menu</span>
                    <span>All Categories</span>
                </button>

                <nav className="flex items-center gap-1 shrink-0 whitespace-nowrap text-xs sm:text-label-md font-medium">
                    {navItems.map((item) => (
                        <Link
                        key={item.name}
                        href={item.href}
                        className={`px-2.5 sm:px-3 py-1 rounded-md ${item.className || "text-on-surface-variant hover:bg-surface-container"} transition-colors flex items-center gap-1`}>
                            {item.icon && ( <span className={`material-symbols-outlined text-[15px] sm:text-[16px] ${item.iconColor || ""}`}>{item.icon}</span>)}
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </nav>
                </div>

                <div className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-status-success bg-status-success-bg px-3 py-1 rounded-full shrink-0">
                    <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                    <span className="text-xs">Free express delivery over Rs. 2,500</span>
                </div>
            </div>
        </div>
    )
}