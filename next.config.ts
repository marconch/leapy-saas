import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 不再使用静态导出：联系表单需要服务端 API 路由（/api/contact）持久化数据
  images: {
    unoptimized: true, // 使用原始图片，无需图片优化服务
  },
  // better-sqlite3（原生模块）与 nodemailer 不应被打包，交由 Node 运行时加载
  serverExternalPackages: ["better-sqlite3", "nodemailer"],
};

export default nextConfig;
