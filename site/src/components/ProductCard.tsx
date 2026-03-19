"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { CategoryBadge } from "./CategoryBadge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative block overflow-hidden rounded-lg border-2 border-[var(--color-border)] bg-[var(--color-bg-card)] transition-all duration-300 hover:border-[var(--color-pink)] hover:shadow-[0_0_20px_rgba(255,77,141,0.2),inset_0_0_20px_rgba(255,77,141,0.05)]"
    >
      {/* Top bar - arcade style */}
      <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-bg)]/50 px-4 py-2">
        <CategoryBadge category={product.category} />
        <span className="font-[var(--font-pixel)] text-[8px] text-[var(--color-text-muted)]">
          {product.platform}
        </span>
      </div>

      <div className="p-5">
        <h3 className="mb-2 font-[var(--font-pixel)] text-sm leading-relaxed text-[var(--color-gold)] transition-colors group-hover:text-[var(--color-pink)]">
          {product.name}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {product.description}
        </p>

        {/* Owners as avatars */}
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {product.owners.map((owner) => (
              <img
                key={owner.github}
                src={`${owner.avatar}?s=64`}
                alt={owner.name}
                width={24}
                height={24}
                className="rounded-sm border border-[var(--color-border)] grayscale transition-all group-hover:grayscale-0"
              />
            ))}
          </div>
          <span className="font-[var(--font-pixel)] text-[8px] text-[var(--color-text-muted)]">
            {product.owners.map((o) => o.name.split(" ")[0]).join(", ")}
          </span>
        </div>
      </div>

      {/* Corner decoration */}
      <div className="absolute right-0 top-0 h-0 w-0 border-l-[20px] border-t-[20px] border-l-transparent border-t-[var(--color-pink)]/0 transition-all group-hover:border-t-[var(--color-pink)]/60" />
    </Link>
  );
}
