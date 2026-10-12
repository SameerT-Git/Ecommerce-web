const trustBadges = [
    {
        icon: "verified",
        tittle: "100% Genuine",
        description: "Authorized brand stock",
        iconColor: "text-primary",
    },
    {
        icon: "payments",
        tittle: "Cash On Delivery",
        description: "Pay at your doorstep",
        iconColor: "text-status-success",
    },
    {
        icon: "replay",
        tittle: "7-Day Easy Returns",
        description: "Hassle-free Returns",
        iconColor: "text-secondary-container",
    },
    {
        icon: "headset_mic",
        tittle: "24/7 Dedicated Care",
        description: "Kathmandu & live chat",
        iconColor: "text-status-info",
    },
];

export default function TrustBadges(){
    return(
        <div className="border-b border-border-subtle">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {trustBadges.map((item) => (
                    <div 
                    key={item.tittle}className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-surface-subtle border border-border-subtle"><span className={`material-symbols-outlined text-primary text-[24px] sm:text-[28px] shrink-0 ${item.iconColor}`}>{item.icon}</span>
                    <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-semibold truncate text-on-surface">{item.tittle}</h4>
                        <p className="text-[10px] sm:text-xs text-text-secondary truncate">{item.description}</p>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}