import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/ContactForm"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "联系我们",
  description: "联系领跃 LeanLeap 团队，获取专业的协同制造管理云平台咨询和技术支持。多种联系方式，快速响应您的需求。",
}

const contactMethods = [
  {
    title: "销售咨询",
    description: "了解产品功能、价格方案和实施周期",
    contact: siteConfig.contact.phone,
    action: "拨打电话",
    icon: "📞"
  },
  {
    title: "技术支持",
    description: "产品使用问题、技术疑问解答",
    contact: siteConfig.contact.email,
    action: "发送邮件",
    icon: "🛠️"
  },
  {
    title: "商务合作",
    description: "渠道合作、战略联盟、投资洽谈",
    contact: "business@leapingtech.com",
    action: "商务邮件",
    icon: "🤝"
  },
  {
    title: "媒体咨询",
    description: "新闻采访、市场活动、品牌合作",
    contact: "media@leapingtech.com",
    action: "媒体邮件",
    icon: "📰"
  }
]

const offices = [
  {
    city: "上海总部",
    address: "上海市浦东新区张江高科技园区",
    phone: "+86 21-1234-5678",
    email: "shanghai@leapingtech.com"
  },
  {
    city: "北京分公司",
    address: "北京市海淀区中关村科技园",
    phone: "+86 10-1234-5678",
    email: "beijing@leapingtech.com"
  },
  {
    city: "深圳分公司",
    address: "深圳市南山区高新技术产业园",
    phone: "+86 755-1234-5678",
    email: "shenzhen@leapingtech.com"
  }
]

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">联系我们</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          我们的专业团队随时为您提供咨询和支持，助力您的数字化转型之旅
        </p>
      </div>

      {/* Contact Methods */}
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {contactMethods.map((method, index) => (
          <Card key={index} className="text-center h-full">
            <CardHeader>
              <div className="text-3xl mb-2">{method.icon}</div>
              <CardTitle className="text-lg">{method.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
              <p className="font-medium text-sm mb-4">{method.contact}</p>
              <Button variant="outline" size="sm" className="w-full">
                {method.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Form */}
      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>在线咨询</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="space-y-6">
          {/* Quick Response */}
          <Card>
            <CardHeader>
              <CardTitle>快速响应承诺</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="text-sm">销售咨询：30分钟内响应</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-sm">技术支持：2小时内响应</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full" />
                  <span className="text-sm">商务合作：1个工作日内响应</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Hours */}
          <Card>
            <CardHeader>
              <CardTitle>服务时间</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>工作日</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>技术支持</span>
                  <span>7×24小时</span>
                </div>
                <div className="flex justify-between">
                  <span>紧急支持</span>
                  <span>随时响应</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Office Locations */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">办公地点</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {offices.map((office, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{office.city}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">地址：</span>
                    <span className="text-muted-foreground">{office.address}</span>
                  </div>
                  <div>
                    <span className="font-medium">电话：</span>
                    <span className="text-muted-foreground">{office.phone}</span>
                  </div>
                  <div>
                    <span className="font-medium">邮箱：</span>
                    <span className="text-muted-foreground">{office.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">立即开始您的数字化转型</h2>
        <p className="mt-2 text-muted-foreground">
          免费试用30天，体验完整的产品功能
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href={siteConfig.loginUrl}>免费试用</a>
          </Button>
          <Button size="lg" variant="outline">预约演示</Button>
        </div>
      </div>
    </div>
  )
}