import { Server, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

const ViewToggle = ({ activeView, setActiveView }) => (
  <div className="flex justify-center my-10">
    <div className="relative flex p-1 bg-gray-800 rounded-full">
      <button
        onClick={() => setActiveView("fullstack")}
        className={`relative z-10 flex items-center justify-center w-40 sm:w-48 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
          activeView === "fullstack"
            ? "text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        <Server className="w-5 h-5 mr-2" />
        Full-Stack
      </button>
      <button
        onClick={() => setActiveView("ml")}
        className={`relative z-10 flex items-center justify-center w-40 sm:w-48 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
          activeView === "ml" ? "text-white" : "text-gray-400 hover:text-white"
        }`}
      >
        <BrainCircuit className="w-5 h-5 mr-2" />
        Machine Learning
      </button>
      <motion.div
        className="absolute top-1 bottom-1 w-1/2 bg-indigo-600 rounded-full"
        animate={{ x: activeView === "fullstack" ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </div>
  </div>
);

export default ViewToggle;
