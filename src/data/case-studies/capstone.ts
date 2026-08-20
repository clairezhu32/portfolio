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
  accent: "blue",
};
