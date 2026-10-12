const footerSections = [
    {
        title: "Get to Know Us",
        links: [
            "About ShopTrust Nepal",
            "Careers in Nepal",
            "Corporate Responsibility",
            "ShopTrust Hub Centers",
            "Press & Media"            
        ],
    },

    {
        title: "Customer Care",
        links: [
            "Help Center & FAQs",
            "Nepal Delivery Rates",
            "Returns & Refund Policy",
            "Cash on Delivery Info",
            "Contact Us (9821968993)",
        ],
    },

  {
    title: "Make Money with Us",
    links: [
      "Sell on ShopTrust Nepal",
      "Logistics Partner",
      "ShopTrust Creator & Affiliate",
      "Fulfillment by ShopTrust",
      "Advertise Your Products",
    ],
  },

  {
    title: "Payment & Security",
    links: [
      "Pay with eSewa / Khalti",
      "ConnectIPS Instant",
      "Fonepay QR Delivery",
      "ShopTrust Gift Cards",
      "PCI-DSS 256-bit Security",
    ],
  },
];

export default function FooterLink(){
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-b border-border-subtle text-xs sm:text-sm">
            {footerSections.map((section) => (
                <div key={section.title}>
                    <h4 className="font-bold text-on-surface mb-2 sm:mb-3">{section.title}</h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-text-secondary">
                        {section.links.map((link) => (
                            <li key={link} className="hover:text-primary transition-colors cursor-pointer">{link}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
