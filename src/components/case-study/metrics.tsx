import type { CaseStudy } from "@/lib/types";
import { accentClasses } from "@/lib/accent";

export function CaseStudyMetrics({ study }: { study: CaseStudy }) {
  const accent = accentClasses[study.accent];

  return (
    <div className="flex flex-wrap gap-3">
      {study.metrics.map((metric) => (
        <span
          key={metric.label}
          className={`rounded-full px-4 py-2 font-mono text-sm ${
            metric.highlight ? `${accent.bg} ${accent.text}` : "border border-line text-muted"
          }`}
        >
          {metric.label}
        </span>
      ))}
    </div>
  );
}
