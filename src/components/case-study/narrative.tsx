import type { CaseStudy } from "@/lib/types";
import { accentClasses } from "@/lib/accent";

const steps: { key: keyof CaseStudy; label: string }[] = [
  { key: "problem", label: "The Problem" },
  { key: "users", label: "Who It Affected" },
  { key: "optionsConsidered", label: "Options Considered" },
  { key: "decision", label: "The Decision & Tradeoffs" },
  { key: "execution", label: "How I Drove It" },
  { key: "outcome", label: "The Outcome" },
  { key: "reflection", label: "Reflection" },
];

export function CaseStudyNarrative({ study }: { study: CaseStudy }) {
  const accent = accentClasses[study.accent];
  const visibleSteps = steps.filter((step) => study[step.key]);

  return (
    <div className="space-y-10">
      {visibleSteps.map((step) => (
        <div key={step.key}>
          <h2 className={`font-mono text-xs tracking-wider ${accent.text}`}>{step.label}</h2>
          <p className="mt-3 text-lg leading-relaxed text-fg">{study[step.key] as string}</p>
        </div>
      ))}
    </div>
  );
}
