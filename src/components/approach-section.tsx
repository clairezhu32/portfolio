import { SectionLabel } from "./section-label";

const approaches = [
  {
    icon: "🗺️",
    title: "Product Strategy & Roadmapping",
    body: "Turning experiment results and funnel data into prioritized roadmaps — sequenced by business impact, sold to cross-functional stakeholders.",
  },
  {
    icon: "🧪",
    title: "Experimentation & Causal Inference",
    body: "Designing rigorous A/B tests, quasi-experiments, and causal inference frameworks that make product decisions defensible, not just directional.",
  },
  {
    icon: "🤝",
    title: "Cross-Functional Leadership",
    body: "Leading task forces and analyst teams that align product, engineering, and leadership around a single source of truth.",
  },
  {
    icon: "⚙️",
    title: "0-to-1 Analytics Infrastructure",
    body: "Building the dashboards, scorecards, and self-serve tools that let a product organization move without waiting on an analyst.",
  },
  {
    icon: "📡",
    title: "Growth & Monetization Measurement",
    body: "Deep expertise in funnel, ads, and marketplace measurement — from opportunity sizing through post-launch performance tracking.",
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>approach</SectionLabel>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          What I do — and how I do it
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          My edge is the full arc — from raw data and causal inference to product strategy,
          cross-functional execution, and measurable business impact.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {approaches.map((item) => (
            <div key={item.title} className="rounded-xl border border-line bg-bg2 p-6">
              <span className="text-2xl">{item.icon}</span>
              <h3 className="mt-4 font-display font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
