import type { CaseStudy } from "@/lib/types";
import { accentClasses } from "@/lib/accent";

export function CaseStudyRisks({ study }: { study: CaseStudy }) {
  if (!study.risks || study.risks.length === 0) return null;
  const accent = accentClasses[study.accent];

  return (
    <div>
      <h2 className={`font-mono text-xs tracking-wider ${accent.text}`}>
        Risks & Remediations
      </h2>
      <div className="mt-6 space-y-4">
        {study.risks.map((risk, i) => (
          <div key={risk.type} className="flex gap-4">
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold ${accent.bg} ${accent.text}`}
            >
              {i + 1}
            </span>
            <div>
              <div className="font-display text-sm font-semibold">{risk.type}</div>
              <p className="mt-1 text-sm text-muted">{risk.description}</p>
              <p className="mt-1 text-sm text-fg">
                <span className="font-mono text-xs text-dim">Mitigation: </span>
                {risk.remediation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
