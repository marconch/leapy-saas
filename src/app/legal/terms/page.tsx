import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "服务条款",
  description: "领跃智能制造平台的服务条款，规定了使用我们服务的权利、义务和限制条件。",
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8">服务条款</h1>
        <p className="text-muted-foreground mb-8">
          最后更新时间：2024年12月1日
        </p>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. 接受条款</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                欢迎使用领跃智能制造平台（以下简称&ldquo;本服务&rdquo;）。本服务由领跃科技有限公司（以下简称&ldquo;我们&rdquo;或&ldquo;公司&rdquo;）提供。
                通过访问或使用本服务，您同意受本服务条款约束。
              </p>
              <p>
                如果您不同意这些条款，请不要使用本服务。我们保留随时修改这些条款的权利，
                修改后的条款将在发布后立即生效。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. 服务描述</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>领跃智能制造平台是一个为制造企业提供数字化转型解决方案的SaaS平台，主要功能包括：</p>
              <ul>
                <li>制造执行系统（MES）</li>
                <li>设备管理和监控</li>
                <li>质量管理系统</li>
                <li>数据分析和报表</li>
                <li>其他相关的制造管理功能</li>
              </ul>
              <p>
                我们保留随时修改、暂停或终止任何服务功能的权利，恕不另行通知。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. 用户账户</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <h4>3.1 账户注册</h4>
              <p>使用本服务需要创建账户。您必须：</p>
              <ul>
                <li>提供准确、完整、最新的注册信息</li>
                <li>保护账户密码的安全性</li>
                <li>立即通知我们任何未经授权的账户使用</li>
                <li>对您账户下的所有活动承担责任</li>
              </ul>

              <h4>3.2 账户使用</h4>
              <p>您同意：</p>
              <ul>
                <li>仅为合法商业目的使用本服务</li>
                <li>不与他人共享账户凭证</li>
                <li>遵守所有适用的法律法规</li>
                <li>不尝试破坏或干扰服务的正常运行</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. 使用限制</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>在使用本服务时，您不得：</p>
              <ul>
                <li>违反任何法律、法规或第三方权利</li>
                <li>上传或传输恶意软件、病毒或有害代码</li>
                <li>尝试未经授权访问我们的系统或网络</li>
                <li>干扰或破坏服务的正常运行</li>
                <li>逆向工程、反编译或反汇编软件</li>
                <li>复制、修改、分发或创建衍生作品</li>
                <li>将服务用于竞争性产品开发</li>
                <li>超出订阅计划限制使用服务</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. 知识产权</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <h4>5.1 我们的权利</h4>
              <p>
                本服务及其所有内容、功能和技术，包括但不限于软件、文本、图像、标识等，
                均为我们或我们的许可方所有，受著作权、商标权和其他知识产权法保护。
              </p>

              <h4>5.2 用户数据</h4>
              <p>
                您保留对输入本服务的数据的所有权利。您授予我们使用、处理和存储这些数据以提供服务的许可。
                我们不会将您的数据用于与服务提供无关的目的。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. 隐私和数据保护</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                我们严格按照隐私政策处理您的个人信息和数据。使用本服务即表示您同意我们的隐私政策。
              </p>
              <p>
                我们实施行业标准的安全措施来保护您的数据，但不能保证绝对安全。
                您有责任定期备份重要数据。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. 付费条款</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <h4>7.1 订阅费用</h4>
              <p>
                本服务采用订阅制收费模式。费用根据您选择的计划和使用量确定。
                所有费用均以人民币计价，不含税费。
              </p>

              <h4>7.2 付款条款</h4>
              <ul>
                <li>费用须按订阅周期提前支付</li>
                <li>逾期付款可能导致服务暂停</li>
                <li>除法律规定外，已支付费用不予退还</li>
                <li>我们保留调整价格的权利，但会提前通知</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. 服务可用性</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                我们努力保持服务的高可用性，但不保证服务100%无中断。
                可能因维护、升级或不可抗力因素导致服务暂时不可用。
              </p>
              <p>
                我们将努力将计划内停机时间降至最低，并在可能的情况下提前通知用户。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. 免责声明</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                本服务按&ldquo;现状&rdquo;提供，不提供任何明示或暗示的保证。
                我们不保证服务将满足您的特定需求或完全无错误。
              </p>
              <p>
                在法律允许的最大范围内，我们不承担因使用或无法使用本服务而产生的任何直接、
                间接、偶然、特殊或后果性损害的责任。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. 赔偿</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                您同意就因您违反本条款或使用服务而产生的任何索赔、损失、费用（包括合理的律师费）
                对我们进行赔偿和免责。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. 服务终止</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <h4>11.1 终止条件</h4>
              <p>在以下情况下，我们可能暂停或终止您的服务：</p>
              <ul>
                <li>违反本服务条款</li>
                <li>逾期付款</li>
                <li>涉嫌违法行为</li>
                <li>滥用或恶意使用服务</li>
              </ul>

              <h4>11.2 终止后果</h4>
              <p>
                服务终止后，您将无法访问您的账户和数据。我们将在合理期限内保留您的数据，
                以便您导出，但不承担长期保存义务。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. 争议解决</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                本条款受中华人民共和国法律管辖。因本条款产生的任何争议，
                双方应首先通过友好协商解决；协商不成的，
                应提交至上海市仲裁委员会按照其仲裁规则进行仲裁。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>13. 其他条款</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <h4>13.1 完整协议</h4>
              <p>
                本条款构成您与我们之间关于本服务的完整协议，
                取代之前的所有协议和约定。
              </p>

              <h4>13.2 可分割性</h4>
              <p>
                如果本条款的任何部分被认定为无效或不可执行，
                其余部分仍然有效。
              </p>

              <h4>13.3 不弃权</h4>
              <p>
                我们未行使或延迟行使任何权利不构成对该权利的放弃。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>14. 联系信息</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>如果您对本服务条款有任何疑问，请联系我们：</p>
              <ul>
                <li>邮箱：legal@leapy.example.com</li>
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
