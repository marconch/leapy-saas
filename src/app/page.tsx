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
  { name: "订单准时交付率", value: 96, color: "emerald" },
  { name: "库存周转率", value: 82, color: "blue" },
  { name: "应收回款率", value: 92, color: "violet" },
  { name: "月度结账及时率", value: 95, color: "amber" },
  { name: "单据审批时效", value: 88, color: "rose" },
]

const heroHighlights = [
  "多租户 SaaS 快速上线",
  "采购到财务全链路打通",
  "工作流审批灵活可配",
]

const platformHighlights = [
  "全业务链路在线协同",
  "多租户数据隔离与权限管控",
  "可配置的工作流审批引擎",
  "实时经营报表与成本分析",
  "灵活的开放集成能力",
]

const services = [
  {
    title: "领跃协同制造管理系统",
    description: "覆盖采购、销售、生产、库存、财务、成本的全链路业务协同。",
    highlights: [
      "打通供应链与财务，降低库存积压与对账差错",
      "跨部门在线协同，提升单据流转与履约效率",
    ],
  },
  {
    title: "专业的实施、开发、运维服务",
    description: "以客户业务为核心，从咨询、实施到运维全程陪伴。",
    highlights: ["以客户为中心，赋能企业数字化转型"],
  },
  {
    title: "一体化数字化经营方案",
    description: "结合制造行业经验，提供端到端的业务中台与经营分析。",
    highlights: [
      "供应链、生产制造、财务成本、投资管理、报表分析模块化组合",
      "支持多租户 SaaS 与经营数据闭环",
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
            协同制造管理云平台
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            一体化协同制造管理，让经营尽在掌握
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            借助领跃（LeanLeap）协同制造管理系统，将采购、销售、生产、库存、财务、成本紧密连接，
            构建以数据驱动的一体化经营平台，帮助制造企业持续提升协同效率与经营质量。
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
              沿袭制造行业管理最佳实践，提供从方案咨询到落地运维的一体化服务体系，
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
                  实时经营指标
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  将采购、生产、库存、财务与成本指标统一到同一数据底座，
                  以数据驱动的方式持续优化经营决策。
                </p>
              </div>
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>核心 KPI 指标</CardTitle>
                  <CardDescription>
                    结合业务单据与实时数据，形成面向经营的指标体系。
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
                  沉淀制造企业管理最佳实践，全面覆盖经营全景。
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
                开启您的协同制造管理升级
              </CardTitle>
              <CardDescription>
                我们的咨询顾问将根据您的行业特点，提供定制化演示与方案咨询。
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
