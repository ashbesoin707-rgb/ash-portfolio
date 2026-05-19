import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    title: "抖音 (Douyin)",
    id: "@张佳乐",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400",
    rotate: -6,
    size: "w-64 h-80",
    pos: "top-[-40px] left-[5%]",
    type: "video",
    url: "https://www.douyin.com/user/MS4wLjABAAAAUUPHxpDJayvBAufJsNrgfRnjA_KgeG_IeRytu8SuxzAf5XeZ8Cx2cubk_X2pN7SW?from_tab_name=main"
  },
  {
    title: "小红书 (XHS)",
    id: "@阳光小大山",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=400",
    rotate: 8,
    size: "w-56 h-72",
    pos: "top-[20px] right-[10%]",
    type: "post",
    url: "https://www.xiaohongshu.com/user/profile/62d1fa49000000000303f0b1?xsec_token=ABiftSUa5X6MTw1x15hA-HFH6GIbSKwKY7aEQQqqrz-Ic%3D&xsec_source=pc_search"
  },
  {
    title: "小红书 (XHS)",
    id: "@李彦澤Eric",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=400",
    rotate: -3,
    size: "w-48 h-60",
    pos: "bottom-[0px] left-[15%]",
    type: "post",
    url: "https://www.xiaohongshu.com/user/profile/610949990000000001009815?xsec_token=ABJtKB7xkkSxrgId7VKwUhvaP5i1vB_oOmhTnJzUlQJgM%3D&xsec_source=pc_search"
  },
  {
    title: "抖音 (Douyin)",
    id: "@胥了个胥",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400",
    rotate: 5,
    size: "w-60 h-48",
    pos: "bottom-[40px] right-[20%]",
    type: "video",
    url: "https://www.douyin.com/user/MS4wLjABAAAAmzpTY9PkTIbYxlzzUyvAWtl4U4IgEUWeoqOyx1W-76kbKmlnumjNWu2jUrJ3QP17?from_tab_name=main"
  }
];

export default function Playground() {
  return (
    <div className="relative min-h-[600px] flex flex-col items-center justify-center py-20 overflow-visible">
      {/* Central Title */}
      <div className="z-20 text-center relative mb-20 pointer-events-none">
        <h2 className="text-6xl md:text-7xl font-serif font-medium mb-4">My Playground</h2>
        <p className="text-gray-400 max-w-sm mx-auto">
          记录、探索以及我正在运营的社交媒体账号。
        </p>
      </div>

      {/* Floating Cards Container */}
      <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1, 
              rotate: item.rotate,
              y: [0, -10, 0] 
            }}
            viewport={{ once: true }}
            transition={{ 
              opacity: { duration: 0.5, delay: idx * 0.1 },
              scale: { duration: 0.5, delay: idx * 0.1 },
              rotate: { duration: 0.5, delay: idx * 0.1 },
              y: { repeat: Infinity, duration: 4 + idx, ease: "easeInOut" }
            }}
            style={{ 
              left: item.pos.includes('left') ? item.pos.split(' ')[1].replace('left-[', '').replace(']', '') : 'auto',
              right: item.pos.includes('right') ? item.pos.split(' ')[1].replace('right-[', '').replace(']', '') : 'auto',
              top: item.pos.split(' ')[0].replace('top-[', '').replace(']', ''),
              bottom: item.pos.split(' ')[0].replace('bottom-[', '').replace(']', ''),
            }}
            className={`absolute pointer-events-auto cursor-pointer group`}
            onClick={() => item.url && window.open(item.url, '_blank')}
          >
            <div className={`relative ${item.size} bg-white p-2 rounded-xl shadow-2xl border border-gray-100 transition-transform hover:scale-105 active:scale-95`}>
              <div className="w-full h-full overflow-hidden rounded-lg relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-50 max-w-[140px]">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-0.5">{item.title}</p>
                <p className="text-[12px] font-bold text-black truncate">{item.id}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
