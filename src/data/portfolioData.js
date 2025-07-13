import { desc } from "framer-motion/client";

const portfolioData = {
  name: "Danny Suggi Saputra",
  email: "dannysaputra3003@gmail.com",
  phone: "+6289531519787",
  location: "Bandung, West Java, Indonesia",
  linkedin: "https://linkedin.com/in/danny-suggi-saputra-7aa43b241",
  github: "https://github.com/dannyysaputra",
  views: {
    fullstack: {
      title: "Full-Stack Developer",
      summary:
        "Passionate and dedicated to exploring the world of technology. With a strong educational background in Information Engineering. Experienced using Laravel framework, Express JS and ReactJS to create full-stack websites. Seeking an opportunity to contribute to innovative projects and grow as a developer.",
    },
    ml: {
      title: "Machine Learning Engineer",
      summary:
        "Developer with a strong full-stack background, now focusing on Machine Learning. Driven by passion for data-driven solutions, I have independently built a portfolio of projects that include Image Recognition (TensorFlow, Keras) and Recommendation System. Ready to bring a unique perspective to AI product development.",
    },
  },
  skills: [
    // Full-Stack Skills
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
      category: "fullstack",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "fullstack",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      category: "fullstack",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "fullstack",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      category: "fullstack",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      category: "fullstack",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "fullstack",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      category: "fullstack",
    },

    // Machine Learning Skills
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      category: "ml",
    },
    {
      name: "TensorFlow",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      category: "ml",
    },
    {
      name: "PyTorch",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      category: "ml",
    },
    {
      name: "Scikit-learn",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
      category: "ml",
    },
    {
      name: "Pandas",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      category: "ml",
    },
    {
      name: "Numpy",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      category: "ml",
    },
    {
      name: "OpenCV",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      category: "ml",
    },
    {
      name: "YOLO",
      icon: "https://img.icons8.com/fluency/48/000000/neural-network.png",
      category: "ml",
    },
    {
      name: "Flask",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      category: "ml",
    },
    {
      name: "FastAPI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      category: "ml",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      category: "ml",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      category: "ml",
    },
  ],
  projects: [
    // ML Projects
    {
      title: "Kasep: Recipe Recommendation System",
      description:
        "An AI-powered system using YOLO object detection to identify food ingredients from an image and recommend recipes.",
      tags: ["Python", "YOLO", "PyTorch", "Flask", "Docker", "AWS"],
      image: "../../public/projek_kasep.png",
      live: "https://kasep-app.gagas.me/",
      repo: "https://github.com/orgs/kasep-capstone/repositories",
      category: "ml",
    },
    {
      title: "Stock Price Forecasting",
      description:
        "A comparative time series analysis using Moving Average (MA) and LSTM models to forecast stock prices.",
      tags: ["Python", "TensorFlow", "Keras", "Statsmodels"],
      image: "../../public/projek_forecast.png",
      live: "#",
      repo: "https://github.com/dannyysaputra/stock-price-forecasting",
      category: "ml",
    },
    {
      title: "Spotify Recommendation System",
      description:
        "A hybrid music recommendation system using Content-Based Filtering and Collaborative Filtering (ALS).",
      tags: ["Python", "Scikit-learn", "Implicit", "Cosine Similarity"],
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=Spotify+RecSys",
      live: "#",
      repo: "https://github.com/dannyysaputra/spotify-recommendation-system",
      category: "ml",
    },
    {
      title: "Rice Image Classification",
      description:
        "A CNN model to classify 5 rice varieties with 98.91% accuracy, optimized for on-device use with TFLite.",
      tags: ["TensorFlow", "Keras", "CNN", "TFLite"],
      image:
        "https://placehold.co/600x400/1e293b/94a3b8?text=Rice+Classification",
      live: "#",
      repo: "#",
      category: "ml",
    },
    // Full-Stack Projects
    {
      title: "Fastwork",
      description:
        "An AI-powered recruitment system to streamline hiring by automating candidate screening and job matching using Machine Learning and LLM.",
      tags: ["React.js", "TypeScript", "FastAPI", "Machine Learning", "LLM"],
      image: "https://placehold.co/600x400/1a202c/718096?text=Fastwork",
      live: "#",
      repo: "#",
      category: "fullstack",
    },
    {
      title: "EduConnect",
      description:
        "Top 100 Google Solution Challenge project providing real-time information on the distribution of teachers and facilities across schools in Indonesia.",
      tags: ["React.js", "Next.js", "Express.js", "Google Cloud"],
      image: "https://placehold.co/600x400/1a202c/718096?text=EduConnect",
      live: "#",
      repo: "#",
      category: "fullstack",
    },
    {
      title: "Kelas Digital",
      description:
        "An innovative online learning platform with a microservices architecture, featuring course management and a payment gateway.",
      tags: ["Laravel", "ExpressJS", "Next.js", "React.js", "Midtrans"],
      image: "https://placehold.co/600x400/1a202c/718096?text=Kelas+Digital",
      live: "#",
      repo: "#",
      category: "fullstack",
    },
  ],
  experiences: [
    {
      role: "Machine Learning Cohort",
      company: "DBS Coding Camp (Dicoding)",
      period: "Feb 2025 - Jun 2025",
      description:
        "Developed a capstone project with YOLO-based image classification and a content-based recipe recommendation system. Mastered the end-to-end data project workflow.",
    },
    {
      role: "Software Engineer",
      company: "PT. Dwi Medisoft Indonesia",
      period: "Oct 2024 - Mar 2025",
      description:
        "In a project-based role, I developed a Hospital Management Information System (SIMRS) using Vue.js and Laravel. I successfully integrated laboratory equipment with the web-based laboratory management application, enhancing its core functionality."
    },
    {
      role: "Full-Stack Web Javascript",
      company: "SYNRGY Academy",
      period: "Mar 2024 - Sep 2024",
      description:
        "Developed full-stack web apps using React and Express, improving development efficiency by 30%. Built an accessible digital banking project, increasing user engagement by 25%.",
    },
    {
      role: "Mentee Studi Independen HCAI",
      company: "Infinite Learning",
      period: "Aug 2023 - Jan 2024",
      description:
        "As a corporate partner in the Kampus Merdeka (MSIB) program, Infinite Learning offers a unique opportunity to gain advanced IT knowledge and the RHCSA certification. This initiative equips participants with essential technical skills while fostering professional connections for future career development.",
    },
    {
      role: "Back End Developer Intern",
      company: "myECO Indonesia",
      period: "Aug 2023 - Dec 2023",
      description:
        "Engineered and optimized APIs using Node.js and MongoDB, enhancing system performance by 30%. Implemented MQTT protocol, reducing communication latency by 25%.",
    },
    {
      role: "System Analyst Intern",
      company: "PT. Bisa Artifisial Indonesia",
      period: "Dec 2020 - Jul 2021",
      description:
        "Drove a 30% increase in project efficiency and a 25% reduction in user complaints through comprehensive research and strategic UI/UX design. Collaborated closely with developer teams to build and launch applications, enhancing overall functionality and user satisfaction by 40%.",
    },
  ],
  awards: [
    {
      title: "Top 100 Google Solution Challenge",
      by: "Google for Developers",
      year: "2024",
      description:
        "Led the development of 'EduConnect', an app for improving educational resource allocation in Indonesia.",
    },
    {
      title: "3rd Winner Hackathon IT Fair XIII",
      by: "HIMATIF UIN Bandung",
      year: "2024",
      description:
        "Contributed as a Backend Developer for the 'ULP' application to optimize psychology services on campus.",
    },
    {
      title: "Top 13 Hackfest Indonesia",
      by: "GDSC Indonesia",
      year: "2024",
      description:
        "Led 'Team Basreng' as a Hustler to develop the 'EduConnect' application, ranking 13th out of 650+ teams.",
    },
    {
      title: "Red Hat Certified System Administrator (RHCSA)",
      by: "Red Hat",
      year: "2023",
      description:
        "Official certification validating skills in Red Hat Enterprise Linux system administration.",
    },
  ],
};

export default portfolioData;
