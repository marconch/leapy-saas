import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "关于我们",
  description: "了解领跃科技团队，我们致力于为制造企业提供领先的数字化转型解决方案，推动中国制造业的智能化升级。",
}

const team = [
  {
    name: "张明",
    role: "创始人 & CEO",
    description: "15年制造业信息化经验，曾任知名制造企业CIO",
    image: "👨‍💼"
  },
  {
    name: "李华",
    role: "技术总监",
    description: "资深软件架构师，专注工业软件开发10余年",
    image: "👨‍💻"
  },
  {
    name: "王丽",
    role: "产品总监",
    description: "深耕制造业务流程，产品设计经验丰富",
    image: "👩‍💼"
  },
  {
    name: "刘强",
    role: "解决方案总监",
    description: "制造业数字化转型专家，服务过众多知名企业",
    image: "👨‍🔧"
  }
]

const values = [
  {
    title: "创新驱动",
    description: "持续技术创新，为客户提供领先的解决方案",
    icon: "💡"
  },
  {
    title: "客户至上",
    description: "深入理解客户需求，提供超预期的服务体验",
    icon: "🎯"
  },
  {
    title: "专业专注",
    description: "专注制造业领域，打造专业的产品和服务",
    icon: "🔧"
  },
  {
    title: "合作共赢",
    description: "与客户、合作伙伴携手共创美好未来",
    icon: "🤝"
  }
]

const milestones = [
  { year: "2018", event: "公司成立，获得天使轮投资" },
  { year: "2019", event: "发布第一版MES产品，服务首批客户" },
  { year: "2020", event: "完成A轮融资，团队扩展到50人" },
  { year: "2021", event: "服务客户突破100家，产品功能全面升级" },
  { year: "2022", event: "获得行业权威认证，开拓海外市场" },
  { year: "2023", event: "完成B轮融资，成立研发中心" },
  { year: "2024", event: "客户数量超过500家，成为行业领先品牌" }
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">关于领跃科技</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          专注制造业数字化转型，致力于成为中国领先的工业软件服务商
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              使命愿景
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">使命</h3>
                <p className="text-muted-foreground text-sm">
                  通过创新的数字化技术，助力中国制造企业实现智能化转型，提升全球竞争力
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">愿景</h3>
                <p className="text-muted-foreground text-sm">
                  成为中国制造业数字化转型的领导者，推动制造业高质量发展
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              发展数据
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">服务客户</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">团队成员</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2000+</div>
                <div className="text-sm text-muted-foreground">生产线</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6年</div>
                <div className="text-sm text-muted-foreground">行业经验</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Core Values */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">核心价值观</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="text-3xl mb-2">{value.icon}</div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">核心团队</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="text-4xl mb-2">{member.image}</div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Company Timeline */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">发展历程</h2>
        <Card>
          <CardContent className="p-8">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {milestone.year}
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-sm">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Careers Section */}
      <div className="mt-16" id="careers">
        <h2 className="text-3xl font-bold text-center mb-8">加入我们</h2>
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              我们正在寻找有激情、有才华的伙伴加入团队，一起推动制造业的数字化变革
            </p>
            <div className="grid gap-4 md:grid-cols-3 mb-8">
              <div>
                <h3 className="font-semibold mb-2">技术研发</h3>
                <p className="text-sm text-muted-foreground">软件工程师、产品经理、UI/UX设计师</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">销售市场</h3>
                <p className="text-sm text-muted-foreground">销售经理、市场专员、解决方案顾问</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">客户成功</h3>
                <p className="text-sm text-muted-foreground">技术支持、实施顾问、培训师</p>
              </div>
            </div>
            <Button size="lg">查看职位开放</Button>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">想要了解更多？</h2>
        <p className="mt-2 text-muted-foreground">
          联系我们，开启您的数字化转型之旅
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button size="lg">联系我们</Button>
          <Button size="lg" variant="outline">下载公司介绍</Button>
        </div>
      </div>
    </div>
  )
}