import type { CaseStudy, LeanCanvas } from "@/lib/types";
import { accentClasses } from "@/lib/accent";

type ListKey = Exclude<keyof LeanCanvas, "uniqueValueProp">;

const cells: { key: ListKey; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "unfairAdvantage", label: "Unfair Advantage" },
  { key: "customerSegments", label: "Customer Segments" },
  { key: "existingAlternatives", label: "Existing Alternatives" },
  { key: "keyMetrics", label: "Key Metrics" },
  { key: "channels", label: "Channels" },
  { key: "earlyAdopters", label: "Early Adopters" },
  { key: "costStructure", label: "Cost Structure" },
  { key: "revenueStreams", label: "Revenue Streams" },
];

export function CaseStudyLeanCanvas({ study }: { study: CaseStudy }) {
  if (!study.leanCanvas) return null;
  const accent = accentClasses[study.accent];
  const canvas = study.leanCanvas;

  return (
    <div>
      <h2 className={`font-mono text-xs tracking-wider ${accent.text}`}>Lean Canvas</h2>

      <div className={`mt-6 rounded-xl border ${accent.border} ${accent.bg} p-5`}>
        <div className="font-mono text-xs text-dim">Unique Value Proposition</div>
        <p className="mt-2 text-sm text-fg">{canvas.uniqueValueProp}</p>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cells.map((cell) => (
          <div key={cell.key} className="rounded-xl border border-line bg-bg2 p-4">
            <div className="font-mono text-xs text-dim">{cell.label}</div>
            <ul className="mt-2 space-y-1">
              {canvas[cell.key].map((item) => (
                <li key={item} className="text-sm text-muted">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
