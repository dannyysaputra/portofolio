import { sectionVariants } from "../../utils/animation";
import { motion } from "framer-motion";

const Section = ({ id, title, icon: Icon, children }) => (
  <motion.section
    id={id}
    className="py-16 md:py-24 px-4 md:px-8 lg:px-16 overflow-hidden"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center mb-12">
        {/* Render komponen Ikon jika ada (prop-nya diberikan) */}
        {Icon && <Icon className="w-8 h-8 text-indigo-400 mr-4" />}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </motion.section>
);

export default Section;
