import type { CaseStudy } from "@/lib/types";

export const uber: CaseStudy = {
  slug: "uber",
  company: "Uber",
  productName: "Uber Ads",
  productUrl: "https://www.uber.com/us/en/advertising/",
  role: "Senior Product Analyst",
  period: "March 2019 – June 2020",
  location: "San Francisco, CA",
  tagline: "From an opportunity-sizing memo to a company-wide experimentation standard",
  overview:
    "At Uber, I worked on the measurement backbone behind Uber's advertising and marketplace products — including the earliest opportunity-sizing work for what became Uber Ads. That work started as a memo presented to CEO Dara Khosrowshahi and the first A/B test validating the ads concept; it grew into one of Uber's major product lines.",
  highlights: [
    "Led the initial opportunity sizing for Uber Ads and presented findings to CEO Dara Khosrowshahi; designed the first A/B experiment validating the ads concept.",
    "Conducted advanced measurement and causal analysis for Uber Ads in a marketplace setting, designing experiments with standardized power analyses.",
    "Led the company-wide A/B testing review task force, establishing consistent experimentation standards adopted across all Uber product teams — not just ads.",
    "Built KPI scorecards and data-sharing systems adopted by product and engineering leadership for real-time business monitoring.",
    "Managed a team of 2 analysts delivering dashboards, reports, and tracking verification across multiple concurrent initiatives.",
  ],
  metrics: [
    { label: "Experimentation standard adopted org-wide", highlight: true },
    { label: "Opportunity-sizing work presented to CEO" },
    { label: "Became one of Uber's major product lines" },
  ],
  accent: "green",
};
