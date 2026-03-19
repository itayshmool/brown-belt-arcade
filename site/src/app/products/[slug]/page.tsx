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
      {/* Nav */}
      <nav className="px-6 py-3" style={{ borderBottom: "3px solid var(--color-bg-dark)" }}>
        <div className="mx-auto flex max-w-4xl items-center gap-2 font-[var(--font-pixel)] text-[9px]">
          <Link
            href="/"
            className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-red)]"
          >
            ◀ DOJO
          </Link>
          <span className="text-[var(--color-border)]">/</span>
          <span className="text-[var(--color-text)]">{product.name}</span>
        </div>
      </nav>

      {/* Header */}
      <section className="relative px-6 py-12" style={{ borderBottom: "4px solid var(--color-bg-dark)" }}>
        <div className="absolute bottom-0 left-0 h-1 w-48 bg-[var(--color-red)]" />
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <CategoryBadge category={product.category} />
            <span className="font-[var(--font-pixel)] text-[7px] text-[var(--color-text-muted)]">
              {product.platform}
            </span>
          </div>

          <h1 className="mb-4 font-[var(--font-pixel)] text-xl leading-relaxed text-[var(--color-text)] sm:text-2xl">
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
                  className="flex items-center gap-2 font-[var(--font-pixel)] text-[8px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-red)]"
                >
                  <img
                    src={`${owner.avatar}?s=80`}
                    alt={owner.name}
                    width={28}
                    height={28}
                    style={{ border: "2px solid var(--color-bg-dark)" }}
                  />
                  {owner.name}
                </a>
              ))}
            </div>

            {product.url && (
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[var(--color-red)] px-4 py-2 font-[var(--font-pixel)] text-[8px] uppercase text-white transition-all hover:shadow-[4px_4px_0_var(--color-yellow)]"
              >
                ▸ Open App
              </a>
            )}
            {product.repoPublic && (
              <a
                href={`https://github.com/${product.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 font-[var(--font-pixel)] text-[8px] uppercase text-[var(--color-text-muted)] transition-all hover:text-[var(--color-text)]"
                style={{ border: "2px solid var(--color-bg-dark)" }}
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
          <Section title="何 What It Is" color="var(--color-blue)">
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              {product.whatItIs}
            </p>
          </Section>

          <Section title="問 The Problem" color="var(--color-red)">
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              {product.problem}
            </p>
          </Section>

          <Section title="技 Key Features" color="var(--color-green)">
            <div className="grid gap-2 sm:grid-cols-2">
              {product.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white p-3 transition-all hover:shadow-[3px_3px_0_var(--color-yellow)]"
                  style={{ border: "2px solid var(--color-bg-dark)" }}
                >
                  <span className="mt-0.5 font-[var(--font-pixel)] text-[9px] text-[var(--color-green)]">
                    ▸
                  </span>
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="武 Tech Stack" color="var(--color-purple)">
            <div className="flex flex-wrap gap-2">
              {product.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-[var(--color-bg-dark)] px-3 py-1.5 font-[var(--font-pixel)] text-[8px] text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          <Section title="道 How to Use" color="var(--color-orange)">
            <pre
              className="overflow-x-auto bg-[var(--color-bg-dark)] p-5 text-sm leading-relaxed text-[var(--color-yellow)]"
              style={{ border: "3px solid var(--color-bg-dark)" }}
            >
              <code>{product.howToUse}</code>
            </pre>
          </Section>
        </div>

        {/* Back */}
        <div className="mt-16 pt-8" style={{ borderTop: "3px solid var(--color-bg-dark)" }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-[var(--font-pixel)] text-[9px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-red)]"
          >
            ◀ Back to Dojo
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
          className="font-[var(--font-pixel)] text-[10px] uppercase tracking-widest"
          style={{ color }}
        >
          {title}
        </h2>
        <div className="flex-1" style={{ borderTop: "3px solid var(--color-bg-dark)" }} />
      </div>
      {children}
    </div>
  );
}
