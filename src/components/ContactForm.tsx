"use client"

import { useState } from "react"
import Link from "next/link"
import { Arrow } from "@/components/site/ui"

// 联系表单：视觉为「仅下划线的大号输入框」；字段契约跟随 /api/contact
// （name/phone/email 必填——API 与 DB 均强制，故保持必填标注）

const inputClass =
  "peer block w-full rounded-none border-0 border-b border-ink/25 bg-transparent px-0 pb-3 pt-2 font-[inherit] text-[clamp(18px,1.6vw,24px)] font-medium text-ink outline-none transition-colors placeholder:font-normal placeholder:text-ink/30 hover:border-ink/60 focus:border-red"

function Field({
  no,
  label,
  required = false,
  className = "",
  children,
}: {
  no: string
  label: string
  required?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <label className={`group relative flex flex-col gap-2 ${className}`}>
      <span className="eyebrow flex items-center gap-3 text-mute transition-colors group-focus-within:text-ink">
        <span aria-hidden className="text-red">
          {no}
        </span>
        <span>
          {label}
          {required && <span className="text-red"> *</span>}
        </span>
      </span>
      <span className="relative block">
        {children}
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-red transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] peer-focus:scale-x-100"
        />
      </span>
    </label>
  )
}

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
    <form className="flex flex-col gap-[clamp(28px,3vw,44px)]" onSubmit={handleSubmit}>
      <div className="grid gap-x-10 gap-y-[clamp(28px,3vw,44px)] sm:grid-cols-2">
        <Field no="01" label="姓名" required>
          <input name="name" type="text" required autoComplete="name" placeholder="您的姓名" className={inputClass} />
        </Field>
        <Field no="02" label="公司名称">
          <input
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="贵公司名称"
            className={inputClass}
          />
        </Field>
        <Field no="03" label="电话" required>
          <input name="phone" type="tel" required autoComplete="tel" placeholder="联系电话" className={inputClass} />
        </Field>
        <Field no="04" label="邮箱" required>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="工作邮箱"
            className={inputClass}
          />
        </Field>
      </div>
      <Field no="05" label="咨询内容">
        <textarea
          name="message"
          rows={4}
          placeholder="请简要描述您的需求，例如所在行业、企业规模、关注的模块…"
          className={`${inputClass} min-h-[140px] resize-y leading-[1.6]`}
        />
      </Field>

      {/* 提交结果：常驻 live region，状态变化可被读屏播报 */}
      <div role="status" aria-live="polite" aria-atomic="true">
        {result && (
          <p
            className={`m-0 flex items-start gap-4 border-l-[3px] px-5 py-4 text-[15px] font-medium leading-[1.6] ${
              result.ok ? "border-ink bg-ink text-paper" : "border-red bg-red/8 text-red"
            }`}
          >
            <span aria-hidden className={`mt-[9px] h-[7px] w-[7px] shrink-0 ${result.ok ? "bg-paper" : "bg-red"}`} />
            <span>
              <span className="eyebrow mb-1 block opacity-70">{result.ok ? "Sent — 已提交" : "Error — 未提交"}</span>
              {result.msg}
            </span>
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className="btn btn-red cursor-pointer border-none font-[inherit] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span>{submitting ? "提交中…" : "提交咨询 Submit"}</span>
          <span className="btn-arrow">
            <Arrow />
          </span>
        </button>
        <span className="max-w-[340px] text-[12px] leading-[1.7] text-mute">
          提交即表示您同意我们的
          <Link href="/legal/privacy" className="ulink text-ink">
            隐私政策
          </Link>
          。销售咨询将在 30 分钟内响应。
        </span>
      </div>
    </form>
  )
}
