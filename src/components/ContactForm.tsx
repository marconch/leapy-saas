"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const inputClass =
  "w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground"

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<{ ok: boolean; msg: string } | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())
    setSubmitting(true)
    setResult(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))
      if (res.ok && json.ok) {
        setResult({ ok: true, msg: "提交成功，我们会尽快与您联系！" })
        form.reset()
      } else {
        setResult({ ok: false, msg: json.error || "提交失败，请稍后再试。" })
      }
    } catch {
      setResult({ ok: false, msg: "网络错误，请稍后再试。" })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium">姓名 *</label>
          <input name="name" type="text" required className={inputClass} placeholder="请输入您的姓名" />
        </div>
        <div>
          <label className="text-sm font-medium">电话 *</label>
          <input name="phone" type="tel" required className={inputClass} placeholder="请输入联系电话" />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium">邮箱 *</label>
        <input name="email" type="email" required className={inputClass} placeholder="请输入邮箱地址" />
      </div>
      <div>
        <label className="text-sm font-medium">公司名称</label>
        <input name="company" type="text" className={inputClass} placeholder="请输入公司名称" />
      </div>
      <div>
        <label className="text-sm font-medium">咨询类型</label>
        <select name="type" defaultValue="" className={inputClass}>
          <option value="">请选择咨询类型</option>
          <option value="product">产品咨询</option>
          <option value="solution">解决方案</option>
          <option value="pricing">价格咨询</option>
          <option value="support">技术支持</option>
          <option value="partnership">合作洽谈</option>
        </select>
      </div>
      <div>
        <label className="text-sm font-medium">详细描述</label>
        <textarea name="message" rows={4} className={inputClass} placeholder="请详细描述您的需求或问题" />
      </div>
      {result && (
        <p className={`text-sm ${result.ok ? "text-emerald-500" : "text-red-500"}`} role="status">
          {result.msg}
        </p>
      )}
      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "提交中…" : "提交咨询"}
      </Button>
    </form>
  )
}
