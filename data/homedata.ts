// popular categories
export type Category = {
    name: string;
    count: string;
    icon: string;
};

export const categories: Category[] = [
    {
        name: "Smartphones",
        count: "2,410+",
        icon: "smartphone",
    },
    {
        name: "Laptops & PCs",
        count: "1,180+",
        icon: "Laptop",
    },
    {
        name: "Audio Gear",
        count: "890+",
        icon: "headphones",
    },
    {
        name: "Smart Home",
        count: "640+",
        icon: "home_iot_device",
    },
    {
        name: "Fashion",
        count: "4,200+",
        icon: "styler",
    },
    {
        name: "Kitchen",
        count: "1,560+",
        icon: "blender",
    },
    {
        name: "Fitness",
        count: "930+",
        icon: "sports_tennis",
    },
    {
        name: "Care & Spa",
        count: "1,340+",
        icon: "spa",
    },
]

//trustbar

export type TrustItem = 
    {
        icon: string;
        title: string;
        description: string;
        iconClass: string;
    };

    export const trustItems: TrustItem[] = [
        {
            icon: "payments",
            title: "Cash on Delivery (COD)",
            description: "Across 77 districts in Nepal",
            iconClass: "bg-surface-container-low text-primary",
        },
        {
            icon: "assignment_return",
            title: "7-Day Easy Returns",
            description: "Hassle-free instant refunds",
            iconClass: "bg-status-success-bg text-status-success",
        },
        {
            icon: "verified",
            title: "100% Genuine Warranty",
            description: "Direct authorized distributors",
            iconClass: "bg-surface-container-high text-primary-container",
        },
        {
            icon: "local_shipping",
            title: "Kathmandu 24h Express",
            description: "Same-day & next-day valley",
            iconClass: "bg-status-info-bg text-status-info",
        },
    ]

//product card 

export type Product = {
  id: number;
  name: string;
  image: string;
  category: string;
  rating: number;
  reviews: string;
  price: string;
  oldPrice: string;
  discount?: string;
  delivery?: string;
  badge?: string;
};

export const flashDeals: Product[] = [
  {
    id: 1,
    name: "Sony WH-1000XM5 Noise-Canceling Wireless Headphones",
    image: "/products/sony-headphones.jpg",
    category: "Mall Seller",
    rating: 4.8,
    reviews: "12.4k",
    price: "Rs. 38,999",
    oldPrice: "Rs. 54,999",
    discount: "-29%",
    delivery: "Free Valley Delivery",
  },

  {
    id: 2,
    name: "Apple iPad Air 11-Inch M2 Chip, 128GB Wi-Fi Space Gray",
    image: "/products/ipad-air.jpg",
    category: "Mall Seller",
    rating: 4.9,
    reviews: "8.3k",
    price: "Rs. 84,999",
    oldPrice: "Rs. 102k",
    discount: "-17%",
    delivery: "GenXT Nepal Warranty",
  },

  {
    id: 3,
    name: "De'Longhi Dedica 15-Bar Stainless Steel Espresso Maker",
    image: "/products/espresso-maker.jpg",
    category: "Mall Seller",
    rating: 4.7,
    reviews: "4.6k",
    price: "Rs. 26,499",
    oldPrice: "Rs. 39,999",
    discount: "-34%",
    delivery: "Only 7 left in stock",
  },

  {
    id: 4,
    name: "Garmin Venu 3 GPS Health Smartwatch AMOLED Display",
    image: "/products/garmin-venu.jpg",
    category: "Mall Seller",
    rating: 4.8,
    reviews: "3.1k",
    price: "Rs. 42,999",
    oldPrice: "Rs. 58k",
    discount: "-26%",
    delivery: "Express 24h Valley Dispatch",
  },
];

//best sellers

export const bestSellers: Product[] = [
  {
    id: 101,
    name: "Roborock Q7 Max+ Robot Vacuum and Mop with Auto-Empty Dock",
    image: "/products/roborock-vacuum.jpg",
    category: "Smart Cleaning",
    rating: 4.7,
    reviews: "2,840",
    price: "Rs. 48,500",
    oldPrice: "Rs. 65,000",
    badge: "Top Choice",
  },

  {
    id: 102,
    name: "Logitech Brio 4K Ultra HD Streaming Webcam with HDR",
    image: "/products/logitech-webcam.jpg",
    category: "Video & Streaming",
    rating: 4.9,
    reviews: "9,120",
    price: "Rs. 12,499",
    oldPrice: "Rs. 16,900",
  },

  {
    id: 103,
    name: "Ergonomic Mesh Office Desk Chair Dynamic Lumbar Support",
    image: "/products/office-chair.jpg",
    category: "Office Furniture",
    rating: 4.6,
    reviews: "5,440",
    price: "Rs. 18,900",
    oldPrice: "Rs. 25,500",
  },

  {
    id: 104,
    name: "Keychron K2 V2 Wireless Bluetooth Mechanical Keyboard",
    image: "/products/mechanical-keyboard.jpg",
    category: "Peripherals",
    rating: 4.8,
    reviews: "7,820",
    price: "Rs. 11,200",
    oldPrice: "Rs. 14,000",
  },

  {
    id: 105,
    name: "Insulated Stainless Steel Water Bottle 32oz Leakproof",
    image: "/products/water-bottle.jpg",
    category: "Drinkware",
    rating: 4.9,
    reviews: "14.2k",
    price: "Rs. 1,850",
    oldPrice: "Rs. 2,400",
  },

  {
    id: 106,
    name: "Fitness Smart Band Tracker 24/7 Heart Rate & Sleep",
    image: "/products/fitness-tracker.jpg",
    category: "Wearables",
    rating: 4.7,
    reviews: "6,180",
    price: "Rs. 4,200",
    oldPrice: "Rs. 5,999",
  },

  {
    id: 107,
    name: "Professional 8-Inch Japanese Steel Chef Knife",
    image: "/products/chef-knife.jpg",
    category: "Kitchen Cutlery",
    rating: 4.8,
    reviews: "3,520",
    price: "Rs. 3,200",
    oldPrice: "Rs. 4,500",
  },

  {
    id: 108,
    name: "VertuoPlus Coffee & Single-Serve Espresso Machine",
    image: "/products/espresso-coffee.jpg",
    category: "Coffee & Espresso",
    rating: 4.6,
    reviews: "8,940",
    price: "Rs. 22,500",
    oldPrice: "Rs. 29,999",
  },
];
