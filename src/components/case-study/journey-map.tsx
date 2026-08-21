import { Fragment } from "react";
import type { CaseStudy } from "@/lib/types";
import { accentClasses } from "@/lib/accent";

export function CaseStudyJourney({ study }: { study: CaseStudy }) {
  const accent = accentClasses[study.accent];
  if (!study.journey || study.journey.length === 0) return null;

  return (
    <div>
      <h2 className={`font-mono text-xs tracking-wider ${accent.text}`}>Customer Journey</h2>
      <div className="mt-6 flex flex-wrap items-start gap-x-3 gap-y-8">
        {study.journey.map((stage, i) => (
          <Fragment key={stage.label}>
            <div className="w-36">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full font-mono text-xs font-bold ${accent.bg} ${accent.text}`}
              >
                {i + 1}
              </span>
              <h3 className="mt-3 font-display text-sm font-semibold">{stage.label}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">{stage.description}</p>
            </div>
            {i < study.journey!.length - 1 && (
              <span className="mt-2 hidden text-dim sm:block">→</span>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
