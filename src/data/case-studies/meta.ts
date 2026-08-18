import type { CaseStudy } from "@/lib/types";

export const meta: CaseStudy = {
  slug: "meta",
  company: "Meta",
  productName: "Cross-Border Commerce (SMB Ads)",
  productUrl: "https://www.facebook.com/business/cross-border",
  role: "SMB Data Scientist",
  period: "June 2017 – December 2018",
  location: "Menlo Park, CA",
  tagline: "Proving a ~30% revenue lift for Meta's highest-spend advertisers",
  overview:
    "Meta's cross-border commerce tools help SMB advertisers reach new customers internationally using AI-optimized campaigns, localized creative, and market-specific intelligence. I owned experimentation and measurement for Facebook's highest-value, highest-spend advertisers within this program.",
  highlights: [
    "Led programmatic A/B test design and measurement for high-value, high-spend advertisers, applying winsorization and regression adjustment to keep outlier spend from distorting results — outcomes included a ~30% revenue increase.",
    "Standardized the analytics process with propensity score matching, replacing ad hoc measurement with a repeatable method that BI partner teams could run globally.",
    "Built dashboards and pipelines that surfaced real-time cross-border ad-sales opportunities, scaling the approach across SMB ads sales teams worldwide.",
  ],
  metrics: [
    { label: "~30% revenue increase", highlight: true },
    { label: "Method scaled globally across BI partner teams" },
  ],
  accent: "blue",
};
