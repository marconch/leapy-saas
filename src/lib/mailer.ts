import nodemailer from "nodemailer"

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

// Best-effort notification email sent when a consultation is submitted.
// SMTP is configured via env vars (never committed). If it's unconfigured or
// sending fails, the caller logs it and the form submission still succeeds —
// the lead is already persisted to SQLite.
export async function sendLeadEmail(lead: Lead): Promise<void> {
  const host = process.env.SMTP_HOST
  const to = process.env.MAIL_TO
  if (!host || !to) {
    console.warn("[contact] SMTP not configured (SMTP_HOST/MAIL_TO) — skipping notification email")
    return
  }
  const port = Number(process.env.SMTP_PORT || 465)
  const transport = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    auth: process.env.SMTP_USER
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined,
  })

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
    from: process.env.MAIL_FROM || process.env.SMTP_USER,
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
