export type Project = {
  slug: string;
  title: string;
  category: string;
  context: string;
  year?: string;
  role?: string;
  teamType?: string;
  imageUrl: string;
  imageAlt: string;
  /** True while the image is a generated placeholder waiting for a real screenshot. */
  imageIsPlaceholder?: boolean;
  resultHeadline: string;
  summary: string;
  card: {
    problem: string;
    solution: string;
    result: string;
  };
  problem: string;
  solution: string;
  results: string[];
  repo?: string;
  demo?: string;
  technical: {
    stack: string[];
    howItsBuilt: string;
    decisions?: string[];
    tradeOffs?: string[];
    lessons?: string;
    nextSteps?: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "lead-discovery-automation",
    title: "Lead-discovery automation",
    category: "AI & Workflow Automation",
    context: "Company-research automation for client prospecting",
    imageUrl: "/case-studies/lead-discovery.svg",
    imageAlt: "Placeholder diagram: company sources flowing into an automated research pipeline that outputs a list of research briefs",
    imageIsPlaceholder: true,
    resultHeadline: "~50 manual lookups a day, automated",
    summary:
      "An automated research pipeline that finds and profiles potential client companies, replacing about 50 manual lookups a day.",
    card: {
      problem: "Finding and researching potential clients took about 50 manual lookups every day.",
      solution: "A pipeline that gathers public company information and turns it into short, consistent research briefs.",
      result: "The daily lookups run automatically; people review the results and decide who to contact.",
    },
    problem:
      "Finding new potential clients meant researching companies one by one: searching the web, opening their sites, and writing down what they do and whether they might be a fit. It added up to roughly 50 lookups a day of repetitive work.",
    solution:
      "I built a pipeline that does the research automatically. It collects public information about each company and uses an AI model to summarise it into the same short format every time. People stay in control: they review the briefs and decide who to contact.",
    results: [
      "Replaces roughly 50 manual company lookups per day.",
      "Every company is summarised in the same format, so they are easy to compare.",
      "Time goes into reviewing and outreach instead of copy-paste research.",
    ],
    technical: {
      stack: ["n8n", "Python", "LLM"],
      howItsBuilt:
        "A workflow orchestrates the steps: collect candidate companies, gather public information about each one, and have an LLM write a brief in a fixed format. Internal details are kept generic here on purpose.",
    },
  },
  {
    slug: "arabicara",
    title: "Arabicara",
    category: "AI & Workflow Automation",
    context: "Arabic learning app for visually impaired users",
    year: "2025",
    role: "Backend Engineer",
    teamType: "Team",
    imageUrl: "/case-studies/arabicara.svg",
    imageAlt: "Placeholder diagram: vocabulary text converted by a text-to-speech pipeline into an audio library",
    imageIsPlaceholder: true,
    resultHeadline: "80% less manual content work",
    summary:
      "The backend and content pipeline for a mobile app that helps visually impaired users learn Arabic, with audio generated automatically instead of produced by hand.",
    card: {
      problem: "Producing audio for thousands of Arabic words by hand was slow and held back new content.",
      solution: "An automated pipeline that generates the audio and turns photos of Arabic text into readable text.",
      result: "80% less manual content work, and an audio library covering thousands of words.",
    },
    problem:
      "Visually impaired learners depend on audio. Every vocabulary word needed a matching audio file, and producing thousands of them by hand was slow and held back new lessons.",
    solution:
      "I built the app's backend and an automated content pipeline. Text-to-speech generates the audio for each word, and an AI reader converts photos of Arabic text into text the app can read aloud. Audio and images are stored and delivered to the app automatically.",
    results: [
      "Cut manual content creation time by 80%.",
      "Built an audio library covering thousands of vocabulary words.",
      "Learners can turn a photo of Arabic text into text the app can work with.",
    ],
    technical: {
      stack: ["Node.js", "Express.js", "PostgreSQL", "Google Cloud Storage", "OpenAI API", "TTS"],
      howItsBuilt:
        "A Node.js (Express) REST API backed by PostgreSQL for users, progress, and gamification data. Generated audio and images are stored in Google Cloud Storage and served to the mobile app. OCR runs through the OpenAI API.",
      decisions: [
        "PostgreSQL for relational data such as user progress and gamification state.",
        "Google Cloud Storage for serving audio assets directly to the mobile app.",
        "OpenAI API for Arabic OCR accuracy.",
      ],
      tradeOffs: [
        "More setup work for cloud storage in exchange for long-term scalability and less load on the API server.",
        "External APIs for TTS and OCR instead of self-hosted models, to ship faster with good Arabic accuracy.",
      ],
      lessons:
        "Serving a lot of media to a mobile app needs deliberate caching and secure URL generation from the start.",
      nextSteps: [
        "Local caching for frequently played audio.",
        "An admin dashboard for editors to review and adjust generated audio.",
      ],
    },
  },
  {
    slug: "subscription-payments-payouts",
    title: "Subscriptions & automated payouts",
    category: "Backend, APIs & Integrations",
    context: "Studyo.io, an education platform",
    year: "2026",
    role: "Backend Developer (part-time)",
    teamType: "Team",
    imageUrl: "/case-studies/payments-payouts.svg",
    imageAlt: "Placeholder diagram: in-app purchases and subscriptions feeding a backend that sends payouts and reports to an analytics dashboard",
    imageIsPlaceholder: true,
    resultHeadline: "Payments in, payouts out, automated",
    summary:
      "The money side of an education platform: in-app purchases and subscriptions coming in, automated payouts going out, and analytics for the admin team.",
    card: {
      problem: "Selling subscriptions and paying people out had to be reliable and could not be done by hand.",
      solution: "A purchase and subscription pipeline, automated payouts through the Wise API, and admin analytics.",
      result: "Payouts run automatically, and admins can see the numbers in their own analytics.",
    },
    problem:
      "A growing education platform needed to sell in-app purchases and subscriptions, pay out the people who earn on the platform, and give its admin team a clear view of the numbers. Doing this by hand does not scale, and mistakes with money are expensive.",
    solution:
      "I work on the backend that handles in-app purchases and subscriptions, sends payouts automatically through the Wise API, and feeds admin analytics in BigQuery.",
    results: [
      "In-app purchases and subscriptions handled by one pipeline.",
      "Payouts sent automatically through the Wise API instead of manual transfers.",
      "Admin analytics in BigQuery, so the team can answer its own questions.",
    ],
    technical: {
      stack: ["In-app purchases", "Subscriptions", "Wise API", "BigQuery"],
      howItsBuilt:
        "Purchase and subscription events are processed by the backend, payouts are created through the Wise API, and the resulting records feed admin reporting in BigQuery. Internal details are kept generic here on purpose.",
    },
  },
  {
    slug: "ai-screening-service",
    title: "AI Screening Service",
    category: "AI & Workflow Automation",
    context: "Recruitment platform",
    year: "2025",
    role: "Backend / AI Engineer",
    teamType: "Team",
    imageUrl: "/case-studies/ai-screening.svg",
    imageAlt: "Placeholder diagram: CVs and a job description matched by an AI service into a ranked shortlist",
    imageIsPlaceholder: true,
    resultHeadline: "90% relevance accuracy",
    summary:
      "A service that reads CVs, compares them with a job description, and returns a compatibility score with the skills it found.",
    card: {
      problem: "Recruiters spent hours reading CVs by hand, and the results depended on who was reading.",
      solution: "An AI service that reads each CV against the job description and scores the fit.",
      result: "Candidate scoring with 90% relevance accuracy and much less manual screening.",
    },
    problem:
      "Recruiters were screening every CV by hand. It took hours per role, the results depended on who was reading, and it got worse as the number of applicants grew.",
    solution:
      "I built a service that reads each CV, compares it against the specific job description, and returns a compatibility score with the skills it found. The AI is grounded in the actual job requirements, so it scores against what the role needs.",
    results: [
      "Achieved 90% relevance accuracy in candidate scoring.",
      "Significantly reduced manual screening time for HR teams.",
      "Delivered as an API that recruitment platforms can plug into.",
    ],
    technical: {
      stack: ["Python", "FastAPI", "RAG", "LLM", "REST API"],
      howItsBuilt:
        "A FastAPI microservice handles concurrent requests. CVs are parsed, embedded, and matched against job description context using vector retrieval before an LLM produces the score and extracted skills.",
      decisions: [
        "FastAPI for high concurrency and native async support.",
        "Retrieval-Augmented Generation (RAG) to ground evaluations in the job requirements and reduce hallucinations.",
        "Pydantic-validated responses for reliable integration with applicant tracking systems.",
      ],
      tradeOffs: [
        "Slightly higher latency for higher accuracy, using context-rich prompts instead of keyword matching.",
        "A stateless API, leaving state to the client for simpler scaling.",
      ],
      lessons: "With messy, heavily formatted CVs, the AI is only as good as the cleaned data you give it.",
      nextSteps: [
        "A background queue for bulk CV uploads.",
        "An evaluation pipeline that benchmarks scores against recruiter decisions.",
      ],
    },
  },
  {
    slug: "kasep",
    title: "Kasep",
    category: "MVPs & Internal Tools",
    context: "AI recipe app",
    year: "2025",
    role: "Fullstack AI Engineer",
    teamType: "Solo",
    imageUrl: "/projek_kasep.png",
    imageAlt: "Kasep app on a phone, showing a daily meal list with calories and AI-recommended recipes",
    resultHeadline: "Live MVP on AWS",
    summary: "An app that recognises the ingredients in a photo and suggests recipes you can cook with them.",
    card: {
      problem: "People often don't know what to cook with what they already have, which leads to waste.",
      solution: "Take a photo of your ingredients; the app recognises them and recommends recipes.",
      result: "A working, publicly deployed MVP running on AWS.",
    },
    problem:
      "People often don't know what to cook with the ingredients already in their kitchen, so food goes to waste and meals get repetitive.",
    solution:
      "I built an app where you take one photo of your ingredients. A custom-trained image model recognises them, and the app recommends recipes that use what you have.",
    results: [
      "Deployed a working, publicly accessible MVP on AWS.",
      "Recognises multiple ingredients in a single photo in real time.",
      "Goes from a raw photo to a recipe suggestion in one step.",
    ],
    technical: {
      stack: ["Python", "YOLO", "OpenCV", "FastAPI", "Docker", "AWS EC2"],
      howItsBuilt:
        "Images are sent to a FastAPI service on AWS EC2. A custom YOLO model detects the ingredients, the backend turns the detections into an ingredient list, and a recipe lookup returns matching recipes as JSON. The service is containerised with Docker.",
      decisions: [
        "YOLO for real-time object detection.",
        "Docker on AWS EC2 for a consistent, reproducible deployment.",
        "FastAPI for asynchronous image uploads.",
      ],
      tradeOffs: [
        "A smaller model for faster responses on mobile and web.",
        "A single EC2 deployment for simplicity instead of a serverless inference setup.",
      ],
      lessons:
        "Training data quality decides the outcome; overlapping ingredients need to be represented explicitly in training.",
      nextSteps: [
        "Move inference to a managed or serverless service for cost and scaling.",
        "Personalise recommendations based on user preferences.",
      ],
    },
  },
];
