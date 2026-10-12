import { trustItems } from "@/data/homedata";

export default function TrustBar(){
    return(
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 bg-surface-card rounded-xl shadow-xs p-3 sm:p-5 border border-border-subtle">
                {trustItems.map((item) => (
                    <div 
                    key={item.title}
                    className="flex items-center sm:items-start gap-2.5 sm:gap-3">
                        <div className={`w-9 h-9 sm:w-10 sm-h-10 rounded-lg ${item.iconClass} flex items-center justify-center shrink-0`}>
                            <span className="material-symbols-outlined text-[20]px sm:text-[24px]">
                                {item.icon}
                            </span>
                        </div>

                        <div>
                            <h4 className="text-xs sm:text-sm text-text-primary font-bold">
                                {item.title}
                            </h4>

                            <p className="text-[11px] sm:text-xs text-text-secondary">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}