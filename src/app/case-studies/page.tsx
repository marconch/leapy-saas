import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getAllCaseStudies } from "@/lib/case-studies"

export const metadata: Metadata = {
  title: "客户案例",
  description: "领跃智能制造平台的成功案例分享，展示在汽车、电子、机械、化工等行业的数字化转型成果。",
}

const industries = [
  { name: "全部", value: "all" },
  { name: "汽车制造", value: "automotive" },
  { name: "电子制造", value: "electronics" },
  { name: "机械制造", value: "machinery" },
  { name: "化工制造", value: "chemical" }
]

const customerLogos = [
  { src: "/logos/casc.png", alt: "中国航天 CASC" },
  { src: "/logos/inesa.png", alt: "INESA 上海仪电" },
  { src: "/logos/greenland.png", alt: "绿地集团 Greenland" },
  { src: "/logos/siic.png", alt: "上实集团 SIIC" },
  { src: "/logos/avic.png", alt: "中国航空工业集团 AVIC" },
  { src: "/logos/ngc.png", alt: "NGC Neo Global Capital" },
]

const customers = [
  {
    title: "航天某研究所电装车间 MES 系统",
    description:
      "建立了车间现场管理、大屏监控、质量追溯的车间管理系统。",
    result: "计划完成率提升，关键生产过程透明可控。",
  },
  {
    title: "航天某设计部资产管理系统",
    description:
      "搭建资产全生命周期管理系统，覆盖资产、计量设备与办公资源。",
    result: "统一资产视图，显著提升资源使用效率。",
  },
  {
    title: "航天某研究所热电池组车间 MES 系统",
    description:
      "构建生产过程管理与质量数据采集体系，实现全程追溯。",
    result: "生产资源利用率提高，质量问题处理更及时。",
  },
  {
    title: "航天某装备制造公司 MES 平台",
    description:
      "覆盖地装、电源、电机事业部，实现跨事业部的计划协同。",
    result: "优化生产排程，提升交付质量并降低成本。",
  },
  {
    title: "航天某研究所新一代物资管理系统",
    description:
      "重构物资管理流程，过程数据全程电子化。",
    result: "库存周转率降低，采购成本与周期显著优化。",
  },
  {
    title: "某投资公司基金业务管理系统",
    description:
      "覆盖投前客户关系、投中决策管理与投后基金估值。",
    result: "实现投融资业务闭环，提升监管合规与效率。",
  },
]

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies()

  return (
    <div className="min-h-screen bg-background">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold tracking-tight">客户成功案例</h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-muted-foreground">
            真实的客户案例，见证数字化转型的力量
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl rounded-3xl border bg-card/80 p-10 shadow-sm">
          <h3 className="text-center text-lg font-semibold text-muted-foreground">
            合作伙伴
          </h3>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {customerLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center rounded-xl bg-muted/40 p-6 transition hover:bg-muted"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-14 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              客户案例
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              与航天、高端制造及投资机构长期合作，提供可复制的最佳实践。
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {customers.map((customer) => (
              <Card key={customer.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{customer.title}</CardTitle>
                  <CardDescription>{customer.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">成效：</span>
                  {customer.result}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <Button
                  key={industry.value}
                  variant={industry.value === "all" ? "default" : "outline"}
                  size="sm"
                >
                  {industry.name}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {caseStudies.map((caseStudy) => (
              <Card key={caseStudy.slug} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg line-clamp-2">
                        {caseStudy.title}
                      </CardTitle>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-sm font-medium text-primary">
                          {caseStudy.industry}
                        </span>
                        {caseStudy.featured && (
                          <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                            精选案例
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                    {caseStudy.challenge}
                  </p>

                  <div className="mb-6 space-y-2">
                    <h4 className="text-sm font-semibold">核心成果</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {caseStudy.results.slice(0, 4).map((result, index) => (
                        <div key={index} className="text-xs text-muted-foreground">
                          • {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  {caseStudy.testimonial && (
                    <div className="mb-4 rounded-lg bg-muted/50 p-3">
                      <p className="text-xs italic text-muted-foreground">
                        "{caseStudy.testimonial.quote}"
                      </p>
                      <p className="mt-1 text-xs font-medium">
                        — {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {new Date(caseStudy.publishedAt).toLocaleDateString("zh-CN")}
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/case-studies/${caseStudy.slug}`}>
                        查看详情
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/60 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground sm:text-4xl">
            整体成果
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { label: "服务客户", value: "500+", desc: "覆盖多个行业" },
              { label: "平均效率提升", value: "40%", desc: "生产效率显著提升" },
              { label: "质量改善", value: "80%", desc: "缺陷率大幅降低" },
              { label: "客户满意度", value: "98%", desc: "持续获得好评" },
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-2 text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mb-1 font-semibold">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold">想要成为下一个成功案例？</h2>
          <p className="mt-2 text-muted-foreground">
            联系我们的专家，开启您的数字化转型之旅
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button size="lg">免费咨询</Button>
            <Button size="lg" variant="outline">
              预约演示
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
