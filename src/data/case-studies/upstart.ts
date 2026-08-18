import type { CaseStudy } from "@/lib/types";

export const upstart: CaseStudy = {
  slug: "upstart",
  company: "Upstart",
  productName: "HELOC — Home Equity Line of Credit",
  productUrl: "https://heloc.upstartmortgage.com/",
  role: "Staff Data Scientist",
  period: "Sept 2024 – Current",
  location: "San Mateo, CA",
  tagline: "Turning HELOC funnel data into a ~50% lift in loan conversion",
  overview:
    "Upstart's HELOC product lets homeowners borrow $26K–$250K against their home equity through a fully online application — rate check, verification, remote notary signing, and funding within days. I own the experimentation and analytics layer behind that funnel, from the first rate check through closing.",
  highlights: [
    "Led design of 5+ major product and user growth experiments — defining tracking requirements, standardizing metrics, and applying rigorous statistical methodology to turn ambiguous funnel problems into testable hypotheses.",
    "Delivered strategic recommendations that increased lower-funnel loan conversion by ~50%, directly shaping which parts of the application flow (rate check → full application → closing) the product team prioritized next.",
    "Built interactive dashboards and a chat-based self-serve analytics tool so leadership and product managers could explore funnel and monetization data without waiting on an analyst — cutting insight turnaround time.",
    "Partnered with product and engineering to align analytics infrastructure and guarantee data integrity across user-flow and monetization measurement.",
  ],
  metrics: [
    { label: "~50% lower-funnel conversion lift", highlight: true },
    { label: "38% reduction in HELOC decision time" },
    { label: "$600K+ annual savings from underwriting automation" },
    { label: "30% of approved loans now automated" },
  ],
  accent: "amber",
};
