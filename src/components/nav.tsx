import Link from "next/link";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display font-bold tracking-tight">
          Claire Zhu
        </Link>
        <div className="hidden gap-8 font-mono text-sm text-muted sm:flex">
          <Link href="/about" className="hover:text-fg">
            About
          </Link>
          <Link href="/#impact" className="hover:text-fg">
            Product Portfolio
          </Link>
          <Link href="/#stack" className="hover:text-fg">
            Stack
          </Link>
        </div>
        <Link
          href="/#connect"
          className="rounded-full border border-amber/40 px-4 py-1.5 text-sm text-amber transition hover:bg-amber/10"
        >
          Let&apos;s connect →
        </Link>
      </div>
    </nav>
  );
}
