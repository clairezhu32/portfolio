import type { CaseStudy } from "@/lib/types";

export const uber: CaseStudy = {
  slug: "uber",
  company: "Uber",
  productName: "Uber for Business",
  productUrl: "https://www.uber.com/us/en/business/sign-up/",
  image: "/case-studies/uber.jpg",
  role: "Senior Product Analyst",
  period: "March 2019 – June 2020",
  location: "San Francisco, CA",
  tagline: "Turning ad hoc experimentation into a company-wide testing standard",
  problem:
    "Different teams across Uber were running A/B tests with inconsistent methodology, which made it hard for product and engineering leadership to trust results or compare experiments across initiatives.",
  decision:
    "Rather than let each team keep its own ad hoc approach, I pushed to standardize experimentation methodology — with consistent power analyses — across all product teams, and to give leadership a single, real-time view into business performance instead of team-by-team reporting.",
  execution:
    "I led the company-wide A/B testing review task force that set the standard for how experiments were designed and evaluated, and built the KPI scorecards and data-sharing systems that product and engineering leadership used for real-time business monitoring — managing a team of 2 analysts delivering the dashboards, statistical tracking, and reporting behind these initiatives.",
  outcome:
    "The experimentation standard I led was adopted company-wide, and the scorecards became the way leadership monitored the business in real time across multiple concurrent initiatives.",
  metrics: [
    { label: "Experimentation standard adopted org-wide", highlight: true },
    { label: "Real-time KPI scorecards adopted by leadership" },
  ],
  journey: [
    { label: "Sign Up", description: "A company creates a free Uber for Business account." },
    { label: "Configure", description: "Set up shared team accounts and expense policies." },
    { label: "Book & Pay", description: "Arrange and pay for rides for employees or customers." },
    { label: "Expense Automatically", description: "No manual receipts — rides are billed centrally." },
    { label: "Grow", description: "Businesses issue ride vouchers to drive foot traffic." },
  ],
  accent: "green",
};
