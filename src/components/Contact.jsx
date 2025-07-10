import { Send } from "lucide-react";
import portfolioData from "../data/portfolioData";
import Section from "./ui/Section";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => (
  <Section id="contact" title="Hubungi Saya" icon={Send}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="text-gray-300">
        <h3 className="text-2xl font-bold text-white mb-4">Mari Terhubung!</h3>
        <p className="mb-8 text-gray-400">
          Saya saat ini terbuka untuk peluang dan kolaborasi baru. Jangan ragu
          untuk menghubungi jika Anda memiliki proyek, ingin terhubung, atau
          hanya ingin menyapa!
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="w-5 h-5 text-indigo-400 mr-3" />
            <a
              href={`mailto:${portfolioData.email}`}
              className="hover:text-indigo-400 transition-colors"
            >
              {portfolioData.email}
            </a>
          </div>
          <div className="flex items-center">
            <Phone className="w-5 h-5 text-indigo-400 mr-3" />
            <span>{portfolioData.phone}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-indigo-400 mr-3" />
            <span>{portfolioData.location}</span>
          </div>
        </div>
      </div>
      <motion.form
        className="space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Nama Anda
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Email Anda
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center"
          whileHover={{ scale: 1.05, backgroundColor: "#4338ca" }}
          whileTap={{ scale: 0.95 }}
        >
          Kirim Pesan <Send className="w-5 h-5 ml-2" />
        </motion.button>
      </motion.form>
    </div>
  </Section>
);

export default Contact;
