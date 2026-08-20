import type { CaseStudy } from "@/lib/types";

export const capstone: CaseStudy = {
  slug: "capstone",
  company: "AI PM Bootcamp",
  productName: "AI-guided meditation for job seekers",
  role: "Solo PM & builder — capstone project",
  tagline: "Applying product frameworks to a personal wellness problem, end to end",
  problem:
    "Job searching is one of the most stressful, uncertain experiences people go through — repeated rejection, long feedback gaps, and no clear sense of progress. As my AI PM bootcamp capstone, I wanted to explore whether an AI product could meaningfully reduce that stress, rather than just add another generic wellness app to track.",
  users:
    "Job seekers actively searching, particularly those experiencing search-related anxiety, burnout, or motivation loss severe enough to affect how they show up in interviews and applications.",
  optionsConsidered:
    "I considered building a general-purpose meditation app and targeting job seekers as one niche among many, but that risked being generic — meditation content unrelated to what's actually stressing the user in the moment. I also considered a broader 'job search wellness' product covering things like resume help and interview prep alongside meditation, but that risked diluting the scope into something too broad to design well as a solo capstone.",
  decision:
    "I scoped the product narrowly: AI-generated, guided meditation sessions personalized to specific job-search stress triggers — pre-interview anxiety, post-rejection processing, application fatigue — rather than a general wellness app. The tradeoff is reach: a narrower, job-search-specific product has a smaller addressable audience than a general meditation app, but I judged the sharper problem-fit was worth proving out first.",
  execution:
    "As a bootcamp capstone, this stayed at the product spec stage rather than shipping to real users — defining the core user journeys, the AI's role in personalizing each session, and how I'd measure whether it actually helped, applying the same product management frameworks (problem framing, user needs synthesis, scoping tradeoffs) I use in my day-to-day product work.",
  outcome:
    "This is a product spec developed for my AI PM bootcamp, not yet a shipped or measured product. The natural next step is a small prototype test to validate the core premise — that job-search-specific content outperforms generic meditation content for this audience — before investing in a full build.",
  reflection:
    "If I take this further, validating that core premise with a handful of real users would come before any additional scoping — it's the assumption the whole product bets on, and I haven't tested it yet.",
  metrics: [
    { label: "AI PM Bootcamp capstone", highlight: true },
    { label: "Product spec — not yet shipped" },
  ],
  accent: "blue",
};
