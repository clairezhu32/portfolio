import type { CaseStudy } from "@/lib/types";
import { accentClasses } from "@/lib/accent";

export function CaseStudyHighlights({ study }: { study: CaseStudy }) {
  const accent = accentClasses[study.accent];

  return (
    <ul className="space-y-4">
      {study.highlights.map((point) => (
        <li key={point} className="flex gap-3">
          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
          <span className="text-muted">{point}</span>
        </li>
      ))}
    </ul>
  );
}
