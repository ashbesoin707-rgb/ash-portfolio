import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { getVideoUrl, getThumbnailUrl } from "../../config/oss";

const selectedWorks = [
  {
    title: "ElectroX 先导片",
    subtitle: "Brand Film / 科技未来",
    videoFile: "electrox.mp4",
    size: "col-span-2 row-span-1"
  },
  {
    title: "敦煌碧玥酒店 (JANGALA)",
    subtitle: "Space / 丝路风物",
    videoFile: "jangala.mp4",
    size: "col-span-1 row-span-2"
  },
  {
    title: "丘比 (Kewpie) - 三款面包酱",
    subtitle: "Food / 产品展示",
    videoFile: "kewpie-sauce.mp4",
    size: "col-span-1 row-span-1"
  },
];

function VideoModal({ work, onClose }: { work: { title: string; videoFile: string }; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm"
        >
          关闭
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-white text-lg font-medium mb-3">{work.title}</h3>

        <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl">
          <video
            src={getVideoUrl(work.videoFile)}
            className="w-full aspect-video object-contain"
            controls
            autoPlay
            playsInline
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FeaturedWork() {
  const [selectedWork, setSelectedWork] = useState<{ title: string; videoFile: string } | null>(null);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 gap-8">
        {selectedWorks.map((work, idx) => (
          <motion.div
            key={work.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative overflow-hidden rounded-3xl bg-gray-100 cursor-pointer"
            onClick={() => setSelectedWork(work)}
          >
            <video
              src={getVideoUrl(work.videoFile)}
              poster={getThumbnailUrl(work.videoFile)}
              className="w-full h-[400px] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              muted
              loop
              playsInline
              preload="metadata"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity bg-black/10">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <p className="text-white/70 text-xs font-bold tracking-widest uppercase mb-1">{work.subtitle}</p>
              <h3 className="text-white text-2xl font-serif font-medium">{work.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-end">
        <button className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-black transition-colors group">
          查看更多作品集
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <AnimatePresence>
        {selectedWork && (
          <VideoModal
            work={selectedWork}
            onClose={() => setSelectedWork(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
