import type { Category } from "@/data/products";

const styles: Record<Category, { bg: string; text: string; icon: string }> = {
  "CLI Tool": { bg: "bg-[var(--color-green)] text-white", text: "", icon: "▸" },
  "Web App": { bg: "bg-[var(--color-blue)] text-white", text: "", icon: "◆" },
  "Desktop App": { bg: "bg-[var(--color-purple)] text-white", text: "", icon: "■" },
  "IDE Extension": { bg: "bg-[var(--color-orange)] text-white", text: "", icon: "◎" },
  "AI Skill": { bg: "bg-[var(--color-red)] text-white", text: "", icon: "★" },
};

export function CategoryBadge({ category }: { category: Category }) {
  const s = styles[category];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-1 font-[var(--font-pixel)] text-[7px] uppercase tracking-wider ${s.bg}`}
    >
      <span>{s.icon}</span>
      {category}
    </span>
  );
}
