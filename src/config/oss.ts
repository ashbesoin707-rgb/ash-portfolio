// Cloudflare R2 配置
export const R2_BASE_URL = "https://pub-9cabd75b3b4e45438fb0fa8a7c9dc74b.r2.dev";

// R2 文件名映射
export const videoMap: Record<string, string> = {
  // Brand Film
  knowin: "KNOWIN正片最终版（封面5）.M4V",
  like: "0313 粒刻绿final v50.mp4",
  electrox: "ElectroX_先导片_1920x1080_Final Delivery.mp4",
  "electrox-like": "ELECTROX粒刻_20260128093655.mov",
  guco: "GUCO.mp4",
  
  // Beauty
  sephora: "丝芙兰.mp4",
  "dermalogica-mask": "德美乐嘉多维面膜.mp4",
  
  // Food
  "driscolls-raspberry": "莓力暴击明星水果树莓_20260511095100.mp4",
  "kewpie-mood": "这个五一保持好心情的_20260511095125.mp4",
  "kewpie-sauce": "丘比三款面包酱.mp4",
  "kewpie-salad": "丘比沙拉火锅.mp4",
  
  // Space
  beidahu: "第3集 不滑雪的冬天，是不完整的冬天！.mp4",
  waldorf: "第5集这个圣诞我住进了外滩2号，只为目睹那个纸醉金迷的老上海。mp4.mp4",
  jangala: "我们以丝路风物为引全_20260424151344.mp4",
  senbo: "这个周末你想去哪玩？ #旅行大玩家 #旅行推荐官 #旅行 #度假酒店 - 抖音.mp4",
  
  // Short Video
  chengdu: "成都晶融汇.mov",
  mizone: "华东大区2025杨浦区迎新跑脉动2.m4v",
  wawa: "娃娃口播.mp4",
  "like-kate": "粒刻kate街拍.m4v",
  fanshou: "反手教学视频.mp4",
  dermalogica: "德美乐嘉广告1final.mp4",
  "eric-anta": "ERIC ANTA.mov",
};

export const getVideoUrl = (filename: string) => {
  const r2Filename = videoMap[filename] || filename;
  return `${R2_BASE_URL}/${encodeURIComponent(r2Filename)}`;
};

export const getThumbnailUrl = (filename: string) => {
  const name = filename.replace(/\.[^.]+$/, '.jpg');
  return `${R2_BASE_URL}/${name}`;
};
