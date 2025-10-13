import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "隐私政策",
  description: "领跃智能制造平台的隐私政策，详细说明我们如何收集、使用和保护您的个人信息。",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8">隐私政策</h1>
        <p className="text-muted-foreground mb-8">
          最后更新时间：2024年12月1日
        </p>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. 概述</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                领跃科技（以下简称&ldquo;我们&rdquo;）非常重视用户的隐私保护。本隐私政策详细说明了我们在您使用领跃智能制造平台服务时，
                如何收集、使用、共享和保护您的个人信息。
              </p>
              <p>
                在使用我们的服务前，请仔细阅读本隐私政策。如果您不同意本政策的任何内容，请不要使用我们的服务。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. 信息收集</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <h4>2.1 主动提供的信息</h4>
              <p>当您使用我们的服务时，您可能主动向我们提供以下信息：</p>
              <ul>
                <li>账户注册信息：姓名、邮箱地址、电话号码、公司信息</li>
                <li>联系信息：通过表单、邮件或电话提供的联系详情</li>
                <li>业务信息：生产数据、设备信息、工艺参数等</li>
                <li>支付信息：订单和付款相关信息</li>
              </ul>

              <h4>2.2 自动收集的信息</h4>
              <p>我们可能自动收集以下技术信息：</p>
              <ul>
                <li>设备信息：IP地址、设备类型、操作系统、浏览器类型</li>
                <li>使用信息：访问时间、页面访问记录、功能使用情况</li>
                <li>位置信息：基于IP地址的大致地理位置</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. 信息使用</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>我们收集的信息将用于以下目的：</p>
              <ul>
                <li><strong>服务提供</strong>：为您提供和维护我们的服务</li>
                <li><strong>客户支持</strong>：响应您的询问和提供技术支持</li>
                <li><strong>服务改进</strong>：分析使用模式以改进我们的产品和服务</li>
                <li><strong>安全保障</strong>：检测和防止欺诈、滥用和安全威胁</li>
                <li><strong>法律合规</strong>：遵守适用的法律法规要求</li>
                <li><strong>营销推广</strong>：向您发送产品更新和营销信息（经您同意）</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. 信息共享</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>我们不会出售您的个人信息。在以下有限情况下，我们可能会共享您的信息：</p>
              <ul>
                <li><strong>服务提供商</strong>：与帮助我们提供服务的第三方合作伙伴</li>
                <li><strong>法律要求</strong>：根据法律法规或司法程序的要求</li>
                <li><strong>业务转让</strong>：在合并、收购或资产转让的情况下</li>
                <li><strong>用户同意</strong>：获得您明确同意的其他情况</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. 数据安全</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>我们采取多种安全措施来保护您的个人信息：</p>
              <ul>
                <li>数据加密：传输和存储中的数据均采用加密技术</li>
                <li>访问控制：严格限制对个人信息的访问权限</li>
                <li>安全监控：持续监控系统安全状态</li>
                <li>定期审核：定期进行安全评估和漏洞扫描</li>
                <li>员工培训：定期对员工进行隐私保护培训</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. 您的权利</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>根据适用的隐私法律，您享有以下权利：</p>
              <ul>
                <li><strong>访问权</strong>：要求获取我们持有的您的个人信息副本</li>
                <li><strong>更正权</strong>：要求更正不准确或不完整的个人信息</li>
                <li><strong>删除权</strong>：在特定情况下要求删除您的个人信息</li>
                <li><strong>限制权</strong>：要求限制对您个人信息的处理</li>
                <li><strong>反对权</strong>：反对基于合法利益进行的处理</li>
                <li><strong>可携权</strong>：要求以结构化格式接收您的个人信息</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Cookie和类似技术</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                我们使用Cookie和类似技术来改善您的用户体验、分析网站流量并提供个性化服务。
                您可以通过浏览器设置管理Cookie偏好。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. 数据保留</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                我们仅在必要的时间内保留您的个人信息，保留期限取决于信息的类型和使用目的。
                一般情况下，账户信息在账户注销后保留3年，业务数据根据合同约定保留。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. 未成年人保护</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                我们的服务主要面向企业用户，不故意收集18岁以下未成年人的个人信息。
                如果我们发现收集了未成年人信息，将立即删除。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. 政策更新</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                我们可能会不时更新本隐私政策。重大变更将通过邮件或网站通知您。
                继续使用我们的服务表示您接受更新后的政策。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. 联系我们</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>如果您对本隐私政策有任何疑问或需要行使您的权利，请通过以下方式联系我们：</p>
              <ul>
                <li>邮箱：privacy@leapy.example.com</li>
                <li>电话：400-123-4567</li>
                <li>地址：上海市浦东新区张江高科技园区</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
