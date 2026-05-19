import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        {/* Simple SVG Logo */}
        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
          </svg>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl"
      >
        <h1 className="text-6xl md:text-7xl font-serif font-medium leading-[1.1] mb-6 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
          Hello, I'm ASH.
        </h1>
        <p className="text-4xl md:text-5xl font-serif text-gray-400 leading-tight">
          我是一名 <span className="italic text-gray-600">摄像师</span>，专注于视觉效果和内容创作。
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 flex flex-wrap items-center gap-4"
      >
        <button className="bg-black text-white px-8 py-4 rounded-full font-medium transition-transform hover:scale-105 active:scale-95">
          聊一聊
        </button>
        <div className="bg-gray-50 border border-gray-100 px-6 py-4 rounded-full">
          <p className="text-sm text-gray-500">
            目前处于自由职业身份 <br />
            <span className="text-gray-400">可接视觉创作相关项目</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
