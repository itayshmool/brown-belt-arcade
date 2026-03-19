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
          className={`border-2 px-3 py-1.5 font-[var(--font-pixel)] text-[9px] uppercase tracking-wider transition-all ${
            activeCategory === null
              ? "border-[var(--color-bg-dark)] bg-[var(--color-bg-dark)] text-white"
              : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-bg-dark)] hover:text-[var(--color-text)]"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() =>
              onCategoryChange(activeCategory === cat ? null : cat)
            }
            className={`border-2 px-3 py-1.5 font-[var(--font-pixel)] text-[9px] uppercase tracking-wider transition-all ${
              activeCategory === cat
                ? "border-[var(--color-bg-dark)] bg-[var(--color-bg-dark)] text-white"
                : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-bg-dark)] hover:text-[var(--color-text)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 font-[var(--font-pixel)] text-[10px] text-[var(--color-red)]">
          &#9654;
        </span>
        <input
          type="text"
          placeholder="SEARCH..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full border-2 border-[var(--color-border)] bg-white py-2 pl-8 pr-4 font-[var(--font-pixel)] text-[9px] text-[var(--color-text)] placeholder-[var(--color-text-muted)] outline-none transition-all focus:border-[var(--color-bg-dark)] sm:w-56"
        />
      </div>
    </div>
  );
}
