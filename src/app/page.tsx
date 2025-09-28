import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarList } from "@/components/BarList"

const kpiData = [
  { name: "生产效率", value: 94, color: "emerald" },
  { name: "设备利用率", value: 87, color: "blue" },
  { name: "质量合格率", value: 99, color: "violet" },
  { name: "库存周转率", value: 78, color: "amber" },
  { name: "订单准时率", value: 96, color: "rose" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            领跃智能制造平台
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            全面的数字化制造解决方案，助力企业实现智能制造转型
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              预约演示
            </Button>
            <Button variant="outline" size="lg">
              下载白皮书
            </Button>
          </div>
        </div>
      </section>

      {/* KPI Dashboard Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              实时制造指标
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              一目了然的关键绩效指标，助力数据驱动决策
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>核心KPI指标</CardTitle>
              </CardHeader>
              <CardContent>
                <BarList data={kpiData} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>平台优势</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                    <span className="text-sm">实时数据监控与分析</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm">智能预测性维护</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-violet-500"></div>
                    <span className="text-sm">全流程质量管控</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                    <span className="text-sm">精益生产优化</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-rose-500"></div>
                    <span className="text-sm">灵活的集成能力</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 px-6 py-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 领跃智能制造平台. 保留所有权利.
          </p>
        </div>
      </footer>
    </div>
  )
}
