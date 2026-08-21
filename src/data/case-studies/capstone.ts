import type { CaseStudy } from "@/lib/types";

export const capstone: CaseStudy = {
  slug: "capstone",
  company: "Master Key System",
  productName: "AI-personalized 12-week mental training course",
  productUrl: "https://master-key-exercises.vercel.app/",
  image: "/case-studies/capstone.jpg",
  role: "Solo PM & builder — AI PM bootcamp capstone",
  tagline: "Digitizing a 1919 self-help classic with an AI-generated personal action plan",
  problem:
    "Charles F. Haanel's The Master Key System is a dense, 24-part self-improvement course originally delivered as one lesson per week by mail. Structured personal-development content like this tends to lose readers fast, because the material stays generic — it never adapts to what the specific reader is actually trying to achieve.",
  users:
    "People looking for structured mental training rather than one-off motivation — but generic lessons that don't connect to a reader's actual goal are easy to abandon once the content starts to feel abstract.",
  decision:
    "I kept the full 24-exercise course free and accessible without an account (including a guest mode), and let users set a personal goal that reframes all 24 exercises around it — so the free experience does the work of proving the course is worth sticking with. I gated the deeper layer, an AI-generated 90-day action plan built from a 5-step goal intake, behind a paid tier. I also compressed Haanel's original 24-week pacing into 12 weeks, two parts at a time, while keeping his core rule intact: don't move on until the current exercise feels effortless and automatic.",
  execution:
    "As a solo build, I implemented the exercise sequencing and progress tracking, the goal-personalization layer that reframes all 24 exercises around a user's stated goal, and the 5-step intake flow that feeds a user's goal and context to an AI strategist to generate the paid Master Plan — a staged 90-day action plan with metrics.",
  outcome:
    "The course, goal-personalization, and AI-generated Master Plan are live at master-key-exercises.vercel.app. As a capstone without a marketing push behind it, the focus was proving the mechanism end-to-end — from a goal typed in by a user to a working, AI-generated plan — rather than growth metrics.",
  reflection:
    "The next real test is usage data I don't have yet: completion rates through the 24 exercises, and whether people who pay for the AI-generated Master Plan actually follow through on it. That would tell me whether the free-course-to-paid-AI-layer structure is the right wedge, or whether the paywall is in the wrong place.",
  metrics: [
    { label: "Live, shipped product", highlight: true },
    { label: "AI-generated 90-day personalized plan" },
    { label: "24-exercise course, solo-built" },
  ],
  journey: [
    { label: "Land", description: "Arrives at the value proposition and clicks \"Begin the Course.\"", emotion: "Curious" },
    { label: "Set a Goal", description: "Defines a personal goal that all 24 exercises get reframed around.", emotion: "Hopeful" },
    { label: "Progress", description: "Works through 15-minute sessions, paced across 12 weeks, tracking 0/24.", emotion: "Focused, occasionally impatient" },
    { label: "Reflect", description: "Logs session notes, synced across devices.", emotion: "Reassured" },
    { label: "Go Deeper (Paid)", description: "A 5-step intake feeds an AI strategist that generates a 90-day plan.", emotion: "Invested" },
  ],
  personas: [
    {
      name: "Marcus T.",
      role: "Committed Goal-Setter",
      bio: "A 29-year-old senior software engineer working toward a specific promotion. He's tried journaling and other self-improvement apps before but drops off within a week or two when the content doesn't connect to what he's actually working toward.",
      goals: [
        "Get promoted to senior/staff engineer at his company",
        "Build a daily habit of mental discipline instead of sporadic motivation",
        "Stop abandoning self-improvement programs halfway through",
      ],
      frustrations: [
        "Generic advice that doesn't apply to his specific situation",
        "Previous apps he paid for and stopped using within two weeks",
        "Too many personal-development resources competing for his limited time",
      ],
      discovery: "Finds the app through search while researching goal-setting frameworks and productivity content, drawn in by the promise of personalization rather than generic lessons.",
      usage: "Sets his promotion goal on day one, does the 15-minute sessions most mornings before work, and converts to the paid Master Plan once he wants a concrete 90-day plan tied specifically to that promotion.",
    },
    {
      name: "Renee K.",
      role: "Curious Self-Improver",
      bio: "A 41-year-old small business owner generally interested in personal growth and mindset work, not chasing one urgent goal. She's read self-help books before and is curious about the Master Key System specifically because of its history, but isn't in a hurry.",
      goals: [
        "Build a calmer, more structured daily routine",
        "Decide whether structured mental training 'actually works' before spending money",
        "General clarity on both business and life direction",
      ],
      frustrations: [
        "Skeptical of paid upsells in self-improvement apps after being burned before",
        "Doesn't want to commit to a subscription before trying the core content",
        "Unsure whether 24 exercises over 12 weeks is a realistic time commitment for her",
      ],
      discovery: "Hears about it through a self-improvement community or word of mouth, rather than search or ads.",
      usage: "Uses guest mode to try a couple of exercises before ever creating an account, moves slower than the suggested 12-week pace, and hasn't yet paid for the Master Plan.",
    },
  ],
  userStories: [
    {
      story: "As someone working toward a specific goal, I want every exercise reframed around my stated goal, so that the lessons feel relevant instead of generic.",
      acceptanceCriteria: "The app incorporates the user's stated goal into the framing of all 24 exercises once it's set.",
    },
    {
      story: "As a new visitor, I want to try the course without creating an account, so that I can evaluate it before committing.",
      acceptanceCriteria: "Guest mode allows full access to exercises and goal-setting without requiring sign-up.",
    },
    {
      story: "As a returning user, I want my progress and session notes to sync across devices, so that I don't lose my place when I switch from phone to laptop.",
      acceptanceCriteria: "Progress (0/24) and session notes persist and sync for logged-in accounts.",
    },
    {
      story: "As someone considering the paid tier, I want a clear, guided intake before being asked to pay, so that I understand what the AI-generated plan will actually give me.",
      acceptanceCriteria: "The 5-step goal intake completes before any payment prompt.",
    },
    {
      story: "As a paying subscriber, I want my 90-day action plan to reflect the specific goal I entered, not generic advice, so that the $19.99/month cost feels justified.",
      acceptanceCriteria: "The generated Master Plan references the user's stated goal in its staged milestones.",
    },
    {
      story: "As a user pacing myself slower than 12 weeks, I want to move at my own rhythm, so that I'm not pressured to rush past a lesson I haven't absorbed.",
      acceptanceCriteria: "Access to earlier exercises doesn't lock or expire regardless of how long a user takes between sessions.",
    },
  ],
  risks: [
    {
      type: "Technical Risk",
      description: "The AI-generated Master Plan could produce generic, low-quality 90-day plans if the 5-step intake doesn't capture enough context, undermining the product's core value proposition.",
      remediation: "Test the intake against a range of goal types before launch, and manually review early generated plans for genericness.",
    },
    {
      type: "Business Risk",
      description: "Free users may never convert to the paid Master Plan if the free 24-exercise course already feels complete on its own.",
      remediation: "Track how many free users finish exercise 24 without ever starting the Master Plan intake, and use that as the signal to test a different point to introduce the paid tier.",
    },
    {
      type: "Operational Risk",
      description: "As a solo build, scope can expand faster than one person can maintain — new content, AI prompt tuning, and bug fixes compete for the same limited time.",
      remediation: "Ship the 24-exercise course and the Master Plan as the complete v1 scope, and explicitly defer anything else to a later backlog.",
    },
    {
      type: "Content Risk",
      description: "Haanel's original text is public domain, but the AI layer built on top of it introduces new risk around output quality and consistency that the source material doesn't have.",
      remediation: "Keep human review in the loop for Master Plan prompt design — public-domain status covers the source text, not the AI layer generating new content from it.",
    },
    {
      type: "Retention Risk",
      description: "A 12-week structured course is a real commitment; users who fall behind pace may quietly churn rather than finish.",
      remediation: "Let users move at their own rhythm instead of enforcing the 12-week pace, and treat re-engagement after a gap as a separate problem to solve later.",
    },
  ],
  pricingStrategy:
    "The core 24-exercise course, including goal-personalization, is free and doesn't require an account — the free tier's job is to prove the personalization mechanic is worth sticking with. The AI-generated Master Plan is a $19.99/month add-on, priced in line with other AI-personalization subscription products, positioned for people who've already decided they want a structured action plan, not just guided reflection.",
  leanCanvas: {
    problem: [
      "Structured self-improvement content is generic and easy to abandon",
      "Readers of classic texts like Haanel's rarely have help applying it to their specific goal",
      "People can't tell if a self-improvement program is worth paying for before trying it",
    ],
    solution: [
      "Digitize a public-domain self-improvement classic with modern pacing (12 weeks vs. 24)",
      "Personalize all 24 exercises around a user-defined goal",
      "Offer an AI-generated 90-day action plan as a paid, deeper layer",
    ],
    uniqueValueProp:
      "A century-old mental-training system, reframed in real time around your specific goal, with an AI-generated action plan for people ready to go further.",
    unfairAdvantage: [
      "Built on public-domain source material — no licensing cost or rights negotiation",
      "Goal-personalization applied across the entire course, not a single feature",
    ],
    customerSegments: [
      "Self-improvement readers who want structure, not just motivation",
      "People with one specific, high-stakes goal (career, business, life change)",
    ],
    existingAlternatives: [
      "Reading the original Master Key System text unassisted",
      "General meditation/mindfulness apps",
      "Generic goal-setting or productivity apps",
    ],
    keyMetrics: [
      "% of users who set a goal on day one",
      "Exercise completion rate through all 24 parts",
      "Free-to-paid conversion into the Master Plan",
    ],
    channels: [
      "Organic search for the book title and self-improvement content",
      "Word of mouth within self-improvement communities",
    ],
    earlyAdopters: [
      "People already familiar with the original book, looking for a modern way to work through it",
      "Career-focused professionals with one clear goal they're actively pursuing",
    ],
    costStructure: ["AI/LLM API costs for generating Master Plans", "Hosting", "Solo builder's time"],
    revenueStreams: [
      "$19.99/month subscription for the AI-generated Master Plan",
      "Free tier for the core course (no direct revenue, drives top-of-funnel trust)",
    ],
  },
  accent: "blue",
};
