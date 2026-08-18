import Link from "next/link";
import type { CaseStudy } from "@/lib/types";
import { accentClasses } from "@/lib/accent";

export function CaseStudyHeader({ study }: { study: CaseStudy }) {
  const accent = accentClasses[study.accent];

  return (
    <header className="border-b border-line py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Link href="/#impact" className="font-mono text-xs text-dim hover:text-fg">
          ← Back to all work
        </Link>

        <div className={`mt-6 font-mono text-xs ${accent.text}`}>{study.company}</div>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">{study.productName}</h1>
        <p className="mt-4 text-lg text-muted">{study.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-dim">
          <span>{study.role}</span>
          <span>{study.period}</span>
          <span>{study.location}</span>
        </div>

        <a
          href={study.productUrl}
          target="_blank"
          rel="noreferrer"
          className={`mt-6 inline-flex items-center gap-1 rounded-full border px-4 py-1.5 text-sm ${accent.border} ${accent.text}`}
        >
          View product ↗
        </a>
      </div>
    </header>
  );
}
