import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "价格方案",
  description: "灵活的定价方案，满足不同规模企业的数字化转型需求。提供标准版、专业版和企业版多种选择。",
}

const plans = [
  {
    name: "标准版",
    price: "¥19,800",
    period: "/月",
    description: "适合中小型制造企业的协同管理基础需求",
    features: [
      "最多支持 20 个用户账号",
      "供应链管理(采购/销售/库存)",
      "标准报表模板",
      "邮件技术支持",
      "基础培训服务"
    ],
    buttonText: "开始试用",
    buttonHref: siteConfig.loginUrl,
    popular: false
  },
  {
    name: "专业版",
    price: "¥39,800",
    period: "/月",
    description: "适合中型制造企业的全面协同管理",
    features: [
      "最多支持 100 个用户账号",
      "供应链 + 生产制造 + 财务管理",
      "自定义报表和经营看板",
      "电话+在线技术支持",
      "现场培训服务",
      "API集成支持"
    ],
    buttonText: "立即开始",
    buttonHref: siteConfig.loginUrl,
    popular: true
  },
  {
    name: "企业版",
    price: "定制报价",
    period: "",
    description: "大型制造集团的多租户协同制造解决方案",
    features: [
      "无限用户与多租户/多组织",
      "全功能模块组合(含成本/投资/工作流)",
      "定制化开发服务",
      "7×24小时专属支持",
      "专业实施团队",
      "私有化部署选项"
    ],
    buttonText: "联系销售",
    buttonHref: "/contact",
    popular: false
  }
]

const faqs = [
  {
    question: "是否提供免费试用？",
    answer: "是的，我们为所有新客户提供30天免费试用期，您可以体验完整的产品功能。"
  },
  {
    question: "如何进行系统部署？",
    answer: "我们提供云端SaaS和私有化部署两种方式，根据您的需求和IT环境选择最适合的部署方案。"
  },
  {
    question: "包含哪些技术支持？",
    answer: "所有方案都包含技术支持，专业版和企业版提供更快速的响应和更全面的服务。"
  },
  {
    question: "可以随时升级方案吗？",
    answer: "当然可以，您可以根据业务发展需要随时升级到更高级的方案。"
  }
]

export default function PricingPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">选择适合您的方案</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          灵活的定价模式，从小规模试用到企业级部署，满足不同阶段的数字化转型需求
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative h-full ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  最受欢迎
                </span>
              </div>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <a href={plan.buttonHref}>{plan.buttonText}</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Comparison */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">功能对比</h2>
        <Card>
          <CardContent className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4">功能模块</th>
                    <th className="text-center py-4">标准版</th>
                    <th className="text-center py-4">专业版</th>
                    <th className="text-center py-4">企业版</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ["供应链管理(采购/销售/库存)", "✓", "✓", "✓"],
                    ["生产制造(工单/BOM/工艺/质检)", "基础", "✓", "✓"],
                    ["财务与成本管理", "✗", "✓", "✓"],
                    ["报表中心 / 经营分析", "标准报表", "自定义", "高级分析"],
                    ["工作流审批", "基础", "✓", "✓"],
                    ["API集成", "✗", "✓", "✓"],
                    ["多租户 / 多组织", "✗", "✗", "✓"],
                    ["私有化部署", "✗", "✗", "✓"]
                  ].map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-4 font-medium">{row[0]}</td>
                      <td className="text-center py-4">{row[1]}</td>
                      <td className="text-center py-4">{row[2]}</td>
                      <td className="text-center py-4">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">准备开始您的数字化转型？</h2>
        <p className="mt-2 text-muted-foreground">
          立即开始30天免费试用，或联系我们获取定制方案
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href={siteConfig.loginUrl}>免费试用</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/contact">联系销售</a>
          </Button>
        </div>
      </div>
    </div>
  )
}