import portfolioData from "../data/portfolioData";
import { containerVariants, itemVariants } from "../utils/animation";
import { motion, AnimatePresence } from "framer-motion";
import ViewToggle from "./ui/ViewToggle";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = ({ activeView, setActiveView }) => (
  <section
    id="hero"
    className="min-h-screen flex flex-col justify-center items-center text-white pt-20"
  >
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      key={activeView}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={itemVariants}
        className="relative inline-block mb-8"
      >
        <img
          src="/IMG_9498.jpg"
          alt="Avatar Danny Suggi Saputra"
          className="w-32 h-32 rounded-full ring-4 ring-indigo-500/50 object-cover"
        />
        <motion.span
          className="absolute bottom-0 right-0 block h-8 w-8 rounded-full bg-green-400 border-4 border-gray-900"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 300 }}
        />
      </motion.div>
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
      >
        Hi, I'm <span className="text-indigo-400">{portfolioData.name}</span>
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="text-xl md:text-2xl text-gray-300 font-medium mb-8"
      >
        {portfolioData.views[activeView].title}
      </motion.p>
      <motion.p
        variants={itemVariants}
        className="max-w-3xl mx-auto text-lg text-gray-400 mb-12"
      >
        {portfolioData.views[activeView].summary}
      </motion.p>
      <motion.div variants={itemVariants}>
        <ViewToggle activeView={activeView} setActiveView={setActiveView} />
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="flex justify-center items-center space-x-6"
      >
        <motion.a
          whileHover={{ scale: 1.2, color: "#fff" }}
          href={portfolioData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400"
        >
          <Github size={32} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, color: "#fff" }}
          href={portfolioData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400"
        >
          <Linkedin size={32} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, color: "#fff" }}
          href={`mailto:${portfolioData.email}`}
          className="text-gray-400"
        >
          <Mail size={32} />
        </motion.a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
