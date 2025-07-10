import portfolioData from "../data/portfolioData";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="bg-gray-900 border-t border-gray-800">
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center items-center space-x-6 mb-4">
        <motion.a
          whileHover={{ scale: 1.2, color: "#fff" }}
          href={portfolioData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400"
        >
          <Github size={24} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, color: "#fff" }}
          href={portfolioData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400"
        >
          <Linkedin size={24} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, color: "#fff" }}
          href={`mailto:${portfolioData.email}`}
          className="text-gray-400"
        >
          <Mail size={24} />
        </motion.a>
      </div>
      <p className="text-gray-500">
        &copy; {new Date().getFullYear()} {portfolioData.name}. All Rights
        Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;