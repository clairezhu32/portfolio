export type Accent = "amber" | "green" | "blue";

export type Metric = {
  label: string;
  highlight?: boolean;
};

export type JourneyStage = {
  label: string;
  description: string;
  emotion?: string;
};

export type ExternalReference = {
  label: string;
  href: string;
  caption: string;
};

export type Persona = {
  name: string;
  role: string;
  bio: string;
  goals: string[];
  frustrations: string[];
  discovery: string;
  usage: string;
};

export type UserStory = {
  story: string;
  acceptanceCriteria: string;
};

export type Risk = {
  type: string;
  description: string;
  remediation: string;
};

export type LeanCanvas = {
  problem: string[];
  solution: string[];
  uniqueValueProp: string;
  unfairAdvantage: string[];
  customerSegments: string[];
  existingAlternatives: string[];
  keyMetrics: string[];
  channels: string[];
  earlyAdopters: string[];
  costStructure: string[];
  revenueStreams: string[];
};

export type CaseStudy = {
  slug: string;
  company: string;
  productName: string;
  productUrl?: string;
  image?: string;
  role: string;
  period?: string;
  location?: string;
  tagline: string;
  problem: string;
  users?: string;
  optionsConsidered?: string;
  decision: string;
  execution: string;
  outcome: string;
  reflection?: string;
  metrics: Metric[];
  journey?: JourneyStage[];
  reference?: ExternalReference;
  personas?: Persona[];
  userStories?: UserStory[];
  risks?: Risk[];
  pricingStrategy?: string;
  leanCanvas?: LeanCanvas;
  accent: Accent;
};
