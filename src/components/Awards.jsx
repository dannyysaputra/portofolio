import { Award } from "lucide-react";
import { containerVariants, itemVariants } from "../utils/animation";
import portfolioData from "../data/portfolioData";
import Section from "./ui/Section";
import { motion } from "framer-motion";

const Awards = () => (
  <Section id="awards" title="Penghargaan & Sertifikasi" icon={Award}>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {portfolioData.awards.map((award, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-indigo-500/50 transition-colors duration-300"
        >
          <div className="flex items-start">
            <div className="bg-indigo-500/20 p-2 rounded-full mr-4">
              <Award className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{award.title}</h3>
              <p className="text-sm text-gray-400 mb-2">
                {award.by} - {award.year}
              </p>
              <p className="text-gray-300">{award.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);

export default Awards;