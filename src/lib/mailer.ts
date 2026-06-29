import nodemailer, { type Transporter } from "nodemailer"
import { siteConfig } from "@/lib/site-config"

export type Lead = {
  id: number
  name: string
  phone: string
  email: string
  company?: string | null
  type?: string | null
  message?: string | null
  created_at: string
}

const TYPE_LABELS: Record<string, string> = {
  product: "产品咨询",
  solution: "解决方案",
  pricing: "价格咨询",
  support: "技术支持",
  partnership: "合作洽谈",
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!))
}

// Build an SMTP transport from env vars (never committed), or null when SMTP
// isn't configured. Shared by both the staff notification and the customer
// acknowledgement so they stay in sync.
function getTransport(): Transporter | null {
  const host = process.env.SMTP_HOST
  if (!host) return null
  const port = Number(process.env.SMTP_PORT || 465)
  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    auth: process.env.SMTP_USER
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined,
  })
}

// The address consultation emails are sent from (falls back to the SMTP login).
const mailFrom = () => process.env.MAIL_FROM || process.env.SMTP_USER

// Best-effort notification email sent to staff when a consultation is submitted.
// If SMTP is unconfigured or sending fails, the caller logs it and the form
// submission still succeeds — the lead is already persisted to SQLite.
export async function sendLeadEmail(lead: Lead): Promise<void> {
  const to = process.env.MAIL_TO
  const transport = getTransport()
  if (!transport || !to) {
    console.warn("[contact] SMTP not configured (SMTP_HOST/MAIL_TO) — skipping notification email")
    return
  }

  const typeLabel = (lead.type && TYPE_LABELS[lead.type]) || lead.type || "-"
  const rows: [string, string][] = [
    ["姓名", lead.name],
    ["电话", lead.phone],
    ["邮箱", lead.email],
    ["公司", lead.company || "-"],
    ["咨询类型", typeLabel],
    ["详细描述", lead.message || "-"],
    ["提交时间", lead.created_at],
    ["记录编号", `#${lead.id}`],
  ]

  await transport.sendMail({
    from: mailFrom(),
    to,
    subject: `【领跃官网】新的在线咨询 — ${lead.name}`,
    text: rows.map(([k, v]) => `${k}：${v}`).join("\n"),
    html:
      `<h2 style="margin:0 0 12px">领跃官网 · 新的在线咨询</h2>` +
      `<table style="border-collapse:collapse;font-size:14px">` +
      rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 14px;color:#666;white-space:nowrap;vertical-align:top">${k}</td>` +
            `<td style="padding:6px 14px;font-weight:600">${escapeHtml(String(v))}</td></tr>`
        )
        .join("") +
      `</table>`,
  })
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

// Best-effort acknowledgement email sent back to the customer who submitted the
// inquiry, confirming we received it and will be in touch shortly. Same
// best-effort contract as sendLeadEmail: any failure is caught by the caller and
// never blocks the submission. Only sent when the customer provided a valid email.
export async function sendCustomerAckEmail(lead: Lead): Promise<void> {
  if (!lead.email || !EMAIL_RE.test(lead.email)) return
  const transport = getTransport()
  if (!transport) {
    console.warn("[contact] SMTP not configured (SMTP_HOST) — skipping customer ack email")
    return
  }

  const replyTo = siteConfig.contact.email
  const phone = siteConfig.contact.phone
    .replace(/^\+86/, "+86 ")
    .replace(/(\d{3})(\d{4})(\d{4})$/, "$1 $2 $3")
  const submittedAt = new Intl.DateTimeFormat("zh-CN", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Asia/Shanghai",
  }).format(new Date(lead.created_at))

  const lines = [
    `尊敬的 ${lead.name}：`,
    "",
    `感谢您对「${siteConfig.name}」的关注。`,
    `我们已收到您于 ${submittedAt} 提交的在线咨询，专属顾问将尽快与您取得联系。`,
    "",
    "如有紧急需求，欢迎直接联系我们：",
    `邮箱：${siteConfig.contact.email}`,
    `电话：${phone}`,
    "",
    "顺祝商祺！",
    "领跃团队",
  ]

  await transport.sendMail({
    from: mailFrom(),
    to: lead.email,
    replyTo,
    subject: "【领跃】已收到您的咨询，我们会尽快与您联系",
    text: lines.join("\n"),
    html:
      `<div style="font-size:14px;line-height:1.9;color:#222">` +
      `<p style="margin:0 0 12px">尊敬的 ${escapeHtml(lead.name)}：</p>` +
      `<p style="margin:0 0 12px">感谢您对「${escapeHtml(siteConfig.name)}」的关注。` +
      `我们已收到您于 ${escapeHtml(submittedAt)} 提交的在线咨询，专属顾问将尽快与您取得联系。</p>` +
      `<p style="margin:0 0 12px">如有紧急需求，欢迎直接联系我们：<br>` +
      `邮箱：<a href="mailto:${escapeHtml(siteConfig.contact.email)}" style="color:#2563eb">${escapeHtml(siteConfig.contact.email)}</a><br>` +
      `电话：${escapeHtml(phone)}</p>` +
      `<p style="margin:0">顺祝商祺！<br>领跃团队</p>` +
      `</div>`,
  })
}
