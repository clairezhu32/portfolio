import type { CaseStudy } from "@/lib/types";

export const upstart: CaseStudy = {
  slug: "upstart",
  company: "Upstart",
  productName: "HELOC — Home Equity Line of Credit",
  productUrl: "https://heloc.upstartmortgage.com/",
  image: "/case-studies/upstart.jpg",
  role: "Staff Data Scientist",
  period: "Sept 2024 – Current",
  location: "San Mateo, CA",
  tagline: "Turning HELOC funnel data into a ~50% lift in loan conversion",
  problem:
    "Upstart's HELOC funnel was losing homeowners between the initial rate check and full application. Leadership needed to know which part of the flow to fix first — and whether underwriting itself could be automated further to serve more borrowers without slowing anyone down.",
  decision:
    "Rather than one broad redesign, I pushed for 5+ structured growth experiments across specific funnel stages, and argued that automating more of the credit decision — not just the front-end UX — was the highest-leverage lever for lower-funnel conversion.",
  execution:
    "I defined tracking requirements and standardized metrics so results were comparable across the funnel, built the underwriting automation roadmap that product and engineering executed against, and shipped a self-serve dashboard so PMs and leadership could explore funnel and monetization trends without waiting on an analyst request.",
  outcome:
    "Lower-funnel loan conversion increased ~50%, decision time dropped 38%, and automated underwriting now covers 30% of approved loans — saving $600K+ annually and freeing the team to focus manual review on harder cases.",
  metrics: [
    { label: "~50% lower-funnel conversion lift", highlight: true },
    { label: "38% reduction in HELOC decision time" },
    { label: "$600K+ annual savings from underwriting automation" },
    { label: "30% of approved loans now automated" },
  ],
  accent: "amber",
};
