import { Star } from "lucide-react";
import portfolioData from "../data/portfolioData";
import { motion } from "framer-motion";
import Section from "./ui/Section";
import { Briefcase } from "lucide-react";

const Experience = () => (
  <Section id="experience" title="Pengalaman Kerja" icon={Star}>
    <div className="relative border-l-2 border-indigo-500/30">
      {portfolioData.experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="mb-12 ml-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-500 rounded-full -left-3 ring-8 ring-gray-900">
            <Briefcase className="w-3 h-3 text-white" />
          </span>
          <h3 className="flex items-center mb-1 text-xl font-semibold text-white">
            {exp.role}{" "}
            <span className="text-indigo-400 text-sm font-medium ml-3 mr-2 px-2.5 py-0.5 rounded-full bg-indigo-500/20">
              {exp.company}
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
            {exp.period}
          </time>
          <p className="text-gray-400">{exp.description}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Experience;