import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "解决方案",
  description: "针对不同行业和场景的智能制造解决方案，满足汽车、电子、机械、化工等行业的数字化转型需求。",
}

const solutions = [
  {
    id: "automotive",
    name: "汽车制造解决方案",
    description: "专为汽车制造行业设计的数字化解决方案，支持复杂的装配工艺和严格的质量要求",
    benefits: ["提升装配效率30%", "降低缺陷率85%", "实现全流程追溯", "优化供应链协同"],
    image: "🚗"
  },
  {
    id: "electronics",
    name: "电子制造解决方案",
    description: "适用于电子产品制造的精密生产管理，支持高度自动化的生产线",
    benefits: ["提高产线柔性", "精确库存管理", "实时质量监控", "快速产品切换"],
    image: "📱"
  },
  {
    id: "machinery",
    name: "机械制造解决方案",
    description: "面向机械制造企业的生产管理解决方案，优化复杂工艺流程",
    benefits: ["工艺标准化", "设备综合效率提升", "减少在制品积压", "交期准确性提升"],
    image: "⚙️"
  },
  {
    id: "chemical",
    name: "化工制造解决方案",
    description: "专注化工行业的安全生产和过程控制，确保生产安全和产品质量",
    benefits: ["安全风险管控", "工艺参数优化", "能耗成本降低", "环保合规管理"],
    image: "🧪"
  }
]

export default function SolutionsPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">行业解决方案</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          基于深度行业理解，为不同制造领域提供针对性的数字化转型解决方案
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {solutions.map((solution) => (
          <Card key={solution.id} className="h-full">
            <CardHeader>
              <div className="text-4xl mb-4">{solution.image}</div>
              <CardTitle className="text-xl">{solution.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{solution.description}</p>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">核心价值</h4>
                {solution.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {benefit}
                  </div>
                ))}
              </div>
              <Button className="mt-6 w-full" variant="outline">
                查看详细方案
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Process Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">实施流程</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "需求调研", desc: "深入了解企业现状和需求" },
            { step: "02", title: "方案设计", desc: "制定定制化解决方案" },
            { step: "03", title: "系统部署", desc: "快速部署和系统集成" },
            { step: "04", title: "培训支持", desc: "全面培训和持续支持" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">寻找适合您的解决方案？</h2>
        <p className="mt-2 text-muted-foreground">
          我们的专家将为您量身定制最优解决方案
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button size="lg">免费咨询</Button>
          <Button size="lg" variant="outline">查看案例</Button>
        </div>
      </div>
    </div>
  )
}