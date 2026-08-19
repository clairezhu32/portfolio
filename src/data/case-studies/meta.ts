import type { CaseStudy } from "@/lib/types";

export const meta: CaseStudy = {
  slug: "meta",
  company: "Meta",
  productName: "Cross-Border Commerce (SMB Ads)",
  productUrl: "https://www.facebook.com/business/cross-border",
  image: "/case-studies/meta.jpg",
  role: "SMB Data Scientist",
  period: "June 2017 – December 2018",
  location: "Menlo Park, CA",
  tagline: "Proving a ~30% revenue lift for Meta's highest-spend advertisers",
  problem:
    "Meta was launching a new cross-border ads capability for its highest-spend SMB advertisers, and leadership needed to know if it was actually driving incremental revenue — not just correlated with growth from advertisers who were already spending more.",
  decision:
    "I decided a standard before/after comparison wasn't trustworthy given how skewed and volatile high-spend advertiser data is, so I pushed for a causal measurement framework — winsorization and regression adjustment, later propensity score matching — instead of the simpler approach the team had been using.",
  execution:
    "I designed and ran the experiment measurement for the launch, then standardized the method with propensity score matching so BI partner teams could reuse it globally, and built the dashboards and pipelines that surfaced real-time cross-border opportunities to SMB ads sales teams.",
  outcome:
    "The launch was validated with a ~30% revenue increase, and the measurement framework became the SMB team's standard playbook — scaled globally across BI partner teams.",
  metrics: [
    { label: "~30% revenue increase", highlight: true },
    { label: "Method scaled globally across BI partner teams" },
  ],
  accent: "blue",
};
