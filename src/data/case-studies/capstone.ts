import type { CaseStudy } from "@/lib/types";

export const capstone: CaseStudy = {
  slug: "capstone",
  company: "Master Key System",
  productName: "AI-powered 90-day goal planning experience",
  productUrl: "https://master-key-exercises.vercel.app/",
  image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmaster-key-exercises.vercel.app%2F?w=1512",
  role: "Solo PM & builder — AI PM bootcamp capstone",
  tagline: "Turning one meaningful goal into a personalized 90-day plan.",
  problem:
    "The original Master Key System is a dense, 24-part self-improvement course. The challenge was not simply digitizing the material — it was making the experience feel relevant to a person with a real goal, so the system could move from abstract self-help content to something a user could actually act on.",
  users:
    "People with a meaningful goal who want more than generic motivation: they need a structured process that helps translate intention into concrete action.",
  decision:
    "I designed the product around a simple progression: start with one meaningful goal, use guided mental-training exercises to build the mindset behind it, then turn that context into a personalized 90-day Master Plan. The key product decision was to make goal discovery the input to the entire experience rather than treating personalization as a final AI feature.",
  execution:
    "As a solo build, I implemented the landing experience, exercise sequencing and progress tracking, goal-personalization across the course, and the guided goal intake that feeds an AI strategist. The AI layer turns the user's goal and context into a staged 90-day action plan with milestones and metrics.",
  outcome:
    "The experience is live at master-key-exercises.vercel.app. The product now demonstrates the full mechanism end-to-end: a user arrives with an intention, defines what matters, works through guided exercises, and can turn that context into a concrete 90-day plan.",
  reflection:
    "The biggest learning was that the quality of an AI-generated plan is constrained by the quality of the questions that come before it. The next product test is whether better goal discovery improves plan relevance, completion, and follow-through — not simply whether the model can generate more content.",
  metrics: [
    { label: "Live, shipped product", highlight: true },
    { label: "AI-generated 90-day personalized plan" },
    { label: "24-exercise course, solo-built" },
  ],
  evidenceChart: {
    title: "One goal becomes a complete execution system",
    description: "The product connects structured intake, weekly action planning, and mindset support in one flow.",
    type: "bars",
    max: 12,
    data: [
      { label: "Goal-discovery questions", value: 9, display: "9" },
      { label: "Weekly action milestones", value: 12, display: "12" },
      { label: "Guided Lucky Exercises", value: 12, display: "12" },
    ],
    note: "This is a product-structure chart, not a claim about user outcomes. The next measurement step is completion, return rate, and weekly task follow-through.",
  },
  journey: [
    { label: "Land", description: "Arrives at a clear promise: turn one meaningful goal into a personalized 90-day plan.", emotion: "Curious" },
    { label: "Define a Goal", description: "Clarifies the goal, motivation, constraints, and context that should shape the plan.", emotion: "Hopeful" },
    { label: "Train", description: "Works through guided mental-training exercises designed around the user's stated goal.", emotion: "Focused" },
    { label: "Reflect", description: "Builds continuity through progress and reflection rather than one-off motivation.", emotion: "Reassured" },
    { label: "Master Plan", description: "The AI strategist turns the user's context into a staged 90-day action plan.", emotion: "Invested" },
  ],
  personas: [
    {
      name: "Marcus T.",
      role: "Committed Goal-Setter",
      bio: "A 29-year-old senior software engineer working toward a specific promotion. He's tried journaling and other self-improvement apps before but drops off when the content doesn't connect to what he's actually working toward.",
      goals: [
        "Get promoted to senior/staff engineer at his company",
        "Build a daily habit of mental discipline",
        "Turn a vague ambition into a concrete plan",
      ],
      frustrations: [
        "Generic advice that doesn't apply to his specific situation",
        "Previous self-improvement tools that were easy to abandon",
        "Too many resources competing for limited time",
      ],
      discovery: "Finds the product while researching goal-setting and personal-development frameworks, drawn in by the promise of personalization.",
      usage: "Sets his promotion goal, works through the guided exercises, and uses the Master Plan to translate that goal into a concrete 90-day roadmap.",
    },
    {
      name: "Renee K.",
      role: "Curious Self-Improver",
      bio: "A 41-year-old small business owner interested in personal growth and mindset work. She wants enough structure to make progress, but is skeptical of generic self-help programs and paid upsells.",
      goals: [
        "Build a calmer, more structured daily routine",
        "Test whether structured mental training is useful before paying",
        "Gain more clarity on business and life direction",
      ],
      frustrations: [
        "Generic self-improvement advice",
        "Paid products that ask for commitment too early",
        "Unclear time commitment for long programs",
      ],
      discovery: "Hears about the product through a self-improvement community or word of mouth.",
      usage: "Explores the free experience first, defines a goal, and decides whether the deeper Master Plan layer is useful enough to continue with.",
    },
  ],
  userStories: [
    {
      story: "As someone working toward a meaningful goal, I want the experience to reflect my specific goal, so that the exercises feel relevant instead of generic.",
      acceptanceCriteria: "The user's stated goal is incorporated into the framing of the experience and exercises.",
    },
    {
      story: "As a new visitor, I want to understand the value before committing, so that I can decide whether the product is for me.",
      acceptanceCriteria: "The landing experience clearly communicates the goal → training → 90-day plan progression.",
    },
    {
      story: "As a returning user, I want my progress and reflections to persist, so that I can build a practice over time.",
      acceptanceCriteria: "Progress and session notes persist for logged-in accounts.",
    },
    {
      story: "As someone considering a Master Plan, I want to answer thoughtful questions first, so that the resulting plan reflects my actual situation.",
      acceptanceCriteria: "The guided goal intake captures enough context before plan generation.",
    },
    {
      story: "As a user receiving a Master Plan, I want it tied to my specific goal, so that it gives me actions I can actually follow.",
      acceptanceCriteria: "The generated plan references the user's goal and turns it into staged milestones and metrics.",
    },
  ],
  risks: [
    {
      type: "Technical Risk",
      description: "The AI-generated Master Plan could be generic if the goal intake doesn't capture enough useful context.",
      remediation: "Test the intake against different goal types and manually review early generated plans for relevance and specificity.",
    },
    {
      type: "Product Risk",
      description: "Users may not understand why the goal-discovery step matters if it feels like a form before the 'real' experience.",
      remediation: "Make the connection explicit: explain how each answer changes the eventual plan and use the landing page to set that expectation.",
    },
    {
      type: "Operational Risk",
      description: "As a solo build, content, AI prompt tuning, and product maintenance compete for limited time.",
      remediation: "Keep the v1 scope focused on the goal → training → Master Plan loop and defer secondary features.",
    },
    {
      type: "Retention Risk",
      description: "A structured multi-week course is a meaningful commitment, so users may drop off before reaching the planning layer.",
      remediation: "Track progression through the experience and test whether shorter, more immediately useful planning moments improve continued engagement.",
    },
  ],
  pricingStrategy:
    "The product uses the guided experience to demonstrate value before asking users to go deeper. The paid Master Plan is positioned as the concrete action layer for people who want their goal translated into a structured 90-day roadmap.",
  leanCanvas: {
    problem: [
      "Self-improvement content is often generic and easy to abandon",
      "People struggle to translate an important goal into a concrete plan",
      "AI-generated plans are only as useful as the context provided to the model",
    ],
    solution: [
      "Digitize a classic mental-training system with modern pacing",
      "Personalize the experience around a user-defined goal",
      "Use guided goal discovery to generate a personalized 90-day action plan",
    ],
    uniqueValueProp:
      "Start with one meaningful goal, build the mindset behind it, and turn your context into a personalized 90-day plan.",
    unfairAdvantage: [
      "Goal-personalization is woven through the experience rather than added as a single AI feature",
      "A live end-to-end product connecting reflection, training, and action planning",
    ],
    customerSegments: [
      "Self-improvement readers who want structure, not just motivation",
      "People with one specific, high-stakes goal they are actively pursuing",
    ],
    existingAlternatives: [
      "Reading the original Master Key System text unassisted",
      "General meditation and mindfulness apps",
      "Generic goal-setting or productivity apps",
      "Chatbots that generate plans without a structured discovery process",
    ],
    keyMetrics: [
      "% of users who define a goal",
      "Progression through the guided exercises",
      "Master Plan generation and completion",
      "Follow-through on 90-day milestones",
    ],
    channels: [
      "Organic search for the book and self-improvement content",
      "Word of mouth within self-improvement communities",
    ],
    earlyAdopters: [
      "People familiar with the original book looking for a modern way to work through it",
      "Goal-focused professionals actively working toward a specific outcome",
    ],
    costStructure: ["AI/LLM API costs for generating Master Plans", "Hosting", "Solo builder's time"],
    revenueStreams: [
      "Paid subscription for the AI-generated Master Plan",
      "Free guided experience as the trust-building entry point",
    ],
  },
  accent: "blue",
};
