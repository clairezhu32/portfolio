import type { CaseStudy } from "@/lib/types";
import { accentClasses } from "@/lib/accent";

const steps: { key: keyof CaseStudy; label: string }[] = [
  { key: "problem", label: "The Problem" },
  { key: "decision", label: "The Decision" },
  { key: "execution", label: "How I Drove It" },
  { key: "outcome", label: "The Outcome" },
];

export function CaseStudyNarrative({ study }: { study: CaseStudy }) {
  const accent = accentClasses[study.accent];

  return (
    <div className="space-y-10">
      {steps.map((step) => (
        <div key={step.key}>
          <h2 className={`font-mono text-xs tracking-wider ${accent.text}`}>{step.label}</h2>
          <p className="mt-3 text-lg leading-relaxed text-fg">{study[step.key] as string}</p>
        </div>
      ))}
    </div>
  );
}
