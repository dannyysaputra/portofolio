export const profile = {
  name: "Danny Suggi Saputra",
  displayName: "Danny",
  role: "AI Automation & Backend Engineer",
  email: "dannysaputra3003@gmail.com",
  github: "https://github.com/dannyysaputra",
  linkedin: "https://linkedin.com/in/dannyysaputra",
  cvLink: "/Danny_Suggi_Saputra_CV.pdf",
  location: "Bandung, Indonesia",
  siteUrl: "https://portofolio-danny.vercel.app",
  profileImageUrl: "/IMG_9498.jpg",
  positioning:
    "I help businesses replace manual work with AI automation and reliable backend systems, delivered fast using an agentic AI workflow.",
  headline: "Turn hours of manual work into systems that run on their own.",
  subheadline:
    "I build AI automation and reliable backend systems for businesses and startups, delivered fast with a team of AI coding agents that I direct.",
  availability: "Available for freelance and contract projects",
  education: {
    degree: "Informatics Engineering",
    school: "UIN Sunan Gunung Djati Bandung",
    date: "Aug 2022 – Jul 2026",
    note: "GPA 3.87 / 4.00",
  },
};

export type Experience = {
  title: string;
  company: string;
  date: string;
  notes: string;
};

export const experience: Experience[] = [
  {
    title: "Product Engineer",
    company: "Solve Education!",
    date: "Apr 2026 – Present",
    notes: "Product engineering and workflow automation for an education technology organization.",
  },
  {
    title: "Backend Developer (part-time)",
    company: "Studyo.io",
    date: "Jan 2026 – Present",
    notes: "Backend for in-app purchases, subscriptions, automated payouts, and admin analytics.",
  },
  {
    title: "Backend Developer",
    company: "PT Muslim Seratus Satu",
    date: "Nov 2025 – Dec 2025",
    notes: "REST APIs and event-driven services on Kafka for real-time data sync and notifications.",
  },
  {
    title: "Software Engineer",
    company: "PT Dwi Medisoft Indonesia",
    date: "Oct 2024 – Mar 2025",
    notes: "Hospital information system (SIMRS) in Vue.js and Laravel, with lab-equipment integration at near-100% data accuracy.",
  },
];

export type Award = {
  title: string;
  issuer: string;
  date: string;
  detail?: string;
};

export const awards: Award[] = [
  {
    title: "Top 100, Google Solution Challenge 2024",
    issuer: "Google for Developers",
    date: "Apr 2024",
    detail: "Led the team that built EduConnect.",
  },
  {
    title: "3rd Winner, Hackathon IT Fair XIII",
    issuer: "HIMATIF UIN Sunan Gunung Djati Bandung",
    date: "Feb 2024",
  },
  {
    title: "Top 13, Hackfest Indonesia",
    issuer: "GDSC Indonesia",
    date: "Jan 2024",
    detail: "Out of 650+ registered teams.",
  },
];

export const certifications: Award[] = [
  {
    title: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Red Hat",
    date: "Dec 2023",
  },
];
