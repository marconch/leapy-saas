import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarList } from "@/components/BarList"

export const metadata: Metadata = {
  title: "行业应用",
  description: "领跃智能制造平台在各个行业的成功应用案例，涵盖汽车、电子、机械、化工等多个制造领域。",
}

const industryStats = [
  { name: "汽车制造", value: 45, color: "blue" },
  { name: "电子制造", value: 38, color: "emerald" },
  { name: "机械制造", value: 28, color: "violet" },
  { name: "化工制造", value: 22, color: "amber" },
  { name: "其他行业", value: 15, color: "rose" }
]

const applications = [
  {
    industry: "汽车制造",
    icon: "🚗",
    description: "整车及零部件制造企业的数字化转型",
    applications: [
      "总装车间数字化管理",
      "供应商协同平台",
      "质量追溯系统",
      "设备预测性维护"
    ],
    caseStudy: "某知名车企通过平台实现生产效率提升40%"
  },
  {
    industry: "电子制造",
    icon: "📱",
    description: "消费电子及工业电子产品制造",
    applications: [
      "SMT产线智能管控",
      "产品全生命周期管理",
      "供应链可视化",
      "智能排产优化"
    ],
    caseStudy: "大型电子制造商缺陷率降低60%"
  },
  {
    industry: "机械制造",
    icon: "⚙️",
    description: "通用机械及专用设备制造",
    applications: [
      "工艺标准化管理",
      "生产资源优化配置",
      "项目制生产管理",
      "成本精细化核算"
    ],
    caseStudy: "机械装备企业交期准确率提升至98%"
  },
  {
    industry: "化工制造",
    icon: "🧪",
    description: "精细化工及基础化工生产",
    applications: [
      "配方工艺管理",
      "安全生产监控",
      "环保数据管理",
      "批次质量控制"
    ],
    caseStudy: "化工企业安全事故率降至零"
  }
]

export default function IndustriesPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">行业应用案例</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          深耕制造业多年，为不同行业客户提供专业的数字化转型服务
        </p>
      </div>

      {/* Statistics */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>客户行业分布</CardTitle>
          </CardHeader>
          <CardContent>
            <BarList data={industryStats} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>服务成果</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">服务企业数量</span>
                <span className="font-bold">500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">覆盖生产线</span>
                <span className="font-bold">2000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">平均效率提升</span>
                <span className="font-bold text-emerald-500">35%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">客户满意度</span>
                <span className="font-bold text-emerald-500">98%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Industry Applications */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">典型应用场景</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {applications.map((app, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{app.icon}</span>
                  <CardTitle>{app.industry}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{app.description}</p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-sm">主要应用</h4>
                  {app.applications.map((application, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {application}
                    </div>
                  ))}
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    "{app.caseStudy}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">探索您的行业解决方案</h2>
        <p className="mt-2 text-muted-foreground">
          了解我们如何为您的行业提供专业的数字化转型服务
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button size="lg">查看更多案例</Button>
          <Button size="lg" variant="outline">联系行业专家</Button>
        </div>
      </div>
    </div>
  )
}