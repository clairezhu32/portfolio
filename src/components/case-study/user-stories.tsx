import type { CaseStudy } from "@/lib/types";
import { accentClasses } from "@/lib/accent";

export function CaseStudyUserStories({ study }: { study: CaseStudy }) {
  if (!study.userStories || study.userStories.length === 0) return null;
  const accent = accentClasses[study.accent];

  return (
    <div>
      <h2 className={`font-mono text-xs tracking-wider ${accent.text}`}>
        User Stories & Acceptance Criteria
      </h2>
      <div className="mt-6 space-y-4">
        {study.userStories.map((item) => (
          <div key={item.story} className="rounded-xl border border-line bg-bg2 p-5">
            <p className="text-sm text-fg">{item.story}</p>
            <p className="mt-2 font-mono text-xs text-muted">{item.acceptanceCriteria}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
