import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4 font-[var(--font-pixel)] text-5xl text-[var(--color-red)]">
        404
      </h1>
      <p className="mb-2 font-[var(--font-pixel)] text-sm text-[var(--color-text)]">
        GAME OVER
      </p>
      <p className="mb-8 font-[var(--font-pixel)] text-[9px] text-[var(--color-text-muted)]">
        This page does not exist.
      </p>
      <Link
        href="/"
        className="bg-[var(--color-red)] px-6 py-2.5 font-[var(--font-pixel)] text-[9px] uppercase text-white transition-all hover:shadow-[4px_4px_0_var(--color-yellow)]"
      >
        ▸ Continue?
      </Link>
    </main>
  );
}
