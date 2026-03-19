"use client";

import { useState } from "react";
import { products, type Category } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { FilterBar } from "@/components/FilterBar";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchesCategory =
      activeCategory === null || p.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.owners.some((o) =>
        o.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-16 sm:py-24" style={{ borderBottom: "4px solid var(--color-bg-dark)" }}>
        {/* Red accent line */}
        <div className="absolute bottom-0 left-0 h-1 w-48 bg-[var(--color-red)]" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <div className="flex-1">
            {/* Badge */}
            <div className="mb-6 inline-block bg-[var(--color-red)] px-4 py-1.5 font-[var(--font-pixel)] text-[9px] uppercase tracking-widest text-white" style={{ transform: "skewX(-5deg)" }}>
              <span style={{ display: "inline-block", transform: "skewX(5deg)" }}>
                ★ Premium Team ★
              </span>
            </div>

            <h1 className="mb-2 font-[var(--font-pixel)] text-3xl leading-relaxed text-[var(--color-text)] sm:text-4xl">
              Brown Belt <span className="text-[var(--color-red)]">道場</span>
            </h1>
            <h2 className="mb-6 font-[var(--font-pixel)] text-sm uppercase tracking-[4px] text-[var(--color-red)]">
              ネオ東京 Neo Tokyo
            </h2>

            <p className="mb-6 max-w-xl text-base font-bold leading-relaxed text-[var(--color-text-secondary)]">
              A{" "}
              <span className="text-[var(--color-red)]">
                secondary, self-learned
              </span>{" "}
              technical passion that lets you move things without waiting for
              others. These are the tools and products our team built outside
              their primary expertise.
            </p>

            {/* Stats - bold bordered box */}
            <div className="inline-flex overflow-hidden" style={{ border: "3px solid var(--color-bg-dark)" }}>
              <Stat label="Projects" value={products.length} color="var(--color-red)" />
              <Stat
                label="Builders"
                value={new Set(products.flatMap((p) => p.owners.map((o) => o.github))).size}
                color="var(--color-bg-dark)"
              />
              <Stat
                label="Classes"
                value={new Set(products.map((p) => p.category)).size}
                color="var(--color-blue)"
              />
            </div>

            <p className="blink mt-8 font-[var(--font-pixel)] text-[9px] text-[var(--color-text-muted)]">
              ▼ SELECT YOUR PROJECT ▼
            </p>
          </div>

          {/* Hero image */}
          <div className="float w-56 shrink-0 sm:w-64 lg:w-72">
            <div className="overflow-hidden shadow-[6px_6px_0_var(--color-yellow)]" style={{ border: "3px solid var(--color-bg-dark)" }}>
              <img
                src="/brown-belt-arcade/hero.png"
                alt="Brown belt and black belt martial artists bowing"
                className="w-full"
              />
            </div>
            <p className="mt-3 text-center font-[var(--font-pixel)] text-[8px] uppercase tracking-widest text-[var(--color-text-muted)]">
              礼 Rei (Respect)
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-6 flex items-center gap-3">
          <span className="font-[var(--font-pixel)] text-[10px] text-[var(--color-red)]">◆</span>
          <h2 className="font-[var(--font-pixel)] text-[10px] uppercase tracking-widest text-[var(--color-red)]">
            Select Fighter
          </h2>
          <div className="flex-1" style={{ borderTop: "3px solid var(--color-bg-dark)" }} />
        </div>

        <FilterBar
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-[var(--font-pixel)] text-xs text-[var(--color-text-muted)]">
              NO MATCH FOUND
            </p>
            <p className="mt-2 font-[var(--font-pixel)] text-[10px] text-[var(--color-red)]">
              TRY AGAIN?
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center" style={{ borderTop: "4px solid var(--color-bg-dark)" }}>
        <p className="font-[var(--font-pixel)] text-[9px] leading-relaxed text-[var(--color-text-muted)]">
          <span className="text-[var(--color-red)]">Brown Belt</span> &mdash;
          自学 Autodidactism
        </p>
        <p className="mt-1 font-[var(--font-pixel)] text-[7px] text-[var(--color-text-muted)]/60">
          Don&apos;t wait for the Guild.
        </p>
      </footer>
    </main>
  );
}

function Stat({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2 px-5 py-2.5" style={{ borderRight: "3px solid var(--color-bg-dark)" }}>
      <span
        className="font-[var(--font-pixel)] text-lg"
        style={{ color }}
      >
        {value}
      </span>
      <span className="font-[var(--font-pixel)] text-[7px] uppercase tracking-wider text-[var(--color-text-muted)]">
        {label}
      </span>
    </div>
  );
}
