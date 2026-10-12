const paymentMethods = [
    {
        name: "eSewa",
        color: "text-emerald-500",
    },
    {
        name: "Khalti",
        color: "text-red-600",
    },
     {
        name: "fonepay",
        color: "text-red-600",
    },
     {
        name: "Mastercard",
        color: "text-orange-600",
    },  
];

export default function FooterPayments(){
    return(
        <div className="bg-surface-container-low pt-4 sm:pt-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">

                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
                    <span className="text-[11px] text-text-secondary uppercase tracking-wider font-semibold">Accepted Payments:</span>

                    <div className="flex items-center flex-wrap justify-center gap-1.5 text-xs font-bold">

                        {paymentMethods.map((method) => (
                            <span key={method.name} className={`px-2 py-0.5 bg-surface-card border border-border-subtle rounded shadow-xs ${method.color}`}>{method.name}</span>
                        ))}

                        <span className="px-2 py-0.5 bg-surface-card border border-border-subtle rounded text-status-success font-semibold shadow-xs flex items-center gap-1">
                            <span className="material-symbols-outlined text-[13px]">local_shipping</span>
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-status-success font-semibold">
                    <span className="material-symbols-outlined text-[16px]">verified_user</span>
                    <span>Nepal Telecommuications & Commerce Registered</span>
                </div>
            </div>
        </div>
    )
}