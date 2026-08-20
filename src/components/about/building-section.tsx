import Link from "next/link";

const building = [
  {
    tag: "capstone",
    title: "Master Key System",
    body: "A self-improvement course digitized from Charles F. Haanel's 1919 classic, with goal-personalized exercises and an AI-generated 90-day action plan.",
    href: "/work/capstone",
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
        <div className="mt-6 grid gap-5">
          {building.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="max-w-md rounded-xl border border-line bg-bg2 p-6 transition hover:border-amber/40"
            >
              <div className="font-mono text-xs text-dim">{item.tag}</div>
              <h3 className="mt-2 font-display font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
              <div className="mt-3 font-mono text-xs text-amber">Read the case study →</div>
            </Link>
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
