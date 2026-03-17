export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  teamType: string;
  type: string;
  stack: string[];
  imageUrl?: string;
  outcomeChip: string;
  repo?: string;
  demo?: string;
  summary: string;
  problem: string;
  whyItMattered: string;
  constraints: string;
  myRole: string;
  usersStakeholders: string;
  solution: string;
  architectureImplementation: string;
  technicalDecisions: string[];
  tradeOffs: string[];
  impactOutcomes: string[];
  lessonsLearned: string;
  futureImprovements: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-screening-service",
    title: "AI Screening Service",
    year: "2025",
    role: "Backend/AI Engineer",
    teamType: "Team",
    type: "Backend / AI / Microservice",
    stack: ["FastAPI", "RAG", "LLM", "Python", "REST API"],
    imageUrl: "/projek_forecast.png",
    outcomeChip: "90% relevance scoring",
    summary: "Architected a high-performance microservice using Python (FastAPI) to automate the screening and ranking of candidate CVs against job descriptions.",
    problem: "Recruiters face massive bottlenecks manually screening CVs. The process is time-consuming, prone to human bias, and scales poorly with increasing applicant volume.",
    whyItMattered: "Automating this step saves HR platforms thousands of hours while ensuring candidates are evaluated purely on semantic merit and fit.",
    constraints: "Strict latency requirements for API responses, managing unstructured and noisy PDF/Word CV data, and preventing LLM hallucination in candidate evaluation.",
    myRole: "Owned the backend architecture, developed the parsing pipeline, and implemented the RAG-based LLM integration.",
    usersStakeholders: "HR professionals, hiring managers, and applicant tracking systems (ATS).",
    solution: "Integrated OpenAI's LLM to perform semantic analysis on CVs. Developed a RAG pipeline to inject specific job context into prompts, returning precise compatibility scores and extracted skills.",
    architectureImplementation: "FastAPI microservice handles concurrent requests. Unstructured data is parsed, embedded, and queried against job description context using vector retrieval before being synthesized by the LLM.",
    technicalDecisions: [
      "Chose FastAPI for high concurrency and native async support in Python.",
      "Implemented Retrieval-Augmented Generation (RAG) to ground LLM evaluations in factual job requirements, reducing hallucinations.",
      "Structured REST API responses with comprehensive Pydantic validation for robust ATS integration."
    ],
    tradeOffs: [
      "Traded slight inference latency for higher accuracy by using context-heavy RAG prompts over simple keyword matching.",
      "Prioritized a stateless API design, offloading state management to the client/ATS for simpler microservice scaling."
    ],
    impactOutcomes: [
      "Achieved 90% relevance accuracy in candidate evaluation.",
      "Significantly reduced manual screening time for HR teams.",
      "Deployed as a robust, error-tolerant backend for an intelligent recruitment platform."
    ],
    lessonsLearned: "Handling unstructured data (like heavily formatted CVs) requires robust preprocessing; the LLM is only as good as the clean data you feed it.",
    futureImprovements: [
      "Implement a background queue (e.g., Celery/RabbitMQ) for asynchronous processing of bulk CV uploads.",
      "Add an evaluation pipeline to continuously benchmark LLM scoring against human recruiter decisions."
    ]
  },
  {
    slug: "arabicara",
    title: "Arabicara",
    year: "2025",
    role: "Backend Engineer",
    teamType: "Team",
    type: "Fullstack / AI / Accessibility",
    stack: ["Node.js", "Express.js", "PostgreSQL", "Google Cloud Storage", "OpenAI API", "TTS"],
    imageUrl: "/projek_forecast.png",
    outcomeChip: "80% manual content reduction",
    summary: "Engineered a scalable RESTful API to power a mobile app designed for visually impaired users to learn Arabic, featuring AI OCR and automated audio generation.",
    problem: "Creating accessible educational content, specifically audio databases for thousands of Arabic vocabulary words, is extremely labor-intensive and slow.",
    whyItMattered: "Visually impaired users rely heavily on accurate audio feedback for language learning. Delaying content creation delays their access to education.",
    constraints: "Need for high-quality Arabic Text-to-Speech, efficient storage for multimedia assets, and real-time OCR for image-to-text translation.",
    myRole: "Engineered the RESTful API, designed the relational database, and built the automated TTS/OCR content pipelines.",
    usersStakeholders: "Visually impaired Arabic language learners and educational content administrators.",
    solution: "Developed an automated pipeline using Text-to-Speech (TTS) technology to generate vocabulary audio dynamically. Integrated AI OCR to convert Arabic text images into machine-readable formats.",
    architectureImplementation: "Node.js (Express) backend interfacing with a PostgreSQL database for user/gamification data. Multimedia assets (audio/images) are securely stored and served via Google Cloud Storage.",
    technicalDecisions: [
      "Used PostgreSQL to efficiently manage complex relational data like user progress and gamification states.",
      "Leveraged Google Cloud Storage for secure, scalable serving of audio assets directly to the mobile frontend.",
      "Integrated OpenAI API for high-accuracy Arabic OCR capabilities."
    ],
    tradeOffs: [
      "Traded initial setup complexity of cloud storage for long-term scalability and reduced server load.",
      "Relied on external APIs for TTS/OCR instead of self-hosted models to prioritize speed-to-market and high accuracy for Arabic."
    ],
    impactOutcomes: [
      "Reduced manual content creation time by 80% through the automated TTS pipeline.",
      "Successfully processed thousands of vocabulary words into a comprehensive audio database.",
      "Enabled visually impaired users to interact with Arabic text in real-time via OCR."
    ],
    lessonsLearned: "Managing multimedia assets requires careful consideration of CDN caching and secure URL generation to optimize mobile app performance.",
    futureImprovements: [
      "Implement local caching for frequently accessed audio files.",
      "Add an admin dashboard for content editors to review and tweak AI-generated audio."
    ]
  },
  {
    slug: "kasep",
    title: "Kasep",
    year: "2025",
    role: "Fullstack AI Engineer",
    teamType: "Solo",
    type: "AI / Backend / Recommendation",
    stack: ["Python", "YOLO", "OpenCV", "FastAPI", "Docker", "AWS EC2"],
    imageUrl: "/projek_kasep.png",
    outcomeChip: "AWS-deployed recommendation workflow",
    summary: "Designed and deployed a full-stack AI system that identifies food ingredients from an image and recommends recipes based on the detected items.",
    problem: "Users often don't know what to cook with the ingredients they have, leading to food waste and repetitive dietary choices.",
    whyItMattered: "Providing immediate, actionable recipe suggestions based on visual input reduces friction in meal planning and promotes better resource usage.",
    constraints: "Real-time object detection requires optimized model inference, and the system must handle varied lighting and complex scenes in user images.",
    myRole: "End-to-end development: trained the custom YOLO model, built the backend, integrated the recommendation engine, and managed AWS deployment.",
    usersStakeholders: "Home cooks and individuals looking for dietary inspiration.",
    solution: "Trained a custom YOLO object detection model to identify ingredients. Built a Python backend that translates bounding box labels into an ingredient list, querying a database for relevant recipes.",
    architectureImplementation: "Images are submitted via REST API (FastAPI) to an AWS EC2 instance. The backend runs inference using the YOLO model, processes the output, and returns a JSON payload of detected items and recommended recipes. Containerized with Docker.",
    technicalDecisions: [
      "Selected YOLO (You Only Look Once) for its state-of-the-art real-time detection performance.",
      "Deployed on AWS EC2 with Docker to ensure environmental consistency and easy scaling.",
      "Used FastAPI for the REST interface to handle asynchronous image uploads efficiently."
    ],
    tradeOffs: [
      "Traded model size for inference speed, ensuring users get immediate recipe feedback on mobile or web clients.",
      "Opted for a monolithic EC2 deployment initially for simplicity, rather than a more complex serverless inference architecture."
    ],
    impactOutcomes: [
      "Successfully deployed a functional, publicly accessible MVP.",
      "Achieved real-time, multi-label detection of food ingredients in complex scenes.",
      "Created a seamless workflow from raw image to actionable dietary recommendation."
    ],
    lessonsLearned: "Data quality and augmentation during the YOLO training phase are critical; the model struggles with overlapping ingredients if not explicitly trained on such scenarios.",
    futureImprovements: [
      "Migrate model inference to AWS SageMaker or Lambda for better cost-efficiency and auto-scaling.",
      "Enhance the recommendation algorithm using Collaborative Filtering based on user preferences."
    ]
  }
];
