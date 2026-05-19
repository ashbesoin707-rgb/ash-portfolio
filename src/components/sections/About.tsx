import { motion } from "motion/react";

export default function About() {
  return (
    <div className="space-y-24 py-20 max-w-4xl mx-auto">
      {/* First Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <p className="text-gray-400 font-serif">A bit about who I am...</p>
        <div className="clearfix">
          <div className="float-right ml-8 mb-4">
            <div className="bg-white p-3 pb-10 shadow-2xl border border-gray-100 rotate-2 transition-transform hover:rotate-0 duration-500 inline-block">
              <img 
                src="/images/about-bg.png" 
                alt="Workspace" 
                className="w-[280px] md:w-[320px] aspect-[4/5] object-cover"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif leading-[1.4] text-gray-900 font-medium italic">
            18岁那年，我第一次触碰到相机，那份热爱让我一头扎进光影的世界。为了深扎于此，我从商业摄像助理做起，在灯光影调与构图技巧中不断磨练。
          </h2>
        </div>
        <div className="h-0.5 w-12 bg-gray-200" />
        <p className="text-lg text-gray-500 font-serif italic leading-relaxed">
          Starting from a commercial studio, I learned the language of light and the precision of every shot.
        </p>
      </motion.div>

      {/* Middle Section - Growth */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-serif leading-[1.4] text-gray-900 font-medium italic">
          后来，短视频浪潮让我意识到动态影像的力量。我开始搜索资料、疯狂拉片自学剪辑。后来遇见了许多志同道合的小伙伴与信任我的甲方，让我在商业与艺术的平衡中沉淀了丰富的后期与实操经验。
        </h2>
        <div className="pt-4 flex gap-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
          <span>Editor</span>
          <span>/</span>
          <span>Director</span>
          <span>/</span>
          <span>DOP</span>
        </div>
      </motion.div>
    </div>
  );
}
