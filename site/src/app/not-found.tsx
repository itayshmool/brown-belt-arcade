import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4 font-[var(--font-pixel)] text-4xl text-[var(--color-pink)]">
        404
      </h1>
      <p className="mb-2 font-[var(--font-pixel)] text-sm text-[var(--color-gold)]">
        GAME OVER
      </p>
      <p className="mb-8 font-[var(--font-pixel)] text-[10px] text-[var(--color-text-muted)]">
        This page does not exist.
      </p>
      <Link
        href="/"
        className="rounded border border-[var(--color-pink)]/40 bg-[var(--color-pink)]/10 px-6 py-2 font-[var(--font-pixel)] text-[10px] uppercase text-[var(--color-pink)] transition-all hover:bg-[var(--color-pink)]/20"
      >
        &#9654; Continue?
      </Link>
    </main>
  );
}
