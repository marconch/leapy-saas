import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // 启用静态导出模式
  images: {
    unoptimized: true,  // 禁用图片优化API，使用原始图片
  },
};

export default nextConfig;
