"use client";

import type { Category } from "@/data/products";

const categories: Category[] = [
  "CLI Tool",
  "Web App",
  "Desktop App",
  "IDE Extension",
  "AI Skill",
];

export function FilterBar({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: {
  activeCategory: Category | null;
  onCategoryChange: (c: Category | null) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange(null)}
          className={`rounded border px-3 py-1.5 font-[var(--font-pixel)] text-[10px] uppercase tracking-wider transition-all ${
            activeCategory === null
              ? "border-[var(--color-pink)] bg-[var(--color-pink)]/20 text-[var(--color-pink)] shadow-[0_0_10px_rgba(255,77,141,0.3)]"
              : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-pink)]/50 hover:text-[var(--color-text)]"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(activeCategory === cat ? null : cat)}
            className={`rounded border px-3 py-1.5 font-[var(--font-pixel)] text-[10px] uppercase tracking-wider transition-all ${
              activeCategory === cat
                ? "border-[var(--color-pink)] bg-[var(--color-pink)]/20 text-[var(--color-pink)] shadow-[0_0_10px_rgba(255,77,141,0.3)]"
                : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-pink)]/50 hover:text-[var(--color-text)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 font-[var(--font-pixel)] text-[10px] text-[var(--color-pink)]">
          &#9654;
        </span>
        <input
          type="text"
          placeholder="SEARCH..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded border border-[var(--color-border)] bg-[var(--color-bg-card)] py-2 pl-8 pr-4 font-[var(--font-pixel)] text-[10px] text-[var(--color-text)] placeholder-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-cyan)] focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] sm:w-56"
        />
      </div>
    </div>
  );
}
