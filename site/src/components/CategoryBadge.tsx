import type { Category } from "@/data/products";

const styles: Record<Category, { bg: string; text: string; icon: string }> = {
  "CLI Tool": { bg: "bg-[var(--color-green)]/15 border-[var(--color-green)]/40", text: "text-[var(--color-green)]", icon: ">" },
  "Web App": { bg: "bg-[var(--color-cyan)]/15 border-[var(--color-cyan)]/40", text: "text-[var(--color-cyan)]", icon: "◆" },
  "Desktop App": { bg: "bg-[var(--color-purple)]/15 border-[var(--color-purple)]/40", text: "text-[var(--color-purple)]", icon: "■" },
  "IDE Extension": { bg: "bg-[var(--color-orange)]/15 border-[var(--color-orange)]/40", text: "text-[var(--color-orange)]", icon: "◎" },
  "AI Skill": { bg: "bg-[var(--color-pink)]/15 border-[var(--color-pink)]/40", text: "text-[var(--color-pink)]", icon: "★" },
};

export function CategoryBadge({ category }: { category: Category }) {
  const s = styles[category];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded border px-2 py-1 font-[var(--font-pixel)] text-[10px] uppercase tracking-wider ${s.bg} ${s.text}`}
    >
      <span>{s.icon}</span>
      {category}
    </span>
  );
}
