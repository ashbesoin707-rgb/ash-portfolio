import { motion } from "motion/react";
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

export default function FeaturedWork() {
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
    </div>
  );
}
