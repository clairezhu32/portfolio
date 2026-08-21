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
  users:
    "Homeowners trying to access their home equity were dropping out between checking their rate and completing a full application, many abandoning after early friction points like manual document requests or long underwriting wait times. Internally, product and leadership lacked a shared, real-time view of where in the funnel borrowers were stalling, so roadmap decisions were being made on incomplete or stale data.",
  optionsConsidered:
    "One option was a full funnel redesign — reworking the application flow end-to-end against UX best practices — but that risked a quarter-plus of design and engineering time with no guarantee it targeted the actual drop-off points. There was also pressure to make quick, isolated fixes based on anecdotal feedback from sales and support, but without funnel-level data those fixes risked optimizing parts of the flow that weren't the real bottleneck.",
  decision:
    "Rather than commit to a redesign or react to anecdotes, I pushed for 5+ structured, sequenced experiments across specific funnel stages so we could find the real bottlenecks before investing in bigger changes — and argued that automating more of the credit decision itself, not just the front-end UX, was the highest-leverage lever for lower-funnel conversion. The tradeoff: slower initial visible progress, since it meant weeks of instrumentation and experiment design before any UX changes shipped, and asking engineering to prioritize underwriting automation work over other roadmap items with less certain ROI.",
  execution:
    "I defined tracking requirements and standardized metrics so results were comparable across the funnel, built the underwriting automation roadmap that product and engineering executed against, and shipped a self-serve dashboard so PMs and leadership could explore funnel and monetization trends without waiting on an analyst request. That required ongoing alignment with engineering on what could realistically be automated, and with leadership on sequencing the roadmap around what the experiments found.",
  outcome:
    "Lower-funnel loan conversion increased ~50%, decision time dropped 38%, and automated underwriting now covers 30% of approved loans — saving $600K+ annually and freeing the team to focus manual review on harder cases.",
  reflection:
    "I'd push to get the self-serve dashboard in front of product and leadership earlier. It ended up being one of the most-used artifacts from this work, but I built it only after the experiments were already underway instead of alongside the initial funnel instrumentation.",
  metrics: [
    { label: "~50% lower-funnel conversion lift", highlight: true },
    { label: "38% reduction in HELOC decision time" },
    { label: "$600K+ annual savings from underwriting automation" },
    { label: "30% of approved loans now automated" },
  ],
  journey: [
    { label: "Check Rate", description: "10-minute soft credit check — doesn't affect the homeowner's credit score." },
    { label: "Full Application", description: "Accept the rate, submit for a hard credit inquiry and verification." },
    { label: "Underwriting", description: "Automated decisioning covers 30% of approved cases; the rest go to manual review." },
    { label: "Sign", description: "Remote online notary closing — no in-person appointment needed." },
    { label: "Fund", description: "Closing and funding within a few business days of approval." },
  ],
  accent: "amber",
};
