const building = [
  {
    tag: "active project",
    title: "Clawbot Cooking",
    body: "Using Clawbot and Claude Code to build a suite of AI-powered products and documenting the build process — architecture decisions, prompts, and code — openly on GitHub.",
  },
  {
    tag: "capstone",
    title: "AI PM Bootcamp Capstone",
    body: "A product spec tackling an AI-driven problem, combining data science depth with product management frameworks.",
  },
];

const learning = [
  "AI Product Management (PM Bootcamp)",
  "Data modeling for analytics engineering (dbt best practices, dimensional modeling)",
  "Building AI-powered applications with GPT-4o and Supabase",
];

export function AboutBuildingSection() {
  return (
    <>
      <div>
        <h2 className="font-mono text-xs tracking-wider text-amber/80">currently building</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {building.map((item) => (
            <div key={item.title} className="rounded-xl border border-line bg-bg2 p-6">
              <div className="font-mono text-xs text-dim">{item.tag}</div>
              <h3 className="mt-2 font-display font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-mono text-xs tracking-wider text-amber/80">currently learning</h2>
        <ul className="mt-6 space-y-3">
          {learning.map((item) => (
            <li key={item} className="flex gap-3 text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dim" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
