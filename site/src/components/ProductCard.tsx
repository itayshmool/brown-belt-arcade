"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { CategoryBadge } from "./CategoryBadge";

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative block border-3 border-[var(--color-bg-dark)] bg-[var(--color-bg-card)] transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_var(--color-yellow)]"
      style={{ borderWidth: "3px" }}
    >
      {/* Top bar - dark header */}
      <div
        className="flex items-center justify-between bg-[var(--color-bg-dark)] px-4 py-2"
        style={{ borderBottom: "3px solid var(--color-bg-dark)" }}
      >
        <CategoryBadge category={product.category} />
        <span className="font-[var(--font-pixel)] text-[7px] text-[var(--color-text-muted)]">
          {product.platform}
        </span>
      </div>

      <div className="p-5">
        <h3 className="mb-2 font-[var(--font-pixel)] text-[11px] leading-relaxed text-[var(--color-text)] transition-colors group-hover:text-[var(--color-red)]">
          {product.name}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {product.description}
        </p>

        {/* Owners */}
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {product.owners.map((owner) => (
              <img
                key={owner.github}
                src={`${owner.avatar}?s=64`}
                alt={owner.name}
                width={22}
                height={22}
                className="border-2 border-[var(--color-bg-dark)]"
              />
            ))}
          </div>
          <span className="font-[var(--font-pixel)] text-[7px] text-[var(--color-text-muted)]">
            {product.owners.map((o) => o.name.split(" ")[0]).join(", ")}
          </span>
        </div>
      </div>

      {/* Index number */}
      <span className="absolute right-3 top-10 font-[var(--font-pixel)] text-[7px] text-[var(--color-text-muted)]">
        {String(index + 1).padStart(2, "0")}
      </span>
    </Link>
  );
}
