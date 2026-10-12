import Image from "next/image";
import type { Product } from "@/data/homedata";

type ProductCardProps = {
    product: Product;
    flashDeal?: boolean;
};

export default function ProductCard({ product, flashDeal = false, }: ProductCardProps) {
    if (!product) return null;

    return (
        <div className={
            flashDeal
            ? "flex flex-col justify-between p-3 sm:p-4 rounded-xl bg-surface-subtle hover:bg-surface-container-low transition-colors group relative border border-border-subtle"
            : "flex flex-col justify-between bg-surface-card rounded-xl p-3 sm:p-4 shadow-xs hover:shadow-md transition-shadow group border border-border-subtle"
        }>
            <div>
                <div className={`relative w-full aspect-square rounded-lg p-2 sm:p-3 flex items-center justify-center overflow-hidden mb-2 ${flashDeal ? "bg-surface-card" : "bg-surface-subtle"}`}>
                    {product.discount && (
                        <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-discount-badge-bg text-discount-red text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded shadow-xs z-10">{product.discount}</span>
                    )}

                    {product.badge && (
                        <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-surface-container-high text-primary text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded z-10">{product.badge}</span>
                    )}

                    <button
                    aria-label="Add to Wishlist"
                    className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-surface-card shadow-xs text-text-secondary hover:text-discount-red flex items-center justify-center transition-colors z-10">
                        <span className="material-symbols-outlined text-[16px] sm:text-[18px]">favorite_border</span>
                    </button>

                    <Image
                    src={product.image}
                    alt={product.name}
                    height={280}
                    loading="lazy"
                    width={280}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"/>
                </div>

                <span className="inline-block bg-primary-fixed text-primary px-1.5 py-0.5 rounded text-[10px] font-bold mb-1">{product.category}</span>
                <h3 className="text-xs sm:text-sm text-text-primary font-semibold line-clamp-2 hover:text-primary cursor-pointer leading-snug">{product.name}</h3>
                <div className="flex items-center gap-1 mt-1 text-[11px] sm:text-xs">
                    <span className="material-symbols-outlined text-rating-star text-[14px]">star</span>
                    <span className="text-text-primary font-bold">{product.rating}</span>
                    <span className="text-text-tertiary">({product.reviews})</span>
                </div>

                <div className="flex flex-wrap items-baseline gap-1.5 mt-1.5">
                    <span className="text-sm sm:text-base text-text-primary font-bold">{product.price}</span>
                    <span className="text-[11px] text-text-tertiary line-through">{product.oldPrice}</span>
                </div>

                {product.delivery && (
                    <p className="text-[11px] text-status-success font-semibold mt-1 truncate">{product.delivery}</p>
                )}
            </div>
        </div>
    )
}