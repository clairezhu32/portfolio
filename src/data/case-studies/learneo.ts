import type { CaseStudy } from "@/lib/types";

export const learneo: CaseStudy = {
  slug: "learneo",
  company: "Learneo",
  productName: "Course Hero",
  productUrl: "https://www.coursehero.com/plans/",
  image: "/case-studies/learneo.jpg",
  role: "Analytics Manager",
  period: "July 2020 – March 2023",
  location: "Redwood City, CA",
  tagline: "Scaling a data science team 2 → 10 and rebuilding the semantic matching engine behind Course Hero",
  problem:
    "Course Hero's system for matching students to study resources was underperforming — serving hundreds of thousands of students but not surfacing the right materials consistently, which put both engagement and revenue at risk.",
  users:
    "Students searching for course-specific study materials were the most directly affected: when the matching system surfaced irrelevant or low-quality documents, they either gave up or fell back to generic search, undermining the core value of the product. It also affected the content team, who had built out large libraries of study resources that weren't being surfaced effectively.",
  optionsConsidered:
    "The faster options were incremental — re-ranking existing results with better relevance signals, or adding manual curation and tagging to patch the worst mismatches. Both would have shipped sooner, but I judged they'd only mask the underlying problem: the semantic matching logic itself wasn't understanding what a query was really asking for, so no amount of re-ranking or manual tagging would fix mismatches at the root.",
  decision:
    "I decided to rebuild the semantic matching system rather than patch the existing one, judging that the underlying matching logic — not surface-level ranking tweaks — was the ceiling on quality. The tradeoff was real: a rebuild took meaningfully longer than a patch, required rebuilding stakeholder trust after passing on a quick fix, and meant temporarily diverting data science headcount from other growth initiatives while I scaled the team to support it.",
  execution:
    "I diagnosed the failure modes in the existing system and led the rebuild, scaling the data science team from 2 to 10 to support it and the broader analytics agenda — UX, market recommendations, marketplace optimization, and growth. I also put A/B testing standards in place so the team's experiment results could be trusted across the org, and worked closely with engineering on what the rebuilt matching system needed to support at scale.",
  outcome:
    "Match accuracy improved ~10% and revenue lifted ~3%. The analytics org I built scaled from 2 to 10 people and became the source of truth product and engineering leaned on for roadmap decisions.",
  reflection:
    "I'd bring engineering into the rebuild's scoping conversation earlier. We lost time realigning on technical feasibility after the initial plan was already set — a tighter early partnership would have avoided that.",
  metrics: [
    { label: "Team scaled 2 → 10", highlight: true },
    { label: "+10% match accuracy" },
    { label: "+3% revenue" },
  ],
  evidenceChart: {
    title: "Better matching translated into revenue",
    description: "The rebuild improved the share of student requests matched to relevant resources and produced a measurable business result.",
    type: "comparison",
    max: 60,
    data: [
      { label: "Resource match rate", baseline: 50, baselineDisplay: "50%", value: 55, display: "55% · 10% relative lift" },
    ],
    note: "The matching gain was accompanied by an approximately 3% revenue uplift. Team capacity scaled from 2 to 10 during the broader analytics transformation.",
  },
  journey: [
    { label: "Search", description: "Student searches for course-specific materials or asks a question." },
    { label: "Discover", description: "Sees study documents shared by students at their own school." },
    { label: "Get Unstuck", description: "Uses Ask AI or an expert tutor for step-by-step help." },
    { label: "Go Deeper", description: "Pulls textbook solutions and literature guides for related coursework." },
    { label: "Upgrade", description: "Subscribes to Premier or Premier Plus for unlimited access." },
  ],
  accent: "amber",
};
