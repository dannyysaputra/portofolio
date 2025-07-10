import { Code } from "lucide-react";
import portfolioData from "../data/portfolioData";
import { containerVariants, itemVariants } from "../utils/animation";
import Section from "./ui/Section";
import { AnimatePresence, motion } from "framer-motion";

const Skills = ({ activeView }) => {
  const filteredSkills = portfolioData.skills.filter(
    (s) => s.category === activeView
  );
  return (
    <Section id="skills" title="Keahlian & Teknologi" icon={Code}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg"
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-3"
              />
              <p className="text-gray-300 font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};

export default Skills;