export type Accent = "amber" | "green" | "blue";

export type Metric = {
  label: string;
  highlight?: boolean;
};

export type CaseStudy = {
  slug: string;
  company: string;
  productName: string;
  productUrl: string;
  role: string;
  period: string;
  location: string;
  tagline: string;
  problem: string;
  decision: string;
  execution: string;
  outcome: string;
  metrics: Metric[];
  accent: Accent;
};
