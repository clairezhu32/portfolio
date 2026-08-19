import type { CaseStudy } from "@/lib/types";

export const uber: CaseStudy = {
  slug: "uber",
  company: "Uber",
  productName: "Uber Ads",
  productUrl: "https://www.uber.com/us/en/advertising/",
  image: "/case-studies/uber.jpg",
  role: "Senior Product Analyst",
  period: "March 2019 – June 2020",
  location: "San Francisco, CA",
  tagline: "From an opportunity-sizing memo to a company-wide experimentation standard",
  problem:
    "Uber didn't have an advertising product, and it wasn't obvious the opportunity was big enough — or safe enough for the marketplace — to justify building one.",
  decision:
    "I led the opportunity-sizing analysis and made the case directly to CEO Dara Khosrowshahi that ads were worth testing. Rather than greenlighting a full build on sizing alone, I pushed to validate the concept with a live A/B experiment first.",
  execution:
    "I designed the first A/B experiment validating Uber Ads in a live marketplace setting, with standardized power analyses. As other teams began running inconsistent experiments off the back of that success, I led a company-wide task force to standardize A/B testing methodology, and built the KPI scorecards and data-sharing systems product and engineering leadership used for real-time monitoring — managing a team of 2 analysts delivering the dashboards and tracking behind these initiatives.",
  outcome:
    "Uber Ads became one of Uber's major product lines, and the experimentation standard I led was adopted company-wide — not just within ads.",
  metrics: [
    { label: "Experimentation standard adopted org-wide", highlight: true },
    { label: "Opportunity-sizing work presented to CEO" },
    { label: "Became one of Uber's major product lines" },
  ],
  accent: "green",
};
