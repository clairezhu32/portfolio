import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import { accentClasses } from "@/lib/accent";

export function MoreWork({ currentSlug }: { currentSlug: string }) {
  const others = caseStudies.filter((study) => study.slug !== currentSlug);

  return (
    <section className="border-t border-line py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="font-mono text-xs text-dim">more work</div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {others.map((study) => {
            const accent = accentClasses[study.accent];
            return (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className={`rounded-xl border border-line bg-bg2 p-5 transition ${accent.hoverBorder}`}
              >
                <div className={`font-mono text-xs ${accent.text}`}>{study.company}</div>
                <div className="mt-1 font-display font-semibold">{study.productName}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
