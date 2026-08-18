const stats = [
  { number: "10+", desc: "Years across data science, experimentation, and product strategy" },
  { number: "~50%", desc: "Lower-funnel loan conversion lift at Upstart", accent: "text-amber" },
  { number: "~30%", desc: "Revenue increase on a Meta SMB ads launch", accent: "text-blue" },
  { number: "2→10", desc: "Data science team scaled and led at Learneo", accent: "text-green" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 inline-block rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
              Available for the right opportunity
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Claire <span className="text-dim">turns</span> data
              <br />
              into <span className="text-amber">products.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted">
              <strong className="text-fg">Staff Data Scientist → Product Manager</strong> — 10+
              years bridging analytics, experimentation, and product strategy across ads,
              fintech, marketplace, and consumer tech.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Ex-Meta", "Ex-Uber", "Ex-Upstart", "Ex-Zynga"].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                >
                  {pill}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#impact"
                className="rounded-full bg-amber px-6 py-3 font-medium text-bg transition hover:bg-amber2"
              >
                View my impact ↓
              </a>
              <a
                href="#connect"
                className="rounded-full border border-line px-6 py-3 font-medium transition hover:border-muted"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.desc}
                className="rounded-xl border border-line bg-bg2 p-5"
              >
                <div className={`font-display text-3xl font-bold ${stat.accent ?? "text-fg"}`}>
                  {stat.number}
                </div>
                <div className="mt-2 text-sm text-muted">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
