import React, { useState } from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function App() {
  const [activeView, setActiveView] = useState("fullstack");

  return (
    <div className="bg-gradient-to-br from-gray-900 to-indigo-950 text-gray-300">
      <Header />
      <main>
        <Hero activeView={activeView} setActiveView={setActiveView} />
        <Projects activeView={activeView} />
        <Skills activeView={activeView} />
        <Experience />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
