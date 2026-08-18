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
  problem:
    "Titles in Zynga's portfolio were leaking engagement and ad revenue after soft-launch. The team suspected tech and performance issues but didn't have instrumentation solid enough to prove where players were actually dropping off.",
  decision:
    "I decided to verify and rebuild the logging and instrumentation before trusting any soft-launch data, rather than let the team optimize against numbers that might be broken — and to trace the ads match-rate problem back through the player funnel instead of treating it as a pure ad-tech issue.",
  execution:
    "I ran the A/B tests to optimize player experience and lifetime value, verified instrumentation for major soft-launches, and built the daily scorecards used to track them. From there, I used funnel analysis to identify user-decay segments tied to tech and performance issues that were dragging down ads match rate.",
  outcome:
    "Ads match rate increased 40%, and the scorecard framework I built became the template other Zynga game launches used going forward.",
  metrics: [
    { label: "+40% ads match rate", highlight: true },
    { label: "Scorecard template adopted for other launches" },
  ],
  accent: "blue",
};
