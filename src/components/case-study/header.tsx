import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/lib/types";
import { accentClasses } from "@/lib/accent";

export function CaseStudyHeader({ study }: { study: CaseStudy }) {
  const accent = accentClasses[study.accent];
  const meta = [study.role, study.period, study.location].filter(Boolean);

  return (
    <header className="border-b border-line py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Link href="/#impact" className="font-mono text-xs text-dim hover:text-fg">
          ← Back to all work
        </Link>

        <h1 className={`mt-6 font-display text-5xl font-bold sm:text-6xl ${accent.text}`}>
          {study.company}
        </h1>
        <p className="mt-2 font-mono text-sm text-muted">{study.productName}</p>
        <p className="mt-4 text-lg text-muted">{study.tagline}</p>

        {meta.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-dim">
            {meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}

        {study.productUrl && (
          <a
            href={study.productUrl}
            target="_blank"
            rel="noreferrer"
            className={`mt-6 inline-flex items-center gap-1 rounded-full border px-4 py-1.5 text-sm ${accent.border} ${accent.text}`}
          >
            View product ↗
          </a>
        )}
      </div>

      {study.image && (
        <div className="mx-auto mt-10 max-w-4xl px-6">
          <div className="overflow-hidden rounded-xl border border-line bg-bg2">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-dim/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-dim/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-dim/40" />
            </div>
            <div className="relative aspect-[1512/794] w-full">
              <Image
                src={study.image}
                alt={`Screenshot of ${study.productName}`}
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
