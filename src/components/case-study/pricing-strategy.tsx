import type { CaseStudy } from "@/lib/types";
import { accentClasses } from "@/lib/accent";

export function CaseStudyPricingStrategy({ study }: { study: CaseStudy }) {
  if (!study.pricingStrategy) return null;
  const accent = accentClasses[study.accent];

  return (
    <div>
      <h2 className={`font-mono text-xs tracking-wider ${accent.text}`}>Pricing Strategy</h2>
      <p className="mt-3 text-lg leading-relaxed text-fg">{study.pricingStrategy}</p>
    </div>
  );
}
