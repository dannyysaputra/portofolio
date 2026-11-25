export type ProofStat = {
  value: string;
  label: string;
  context: string;
};

export const proofStats: ProofStat[] = [
  { value: "80%", label: "less manual content work", context: "Arabicara audio pipeline" },
  { value: "50%", label: "lower system latency", context: "Kafka notification service" },
  { value: "40%", label: "faster admin workflows", context: "Admin workflow tooling" },
  { value: "Top 100", label: "Google Solution Challenge 2024", context: "Google for Developers" },
];

export type Service = {
  title: string;
  problem: string;
  outcome: string;
  examples: string[];
  tools: string[];
};

export const services: Service[] = [
  {
    title: "AI & Workflow Automation",
    problem: "Your team loses hours every week to copy-paste, lookups, and repetitive content work.",
    outcome:
      "Automations that handle the repetitive part (research, reading documents, generating content) with a human check where it matters.",
    examples: [
      "Arabicara: a text-to-speech pipeline that cut manual content work by 80%",
      "A company-research pipeline that replaces ~50 manual lookups per day",
    ],
    tools: ["n8n", "Python", "LLM / RAG", "OCR", "TTS"],
  },
  {
    title: "Backend, APIs & Integrations",
    problem: "Payments, data, and tools that don't talk to each other, or slow down as you grow.",
    outcome:
      "A reliable backend that connects your systems, handles money correctly, and gives you the numbers you need to run the business.",
    examples: [
      "In-app purchase and subscription pipeline",
      "Automated payouts through the Wise API",
      "Admin analytics on BigQuery",
    ],
    tools: ["Node.js", "FastAPI", "PostgreSQL", "Kafka"],
  },
  {
    title: "MVPs & Internal Tools",
    problem: "You need a working product or internal tool in weeks, not quarters.",
    outcome:
      "A focused first version that your users or staff can actually use, built on a stack that can grow with you.",
    examples: [
      "Hospital information system with lab-equipment integration",
      "Kasep: an AI recipe app deployed on AWS",
    ],
    tools: ["Next.js", "React", "Laravel"],
  },
];

export type ProcessStep = {
  title: string;
  body: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery call",
    body: "A short call to understand the problem, who it affects, and what a good result looks like for you.",
  },
  {
    title: "Scoped proposal",
    body: "A written scope with deliverables, timeline, and price, agreed before any work starts.",
  },
  {
    title: "Weekly build updates",
    body: "Every week you see working software and what comes next, not just a status report.",
  },
  {
    title: "Handover & support",
    body: "Documentation, access to everything, and an agreed support period after launch, so nothing is left hanging.",
  },
];

export const whyFaster = {
  title: "Why I ship faster",
  body: "I orchestrate multiple AI coding agents (Claude Code, Codex) under a lead agent that handles planning, implementation, review, and testing in parallel. I own the architecture and the quality bar: every change is reviewed and tested before it reaches you.",
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "How long does a project take?",
    answer:
      "It depends on scope. After the discovery call you get a specific timeline in the proposal, broken into weekly milestones.",
  },
  {
    question: "How do you price your work?",
    answer:
      "Per project or per milestone, based on the agreed scope. You know the price before work starts. If the scope changes, we agree on the change first.",
  },
  {
    question: "How will we communicate?",
    answer:
      "WhatsApp or email for day-to-day questions, a weekly update with a demo of what was built, and a call whenever a decision needs talking through.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You get the code, documentation, and all access. The support period after launch is agreed in the proposal, and I'm available for ongoing improvements if you need them.",
  },
  {
    question: "Can you work with our existing codebase?",
    answer:
      "Yes. I start by reading the code and mapping how it works, then make changes in small, reviewed steps so nothing that already works breaks.",
  },
];
