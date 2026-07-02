"use client"

import { useState } from "react"

// Portal design / Contact 表单：视觉按设计稿；字段契约跟随 /api/contact
// （name/phone/email 必填——设计稿邮箱为选填，但 API 与 DB 均强制，故保持必填标注）

const inputClass =
  "rounded-lg border border-[#C4CBD7] bg-[#F7F9FC] px-3.5 py-[11px] font-[inherit] text-[13px] text-[#11151E] outline-none transition-colors focus:border-[#E10A1F] focus:bg-white"

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
    <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3.5">
        <label className="flex flex-col gap-1.5">
          <span className="text-[12px] font-medium text-[#4A5468]">姓名 *</span>
          <input name="name" type="text" required placeholder="您的姓名" className={inputClass} />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[12px] font-medium text-[#4A5468]">公司名称</span>
          <input name="company" type="text" placeholder="贵公司名称" className={inputClass} />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[12px] font-medium text-[#4A5468]">电话 *</span>
          <input name="phone" type="tel" required placeholder="联系电话" className={inputClass} />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[12px] font-medium text-[#4A5468]">邮箱 *</span>
          <input name="email" type="email" required placeholder="工作邮箱" className={inputClass} />
        </label>
      </div>
      <label className="flex flex-col gap-1.5">
        <span className="text-[12px] font-medium text-[#4A5468]">咨询内容</span>
        <textarea
          name="message"
          rows={4}
          placeholder="请简要描述您的需求，例如所在行业、企业规模、关注的模块…"
          className={`${inputClass} resize-y`}
        />
      </label>
      {result && (
        <p className={`m-0 text-[13px] ${result.ok ? "text-[#0F9D70]" : "text-[#E10A1F]"}`} role="status">
          {result.msg}
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="cursor-pointer rounded-lg border-none bg-[#E10A1F] p-[13px] font-[inherit] text-[14px] font-semibold text-white transition-colors hover:bg-[#B00717] disabled:opacity-60"
      >
        {submitting ? "提交中…" : "提交咨询 Submit"}
      </button>
      <span className="text-[11px] text-[#98A1B2]">提交即表示您同意我们的隐私政策。销售咨询将在 30 分钟内响应。</span>
    </form>
  )
}
