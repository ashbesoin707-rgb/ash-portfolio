import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { getVideoUrl, getThumbnailUrl } from "../../config/oss";

const categories = ["All", "Beauty", "Brand Film", "Food", "Space", "Short Video"];

const works = [
  {
    title: "KNOWIN 品牌形象片",
    category: "Brand Film",
    description: "潮流品牌视觉叙事，通过动态影像展现品牌年轻态度与潮流文化。",
    videoFile: "knowin.mp4",
  },
  {
    title: "粒刻 - 绿意新生",
    category: "Brand Film",
    description: "清新自然的品牌调性，以绿色为主视觉元素，传递健康活力的品牌理念。",
    videoFile: "like.mp4",
  },
  {
    title: "ElectroX 先导片",
    category: "Brand Film",
    description: "科技感十足的品牌先导片，通过前沿视觉语言诠释品牌的创新精神与未来感。",
    videoFile: "electrox.mp4",
  },
  {
    title: "ElectroX × 粒刻",
    category: "Brand Film",
    description: "品牌联名视觉作品，融合科技与自然的创意碰撞，展现跨界合作的无限可能。",
    videoFile: "electrox-like.mp4",
  },
  {
    title: "高端珠宝 GUCO",
    category: "Brand Film",
    description: "通过极致的光影捕捉，展现产品匠心工艺与时间的故事。",
    videoFile: "guco.mp4",
  },
  {
    title: "德美乐嘉 (Dermalogica) - 多维面膜",
    category: "Short Video",
    description: "实验室级视觉呈现，通过通透的光影与精准的镜头调度，诠释产品的专业科研之美。",
    videoFile: "dermalogica.mp4",
  },
  {
    title: "丝芙兰 (Sephora) - 我的底妆",
    category: "Beauty",
    description: "灵动剪辑结合多元影像，打破重重标准，捕捉每一种肤色与态度的极致可能。",
    videoFile: "sephora.mp4",
  },
  {
    title: "怡颗莓 (Driscoll's) - 莓力暴击",
    category: "Food",
    description: "明星水果树莓的视觉呈现，通过高帧率捕捉浆果的诱人质感与新鲜活力。",
    videoFile: "driscolls-raspberry.mp4",
  },
  {
    title: "怡颗莓 (Driscoll's) - 这个五一保持好心情",
    category: "Food",
    description: "节日主题创意短片，探索果园结合种植工艺，传递温暖治愈的品牌调性。",
    videoFile: "kewpie-mood.mp4",
  },
  {
    title: "丘比 (Kewpie) - 三款面包酱",
    category: "Food",
    description: "多口味产品展示，通过精致的镜头语言诠释不同风味的美味诱惑。",
    videoFile: "kewpie-sauce.mp4",
  },
  {
    title: "丘比 (Kewpie) - 沙拉火锅",
    category: "Food",
    description: "打破传统沙拉冷餐印象，通过精致场景搭建传递温暖治愈的食味美学。",
    videoFile: "kewpie-salad.mp4",
  },
  {
    title: "吉林北大湖滑雪场",
    category: "Space",
    description: "不滑雪的冬天是不完整的冬天，通过动感镜头捕捉冬日粉雪与壮阔云海的极致震撼。",
    videoFile: "beidahu.mp4",
  },
  {
    title: "上海外滩华尔道夫酒店",
    category: "Space",
    description: "住进外滩2号，在《2046》般的影调中穿梭于老上海的旧梦与现代魔登。",
    videoFile: "waldorf.mp4",
  },
  {
    title: "敦煌碧玥酒店 (JANGALA)",
    category: "Space",
    description: "以丝路风物为引，探索现代建筑语言与千年丝路景观的情感对位。",
    videoFile: "jangala.mp4",
  },
  {
    title: "杭州开元森泊度假酒店",
    category: "Space",
    description: "童话森林般的沉浸式度假体验，捕捉自然空间中灵动、治愈的亲子时刻。",
    videoFile: "senbo.mp4",
  },
  {
    title: "成都晶融汇",
    category: "Short Video",
    description: "城市商业空间的视觉呈现，通过动感镜头捕捉现代都市的活力与时尚气息。",
    videoFile: "chengdu.mp4",
  },
  {
    title: "脉动+ (Mizone) - 杨浦区迎新跑",
    category: "Short Video",
    description: "活力满满的赛事记录，通过快节奏剪辑与高饱和色彩，传递健康奔跑的品牌活力。",
    videoFile: "mizone.mp4",
  },
  {
    title: "娃娃口播",
    category: "Short Video",
    description: "生动自然的口播内容，通过亲切的表达方式传递品牌信息与产品亮点。",
    videoFile: "wawa.mp4",
  },
  {
    title: "粒刻 Kate 街拍",
    category: "Short Video",
    description: "时尚街拍风格短片，捕捉都市潮流与品牌调性的完美融合。",
    videoFile: "like-kate.mp4",
  },
  {
    title: "反手教学视频",
    category: "Short Video",
    description: "专业运动教学内容，通过清晰的步骤演示与动感剪辑提升学习体验。",
    videoFile: "fanshou.mp4",
  },
  {
    title: "德美乐嘉 - 多维面膜",
    category: "Beauty",
    description: "产品展示短视频，通过精致的镜头语言诠释护肤产品的专业品质。",
    videoFile: "dermalogica-mask.mp4",
  },
  {
    title: "ERIC ANTA",
    category: "Short Video",
    description: "时尚品牌视觉短片，展现独特的风格与创意表达。",
    videoFile: "eric-anta.mp4",
  },
];

function VideoModal({ work, onClose }: { work: { title: string; videoFile: string }; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

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
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm"
        >
          关闭
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 视频标题 */}
        <h3 className="text-white text-lg font-medium mb-3">{work.title}</h3>

        {/* 视频播放器 */}
        <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl">
          <video
            ref={videoRef}
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

export default function RecentWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedWork, setSelectedWork] = useState<{ title: string; videoFile: string } | null>(null);

  const filteredWorks = activeCategory === "All"
    ? works
    : works.filter(work => work.category === activeCategory);

  return (
    <div className="space-y-16">
      {/* Title & Description Header */}
      <div className="max-w-2xl">
        <h2 className="text-6xl font-serif font-medium mb-6">Work</h2>
        <p className="text-xl text-gray-400 font-light leading-relaxed">
          这里展示了我近期完成的部分项目，涵盖了从品牌视觉到产品创意拍摄的多元探索。
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-gray-100 pb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-lg transition-all relative py-2 ${
              activeCategory === cat ? "text-black font-medium" : "text-gray-400 hover:text-black"
            }`}
          >
            {cat}
            {activeCategory === cat && (
              <motion.div
                layoutId="activeCategory"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
              />
            )}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-y-16">
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((work) => (
            <motion.div
              layout
              key={work.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer"
              onClick={() => work.videoFile && setSelectedWork(work)}
            >
              <div className="aspect-video overflow-hidden rounded-2xl bg-gray-900 mb-6 border border-gray-100 shadow-sm transition-all group-hover:shadow-2xl relative">
                {work.videoFile ? (
                  <>
                    <video
                      src={getVideoUrl(work.videoFile)}
                      poster={getThumbnailUrl(work.videoFile)}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => {
                        e.currentTarget.play();
                      }}
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
                  </>
                ) : (
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{work.title}</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed truncate-2-lines">
                {work.description}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Video Modal */}
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
