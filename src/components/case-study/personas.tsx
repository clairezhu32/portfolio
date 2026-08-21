import type { CaseStudy } from "@/lib/types";
import { accentClasses } from "@/lib/accent";

export function CaseStudyPersonas({ study }: { study: CaseStudy }) {
  if (!study.personas || study.personas.length === 0) return null;
  const accent = accentClasses[study.accent];

  return (
    <div>
      <h2 className={`font-mono text-xs tracking-wider ${accent.text}`}>Personas</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {study.personas.map((persona) => (
          <div key={persona.name} className="overflow-hidden rounded-xl border border-line">
            <div className="flex items-center justify-between bg-bg2 px-5 py-3">
              <span className="font-display font-semibold">{persona.name}</span>
              <span className={`font-mono text-xs ${accent.text}`}>{persona.role}</span>
            </div>
            <div className="space-y-4 p-5">
              <p className="text-sm text-muted">{persona.bio}</p>
              <div>
                <div className="font-mono text-xs text-dim">Goals</div>
                <ul className="mt-2 space-y-1">
                  {persona.goals.map((goal) => (
                    <li key={goal} className="text-sm text-muted">
                      • {goal}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-mono text-xs text-dim">Frustrations</div>
                <ul className="mt-2 space-y-1">
                  {persona.frustrations.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-mono text-xs text-dim">Discovery</div>
                <p className="mt-2 text-sm text-muted">{persona.discovery}</p>
              </div>
              <div>
                <div className="font-mono text-xs text-dim">Usage</div>
                <p className="mt-2 text-sm text-muted">{persona.usage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
