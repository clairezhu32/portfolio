import type { CaseStudy, ChartDatum } from "@/lib/types";
import { accentClasses } from "@/lib/accent";

function width(value: number, max: number) {
  return `${Math.max(3, Math.min(100, (value / max) * 100))}%`;
}

function ComparisonRow({ item, max, accentText, accentFill }: { item: ChartDatum; max: number; accentText: string; accentFill: string }) {
  return (
    <div className="border-t border-line py-5 first:border-t-0 first:pt-0 last:pb-0">
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <span className="text-sm font-medium text-fg">{item.label}</span>
        <span className={`font-mono text-sm font-semibold ${accentText}`}>{item.display}</span>
      </div>
      <div className="space-y-2">
        {item.baseline !== undefined && (
          <div className="grid grid-cols-[4.25rem_1fr] items-center gap-3">
            <span className="font-mono text-xs text-muted">Before</span>
            <div className="relative h-7 overflow-hidden rounded-sm bg-bg3">
              <div className="h-full bg-dim/55" style={{ width: width(item.baseline, max) }} />
              <span className="absolute inset-y-0 left-3 flex items-center font-mono text-xs text-fg">
                {item.baselineDisplay}
              </span>
            </div>
          </div>
        )}
        <div className="grid grid-cols-[4.25rem_1fr] items-center gap-3">
          <span className="font-mono text-xs text-muted">After</span>
          <div className="relative h-7 overflow-hidden rounded-sm bg-bg3">
            <div className={`h-full ${accentFill}`} style={{ width: width(item.value, max) }} />
            <span className="absolute inset-y-0 left-3 flex items-center font-mono text-xs font-semibold text-fg">
              {item.display}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CaseStudyEvidenceChart({ study }: { study: CaseStudy }) {
  const chart = study.evidenceChart;
  if (!chart) return null;
  const accent = accentClasses[study.accent];

  return (
    <section aria-labelledby="measurement-evidence-title" className="mt-12">
      <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className={`font-mono text-xs tracking-wider ${accent.text}`}>MEASUREMENT EVIDENCE</p>
          <h2 id="measurement-evidence-title" className="mt-2 font-display text-2xl font-semibold tracking-tight text-fg">
            {chart.title}
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted">{chart.description}</p>
      </div>

      <div className="rounded-xl border border-line bg-bg2 p-5 sm:p-7">
        {chart.type === "comparison" && (
          <div>
            {chart.data.map((item) => (
              <ComparisonRow key={item.label} item={item} max={chart.max} accentText={accent.text} accentFill={accent.dot} />
            ))}
          </div>
        )}

        {chart.type === "bars" && (
          <div className="space-y-5">
            {chart.data.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-baseline justify-between gap-4 text-sm">
                  <span className="font-medium text-fg">{item.label}</span>
                  <span className={`font-mono font-semibold ${accent.text}`}>{item.display}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-sm bg-bg3">
                  <div className={`h-full ${accent.dot}`} style={{ width: width(item.value, chart.max) }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {chart.type === "funnel" && (
          <div className="space-y-2">
            {chart.data.map((item, index) => (
              <div key={item.label} className="grid grid-cols-[6.5rem_1fr_3rem] items-center gap-3 sm:grid-cols-[8rem_1fr_3rem]">
                <span className="text-right text-xs text-muted">{item.label}</span>
                <div className="flex h-9 justify-center">
                  <div
                    className={`flex h-full items-center justify-center rounded-sm ${index === chart.data.length - 1 ? accent.dot : "bg-bg3"}`}
                    style={{ width: width(item.value, chart.max) }}
                  >
                    <span className="font-mono text-xs font-semibold text-fg">{item.display}</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-dim">{index === 0 ? "Start" : `−${chart.data[index - 1].value - item.value}pp`}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {chart.note && <p className="mt-3 text-xs leading-relaxed text-muted">{chart.note}</p>}
    </section>
  );
}
