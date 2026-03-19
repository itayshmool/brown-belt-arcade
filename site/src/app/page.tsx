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
      <section className="relative overflow-hidden border-b-2 border-[var(--color-border)] px-6 py-16 sm:py-24">
        {/* Decorative Japanese waves */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="waves" x="0" y="0" width="120" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 Q30 0 60 20 Q90 40 120 20" fill="none" stroke="var(--color-pink)" strokeWidth="1.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <div className="flex-1">
            {/* Top label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded border border-[var(--color-pink)]/30 bg-[var(--color-pink)]/10 px-3 py-1.5">
              <span className="font-[var(--font-pixel)] text-[10px] uppercase tracking-widest text-[var(--color-pink)]">
                ★ Premium Team ★
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-2 font-[var(--font-pixel)] text-3xl leading-relaxed text-[var(--color-gold)] sm:text-4xl">
              Brown Belt
            </h1>
            <h2 className="neon-pink mb-6 font-[var(--font-pixel)] text-2xl text-[var(--color-pink)] sm:text-3xl">
              道場 Dojo
            </h2>

            <p className="mb-6 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)]">
              A{" "}
              <span className="font-bold text-[var(--color-cyan)]">
                secondary, self-learned
              </span>{" "}
              technical passion that lets you move things without waiting for
              others. These are the tools and products our team built outside
              their primary expertise.
            </p>

            {/* Stats bar - arcade style */}
            <div className="inline-flex flex-wrap items-center gap-1 rounded border border-[var(--color-border)] bg-[var(--color-bg-card)] p-1">
              <Stat label="PROJECTS" value={products.length} color="var(--color-cyan)" />
              <div className="mx-1 h-6 w-px bg-[var(--color-border)]" />
              <Stat
                label="BUILDERS"
                value={new Set(products.flatMap((p) => p.owners.map((o) => o.github))).size}
                color="var(--color-green)"
              />
              <div className="mx-1 h-6 w-px bg-[var(--color-border)]" />
              <Stat
                label="CLASSES"
                value={new Set(products.map((p) => p.category)).size}
                color="var(--color-gold)"
              />
            </div>

            {/* Blinking insert coin */}
            <p className="blink mt-8 font-[var(--font-pixel)] text-[10px] text-[var(--color-text-muted)]">
              &#9660; SELECT YOUR PROJECT &#9660;
            </p>
          </div>

          {/* Hero image */}
          <div className="float w-56 shrink-0 sm:w-64 lg:w-72">
            <div className="overflow-hidden rounded-lg border-2 border-[var(--color-gold)]/40 shadow-[0_0_30px_rgba(255,215,0,0.1)]">
              <img
                src="/brown-belt-arcade/hero.png"
                alt="Brown belt and black belt martial artists bowing"
                className="w-full"
              />
            </div>
            <p className="mt-3 text-center font-[var(--font-pixel)] text-[8px] uppercase tracking-widest text-[var(--color-gold)]/60">
              礼 - Rei (Respect)
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        {/* Section header */}
        <div className="mb-6 flex items-center gap-3">
          <span className="font-[var(--font-pixel)] text-[10px] text-[var(--color-cyan)]">◆</span>
          <h2 className="font-[var(--font-pixel)] text-xs uppercase tracking-widest text-[var(--color-cyan)]">
            Character Select
          </h2>
          <div className="flex-1 border-t border-dashed border-[var(--color-border)]" />
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
            <p className="mt-2 font-[var(--font-pixel)] text-[10px] text-[var(--color-pink)]">
              TRY AGAIN?
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-[var(--color-border)] px-6 py-8 text-center">
        <p className="font-[var(--font-pixel)] text-[10px] leading-relaxed text-[var(--color-text-muted)]">
          <span className="text-[var(--color-gold)]">Brown Belt</span> &mdash;
          自学 Autodidactism
        </p>
        <p className="mt-1 font-[var(--font-pixel)] text-[8px] text-[var(--color-text-muted)]/50">
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
    <div className="flex items-center gap-2 px-3 py-1.5">
      <span
        className="font-[var(--font-pixel)] text-lg"
        style={{ color }}
      >
        {value}
      </span>
      <span className="font-[var(--font-pixel)] text-[8px] uppercase tracking-wider text-[var(--color-text-muted)]">
        {label}
      </span>
    </div>
  );
}
