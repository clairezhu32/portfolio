const approach = [
  {
    title: "AI Product Development",
    body: "Building AI-powered tools using LLMs, prompt engineering, and self-serve analytics infrastructure that puts data in non-technical hands.",
  },
  {
    title: "Experimentation & Causal Inference",
    body: "Designing rigorous A/B tests, quasi-experiments, and causal inference frameworks (diff-in-diff, propensity score matching, permutation testing) that make business decisions defensible.",
  },
  {
    title: "Data Engineering & Analytics Infrastructure",
    body: "Building dbt models, Snowflake pipelines, and automated dashboards that eliminate analyst dependency and scale data access across organizations.",
  },
  {
    title: "Product Strategy & Roadmapping",
    body: "Owning 0-to-1 analytics roadmaps across product, engineering, ML, and ops — sequenced by impact, executed cross-functionally.",
  },
  {
    title: "Ads Measurement",
    body: "Deep expertise in ads signal quality, attribution methodology, and experiment design for marketplace and SMB advertising platforms.",
  },
];

export function AboutApproachSection() {
  return (
    <div>
      <h2 className="font-mono text-xs tracking-wider text-amber/80">
        my approach & what i do
      </h2>
      <p className="mt-4 text-muted">
        I&apos;m a data scientist and AI PM who prioritizes using data to make the right
        decision.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {approach.map((item) => (
          <div key={item.title} className="rounded-xl border border-line bg-bg2 p-5">
            <h3 className="font-display text-sm font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
