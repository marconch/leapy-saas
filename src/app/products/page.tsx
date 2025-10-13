import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "产品",
  description: "了解领跃智能制造平台的核心产品功能，包括制造执行系统、设备管理、质量管理和数据分析等。",
}

const products = [
  {
    id: "mes",
    name: "制造执行系统 (MES)",
    description: "全面的生产执行管理，实时监控生产过程，优化生产效率",
    features: ["生产计划管理", "工艺路径跟踪", "实时数据采集", "生产报表分析"],
  },
  {
    id: "equipment",
    name: "设备管理系统",
    description: "智能设备监控和预测性维护，降低设备故障率，提升利用率",
    features: ["设备状态监控", "预测性维护", "备件库存管理", "维修工单管理"],
  },
  {
    id: "quality",
    name: "质量管理系统",
    description: "全流程质量控制和追溯，确保产品质量稳定性",
    features: ["质量检验管理", "不良品追溯", "SPC统计分析", "质量报告"],
  },
  {
    id: "analytics",
    name: "数据分析平台",
    description: "强大的数据分析和可视化能力，为决策提供数据支持",
    features: ["实时仪表板", "趋势分析", "异常预警", "定制报表"],
  },
]

const coreModules = [
  {
    title: "产品管理",
    description: "覆盖配方、工艺与变更控制，确保工艺版本一致。",
  },
  {
    title: "计划管理",
    description: "实现多维排程与产能平衡，助力准时交付。",
  },
  {
    title: "APS高级排程",
    description: "通过约束模拟与动态调整提升生产柔性。",
  },
  {
    title: "质量管理",
    description: "全程采集质量数据，支持 SPC 分析与追溯。",
  },
  {
    title: "现场管理",
    description: "数字化指挥车间执行，保障安全与效率。",
  },
  {
    title: "数据采集",
    description: "实时采集设备与人工数据，构建可信数据底座。",
  },
  {
    title: "工厂建模",
    description: "快速搭建工厂、产线与资源模型，灵活扩展。",
  },
  {
    title: "数据建模",
    description: "统一指标与数据资产，为经营决策提供依据。",
  },
]

const productAdvantages = [
  {
    title: "遵循国际规范",
    description: "产品设计完全遵循 MES 系统的国际标准 — ISA 95。",
  },
  {
    title: "动态建模",
    description: "工厂建模、产品建模，快速搭建企业与业务模型。",
  },
  {
    title: "制造过程全程可视化",
    description: "监控生产过程每一个环节，记录关键数据。",
  },
  {
    title: "物料管理",
    description: "及时配送物料，降低库存占用，提高周转率。",
  },
  {
    title: "成本计算",
    description: "实时掌握成本变化，为价格决策提供依据。",
  },
  {
    title: "全面质量管理",
    description: "质量 SPC 分析，支持产品全生命周期追溯。",
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold tracking-tight">智能制造产品套件</h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-muted-foreground">
            全面覆盖制造企业数字化转型需求的产品矩阵，助力企业实现智能制造升级
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2">
          {products.map((product) => (
            <Card key={product.id} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li
                      key={`${product.id}-${feature}`}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full" variant="outline">
                  了解详情
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              核心功能模块
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              沿用旧版平台的成熟能力，并以云原生架构进一步提升扩展性与交付速度。
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreModules.map((module) => (
              <Card key={module.title} className="h-full border-dashed">
                <CardHeader>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {module.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/60 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              产品优势
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              延续早期客户的成功经验，按行业标准持续打磨产品细节。
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productAdvantages.map((advantage) => (
              <Card key={advantage.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {advantage.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold">准备开始数字化转型？</h2>
          <p className="mt-2 text-muted-foreground">
            联系我们的专家，获取定制化解决方案
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button size="lg">预约演示</Button>
            <Button size="lg" variant="outline">
              下载产品手册
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
