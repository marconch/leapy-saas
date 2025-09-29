import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies()

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">客户成功案例</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          真实的客户案例，见证数字化转型的力量
        </p>
      </div>

      {/* Industry Filter */}
      <div className="mt-12 flex justify-center">
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

      {/* Case Studies Grid */}
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
                      <span className="px-2 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full dark:bg-amber-900 dark:text-amber-200">
                        精选案例
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {caseStudy.challenge}
              </p>

              <div className="space-y-2 mb-6">
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
                <div className="bg-muted/50 p-3 rounded-lg mb-4">
                  <p className="text-xs italic text-muted-foreground">
                    "{caseStudy.testimonial.quote}"
                  </p>
                  <p className="text-xs font-medium mt-1">
                    — {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {new Date(caseStudy.publishedAt).toLocaleDateString('zh-CN')}
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

      {/* Statistics Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">整体成果</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { label: "服务客户", value: "500+", desc: "覆盖多个行业" },
            { label: "平均效率提升", value: "40%", desc: "生产效率显著提升" },
            { label: "质量改善", value: "80%", desc: "缺陷率大幅降低" },
            { label: "客户满意度", value: "98%", desc: "持续获得好评" }
          ].map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">想要成为下一个成功案例？</h2>
        <p className="mt-2 text-muted-foreground">
          联系我们的专家，开启您的数字化转型之旅
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button size="lg">免费咨询</Button>
          <Button size="lg" variant="outline">预约演示</Button>
        </div>
      </div>
    </div>
  )
}