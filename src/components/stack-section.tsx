import { SectionLabel } from "./section-label";

const groups = [
  { label: "Languages & Querying", tags: ["SQL", "Python", "R"] },
  { label: "Data Engineering", tags: ["dbt", "Snowflake", "MySQL", "ETL Pipelines"] },
  {
    label: "AI & ML",
    tags: ["LLM Integration", "Prompt Engineering", "Embedding Models", "A/B Testing", "Causal Inference"],
  },
  {
    label: "Experimentation",
    tags: ["Power Analysis", "Diff-in-Diff", "PSM", "Bootstrapping", "Permutation Testing", "Regression Adjustment"],
  },
  { label: "Analytics & Viz", tags: ["Self-Serve Dashboards", "Executive Reporting", "Data Visualization"] },
];

export function StackSection() {
  return (
    <section id="stack" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>tech stack</SectionLabel>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Tools of the trade</h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.label}>
              <div className="font-mono text-xs text-muted">{group.label}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-bg2 px-3 py-1 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
