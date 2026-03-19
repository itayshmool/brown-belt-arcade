import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import { CategoryBadge } from "@/components/CategoryBadge";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const product = products.find((p) => p.slug === slug);
    if (!product) return { title: "Not Found" };
    return {
      title: `${product.name} | Brown Belt Arcade`,
      description: product.description,
    };
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen">
      {/* Nav breadcrumb */}
      <nav className="border-b-2 border-[var(--color-border)] px-6 py-3">
        <div className="mx-auto flex max-w-4xl items-center gap-2 font-[var(--font-pixel)] text-[10px]">
          <Link
            href="/"
            className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-pink)]"
          >
            &#9664; DOJO
          </Link>
          <span className="text-[var(--color-border)]">/</span>
          <span className="text-[var(--color-gold)]">{product.name}</span>
        </div>
      </nav>

      {/* Header */}
      <section className="border-b-2 border-[var(--color-border)] px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <CategoryBadge category={product.category} />
            <span className="font-[var(--font-pixel)] text-[8px] text-[var(--color-text-muted)]">
              {product.platform}
            </span>
          </div>

          <h1 className="mb-4 font-[var(--font-pixel)] text-2xl leading-relaxed text-[var(--color-gold)] sm:text-3xl">
            {product.name}
          </h1>

          <p className="mb-6 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)]">
            {product.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {/* Owners */}
            <div className="flex items-center gap-3">
              {product.owners.map((owner) => (
                <a
                  key={owner.github}
                  href={`https://github.com/${owner.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-[var(--font-pixel)] text-[9px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-cyan)]"
                >
                  <img
                    src={`${owner.avatar}?s=80`}
                    alt={owner.name}
                    width={28}
                    height={28}
                    className="rounded-sm border border-[var(--color-border)]"
                  />
                  {owner.name}
                </a>
              ))}
            </div>

            {/* Action buttons */}
            {product.url && (
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded border border-[var(--color-pink)]/40 bg-[var(--color-pink)]/10 px-4 py-2 font-[var(--font-pixel)] text-[9px] uppercase text-[var(--color-pink)] transition-all hover:bg-[var(--color-pink)]/20 hover:shadow-[0_0_10px_rgba(255,77,141,0.2)]"
              >
                &#9654; Open App
              </a>
            )}
            {product.repoPublic && (
              <a
                href={`https://github.com/${product.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded border border-[var(--color-border)] px-4 py-2 font-[var(--font-pixel)] text-[9px] uppercase text-[var(--color-text-muted)] transition-all hover:border-[var(--color-cyan)]/40 hover:text-[var(--color-cyan)]"
              >
                ◆ GitHub
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid gap-10">
          {/* What It Is */}
          <Section title="何 What It Is" color="var(--color-cyan)">
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              {product.whatItIs}
            </p>
          </Section>

          {/* The Problem */}
          <Section title="問 The Problem" color="var(--color-pink)">
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              {product.problem}
            </p>
          </Section>

          {/* Key Features */}
          <Section title="技 Key Features" color="var(--color-green)">
            <div className="grid gap-2 sm:grid-cols-2">
              {product.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded border border-[var(--color-border)] bg-[var(--color-bg-card)] p-3 transition-colors hover:border-[var(--color-green)]/30"
                >
                  <span className="mt-0.5 font-[var(--font-pixel)] text-[10px] text-[var(--color-green)]">
                    &#9654;
                  </span>
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          {/* Tech Stack */}
          <Section title="武 Tech Stack" color="var(--color-purple)">
            <div className="flex flex-wrap gap-2">
              {product.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-[var(--color-purple)]/30 bg-[var(--color-purple)]/10 px-3 py-1.5 font-[var(--font-pixel)] text-[9px] text-[var(--color-purple)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          {/* How to Use */}
          <Section title="道 How to Use" color="var(--color-gold)">
            <pre className="overflow-x-auto rounded border-2 border-[var(--color-gold)]/20 bg-[var(--color-bg-card)] p-5 text-sm leading-relaxed text-[var(--color-gold)]">
              <code>{product.howToUse}</code>
            </pre>
          </Section>
        </div>

        {/* Back */}
        <div className="mt-16 border-t-2 border-[var(--color-border)] pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-[var(--font-pixel)] text-[10px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-pink)]"
          >
            &#9664; Back to Dojo
          </Link>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="font-[var(--font-pixel)] text-[10px]" style={{ color }}>
          ◆
        </span>
        <h2
          className="font-[var(--font-pixel)] text-xs uppercase tracking-widest"
          style={{ color }}
        >
          {title}
        </h2>
        <div className="flex-1 border-t border-dashed border-[var(--color-border)]" />
      </div>
      {children}
    </div>
  );
}
