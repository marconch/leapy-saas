import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="w-full max-w-lg">
          <CardContent className="pt-6 text-center space-y-6">
            {/* 404 Illustration */}
            <div className="text-6xl font-bold text-muted-foreground">
              404
            </div>

            {/* Error Message */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">页面未找到</h1>
              <p className="text-muted-foreground">
                抱歉，您访问的页面不存在或已被移动。
              </p>
            </div>

            {/* Helpful Links */}
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                您可以尝试以下选项：
              </p>

              <div className="grid gap-2">
                <Button asChild className="w-full">
                  <Link href="/">
                    返回首页
                  </Link>
                </Button>

                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/products">
                      查看产品
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/solutions">
                      解决方案
                    </Link>
                  </Button>
                </div>

                <Button variant="ghost" size="sm" asChild>
                  <Link href="/contact">
                    联系我们
                  </Link>
                </Button>
              </div>
            </div>

            {/* Search Suggestions */}
            <div className="pt-4 border-t text-left space-y-2">
              <p className="text-sm font-medium">热门页面：</p>
              <div className="text-sm space-y-1">
                <div>
                  <Link href="/case-studies" className="text-primary hover:underline">
                    客户案例
                  </Link>
                  <span className="text-muted-foreground"> - 查看成功案例</span>
                </div>
                <div>
                  <Link href="/pricing" className="text-primary hover:underline">
                    价格方案
                  </Link>
                  <span className="text-muted-foreground"> - 了解定价信息</span>
                </div>
                <div>
                  <Link href="/resources" className="text-primary hover:underline">
                    资源中心
                  </Link>
                  <span className="text-muted-foreground"> - 技术文档资料</span>
                </div>
              </div>
            </div>

            {/* Additional Help */}
            <div className="pt-4 text-xs text-muted-foreground">
              如果您认为这是一个错误，请
              <Link href="/contact" className="text-primary hover:underline">
                联系我们
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}