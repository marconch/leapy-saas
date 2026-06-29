import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "产品",
  description: "了解领跃协同制造管理云平台的核心产品功能，涵盖供应链管理、生产制造、财务管理、成本管理与经营分析等。",
}

const products = [
  {
    id: "supply-chain",
    name: "供应链管理",
    description: "打通采购、销售与仓储全链路，订单与库存实时协同，提升周转效率",
    features: ["采购合同/订单/入库", "销售订单/出库/发票", "库存与 WMS 管理", "移库与盘点"],
  },
  {
    id: "manufacturing",
    name: "生产制造 · 制造云",
    description: "面向协同制造的生产工单与工艺管理，从 BOM 到质检全程可控",
    features: ["生产工单管理", "BOM 物料清单", "工艺路线管理", "生产质检"],
  },
  {
    id: "finance",
    name: "财务管理 · 财务云",
    description: "业务财务一体化，应收应付与收付款自动对账，凭证与账户清晰可查",
    features: ["应收应付管理", "收付款与对账", "凭证管理", "银行账户管理"],
  },
  {
    id: "analytics",
    name: "报表中心 · 经营分析",
    description: "强大的数据分析和可视化能力，为经营决策提供实时数据支持",
    features: ["BI 经营报表", "经营看板", "趋势分析", "定制报表"],
  },
]

const coreModules = [
  {
    title: "采购管理",
    description: "覆盖采购合同、订单与入库，供应商协同高效透明。",
  },
  {
    title: "销售管理",
    description: "贯通销售订单、出库与发票，订单履约一目了然。",
  },
  {
    title: "库存与 WMS",
    description: "多仓库存、移库与盘点，库存数据实时准确。",
  },
  {
    title: "生产制造",
    description: "生产工单、BOM 与工艺路线，制造过程协同可控。",
  },
  {
    title: "财务管理",
    description: "应收应付、收付款与凭证，业财一体自动对账。",
  },
  {
    title: "成本管理",
    description: "成本核算与月结，实时掌握成本构成与变化。",
  },
  {
    title: "投资管理",
    description: "基金与投资业务管理，资金运作清晰可追溯。",
  },
  {
    title: "工作流审批",
    description: "Warm-Flow 引擎驱动单据审批，流程灵活可配。",
  },
]

const productAdvantages = [
  {
    title: "多租户 SaaS 架构",
    description: "云原生多租户隔离，开箱即用，按需弹性扩展。",
  },
  {
    title: "业务全程协同",
    description: "采购、生产、销售、财务一体化，数据实时打通。",
  },
  {
    title: "灵活工作流审批",
    description: "基于 Warm-Flow 的可视化审批，单据流转可配置。",
  },
  {
    title: "RBAC 权限管控",
    description: "细粒度角色权限与数据权限，安全合规可控。",
  },
  {
    title: "业财一体核算",
    description: "业务单据自动生成凭证，成本与利润实时可见。",
  },
  {
    title: "经营数据可视化",
    description: "BI 报表与经营看板，为经营决策提供实时依据。",
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold tracking-tight">协同制造管理产品套件</h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-muted-foreground">
            覆盖采购、生产、销售、财务的一体化协同管理产品矩阵，助力制造企业经营数字化升级
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
