// Cloudflare R2 配置
export const R2_BASE_URL = "https://pub-9cabd75b3b4e45438fb0fa8a7c9dc74b.r2.dev";

export const getVideoUrl = (filename: string) => `${R2_BASE_URL}/${filename}`;
export const getThumbnailUrl = (filename: string) => {
  const name = filename.replace(/\.[^.]+$/, '.jpg');
  return `${R2_BASE_URL}/${name}`;
};
