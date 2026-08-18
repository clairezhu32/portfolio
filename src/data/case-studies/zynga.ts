import type { CaseStudy } from "@/lib/types";

export const zynga: CaseStudy = {
  slug: "zynga",
  company: "Zynga",
  productName: "FarmVille 2: Tropic Escape",
  productUrl: "https://www.zynga.com/games/farmville-tropic-escape/",
  role: "Senior Data Analyst – Data Analyst",
  period: "March 2015 – June 2017",
  location: "San Francisco, CA",
  tagline: "Turning funnel analysis into a 40% jump in ads match rate",
  overview:
    "FarmVille 2: Tropic Escape is Zynga's tropical-island farming sim on iOS, Android, and Facebook. I worked on the analytics and instrumentation behind soft-launches and live-ops, running the A/B tests that shaped how games in this portfolio monetized and retained players.",
  highlights: [
    "Ran and analyzed extensive A/B tests on mobile and web games to optimize player experience and lifetime value.",
    "Verified logging and instrumentation for major soft-launches, and created daily scorecards that became the template for other Zynga game launches.",
    "Investigated ad-tech flow and game engagement issues, increasing ads match rate by 40% through funnel analysis and identifying user-decay segments tied to tech/performance issues.",
  ],
  metrics: [
    { label: "+40% ads match rate", highlight: true },
    { label: "Scorecard template adopted for other launches" },
  ],
  accent: "blue",
};
