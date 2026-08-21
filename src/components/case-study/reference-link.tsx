import type { CaseStudy } from "@/lib/types";
import { accentClasses } from "@/lib/accent";

export function CaseStudyReference({ study }: { study: CaseStudy }) {
  if (!study.reference) return null;
  const accent = accentClasses[study.accent];

  return (
    <div className={`rounded-xl border ${accent.border} ${accent.bg} p-5`}>
      <a
        href={study.reference.href}
        target="_blank"
        rel="noreferrer"
        className={`font-mono text-sm font-semibold ${accent.text} hover:underline`}
      >
        {study.reference.label} ↗
      </a>
      <p className="mt-2 text-sm text-muted">{study.reference.caption}</p>
    </div>
  );
}
