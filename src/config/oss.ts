export const OSS_BASE_URL = "https://ashcreat.oss-cn-shanghai.aliyuncs.com";
export const getVideoUrl = (filename: string) => `${OSS_BASE_URL}/videos/${filename}`;
export const getThumbnailUrl = (filename: string) => {
  const name = filename.replace(/\.[^.]+$/, '.jpg');
  return `${OSS_BASE_URL}/thumbnails/${name}`;
};
