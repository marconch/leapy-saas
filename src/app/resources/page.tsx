import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "资源中心",
  description: "领跃智能制造平台的技术文档、API参考、最佳实践指南和培训资源，助力用户更好地使用和部署系统。",
}

const resourceCategories = [
  {
    title: "技术文档",
    description: "详细的产品文档和使用指南",
    icon: "📚",
    items: [
      { title: "快速入门指南", description: "5分钟了解平台核心功能", type: "文档" },
      { title: "系统部署手册", description: "完整的部署和配置说明", type: "文档" },
      { title: "用户操作手册", description: "详细的功能使用说明", type: "文档" },
      { title: "故障排除指南", description: "常见问题解决方案", type: "文档" }
    ]
  },
  {
    title: "API 参考",
    description: "开发者集成和定制开发资源",
    icon: "🔧",
    items: [
      { title: "REST API 文档", description: "完整的API接口说明", type: "API" },
      { title: "SDK 开发包", description: "多语言SDK和示例代码", type: "SDK" },
      { title: "Webhook 集成", description: "事件通知和回调机制", type: "集成" },
      { title: "第三方集成", description: "ERP、OA等系统集成指南", type: "集成" }
    ]
  },
  {
    title: "最佳实践",
    description: "行业经验分享和优化建议",
    icon: "💡",
    items: [
      { title: "生产管理最佳实践", description: "提升生产效率的方法", type: "指南" },
      { title: "质量管控策略", description: "质量管理体系建设", type: "指南" },
      { title: "设备维护规范", description: "预测性维护实施方案", type: "指南" },
      { title: "数据分析应用", description: "制造数据价值挖掘", type: "指南" }
    ]
  },
  {
    title: "培训中心",
    description: "在线培训课程和认证项目",
    icon: "🎓",
    items: [
      { title: "基础操作培训", description: "平台基本功能使用", type: "课程" },
      { title: "高级功能培训", description: "深度功能和定制开发", type: "课程" },
      { title: "管理员认证", description: "系统管理员资格认证", type: "认证" },
      { title: "在线研讨会", description: "定期的技术分享会", type: "活动" }
    ]
  }
]

const downloadResources = [
  {
    title: "产品白皮书",
    description: "全面了解智能制造解决方案",
    size: "2.3 MB",
    format: "PDF"
  },
  {
    title: "ROI 计算器",
    description: "投资回报率评估工具",
    size: "1.1 MB",
    format: "Excel"
  },
  {
    title: "实施检查清单",
    description: "项目实施关键节点检查",
    size: "0.8 MB",
    format: "PDF"
  },
  {
    title: "行业案例集",
    description: "各行业成功案例合集",
    size: "5.2 MB",
    format: "PDF"
  }
]

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">资源中心</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          丰富的技术资源和学习材料，助力您更好地使用和部署智能制造平台
        </p>
      </div>

      {/* Quick Access */}
      <div className="mt-12 grid gap-4 md:grid-cols-4">
        {[
          { title: "快速入门", desc: "新用户必读", icon: "🚀" },
          { title: "API 文档", desc: "开发者资源", icon: "⚡" },
          { title: "视频教程", desc: "可视化学习", icon: "🎥" },
          { title: "技术支持", desc: "获取帮助", icon: "🆘" }
        ].map((item, index) => (
          <Card key={index} className="text-center cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm text-muted-foreground">{item.desc}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Resource Categories */}
      <div className="mt-16 space-y-12">
        {resourceCategories.map((category, index) => (
          <div key={index}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{category.icon}</span>
              <div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {category.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {item.description}
                        </p>
                        <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                          {item.type}
                        </span>
                      </div>
                      <Button variant="outline" size="sm" className="ml-4">
                        查看
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Downloads Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">热门下载</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {downloadResources.map((resource, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {resource.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{resource.format}</span>
                      <span>•</span>
                      <span>{resource.size}</span>
                    </div>
                  </div>
                  <Button size="sm">
                    下载
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Support Section */}
      <div className="mt-16">
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">需要更多帮助？</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              我们的技术专家团队随时为您提供支持，无论是产品使用问题还是技术集成需求
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <div className="text-2xl">💬</div>
                <h3 className="font-semibold">在线客服</h3>
                <p className="text-sm text-muted-foreground">工作日 9:00-18:00</p>
                <Button variant="outline" size="sm">开始对话</Button>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">📧</div>
                <h3 className="font-semibold">邮件支持</h3>
                <p className="text-sm text-muted-foreground">support@leapy.example.com</p>
                <Button variant="outline" size="sm">发送邮件</Button>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">📱</div>
                <h3 className="font-semibold">电话支持</h3>
                <p className="text-sm text-muted-foreground">400-123-4567</p>
                <Button variant="outline" size="sm">立即致电</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Community Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">加入社区</h2>
        <p className="text-muted-foreground mb-6">
          与其他用户交流经验，获取最新产品动态
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">微信群</Button>
          <Button size="lg" variant="outline">技术论坛</Button>
          <Button size="lg" variant="outline">用户大会</Button>
        </div>
      </div>
    </div>
  )
}