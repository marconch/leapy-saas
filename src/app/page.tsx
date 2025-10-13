import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BarList } from "@/components/BarList"

const kpiData = [
  { name: "生产效率", value: 94, color: "emerald" },
  { name: "设备利用率", value: 87, color: "blue" },
  { name: "质量合格率", value: 99, color: "violet" },
  { name: "库存周转率", value: 78, color: "amber" },
  { name: "订单准时率", value: 96, color: "rose" },
]

const heroHighlights = [
  "遵循 ISA-95 国际标准",
  "云服务架构快速上线",
  "制造过程全程可视化",
]

const platformHighlights = [
  "实时数据监控与分析",
  "智能预测性维护",
  "全流程质量管控",
  "精益生产优化",
  "灵活的集成能力",
]

const services = [
  {
    title: "leanleap智能网络协同制造系统",
    description: "覆盖研发、计划、生产到交付的全链路协同。",
    highlights: [
      "缩短产品生命周期，降低库存积压",
      "减少生产成本，提高跨部门协同效率",
    ],
  },
  {
    title: "专业的实施、开发、运维服务",
    description: "以客户业务为核心，从咨询、实施到运维全程陪伴。",
    highlights: ["以客户为中心，赋能企业数字化转型"],
  },
  {
    title: "数字化转型解决方案",
    description: "结合行业经验提供端到端的业务中台与智能分析。",
    highlights: [
      "项目管理、基金业务、云服务、IoT、ERP 等模块化组合",
      "支持大数据与商业智能闭环",
    ],
  },
]

const contactInfo = [
  {
    label: "地址",
    value: "上海市普陀区宁夏路219号绿地科创大厦11号楼E室",
  },
  { label: "电话", value: "(86) 21-62095557", href: "tel:+862162095557" },
  { label: "邮箱", value: "ch@leapingtech.com", href: "mailto:ch@leapingtech.com" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden px-6 py-24 sm:py-32">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent)]"
        />
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            智能制造平台
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            领跃云端工厂 · 数字智造
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            借助 leanleap 智能网络协同制造系统，将研发、计划、生产、服务紧密连接，
            打造以数据驱动的敏捷工厂，帮助企业在复杂制造场景下持续提升核心竞争力。
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg">预约演示</Button>
            <Button variant="outline" size="lg">
              下载白皮书
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/contact">联系我们</Link>
            </Button>
          </div>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {heroHighlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm text-muted-foreground"
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              产品与服务
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              沿袭原有业务最佳实践，提供从方案咨询到落地运维的一体化服务体系，
              帮助制造企业快速完成数字化升级。
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <ul className="space-y-3 text-muted-foreground">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr]">
            <div>
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  实时制造指标
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  将计划、执行、质量与成本指标统一到同一数据底座，
                  以数据驱动的方式持续优化生产过程。
                </p>
              </div>
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>核心 KPI 指标</CardTitle>
                  <CardDescription>
                    结合历史数据与实时采集，形成面向经营的指标体系。
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <BarList data={kpiData} />
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>平台优势</CardTitle>
                <CardDescription>
                  基于旧版解决方案沉淀的经验，全面覆盖生产全景。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {platformHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardHeader className="text-center sm:text-left">
              <CardTitle className="text-2xl">
                开启您的智能制造升级
              </CardTitle>
              <CardDescription>
                延续旧版官网的联系方式，我们的咨询顾问将根据您的行业特点提供定制化演示。
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <ul className="space-y-4 text-sm">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        className="text-lg font-semibold text-foreground hover:text-primary"
                        href={item.href}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-lg font-semibold text-foreground">
                        {item.value}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 sm:items-end">
                <Button size="lg" asChild>
                  <Link href="/contact">预约方案咨询</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:ch@leapingtech.com">发送合作邮件</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t bg-muted/60 px-6 py-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            © 2019-2025 上海逾迈信息科技有限公司 · 沪ICP备15009164号-1
          </p>
        </div>
      </footer>
    </div>
  )
}
