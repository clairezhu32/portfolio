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
  overview:
    "Course Hero, Learneo's flagship study platform, matches students with course-specific study resources, AI-assisted answers, and expert tutors. I built and led the data science team behind the product and growth analytics that powered it.",
  highlights: [
    "Built and led a high-performing data science team, scaling from 2 to 10 members, delivering insights across UX, market recommendations, marketplace optimization, user engagement, and growth analytics.",
    "Diagnosed and rebuilt Course Hero's semantic matching system — the engine connecting students to the right study resources — serving hundreds of thousands of students; the rebuild increased match accuracy by ~10% and lifted revenue ~3%.",
    "Established robust A/B testing standards and statistical rigor, raising experiment reliability and decision-making confidence across the organization.",
    "Directed analytics strategy and dashboards, surfacing key business drivers that shaped the product roadmap and growth initiatives.",
  ],
  metrics: [
    { label: "Team scaled 2 → 10", highlight: true },
    { label: "+10% match accuracy" },
    { label: "+3% revenue" },
  ],
  accent: "amber",
};
