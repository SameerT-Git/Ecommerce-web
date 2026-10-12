const trustMetrics = [
  {
    value: "99.8%",
    label: "On-Time Arrival",
    icon: "schedule",
    iconClass: "bg-status-success-bg text-status-success",
    description:
      "Central hubs in Kathmandu, Pokhara, and Biratnagar dispatch with live SMS tracking and real Nepali phone support.",
  },
  {
    value: "100%",
    label: "Verified Buyers Only",
    icon: "rate_review",
    iconClass: "bg-primary-fixed text-primary",
    description:
      "Zero fake reviews. Reviews can only be submitted after verified delivery confirmation by genuine Nepali consumers.",
  },
  {
    value: "Escrow / COD",
    label: "Pay Upon Delivery",
    icon: "lock_clock",
    iconClass: "bg-status-info-bg text-status-info",
    description:
      "Pay safely via Cash on Delivery or digital escrow (eSewa/Khalti/ConnectIPS). Hassle-free refunds if items are mismatched.",
  },
];

const testimonials = [
  {
    initial: "B",
    text: "The Sony headphones arrived in Kathmandu within 20 hours. Paid via eSewa with authentic Sony Nepal warranty bill. Super fast and reliable!",
    customer: "Bikash Shrestha",
    location: "Lalitpur, Nepal",
  },
  {
    initial: "P",
    text: "Got my iPad Air with official VAT bill. Smooth delivery to Pokhara via courier. Best online shopping platform in Nepal so far.",
    customer: "Pooja Gurung",
    location: "Pokhara, Nepal",
  },
  {
    initial: "S",
    text: "Customer service answered within 30 seconds on live chat when I needed to update my delivery address in Baneshwor. 5 stars!",
    customer: "Suman Thapa",
    location: "Kathmandu, Nepal",
  },
];

export default function TrustSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="bg-surface-container-low rounded-2xl p-5 sm:p-8 border border-border-subtle">

        {/* Section Heading */}
        <div className="max-w-2xl mb-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold">
            Built on Trust in Nepal
          </span>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-text-primary mt-1">
            Why Millions Across Nepal Choose ShopTrust
          </h2>

          <p className="text-xs sm:text-sm text-text-secondary mt-2 leading-relaxed">
            Unlike unvetted peer marketplaces, every transaction on ShopTrust
            is insured, every merchant is physically vetted with Nepal PAN/VAT
            registration, and returns are handled directly through our
            nationwide network.
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {trustMetrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-surface-card rounded-xl p-4 sm:p-5 shadow-xs border border-border-subtle"
            >
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                
                {/* Icon */}
                <span
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg ${metric.iconClass} flex items-center justify-center shrink-0`}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {metric.icon}
                  </span>
                </span>

                {/* Value + Label */}
                <div>
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">
                    {metric.value}
                  </span>

                  <span className="block text-[10px] text-text-secondary uppercase font-semibold">
                    {metric.label}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-text-secondary leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-6 pt-5 border-t border-border-subtle">

          {/* Testimonial Heading */}
          <h3 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-status-success text-[18px]">
              recommend
            </span>

            Recent Purchase Feedback from Nepal Shoppers
          </h3>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.customer}
                className="bg-surface-card p-3.5 sm:p-4 rounded-lg shadow-xs border border-border-subtle flex flex-col justify-between"
              >
                <div>

                  {/* Stars + Verified */}
                  <div className="flex items-center justify-between mb-2">

                    {/* Stars */}
                    <div className="flex items-center text-rating-star">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span
                          key={index}
                          className="material-symbols-outlined text-[15px]"
                          style={{
                            fontVariationSettings: "'FILL' 1",
                          }}
                        >
                          star
                        </span>
                      ))}
                    </div>

                    {/* Verified */}
                    <span className="text-[11px] text-status-success font-semibold flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[13px]">
                        verified
                      </span>

                      Verified
                    </span>
                  </div>

                  {/* Review */}
                  <p className="text-xs text-text-primary italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Customer */}
                <div className="mt-3 flex items-center gap-2">

                  {/* Initial */}
                  <div className="w-5 h-5 rounded-full bg-primary-fixed text-primary text-[10px] font-bold flex items-center justify-center">
                    {testimonial.initial}
                  </div>

                  {/* Name */}
                  <span className="text-xs text-text-secondary font-semibold">
                    {testimonial.customer} • {testimonial.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}