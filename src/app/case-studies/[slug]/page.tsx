import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarList } from "@/components/BarList"
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/case-studies"

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    return {
      title: "案例未找到",
    }
  }

  return {
    title: caseStudy.title,
    description: caseStudy.challenge,
  }
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies()

  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    notFound()
  }

  // 转换指标数据为 BarList 格式
  const metricsData = caseStudy.metrics.map((metric) => ({
    name: metric.name,
    value: parseInt(metric.value.replace(/[^\d]/g, '')) || 100, // 提取数字，如果没有则默认100
    color: "emerald" as const
  }))

  const relatedCases = getAllCaseStudies()
    .filter(cs => cs.slug !== caseStudy.slug && cs.industry === caseStudy.industry)
    .slice(0, 2)

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">首页</Link>
        <span>/</span>
        <Link href="/case-studies" className="hover:text-foreground">客户案例</Link>
        <span>/</span>
        <span className="text-foreground">{caseStudy.title}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                {caseStudy.industry}
              </span>
              {caseStudy.featured && (
                <span className="px-3 py-1 text-sm font-medium bg-amber-100 text-amber-800 rounded-full dark:bg-amber-900 dark:text-amber-200">
                  精选案例
                </span>
              )}
            </div>
            <h1 className="text-4xl font-bold tracking-tight">{caseStudy.title}</h1>
            <p className="mt-2 text-muted-foreground">
              发布时间：{new Date(caseStudy.publishedAt).toLocaleDateString('zh-CN')}
            </p>
          </div>

          {/* Challenge */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                面临挑战
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudy.challenge}
              </p>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">💡</span>
                解决方案
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudy.solution}
              </p>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📈</span>
                实施效果
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">💬</span>
                  客户评价
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                  &ldquo;{caseStudy.testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-4 text-sm text-muted-foreground">
                  — {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Key Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>关键指标</CardTitle>
            </CardHeader>
            <CardContent>
              <BarList data={metricsData} />
            </CardContent>
          </Card>

          {/* Company Info */}
          <Card>
            <CardHeader>
              <CardTitle>项目信息</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium">客户企业：</span>
                  <span className="text-muted-foreground">{caseStudy.company}</span>
                </div>
                <div>
                  <span className="font-medium">所属行业：</span>
                  <span className="text-muted-foreground">{caseStudy.industry}</span>
                </div>
                <div>
                  <span className="font-medium">实施时间：</span>
                  <span className="text-muted-foreground">2023年</span>
                </div>
                <div>
                  <span className="font-medium">项目周期：</span>
                  <span className="text-muted-foreground">6个月</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="font-semibold">获取类似解决方案</h3>
                <p className="text-sm text-muted-foreground">
                  了解如何为您的企业实现类似的转型效果
                </p>
                <Button className="w-full">
                  免费咨询
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Cases */}
      {relatedCases.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">相关案例</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedCases.map((relatedCase) => (
              <Card key={relatedCase.slug}>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">
                    {relatedCase.title}
                  </CardTitle>
                  <span className="text-sm text-primary">{relatedCase.industry}</span>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {relatedCase.challenge}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/case-studies/${relatedCase.slug}`}>
                      查看详情
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">开启您的数字化转型之旅</h2>
        <p className="mt-2 text-muted-foreground">
          联系我们的专家，获取定制化解决方案
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button size="lg">联系专家</Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/case-studies">查看更多案例</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
