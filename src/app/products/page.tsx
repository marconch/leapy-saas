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
    features: ["生产计划管理", "工艺路径跟踪", "实时数据采集", "生产报表分析"]
  },
  {
    id: "equipment",
    name: "设备管理系统",
    description: "智能设备监控和预测性维护，降低设备故障率，提升利用率",
    features: ["设备状态监控", "预测性维护", "备件库存管理", "维修工单管理"]
  },
  {
    id: "quality",
    name: "质量管理系统",
    description: "全流程质量控制和追溯，确保产品质量稳定性",
    features: ["质量检验管理", "不良品追溯", "SPC统计分析", "质量报告"]
  },
  {
    id: "analytics",
    name: "数据分析平台",
    description: "强大的数据分析和可视化能力，为决策提供数据支持",
    features: ["实时仪表板", "趋势分析", "异常预警", "定制报表"]
  }
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">智能制造产品套件</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          全面覆盖制造企业数字化转型需求的产品矩阵，助力企业实现智能制造升级
        </p>
      </div>

      {/* Products Grid */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {products.map((product) => (
          <Card key={product.id} className="h-full">
            <CardHeader>
              <CardTitle className="text-xl">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
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

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">准备开始数字化转型？</h2>
        <p className="mt-2 text-muted-foreground">
          联系我们的专家，获取定制化解决方案
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button size="lg">预约演示</Button>
          <Button size="lg" variant="outline">下载产品手册</Button>
        </div>
      </div>
    </div>
  )
}