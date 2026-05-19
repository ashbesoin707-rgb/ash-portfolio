import { motion } from "motion/react";
import { Send } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const navItems = [
    { zh: "首页", en: "HOME", id: "home" },
    { zh: "平台账号", en: "PLAYGROUND", id: "playground" },
    { zh: "作品", en: "WORK", id: "work" },
    { zh: "经历", en: "EXPERIENCE", id: "experience" },
    { zh: "关于", en: "ABOUT", id: "about" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-1 p-1 bg-white/80 backdrop-blur-md rounded-full border border-gray-100 shadow-sm transition-all hover:shadow-md"
      >
        {navItems.map((item) => (
          <button
            key={item.en}
            onClick={() => onTabChange(item.id)}
            className={`px-4 py-1.5 rounded-full transition-all flex flex-col items-center justify-center leading-none cursor-pointer ${
              activeTab === item.id 
                ? "bg-gray-100 text-black shadow-inner" 
                : "text-gray-500 hover:text-black hover:bg-gray-50/50"
            }`}
          >
            <span className="text-[12px] font-bold tracking-tight">{item.zh}</span>
            <span className="text-[8px] font-medium opacity-60 tracking-widest mt-0.5">{item.en}</span>
          </button>
        ))}
      </motion.div>
    </nav>
  );
}
