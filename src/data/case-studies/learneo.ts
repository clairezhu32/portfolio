import type { CaseStudy } from "@/lib/types";

export const learneo: CaseStudy = {
  slug: "learneo",
  company: "Learneo",
  productName: "Course Hero",
  productUrl: "https://www.coursehero.com/plans/",
  role: "Analytics Manager",
  period: "July 2020 – March 2023",
  location: "Redwood City, CA",
  tagline: "Scaling a data science team 2 → 10 and rebuilding the matching engine behind Course Hero",
  problem:
    "Course Hero's system for matching students to study resources was underperforming — serving hundreds of thousands of students but not surfacing the right materials consistently, which put both engagement and revenue at risk.",
  decision:
    "I decided to rebuild the semantic matching system rather than patch the existing one, judging that the underlying matching logic — not surface-level ranking tweaks — was the ceiling on quality.",
  execution:
    "I diagnosed the failure modes in the existing system and led the rebuild, scaling the data science team from 2 to 10 to support it and the broader analytics agenda — UX, market recommendations, marketplace optimization, and growth. I also put A/B testing standards in place so the team's experiment results could be trusted across the org.",
  outcome:
    "Match accuracy improved ~10% and revenue lifted ~3%. The analytics org I built scaled from 2 to 10 people and became the source of truth product and engineering leaned on for roadmap decisions.",
  metrics: [
    { label: "Team scaled 2 → 10", highlight: true },
    { label: "+10% match accuracy" },
    { label: "+3% revenue" },
  ],
  accent: "amber",
};
