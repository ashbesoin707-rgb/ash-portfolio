import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import FeaturedWork from "./components/sections/FeaturedWork";
import RecentWork from "./components/sections/RecentWork";
import Experience from "./components/sections/Experience";
import About from "./components/sections/About";
import Playground from "./components/sections/Playground";
import Section from "./components/layout/Section";
import GridLines from "./components/layout/GridLines";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <Section id="home">
              <Hero />
            </Section>
            <Section id="featured" title="精选作品">
              <FeaturedWork />
            </Section>
          </motion.div>
        );
      case "playground":
        return (
          <motion.div
            key="playground"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
          >
            <Section id="playground" title="平台账号">
              <Playground />
            </Section>
          </motion.div>
        );
      case "work":
        return (
          <motion.div
            key="work"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <Section id="work" title="近期作品">
              <RecentWork />
            </Section>
          </motion.div>
        );
      case "experience":
        return (
          <motion.div
            key="experience"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Section id="experience" title="工作经历">
              <Experience />
            </Section>
          </motion.div>
        );
      case "about":
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Section id="about" className="border-b-0">
              <About />
            </Section>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-[#FCFCFC] relative overflow-x-hidden">
      <GridLines />
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="pt-20 lg:pt-24 min-h-[calc(100vh-160px)] z-10 relative">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>

      {/* Footer Meta */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-dashed border-gray-200 z-10 relative">
        <div className="flex justify-between items-center text-xs text-gray-400 font-medium uppercase tracking-widest">
          <p>© 2026 ASH 作品集</p>
          <p>基于 REACT & TAILWIND 构建</p>
        </div>
      </footer>
    </main>
  );
}

